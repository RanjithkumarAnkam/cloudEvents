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
import { GalleryComponent } from './gallery/gallery.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { NgxCarouselModule } from 'ngx-carousel';

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
	  NgxGalleryModule,
    DataTableModule,
    ChartModule,
    NgxCarouselModule
  ],
  declarations: [ManagerProfileComponent, ManagerDashboardComponent, PermissionsComponent, GalleryComponent],
   providers: [{
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }],
})
export class ManagerModule { }
