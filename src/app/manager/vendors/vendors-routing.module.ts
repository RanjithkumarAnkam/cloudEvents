import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorsListComponent } from './vendors-list/vendors-list.component';
import { PaidListComponent } from './paid-list/paid-list.component';
import { PayablesComponent } from './payables/payables.component';
import { VendorTypeComponent } from './vendor-type/vendor-type.component';
import { VendorPaymentComponent } from './vendor-payment/vendor-payment.component';
import { PayableAgeingAnalysisComponent } from './payable-ageing-analysis/payable-ageing-analysis.component';

const routes: Routes = [
  { path: '', redirectTo:'vendors-list', pathMatch: 'full'},
  { path: 'vendors-list', component: VendorsListComponent },
  { path: 'paid', component: PaidListComponent},
  { path: 'ageing-analysis', component: PayableAgeingAnalysisComponent},
  { path: 'payables', component: PayablesComponent},
  { path: 'vendor-payment', component: VendorPaymentComponent},
  { path: 'type', component: VendorTypeComponent}
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class VendorsRoutingModule { }
