import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TicketsListComponent} from "./tickets-list/tickets-list.component";
import {authGuard} from "../auth/auth.guard";


const ticketRout: Routes = [
  { path: '',  component: TicketsListComponent, canActivate: [authGuard]}
];


@NgModule({
  imports: [
    RouterModule.forChild(ticketRout)
  ],
  exports: [
    RouterModule
  ]
})
export class TicketsRoutingModule { }
