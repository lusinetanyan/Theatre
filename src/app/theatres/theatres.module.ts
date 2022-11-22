import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheatreListComponent } from './theatre-list/theatre-list.component';
import { TheatreDetailComponent } from './theatre-detail/theatre-detail.component';



@NgModule({
  declarations: [
    TheatreListComponent,
    TheatreDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TheatresModule { }
