import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PerformanceListComponent} from './performance-list/performance-list.component';
import {PerformanceDetailComponent} from './performance-detail/performance-detail.component';
import {PerformancesRoutingModule} from "./performances-routing.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    PerformanceListComponent,
    PerformanceDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PerformancesRoutingModule
  ]
})
export class PerformancesModule {
}
