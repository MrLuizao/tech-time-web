import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgMasonryGridModule } from 'ng-masonry-grid';

import { HomeV3RoutingModule } from './home-v3-routing.module';
import { HomeV3Component } from './home-v3.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FaqsComponent } from './faqs/faqs.component';
import { FactsComponent } from './facts/facts.component';
import { TeamComponent } from './team/team.component';
import { WhyusComponent } from './whyus/whyus.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component'


@NgModule({
  declarations: [HomeV3Component, BannerComponent, ServiceComponent, AboutComponent, PortfolioComponent, FaqsComponent, FactsComponent, TeamComponent, WhyusComponent, TestimonialsComponent, ContactComponent],
  imports: [
    CommonModule,
    HomeV3RoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    NgMasonryGridModule
  ]
})
export class HomeV3Module { }
