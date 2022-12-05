import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TimetableListComponent} from "./timetable/timetable-list/timetable-list.component";
import {PerformanceListComponent} from "./performances/performance-list/performance-list.component";
import {TheatreListComponent} from "./theatres/theatre-list/theatre-list.component";

const routes: Routes = [
  {
    path: 'performances',
    // loadChildren: () => import('./performances/performances.module').then(m => m.PerformancesModule)
    component: PerformanceListComponent
  },
  {
    path: 'theaters',
    // loadChildren: () => import('./theatres/theatres.module').then(m => m.TheatresModule)
    component: TheatreListComponent
  },
  {
    path: 'timetable',
    // loadChildren: () => import('./timetable/timetable.module').then(m => m.TimetableModule)
    component: TimetableListComponent
  },
  { path: '', redirectTo: '/performances', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
