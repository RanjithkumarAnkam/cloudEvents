import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerProfileComponent } from './manager-profile/manager-profile.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { ManagerRoutingModule } from './/manager-routing.module';
import { DataTableModule } from 'angular2-datatable/lib/DataTableModule';
import { ChartModule } from 'angular2-highcharts';

@NgModule({
  imports: [
    CommonModule,
    ManagerRoutingModule,
    DataTableModule,
    ChartModule.forRoot(require('highcharts'))
  ],
  declarations: [ManagerProfileComponent, ManagerDashboardComponent, PermissionsComponent]
})
export class ManagerModule { }
