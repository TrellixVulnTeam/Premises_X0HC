import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainRentSearchPage } from './main-rent-search';

@NgModule({
  declarations: [
    MainRentSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(MainRentSearchPage),
  ],
})
export class MainRentSearchPageModule {}
