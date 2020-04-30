import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component'

export const routes = [
  {
    path: '', component: HomeComponent,
  },
  { path: '**', redirectTo: '' },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})

export class RoutesModule {
  constructor() { }
}