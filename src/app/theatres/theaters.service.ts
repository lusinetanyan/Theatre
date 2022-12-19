import {Injectable} from '@angular/core';
import {Theatre} from "../theatre";
import {PerformancesService} from "../performances/performances.service";

@Injectable()
export class TheatersService {

  constructor() { }

  getTheaters(): Theatre[] {
    return PerformancesService.THEATERS;
  }

  getTheater(id: number | string) : Theatre | undefined {
    return this.getTheaters()?.find(theater => theater.id === +id);
  }

}
