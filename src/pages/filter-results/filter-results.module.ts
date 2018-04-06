import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilterResultsPage } from './filter-results';

@NgModule({
  declarations: [
    FilterResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(FilterResultsPage),
  ],
})
export class FilterResultsPageModule {}
