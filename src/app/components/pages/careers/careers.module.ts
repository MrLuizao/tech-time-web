import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareersRoutingModule } from './careers-routing.module';
import { CareersComponent } from './careers.component';
import { SharedModule } from '../../shared/shared.module';
import { CategoryComponent } from './category/category.component';
import { JobsComponent } from './jobs/jobs.component'


@NgModule({
  declarations: [CareersComponent, CategoryComponent, JobsComponent],
  imports: [
    CommonModule,
    CareersRoutingModule,
    SharedModule
  ]
})
export class CareersModule { }
