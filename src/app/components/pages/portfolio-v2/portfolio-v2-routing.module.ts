import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioV2Component } from './portfolio-v2.component';

const routes: Routes = [{ path: '', component: PortfolioV2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioV2RoutingModule { }
