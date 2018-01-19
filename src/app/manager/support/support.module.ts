import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailComponent } from './email/email.component';
import { MessageComponent } from './message/message.component';
import { SupportRoutingModule } from './support-routing.module';
import { PhoneComponent } from './phone/phone.component';
import { PartialViewsModule } from '../../partial-views/partial-views.module';

@NgModule({
  imports: [
    CommonModule,
    SupportRoutingModule,
    PartialViewsModule
  ],
  declarations: [EmailComponent, MessageComponent, PhoneComponent]
})
export class SupportModule { }
