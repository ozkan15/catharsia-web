import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesComponent } from './pages.component';
import { NbMenuModule, NbSidebarModule } from '@nebular/theme';



@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    DashboardModule,
    NbSidebarModule,
    NbMenuModule,
  ],
  exports: [PagesComponent]
})
export class PagesModule { }
