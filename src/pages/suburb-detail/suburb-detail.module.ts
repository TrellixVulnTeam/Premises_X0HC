import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuburbDetailPage } from './suburb-detail';

@NgModule({
  declarations: [
    SuburbDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SuburbDetailPage),
  ],
})
export class SuburbDetailPageModule {}
