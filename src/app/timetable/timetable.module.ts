import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimetableListComponent } from './timetable-list/timetable-list.component';
import { SortByDatePipe } from './sort-by-date.pipe';



@NgModule({
  declarations: [
    TimetableListComponent,
    SortByDatePipe
  ],
  imports: [
    CommonModule
  ]
})
export class TimetableModule { }
