import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';

export const firebaseconfig = {
    apiKey: "AIzaSyCF6qeZI5Da3wmLQnLgJu_TwOc2EaPkP58",
    authDomain: "sweltering-heat-8181.firebaseapp.com",
    databaseURL: "https://sweltering-heat-8181.firebaseio.com",
    projectId: "sweltering-heat-8181",
    storageBucket: "sweltering-heat-8181.appspot.com",
    messagingSenderId: "990839630058"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseconfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
