import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PerformancesService} from "../performances.service";
import {Performance} from "../../performance";
import {first} from "rxjs";
import {Theatre} from "../../theatre";


@Component({
  selector: 'app-performance-list',
  templateUrl: './performance-list.component.html',
  styleUrls: ['./performance-list.component.css']
})
export class PerformanceListComponent implements OnInit {
  public static theatres : Theatre[] = [];
  performances: Performance[] = [];
  selectedId = 0;

  constructor(
    private service: PerformancesService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.service.getPerformances().pipe(first()).subscribe(list => {
      for (let i = 0; i < list.length; i++) {
        this.performances[i] = new Performance(list[i]["_id"], list[i]["_title"], list[i]["_numberOfAvailableSeats"])
      }
      PerformanceListComponent.theatres = [
        new Theatre(1, 'Գ. Սունդուկյանի անվան ազգային ակադեմիական թատրոն', [this.performances[0], this.performances[1], this.performances[2], this.performances[3], this.performances[4]]),
        new Theatre(2, 'Հակոբ Պարոնյանի Անվան Երաժշտական Կոմեդիայի Պետական Թատրոն', [this.performances[5], this.performances[6], this.performances[7], this.performances[8], this.performances[9]]),
        new Theatre(3, 'Երևանի Հրաչյա Ղափլանյանի անվան դրամատիկական թատրոն', [this.performances[10], this.performances[11], this.performances[12], this.performances[13], this.performances[14]])
      ]
    });
    this.route.paramMap.pipe(first()).subscribe(params => {
      this.selectedId = parseInt(params.get('id')!, 10);
    });
  }
}
