import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PerformancesRoutingModule} from "./performances-routing.module";
import {FormsModule} from "@angular/forms";
import {PerformanceDetailComponent} from "./performance-detail/performance-detail.component";
import {PerformanceListComponent} from "./performance-list/performance-list.component";

@NgModule({
  declarations: [
    PerformanceDetailComponent,
    PerformanceListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PerformancesRoutingModule
  ]
})
export class PerformancesModule {
}
