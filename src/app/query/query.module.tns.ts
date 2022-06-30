import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { QueryRoutingModule } from './query.routing.module.tns';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

import { QueryComponent } from './query/query.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [QueryComponent],
  imports: [
    QueryRoutingModule, NativeScriptCommonModule,NativeScriptFormsModule,
    NativeScriptHttpClientModule, BrowserModule, CommonModule, HttpClientModule,
    FormsModule,  ReactiveFormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class QueryModule { }
