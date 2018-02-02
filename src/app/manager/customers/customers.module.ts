import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { ActivityComponent } from './activity/activity.component';
import { ReceivablesComponent } from './receivables/receivables.component';
import { PaymentLogComponent } from './payment-log/payment-log.component';
import { CustomersRoutingModule } from './/customers-routing.module';
import { PartialViewsModule } from '../../partial-views/partial-views.module';
import { DataTableModule } from "angular2-datatable";
import { CustomerPaymentComponent } from './customer-payment/customer-payment.component';
import { FormsModule } from '@angular/forms';
import {MultiSelectModule} from 'primeng/primeng';
import { ReceivableAgeingAnalysisComponent } from './receivable-ageing-analysis/receivable-ageing-analysis.component';

declare var require: any;

export function highchartsFactory() {
      const hc = require('highcharts');
      const dd = require('highcharts/modules/drilldown');
      dd(hc);

      return hc;
}
@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    PartialViewsModule,
    DataTableModule,
    FormsModule,
    MultiSelectModule,
    ChartModule
  ],
  declarations: [CustomersListComponent, ActivityComponent, ReceivablesComponent, PaymentLogComponent, CustomerPaymentComponent, ReceivableAgeingAnalysisComponent],
  providers: [{
    provide: HighchartsStatic,
    useFactory: highchartsFactory
  }],
})
export class CustomersModule { }
