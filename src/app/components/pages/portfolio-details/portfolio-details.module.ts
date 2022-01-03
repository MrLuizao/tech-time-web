import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { PortfolioDetailsRoutingModule } from './portfolio-details-routing.module';
import { PortfolioDetailsComponent } from './portfolio-details.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component'


@NgModule({
  declarations: [PortfolioDetailsComponent, ContentComponent],
  imports: [
    CommonModule,
    PortfolioDetailsRoutingModule,
    SharedModule,
    NgbModule,
    HttpClientModule
  ]
})
export class PortfolioDetailsModule { }
