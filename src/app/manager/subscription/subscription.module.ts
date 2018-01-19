import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionDetailsComponent } from './subscription-details/subscription-details.component';
import { SubscriptionRoutingModule } from './subscription-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SubscriptionRoutingModule
  ],
  declarations: [SubscriptionDetailsComponent]
})
export class SubscriptionModule { }
