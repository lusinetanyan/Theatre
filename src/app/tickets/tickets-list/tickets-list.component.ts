import { Component, OnInit } from '@angular/core';
import {Ticket} from "../ticket";
import {TICKETS} from "../tickets";
import {first} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css']
})
export class TicketsListComponent implements OnInit {
  tickets: Ticket[] = [];
  selectedId: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.tickets = TICKETS;
    this.route.queryParams.pipe(first()).subscribe(param => parseInt(this.selectedId = param['id']));
  }

}
