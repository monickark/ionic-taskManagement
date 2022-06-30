import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueryComponent } from './query/query.component';
const  routes: Routes  = [
  {
    path:  'query',
    component:  QueryComponent
    }
];
@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class QueryRoutingModule { }
