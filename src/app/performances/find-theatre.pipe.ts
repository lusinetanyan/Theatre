import { Pipe, PipeTransform } from '@angular/core';
import {Theatre} from "../theatre";
import {Performance} from "../performance";
import {TheatersService} from "../theatres/theaters.service";

@Pipe({
  name: 'findTheatre'
})
export class FindTheatrePipe implements PipeTransform {
  constructor(private service: TheatersService) {
  }

  transform(value: Performance): String | undefined {
    const theatre: Theatre | undefined = this.service.getTheaters().find(theatre => theatre.performances.find(performance => performance.id === value.id));
    return theatre?.name;
  }

}
