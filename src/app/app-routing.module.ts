import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {authGuard} from "./auth/auth.guard";
import {TicketsListComponent} from "./tickets/tickets-list/tickets-list.component";
import {LoginComponent} from "./auth/login/login.component";

const routes: Routes = [
  {
    path: 'performances',
    loadChildren: () => import('./performances/performances.module').then(m => m.PerformancesModule)
  },
  {
    path: 'theaters',
    loadChildren: () => import('./theatres/theatres.module').then(m => m.TheatresModule)
  },
  {
    path: 'tickets',
    component: TicketsListComponent
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {path: '', redirectTo: '/performances', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
