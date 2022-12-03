import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TheatreListComponent} from './theatre-list/theatre-list.component';
import {TheatreDetailComponent} from './theatre-detail/theatre-detail.component';
import {TheatersRoutingModule} from "./theaters-routing.module";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  declarations: [
    TheatreListComponent,
    TheatreDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TheatersRoutingModule
  ]
})
export class TheatresModule {
}
