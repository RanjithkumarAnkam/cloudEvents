import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerProfileComponent } from './manager-profile/manager-profile.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { ManagerRoutingModule } from './/manager-routing.module';
import { DataTableModule } from 'angular2-datatable/lib/DataTableModule';
import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

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
    ManagerRoutingModule,
    DataTableModule,
    ChartModule
  ],
  declarations: [ManagerProfileComponent, ManagerDashboardComponent, PermissionsComponent],
   providers: [{
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }],
})
export class ManagerModule { }
