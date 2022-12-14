import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TheatreListComponent} from "./theatre-list/theatre-list.component";
import {TheatreDetailComponent} from "./theatre-detail/theatre-detail.component";


const theatersRoutes: Routes = [
  { path: '',  component: TheatreListComponent},
  { path: ':id', component: TheatreDetailComponent}
];


@NgModule({
  imports: [
    RouterModule.forChild(theatersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TheatersRoutingModule { }
