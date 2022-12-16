import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TicketsListComponent} from './tickets-list/tickets-list.component';
import {TicketsRoutingModule} from "./tickets-routing.module";


@NgModule({
  declarations: [
    TicketsListComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule
  ]
})
export class TicketsModule {
}
