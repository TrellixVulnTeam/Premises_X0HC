import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReviewSubmissionsPage } from './review-submissions';

@NgModule({
  declarations: [
    ReviewSubmissionsPage,
  ],
  imports: [
    IonicPageModule.forChild(ReviewSubmissionsPage),
  ],
})
export class ReviewSubmissionsPageModule {}
