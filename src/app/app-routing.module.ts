import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'pug', component: HomeComponent },
  { path: '', redirectTo: 'pug', pathMatch: 'full' },
  { path: '**', redirectTo: 'pug' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
