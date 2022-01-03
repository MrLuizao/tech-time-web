import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FaqsRoutingModule } from './faqs-routing.module';
import { FaqsComponent } from './faqs.component';
import { SharedModule } from '../../shared/shared.module';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component'


@NgModule({
  declarations: [FaqsComponent, FaqComponent, ContactComponent],
  imports: [
    CommonModule,
    FaqsRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class FaqsModule { }
