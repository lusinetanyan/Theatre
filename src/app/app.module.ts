import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {TheatersService} from "./theatres/theaters.service";
import {PerformancesService} from "./performances/performances.service";
import {TicketsListComponent} from "./tickets/tickets-list/tickets-list.component";

@NgModule({
  declarations: [
    AppComponent,
    TicketsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [TheatersService, PerformancesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
