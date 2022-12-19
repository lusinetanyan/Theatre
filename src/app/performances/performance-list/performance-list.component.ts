import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PerformancesService} from "../performances.service";
import {Performance} from "../../performance";
import {first} from "rxjs";


@Component({
  selector: 'app-performance-list',
  templateUrl: './performance-list.component.html',
  styleUrls: ['./performance-list.component.css']
})
export class PerformanceListComponent implements OnInit {
  performances!: Performance[];
  selectedId = 0;

  constructor(
    private service: PerformancesService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.performances = this.service.getPerformances();
    this.route.paramMap.pipe(first()).subscribe(params => {
      this.selectedId = parseInt(params.get('id')!, 10);
    });
  }

}
