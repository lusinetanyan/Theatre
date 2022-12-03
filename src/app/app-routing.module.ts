import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TimetableListComponent} from "./timetable/timetable-list/timetable-list.component";
import {PerformanceListComponent} from "./performances/performance-list/performance-list.component";
import {TheatreListComponent} from "./theatres/theatre-list/theatre-list.component";

const routes: Routes = [
  {
    path: 'performances',
    component: PerformanceListComponent
  },
  {
    path: 'theaters',
    component: TheatreListComponent
  },
  {
    path: 'timetable',
    component: TimetableListComponent
  },
  { path: '', redirectTo: '/performances', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
