import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { LogsComponent } from './logs/logs.component';
import { SettingsComponent } from './settings/settings.component';
import { SubscriptionsListComponent } from './subscriptions-list/subscriptions-list.component';

const routes: Routes = [
  { path: '', component: AdminDashboardComponent },
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'profile', component: AdminProfileComponent },
  { path: 'logs', component: LogsComponent },
  { path: 'settings', component: SettingsComponent},
  { path: 'subscriptions', component: SubscriptionsListComponent},
  { path: 'subscribers', loadChildren: 'app/admin/subscribers/subscribers.module#SubscribersModule'},
  { path: 'users', loadChildren: 'app/admin/users/users.module#UsersModule'}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AdminRoutingModule { }
