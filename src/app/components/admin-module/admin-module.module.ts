import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { AdminMenuComponent } from '../admin-menu/admin-menu.component';
import { AdminPageComponent } from '../admin-page/admin-page.component';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { AdminContentComponent } from '../admin-content/admin-content.component';
import { HelloComponent } from '../admin-main/hello/hello.component';
import { CongratulationsComponent } from '../admin-main/congratulations/congratulations.component';
import { LikesComponent } from '../admin-main/likes/likes.component';
import { ViewsComponent } from '../admin-main/views/views.component';
import { TargetsComponent } from '../admin-main/targets/targets.component';
import { MeetingsComponent } from '../admin-main/meetings/meetings.component';
import { LikesIndividualComponent } from '../admin-main/likes/likes-individual/likes-individual.component';
import { TargetElementComponent } from '../admin-main/targets/target-element/target-element.component';
import { LogoComponent } from '../logo/logo.component'
import { ChartComponent } from '../admin-main/views/chart/chart.component';
import { NgChartsModule } from 'ng2-charts';


const route: Routes = [
  {
    path: '', component: AdminComponent
  }
]


@NgModule({
  declarations: [
    AdminComponent,
    AdminMenuComponent,
    AdminPageComponent,
    AdminHeaderComponent,
    AdminContentComponent,
    LogoComponent,
    HelloComponent,
    CongratulationsComponent,
    LikesComponent,
    ViewsComponent,
    TargetsComponent,
    MeetingsComponent,
    LikesIndividualComponent,
    TargetElementComponent,
    ChartComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    NgChartsModule
  ]
})
export class AdminModule { }
