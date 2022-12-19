import {Injectable} from '@angular/core';
import {Performance} from "../performance";
import {HttpClient} from "@angular/common/http";
import {first, Observable} from "rxjs";
import {Theatre} from "../theatre";

@Injectable()
export class PerformancesService {

  public static PERFORMANCES: Performance[] = []

  public static THEATERS : Theatre[] = []

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<Performance[]>("http://localhost:4200/performances").pipe(first()).subscribe(performances => {
      PerformancesService.PERFORMANCES = performances;
      PerformancesService.THEATERS = [
        new Theatre(1, 'Գ. Սունդուկյանի անվան ազգային ակադեմիական թատրոն', [PerformancesService.PERFORMANCES[0], PerformancesService.PERFORMANCES[1], PerformancesService.PERFORMANCES[2], PerformancesService.PERFORMANCES[3], PerformancesService.PERFORMANCES[4]]),
        new Theatre(2, 'Հակոբ Պարոնյանի Անվան Երաժշտական Կոմեդիայի Պետական Թատրոն', [PerformancesService.PERFORMANCES[5], PerformancesService.PERFORMANCES[6], PerformancesService.PERFORMANCES[7], PerformancesService.PERFORMANCES[8], PerformancesService.PERFORMANCES[9]]),
        new Theatre(3, 'Երևանի Հրաչյա Ղափլանյանի անվան դրամատիկական թատրոն', [PerformancesService.PERFORMANCES[10], PerformancesService.PERFORMANCES[11], PerformancesService.PERFORMANCES[12], PerformancesService.PERFORMANCES[13], PerformancesService.PERFORMANCES[14]])
      ]
    });
  }

  getPerformances(): Performance[] {
    return PerformancesService.PERFORMANCES;
  }

  getPerformance(id: number | string): Observable<Performance> {
    return this.httpClient.get<Performance>("http://localhost:4200/performances/" + id);
  }

}
