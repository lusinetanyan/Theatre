import {Injectable} from '@angular/core';
import {Theatre} from "../theatre";
import {PerformancesService} from "../performances/performances.service";
import {first} from "rxjs";
import {PerformanceListComponent} from "../performances/performance-list/performance-list.component";

@Injectable()
export class TheatersService {

  private theatres : Theatre[] = PerformanceListComponent.theatres;

  constructor() {
  }

  getTheaters(): Theatre[] {
    return this.theatres;
  }

  getTheater(id: number | string) : Theatre | undefined {
    return this.getTheaters()?.find(theater => theater.id === +id);
  }
}
