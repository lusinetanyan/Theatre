import {Component, OnInit} from '@angular/core';
import {first, map, observable, Observable} from "rxjs";
import {ActivatedRoute, NavigationExtras, ParamMap, Router} from "@angular/router";
import {PerformancesService} from "../performances.service";
import {Performance} from "../../performance";
import {BuyService} from "../buy.service";

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
    private service: PerformancesService,
    private buy: BuyService
  ) {
  }

  ngOnInit() {
    this.performance$ = this.route.paramMap.pipe(map((params: ParamMap) =>
      this.service.getPerformance(params.get('id')!))
    );
  }

  goBack(performance: Performance) {
    const performanceId = performance ? performance.id : null;
    let from: String = '';
    this.route.queryParams.pipe(first()).subscribe(param => {
      from = param['from']
      if (from == "performances") {
        this.router.navigate(['/performances', {id: performanceId}]);
      } else if (from == "tickets") {
        const navigationExtras: NavigationExtras = {
          queryParams: { id: performanceId }
        };

        this.router.navigate(['/tickets'], navigationExtras);
      }
    });
  }

  onBuy(performance: Performance) {
    this.buy.buy(performance);
  }
}
