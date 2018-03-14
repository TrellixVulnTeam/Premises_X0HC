import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MetroListPage } from './metro-list';

@NgModule({
  declarations: [
    MetroListPage,
  ],
  imports: [
    IonicPageModule.forChild(MetroListPage),
  ],
})
export class MetroListPageModule {}
