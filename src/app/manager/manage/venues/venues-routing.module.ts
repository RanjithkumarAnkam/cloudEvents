import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VenueListComponent } from './venue-list/venue-list.component';
import { BasicDetailsComponent } from './basic-details/basic-details.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { MediaComponent } from './media/media.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  { path: '', component: VenueListComponent},
  { path: 'venues', component: VenueListComponent},
  { path: 'basic-details', component: BasicDetailsComponent},
  { path: 'contact-details', component: ContactDetailsComponent},
  { path: 'media', component: MediaComponent},
  { path: 'summary', component: SummaryComponent}
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class VenuesRoutingModule { }
