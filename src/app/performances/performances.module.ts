import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PerformancesRoutingModule} from "./performances-routing.module";
import {FormsModule} from "@angular/forms";
import {PerformanceDetailComponent} from "./performance-detail/performance-detail.component";
import {PerformanceListComponent} from "./performance-list/performance-list.component";
import { FindTheatrePipe } from './find-theatre.pipe';

@NgModule({
  declarations: [
    PerformanceDetailComponent,
    PerformanceListComponent,
    FindTheatrePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    PerformancesRoutingModule
  ]
})
export class PerformancesModule {
}
