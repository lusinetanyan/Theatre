import {Injectable} from '@angular/core';
import {Theatre} from "../theatre";
import {THEATERS} from "../mock";

@Injectable()
export class TheatersService {

  constructor() { }

  getTheaters(): Theatre[] {
    return THEATERS;
  }

  getTheater(id: number | string) : Theatre | undefined {
    return this.getTheaters()?.find(theater => theater.id === +id);
  }

}
