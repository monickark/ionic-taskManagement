import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlannerComponent } from './planner/planner.component';
import { ReportComponent } from './report/report.component';
import { DiaryComponent } from './diary/diary.component';
import { DartComponent } from './dart/dart.component';
import { DartRoutingModule } from './dart.routing.module';
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [PlannerComponent, DartComponent, ReportComponent,
    DiaryComponent],
  imports: [
    BrowserModule, CommonModule, HttpClientModule, FormsModule, DartRoutingModule
  ],
  providers: [
    HttpClient, DatePipe
  ],
})

export class DartModule { }
