import {Injectable} from '@angular/core';
import {Performance} from "../performance";
import {TICKETS} from "../tickets/tickets";
import {Ticket} from "../tickets/ticket";

@Injectable({
  providedIn: 'root'
})
export class BuyService {

  constructor() {
  }

  buy(performance: Performance) {
    let ticket: Ticket | undefined = TICKETS.find(ticket => ticket.performance == performance);
    if (ticket) {
      ticket.count++;
    } else {
      TICKETS.push(new Ticket(performance, 1));
    }
  }
}
