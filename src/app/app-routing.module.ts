import { NgModule }             from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { ManagerLayoutComponent } from './manager/manager-layout/manager-layout.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminLayoutComponent, loadChildren: 'app/admin/admin.module#AdminModule' },
  { path: 'manager', component: ManagerLayoutComponent, loadChildren: 'app/manager/manager.module#ManagerModule'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


