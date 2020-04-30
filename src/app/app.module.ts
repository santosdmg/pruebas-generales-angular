import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { RoutesModule } from './route.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './pages/home/home.component'

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    RoutesModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  declarations: [ AppComponent, HelloComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
