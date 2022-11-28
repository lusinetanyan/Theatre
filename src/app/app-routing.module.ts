import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TimetableListComponent} from "./timetable/timetable-list/timetable-list.component";

const routes: Routes = [
  {
    path: 'performances',
    loadChildren: () => import('./performances/performances.module').then(m => m.PerformancesModule)
  },
  {
    path: 'theatres',
    loadChildren: () => import('./theatres/theatres.module').then(m => m.TheatresModule)
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
