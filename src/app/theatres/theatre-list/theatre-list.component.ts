import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TheatersService} from "../theaters.service";
import {Theatre} from "../../theatre";
import {first} from "rxjs";

@Component({
  selector: 'app-theatre-list',
  templateUrl: './theatre-list.component.html',
  styleUrls: ['./theatre-list.component.css']
})
export class TheatreListComponent implements OnInit {
  theaters!: Theatre[];
  selectedId = 0;

  constructor(
    private service: TheatersService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.theaters = this.service.getTheaters();
    this.route.paramMap.pipe(first()).subscribe(params => {
      this.selectedId = parseInt(params.get('id')!, 10);
    });
  }

}
