import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VersionHistoryComponent } from './version-history/version-history.component';

import { VersionRoutingModule } from './version.routing.module';
@NgModule({
  declarations: [VersionHistoryComponent],
  imports: [
    BrowserModule, CommonModule, ReactiveFormsModule, HttpClientModule, FormsModule, VersionRoutingModule
  ]
})
export class VersionModule { }
