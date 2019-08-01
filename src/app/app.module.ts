// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

<<<<<<< HEAD
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';

// import { MosesComponent } from './moses/moses.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     MosesComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
=======
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
>>>>>>> f5640be5b6beef5301b20a6deebd73b760155bad
