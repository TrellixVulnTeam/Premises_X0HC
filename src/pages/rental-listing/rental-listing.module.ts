import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RentalListingPage } from './rental-listing';

@NgModule({
  declarations: [
    RentalListingPage,
  ],
  imports: [
    IonicPageModule.forChild(RentalListingPage),
  ],
})
export class RentalListingPageModule {}
