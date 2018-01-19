import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { CalendarRoutingModule } from './/calendar-routing.module';
import {ScheduleModule} from 'primeng/primeng';
import {CalendarModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    CalendarRoutingModule,
    ScheduleModule,
    CalendarModule
  ],
  declarations: [ViewComponent]
})
export class CalendarViewModule { }
