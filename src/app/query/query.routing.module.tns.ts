import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes, RouterModule } from '@angular/router';
import { QueryComponent } from './query/query.component';
const  routes: Routes  = [
  {
    path:  'query',
    component:  QueryComponent
    }
];
@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class QueryRoutingModule { }
