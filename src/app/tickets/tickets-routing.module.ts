import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TicketsListComponent} from "./tickets-list/tickets-list.component";


const ticketRout: Routes = [
  { path: '',  component: TicketsListComponent}
];


@NgModule({
  imports: [
    RouterModule.forChild(ticketRout)
  ],
  exports: [
    RouterModule
  ]
})
export class TheatersRoutingModule { }
