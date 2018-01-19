import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerCustomersComponent } from './manager-customers/manager-customers.component';
import { PartialViewsRoutingModule } from './/partial-views-routing.module';
import { ManagerVendorsComponent } from './manager-vendors/manager-vendors.component';
import { ManagerManageScreensComponent } from './manager-manage-screens/manager-manage-screens.component';
import { ManagerAddVenueComponent } from './manager-add-venue/manager-add-venue.component';
import { ManagerSupportComponent } from './manager-support/manager-support.component';

@NgModule({
  imports: [
    CommonModule,
    PartialViewsRoutingModule
  ],
  declarations: [ManagerCustomersComponent, ManagerVendorsComponent, ManagerManageScreensComponent, ManagerAddVenueComponent, ManagerSupportComponent],
  exports: [ManagerCustomersComponent, ManagerVendorsComponent, ManagerManageScreensComponent, ManagerAddVenueComponent, ManagerSupportComponent]
})
export class PartialViewsModule { }
