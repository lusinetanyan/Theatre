import {Injectable} from '@angular/core';
import {Performance} from "../performance";
import {TICKETS} from "../tickets/tickets";
import {Ticket} from "../tickets/ticket";

@Injectable()
export class BuyService {

  constructor() {
  }

  buy(performance: Performance) {
    if (performance.numberOfAvailableSeats === 0) return;
    else {
      let ticket: Ticket | undefined = TICKETS.find(ticket => ticket.performance == performance);
      if (ticket) {
        ticket.count++;
      } else {
        TICKETS.push(new Ticket(performance, 1));
      }
      performance.numberOfAvailableSeats--;
    }
  }
}
