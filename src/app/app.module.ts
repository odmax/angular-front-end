import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Busisiwe } from './busisiwe.html/busisiwe.html.component';
import { BusisiweComponent } from './busisiwe/busisiwe.component';

@NgModule({
  declarations: [
    AppComponent,
    Busisiwe.HtmlComponent,
    BusisiweComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
