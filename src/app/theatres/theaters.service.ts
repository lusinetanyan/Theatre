import {Injectable} from '@angular/core';
import {Theater} from "./theater";
import {THEATERS} from "./mock-theaters";

@Injectable({
  providedIn: 'root',
})
export class TheatersService {

  constructor() { }

  getTheaters(): Theater[] {
    return THEATERS;
  }

  getTheater(id: number | string) : Theater | undefined {
    return this.getTheaters().find(theater => theater.id === +id);
  }

}
