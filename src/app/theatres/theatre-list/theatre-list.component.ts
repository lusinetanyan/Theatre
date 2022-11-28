import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Theater} from "../theater";
import {TheatersService} from "../theaters.service";

@Component({
  selector: 'app-theatre-list',
  templateUrl: './theatre-list.component.html',
  styleUrls: ['./theatre-list.component.css']
})
export class TheatreListComponent implements OnInit {
  theaters!: Theater[];
  selectedId = 0;

  constructor(
    private service: TheatersService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.theaters = this.service.getTheaters();
    this.route.paramMap.subscribe(params => {
      this.selectedId = parseInt(params.get('id')!, 10);
    });
  }

}
