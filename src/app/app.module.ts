import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Moses } from './moses.html/moses.html.component';
import { MosesComponent } from './moses/moses.component';

@NgModule({
  declarations: [
    AppComponent,
    Moses.HtmlComponent,
    MosesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
