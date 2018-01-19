import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesFacilitiesComponent } from './services-facilities/services-facilities.component';
import { UsersComponent } from './users/users.component';
import { MenusComponent } from './menus/menus.component';
import { CustomizeComponent } from './customize/customize.component';
import { ManageRoutingModule } from './/manage-routing.module';
import { PartialViewsModule } from '../../partial-views/partial-views.module';
import { DataTableModule } from 'angular2-datatable/lib/DataTableModule';

@NgModule({
  imports: [
    CommonModule,
    ManageRoutingModule,
    PartialViewsModule,
    DataTableModule
  ],
  declarations: [ServicesFacilitiesComponent, UsersComponent, MenusComponent, CustomizeComponent]
})
export class ManageModule { }
