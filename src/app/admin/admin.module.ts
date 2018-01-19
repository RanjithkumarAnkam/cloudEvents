import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { LogsComponent } from './logs/logs.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminRoutingModule } from './/admin-routing.module';
import { DataTableModule } from 'angular2-datatable/lib/DataTableModule';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    DataTableModule
  ],
  declarations: [AdminDashboardComponent, SettingsComponent, LogsComponent, AdminProfileComponent]
})
export class AdminModule { }
