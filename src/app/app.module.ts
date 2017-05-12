import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {AgGridModule} from 'ag-grid-angular/main';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
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
import {RichGridComponent} from './rich-grid-example/rich-grid.component';
import {DateComponent} from './date-component/date.component';
import {HeaderComponent} from './header-component/header.component';
import {HeaderGroupComponent} from './header-group-component/header-group.component';

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
    RichGridComponent,
    DateComponent,
    HeaderComponent,
    HeaderGroupComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseconfig),
    MaterialModule.forRoot(),
    BrowserAnimationsModule,
    AgGridModule.withComponents(
            [
              DateComponent,
              HeaderComponent,
              HeaderGroupComponent
            ]
        )
  ],
  providers: [AppService, ArticleService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
