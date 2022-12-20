import {Injectable} from '@angular/core';
import {Performance} from "../performance";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class PerformancesService {
  constructor(private httpClient: HttpClient) {
  }

  getPerformances(): Observable<Performance[]> {
    return this.httpClient.get<Performance[]>("http://localhost:4201/performances");
  }

  getPerformance(id: number | string): Observable<Performance> {
    return this.httpClient.get<Performance>("http://localhost:4201/performances/" + id);
  }
}
