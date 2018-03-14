import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuburbListPage } from './suburb-list';

@NgModule({
  declarations: [
    SuburbListPage,
  ],
  imports: [
    IonicPageModule.forChild(SuburbListPage),
  ],
})
export class SuburbListPageModule {}
