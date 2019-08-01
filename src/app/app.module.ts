import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LovedoniaComponent } from './lovedonia/lovedonia.component';
import { Lovedonia } from './lovedonia.html/lovedonia.html.component';

@NgModule({
  declarations: [
    AppComponent,
    LovedoniaComponent,
    Lovedonia.HtmlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
