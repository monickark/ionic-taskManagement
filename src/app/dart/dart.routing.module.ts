import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlannerComponent } from './planner/planner.component';
import { DartComponent } from './dart/dart.component';
import { ReportComponent } from './report/report.component';
import { DiaryComponent } from './diary/diary.component';

const  routes: Routes  = [
  {
    path:  'dart',
    component:  DartComponent,
    children: [
      {
      path:  'planner',
      component:  PlannerComponent
      },
      {
        path:  'diary',
        component:  DiaryComponent
        },
      {
        path:  'report',
        component:  ReportComponent
      }
    ]
    }
];
@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class DartRoutingModule { }
