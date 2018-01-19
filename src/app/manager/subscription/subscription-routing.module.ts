import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionDetailsComponent } from './subscription-details/subscription-details.component';

const routes: Routes = [
  { path: '', component: SubscriptionDetailsComponent},
  { path: 'subscription-details', component: SubscriptionDetailsComponent}
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SubscriptionRoutingModule { }
