import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesV2Component } from './services-v2.component';

const routes: Routes = [{ path: '', component: ServicesV2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesV2RoutingModule { }
