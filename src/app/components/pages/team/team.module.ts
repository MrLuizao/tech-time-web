import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';
import { SharedModule } from '../../shared/shared.module';
import { TeamblockComponent } from './teamblock/teamblock.component';
import { VideoComponent } from './video/video.component';
import { SkillsComponent } from './skills/skills.component'


@NgModule({
  declarations: [TeamComponent, TeamblockComponent, VideoComponent, SkillsComponent],
  imports: [
    CommonModule,
    TeamRoutingModule,
    SharedModule,
    NgbModule,
    NgCircleProgressModule.forRoot()
  ]
})
export class TeamModule { }
