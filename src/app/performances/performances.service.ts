import {Injectable} from '@angular/core';
import {Performance} from "./performance";
import {PERFORMANCES} from "./mock-performances";

@Injectable({
  providedIn: 'root',
})
export class PerformancesService {

  constructor() { }

  getPerformances(): Performance[] {
    return PERFORMANCES;
  }

  getPerformance(id: number | string) : Performance | undefined {
    return this.getPerformances().find(performance => performance.id === +id);
  }

}
