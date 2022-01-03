import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMasonryGridModule } from 'ng-masonry-grid';

import { PortfolioV2RoutingModule } from './portfolio-v2-routing.module';
import { PortfolioV2Component } from './portfolio-v2.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component'


@NgModule({
  declarations: [PortfolioV2Component, ContentComponent],
  imports: [
    CommonModule,
    PortfolioV2RoutingModule,
    SharedModule,
    NgbModule,
    NgMasonryGridModule
  ]
})
export class PortfolioV2Module { }
