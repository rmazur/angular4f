import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgGridModule} from 'ag-grid-angular/main';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { AppService } from './services/app.service';
import { ArticleService } from './services/article.service';
import { ArticleComponent } from './article/article.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { MyGridApplicationComponent } from './my-grid-application/my-grid-application.component';
import { RedComponentComponent } from './red-component/red-component.component';

const appRoutes: Routes = [
  { path: 'article', component: ArticleComponent },
  { path: 'home', component: HomeComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

export const firebaseconfig = {
    apiKey: 'AIzaSyCF6qeZI5Da3wmLQnLgJu_TwOc2EaPkP58',
    authDomain: 'sweltering-heat-8181.firebaseapp.com',
    databaseURL: 'https://sweltering-heat-8181.firebaseio.com',
    projectId: 'sweltering-heat-8181',
    storageBucket: 'sweltering-heat-8181.appspot.com',
    messagingSenderId: '990839630058'
};

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    PageNotFoundComponent,
    HomeComponent,
    MyGridApplicationComponent,
    RedComponentComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseconfig),
    MaterialModule.forRoot(),
    BrowserAnimationsModule,
    AgGridModule.withComponents(
            [RedComponentComponent]
        )
  ],
  providers: [AppService, ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
