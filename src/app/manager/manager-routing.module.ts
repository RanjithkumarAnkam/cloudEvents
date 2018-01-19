import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { ManagerProfileComponent } from './manager-profile/manager-profile.component';
import { PermissionsComponent } from './permissions/permissions.component';

const routes: Routes = [
  { path: '', component: ManagerDashboardComponent},
  { path: 'dashboard', component: ManagerDashboardComponent},
  { path: 'profile', component: ManagerProfileComponent},
  { path: 'permissions', component: PermissionsComponent},
  { path: 'calendar', loadChildren: 'app/manager/calendar-view/calendar-view.module#CalendarViewModule'},
  { path: 'customers', loadChildren: 'app/manager/customers/customers.module#CustomersModule'},
  { path: 'manage', loadChildren: 'app/manager/manage/manage.module#ManageModule'},
  { path: 'subscription', loadChildren: 'app/manager/subscription/subscription.module#SubscriptionModule'},
  { path: 'support', loadChildren: 'app/manager/support/support.module#SupportModule'},
  { path: 'vendors', loadChildren: 'app/manager/vendors/vendors.module#VendorsModule'}
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ManagerRoutingModule { }
