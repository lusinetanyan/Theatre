import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PerformanceDetailComponent} from "./performance-detail/performance-detail.component";
import {PerformanceListComponent} from "./performance-list/performance-list.component";


const performancesRoutes: Routes = [
  { path: 'performances',  component: PerformanceListComponent},
  { path: 'performances/:id', component: PerformanceDetailComponent}
];


@NgModule({
  imports: [
    RouterModule.forChild(performancesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PerformancesRoutingModule { }
