import { Component, OnInit } from '@angular/core';
import {Performance} from "../../performance";
import {ActivatedRoute} from "@angular/router";
import {PerformancesService} from "../../performances/performances.service";

@Component({
  selector: 'app-timetable-list',
  templateUrl: './timetable-list.component.html',
  styleUrls: ['./timetable-list.component.css']
})
export class TimetableListComponent implements OnInit {
  performances!: Performance[];
  selectedId: number = 0;

  constructor(private service: PerformancesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.performances = this.service.getPerformances();
    this.route.paramMap.subscribe(params => {
      this.selectedId = parseInt(params.get('id')!, 10);
    });
  }

}
