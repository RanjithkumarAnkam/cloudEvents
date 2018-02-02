import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/primeng';
import { VendorsListComponent } from './vendors-list/vendors-list.component';
import { VendorTypeComponent } from './vendor-type/vendor-type.component';
import { PayablesComponent } from './payables/payables.component';
import { PaidListComponent } from './paid-list/paid-list.component';
import { VendorsRoutingModule } from './vendors-routing.module';
import { PartialViewsModule } from '../../partial-views/partial-views.module';
import { DataTableModule } from 'angular2-datatable/lib/DataTableModule';
import { VendorPaymentComponent } from './vendor-payment/vendor-payment.component';
import { PayableAgeingAnalysisComponent } from './payable-ageing-analysis/payable-ageing-analysis.component';

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
    VendorsRoutingModule,
    PartialViewsModule,
    DataTableModule,
    ChartModule,
    MultiSelectModule,
    FormsModule
  ],
  declarations: [VendorsListComponent, VendorTypeComponent, PayablesComponent, PaidListComponent, VendorPaymentComponent, PayableAgeingAnalysisComponent],
  providers: [{
    provide: HighchartsStatic,
    useFactory: highchartsFactory
  }],
})
export class VendorsModule { }
