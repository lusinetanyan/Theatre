import {Injectable} from '@angular/core';
import {Theatre} from "../theatre";
import {PerformancesService} from "../performances/performances.service";

@Injectable()
export class TheatersService {

  private readonly THEATERS : Theatre[] = []

  constructor() {
    this.THEATERS = [
      new Theatre(1, 'Գ. Սունդուկյանի անվան ազգային ակադեմիական թատրոն', [PerformancesService.PERFORMANCES[0], PerformancesService.PERFORMANCES[1], PerformancesService.PERFORMANCES[2], PerformancesService.PERFORMANCES[3], PerformancesService.PERFORMANCES[4]]),
      new Theatre(2, 'Հակոբ Պարոնյանի Անվան Երաժշտական Կոմեդիայի Պետական Թատրոն', [PerformancesService.PERFORMANCES[5], PerformancesService.PERFORMANCES[6], PerformancesService.PERFORMANCES[7], PerformancesService.PERFORMANCES[8], PerformancesService.PERFORMANCES[9]]),
      new Theatre(3, 'Երևանի Հրաչյա Ղափլանյանի անվան դրամատիկական թատրոն', [PerformancesService.PERFORMANCES[10], PerformancesService.PERFORMANCES[11], PerformancesService.PERFORMANCES[12], PerformancesService.PERFORMANCES[13], PerformancesService.PERFORMANCES[14]])
    ]
  }

  getTheaters(): Theatre[] {
    return this.THEATERS;
  }

  getTheater(id: number | string) : Theatre | undefined {
    return this.getTheaters()?.find(theater => theater.id === +id);
  }

}
