import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainBuySearchPage } from '../main-buy-search/main-buy-search';
import { MainRentSearchPage } from '../main-rent-search/main-rent-search';
import { PropertySubmissionPage } from '../property-submission/property-submission'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  toMainBuySearch(){
    this.navCtrl.setRoot(MainBuySearchPage)
  }
  toMainRentSearch() {
    this.navCtrl.setRoot(MainRentSearchPage)
  }

  toPropertySubmission() {
    this.navCtrl.setRoot(PropertySubmissionPage)
  }

}
