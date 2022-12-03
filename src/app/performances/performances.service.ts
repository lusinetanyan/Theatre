import {Injectable} from '@angular/core';
import {PERFORMANCES} from "../mock";
import {Performance} from "../performance";

@Injectable({
  providedIn: 'root',
})
export class PerformancesService {

  constructor() { }

  getPerformances(): Performance[] {
    return PERFORMANCES;
  }

  getPerformance(id: number | string) : Performance | undefined {
    return this.getPerformances()?.find(performance => performance.id === +id);
  }

}
