import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorsListComponent } from './vendors-list/vendors-list.component';
import { VendorTypeComponent } from './vendor-type/vendor-type.component';
import { PayablesComponent } from './payables/payables.component';
import { PaidListComponent } from './paid-list/paid-list.component';
import { VendorsRoutingModule } from './vendors-routing.module';
import { PartialViewsModule } from '../../partial-views/partial-views.module';
import { DataTableModule } from 'angular2-datatable/lib/DataTableModule';
import { VendorPaymentComponent } from './vendor-payment/vendor-payment.component';

@NgModule({
  imports: [
    CommonModule,
    VendorsRoutingModule,
    PartialViewsModule,
    DataTableModule
  ],
  declarations: [VendorsListComponent, VendorTypeComponent, PayablesComponent, PaidListComponent, VendorPaymentComponent]
})
export class VendorsModule { }
