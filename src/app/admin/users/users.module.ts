import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersRoutingModule } from './/users-routing.module';
import { DataTableModule } from 'angular2-datatable/lib/DataTableModule';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    DataTableModule
  ],
  declarations: [UsersListComponent]
})
export class UsersModule { }
