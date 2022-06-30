import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DartModule } from './dart/dart.module';
import { QueryModule } from './query/query.module';
import { VersionModule } from './version/version.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent, HeaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    DartModule,
    QueryModule,
    VersionModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule

  ],
  providers: [HttpClient, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
