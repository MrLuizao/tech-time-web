import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { SharedModule } from '../../shared/shared.module';
import { ProcessComponent } from './process/process.component';
import { ServiceblockComponent } from './serviceblock/serviceblock.component';
import { TabsComponent } from './tabs/tabs.component';
import { VideoComponent } from './video/video.component'


@NgModule({
  declarations: [ServicesComponent, ProcessComponent, ServiceblockComponent, TabsComponent, VideoComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class ServicesModule { }
