import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PropertySubmissionPage } from './property-submission';

@NgModule({
  declarations: [
    PropertySubmissionPage,
  ],
  imports: [
    IonicPageModule.forChild(PropertySubmissionPage),
  ],
})
export class PropertySubmissionPageModule {}
