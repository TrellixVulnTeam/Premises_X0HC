import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminEnquiriesPage } from './admin-enquiries';

@NgModule({
  declarations: [
    AdminEnquiriesPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminEnquiriesPage),
  ],
})
export class AdminEnquiriesPageModule {}
