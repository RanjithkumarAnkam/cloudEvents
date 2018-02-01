import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribersListComponent } from './subscribers-list/subscribers-list.component';
import { SubscriberSummaryComponent } from './subscriber-summary/subscriber-summary.component';
import { SubscribersRoutingModule } from './/subscribers-routing.module';
import { DataTableModule } from 'angular2-datatable/lib/DataTableModule';
import { FormsModule } from '@angular/forms';
import {MultiSelectModule} from 'primeng/primeng';
@NgModule({
  imports: [
    CommonModule,
    SubscribersRoutingModule,
    DataTableModule,
    FormsModule,
    MultiSelectModule
  ],
  declarations: [SubscribersListComponent, SubscriberSummaryComponent]
})
export class SubscribersModule { }
