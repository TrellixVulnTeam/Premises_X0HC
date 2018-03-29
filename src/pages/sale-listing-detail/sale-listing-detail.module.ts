import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaleListingDetailPage } from './sale-listing-detail';

@NgModule({
  declarations: [
    SaleListingDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SaleListingDetailPage),
  ],
})
export class SaleListingDetailPageModule {}
