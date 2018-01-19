import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { ActivityComponent } from './activity/activity.component';
import { PaymentLogComponent } from './payment-log/payment-log.component';
import { ReceivablesComponent } from './receivables/receivables.component';

const routes: Routes = [
  { path: '', redirectTo: 'customers-list',pathMatch: 'full'},
  { path: 'customers-list', component: CustomersListComponent},
  { path: 'activity', component: ActivityComponent},
  { path: 'payment-log', component: PaymentLogComponent},
  { path: 'receivables', component: ReceivablesComponent}
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CustomersRoutingModule { }
