import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Palesa2Component } from './palesa2/palesa2.component';
import { Palesa2 } from './palesa2.html/palesa2.html.component';

@NgModule({
  declarations: [
    AppComponent,
    Palesa2Component,
    Palesa2.HtmlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
