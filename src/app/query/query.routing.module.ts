import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { QueryComponent } from './query/query.component';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
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
