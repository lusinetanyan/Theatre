import { Component, OnInit } from '@angular/core';
import {map, Observable} from "rxjs";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {TheatersService} from "../theaters.service";
import {Theatre} from "../../theatre";

@Component({
  selector: 'app-theatre-detail',
  templateUrl: './theatre-detail.component.html',
  styleUrls: ['./theatre-detail.component.css']
})

export class TheatreDetailComponent implements OnInit {
  theater$!: Observable<Theatre | undefined>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: TheatersService
  ) {}


  ngOnInit() {
    this.theater$ = this.route.paramMap.pipe(map((params: ParamMap) =>
      this.service.getTheater(params.get('id')!))
    );
  }

  onBuy(theater: Theatre) {

  }

  gotoTheaters(theater: Theatre) {
    const theaterId = theater ? theater.id : null;
    this.router.navigate(['/theaters', { id: theaterId}]);
  }

}
