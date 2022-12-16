import { Pipe, PipeTransform } from '@angular/core';
import {Theatre} from "../theatre";
import {Performance} from "../performance";
import {THEATERS} from "../mock";

@Pipe({
  name: 'findTheatre'
})
export class FindTheatrePipe implements PipeTransform {

  transform(value: Performance): String | undefined {
    const theatre: Theatre | undefined = THEATERS.find(theatre => theatre.performances.find(performance => performance.id === value.id));
    return theatre?.name;
  }

}
