import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin', loadChildren: ()=>import('./components/admin-module/admin-module.module')
  .then(value=>value.AdminModule)}

]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
