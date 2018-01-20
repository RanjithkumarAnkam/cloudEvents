import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionDetailsComponent } from './subscription-details/subscription-details.component';
import { SubscriptionRoutingModule } from './subscription-routing.module';
import { DataTableModule } from "angular2-datatable";

@NgModule({
  imports: [
    CommonModule,
    SubscriptionRoutingModule,
	DataTableModule
  ],
  declarations: [SubscriptionDetailsComponent]
})
export class SubscriptionModule { }
