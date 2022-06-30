import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VersionHistoryComponent } from './version-history/version-history.component';
const  routes: Routes  = [
  {
    path:  'version',
    component:  VersionHistoryComponent
    }
];
@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class VersionRoutingModule { }
