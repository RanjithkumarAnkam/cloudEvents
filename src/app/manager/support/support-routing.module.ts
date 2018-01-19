import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './email/email.component';
import { MessageComponent } from './message/message.component';
import { PhoneComponent } from './phone/phone.component';

const routes: Routes = [
  { path: '', component: PhoneComponent},
  { path: 'phone', component: PhoneComponent},
  { path: 'email', component: EmailComponent},
  { path: 'message', component: MessageComponent}
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SupportRoutingModule { }
