import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReviewPropertyDetailsPage } from './review-property-details';

@NgModule({
  declarations: [
    ReviewPropertyDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ReviewPropertyDetailsPage),
  ],
})
export class ReviewPropertyDetailsPageModule {}
