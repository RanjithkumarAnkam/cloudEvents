import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribersListComponent } from './subscribers-list/subscribers-list.component';
import { SubscriberSummaryComponent } from './subscriber-summary/subscriber-summary.component';
import { SubscribersRoutingModule } from './/subscribers-routing.module';
import { DataTableModule } from 'angular2-datatable/lib/DataTableModule';

@NgModule({
  imports: [
    CommonModule,
    SubscribersRoutingModule,
    DataTableModule
  ],
  declarations: [SubscribersListComponent, SubscriberSummaryComponent]
})
export class SubscribersModule { }
