import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QueryRoutingModule } from './query.routing.module';
import { QueryComponent } from './query/query.component';
@NgModule({
  declarations: [QueryComponent],
  providers: [],
  imports: [
    BrowserModule, CommonModule, HttpClientModule, FormsModule, QueryRoutingModule,
    ReactiveFormsModule
  ]
})
export class QueryModule { }
