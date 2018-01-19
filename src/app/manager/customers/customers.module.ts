import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { ActivityComponent } from './activity/activity.component';
import { ReceivablesComponent } from './receivables/receivables.component';
import { PaymentLogComponent } from './payment-log/payment-log.component';
import { CustomersRoutingModule } from './/customers-routing.module';
import { PartialViewsModule } from '../../partial-views/partial-views.module';
import { DataTableModule } from "angular2-datatable";

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    PartialViewsModule,
    DataTableModule
  ],
  declarations: [CustomersListComponent, ActivityComponent, ReceivablesComponent, PaymentLogComponent]
})
export class CustomersModule { }
