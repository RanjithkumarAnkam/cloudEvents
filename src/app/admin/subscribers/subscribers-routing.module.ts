import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscribersListComponent } from './subscribers-list/subscribers-list.component';
import { SubscriberSummaryComponent } from './subscriber-summary/subscriber-summary.component';

const routes:Routes =[
  { path: '', component: SubscribersListComponent},
  { path: 'summary', component: SubscriberSummaryComponent},
  { path: 'subscribers', component: SubscribersListComponent}
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SubscribersRoutingModule { }
