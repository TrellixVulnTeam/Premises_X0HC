import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RentalListDetailPage } from './rental-list-detail';

@NgModule({
  declarations: [
    RentalListDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(RentalListDetailPage),
  ],
})
export class RentalListDetailPageModule {}
