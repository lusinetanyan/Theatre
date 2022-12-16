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

  onReturn(ticket: Ticket) {
    ticket.performance.numberOfAvailableSeats++;
    ticket.count--;
    if(ticket.count === 0) {
      const index = TICKETS.findIndex(t => t.id === ticket.id);
      TICKETS.splice(index, 1);
      this.tickets = TICKETS;
    }
  }
}
