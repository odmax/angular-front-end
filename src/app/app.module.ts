import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MabasaHTMLComponent } from './mabasa-html/mabasa-html.component';
import { Mabasa } from './mabasa.html/mabasa.html.component';

@NgModule({
  declarations: [
    AppComponent,
    MabasaHTMLComponent,
    Mabasa.HTMLComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
