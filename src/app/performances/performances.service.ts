import {Injectable} from '@angular/core';
import {Performance} from "../performance";
import {HttpClient} from "@angular/common/http";
import {first, Observable} from "rxjs";
import {Theatre} from "../theatre";

@Injectable()
export class PerformancesService {

  public static PERFORMANCES: Performance[] = [];

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<Performance[]>("http://localhost:4200/performances").pipe(first()).subscribe(performances => {
      PerformancesService.PERFORMANCES = performances;
    });
  }

  getPerformances(): Performance[] {
    return PerformancesService.PERFORMANCES;
  }

  getPerformance(id: number | string): Observable<Performance> {
    return this.httpClient.get<Performance>("http://localhost:4200/performances/" + id);
  }

}
