import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VenueListComponent } from './venues/venue-list/venue-list.component';
import { CustomizeComponent } from './customize/customize.component';
import { MenusComponent } from './menus/menus.component';
import { ServicesFacilitiesComponent } from './services-facilities/services-facilities.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [  
  { path: '', redirectTo: 'venues', pathMatch: 'full' },
  { path: 'customize', component: CustomizeComponent},
  { path: 'menu', component: MenusComponent},
  { path: 'services', component: ServicesFacilitiesComponent},
  { path: 'users', component: UsersComponent},
  { path: 'venues', loadChildren: 'app/manager/manage/venues/venues.module#VenuesModule'}
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ManageRoutingModule { }
