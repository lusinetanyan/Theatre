import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerformanceListComponent } from './performance-list/performance-list.component';
import { PerformanceDetailComponent } from './performance-detail/performance-detail.component';



@NgModule({
  declarations: [
    PerformanceListComponent,
    PerformanceDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PerformancesModule { }
