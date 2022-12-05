import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {TheatersService} from "./theatres/theaters.service";
import {PerformancesService} from "./performances/performances.service";
import {PerformanceListComponent} from "./performances/performance-list/performance-list.component";
import {TheatreListComponent} from "./theatres/theatre-list/theatre-list.component";
import {TimetableListComponent} from "./timetable/timetable-list/timetable-list.component";

@NgModule({
  declarations: [
    AppComponent,
    PerformanceListComponent,
    TheatreListComponent, TimetableListComponent
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
export class AppModule { }
