import { Component, OnInit } from '@angular/core';
import {map, Observable} from "rxjs";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {PerformancesService} from "../performances.service";
import {Performance} from "../performance";

@Component({
  selector: 'app-performance-detail',
  templateUrl: './performance-detail.component.html',
  styleUrls: ['./performance-detail.component.css']
})
export class PerformanceDetailComponent implements OnInit {
  performance$!: Observable<Performance | undefined>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PerformancesService
  ) {}


  ngOnInit() {
    this.performance$ = this.route.paramMap.pipe(map((params: ParamMap) =>
      this.service.getPerformance(params.get('id')!))
    );
  }

  gotoPerformances(performance: Performance) {
    const performanceId = performance ? performance.id : null;
    this.router.navigate(['/performances', { id: performanceId}]);
  }

}
