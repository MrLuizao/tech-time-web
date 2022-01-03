import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { SkillsComponent } from './skills/skills.component';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { VideoComponent } from './video/video.component';
import { FeaturesComponent } from './features/features.component';
import { WhyusComponent } from './whyus/whyus.component';
import { FactsComponent } from './facts/facts.component';
import { TeamComponent } from './team/team.component'


@NgModule({
  declarations: [HomeComponent, BlogpostComponent, TestimonialsComponent, SkillsComponent, BannerComponent, AboutComponent, ServiceComponent, VideoComponent, FeaturesComponent, WhyusComponent, FactsComponent, TeamComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    NgCircleProgressModule.forRoot()
  ]
})
export class HomeModule { }
