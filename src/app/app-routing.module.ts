import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RouteGuardService } from './services/route-guard.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin',canActivate:[RouteGuardService], loadChildren: ()=>import('./components/admin-module/admin-module.module')
  .then(value=>value.AdminModule)}

]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [RouteGuardService]
})
export class AppRoutingModule { }
