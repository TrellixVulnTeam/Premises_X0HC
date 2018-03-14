import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainBuySearchPage } from '../main-buy-search/main-buy-search';
import { MainRentSearchPage } from '../main-rent-search/main-rent-search';
import { PropertySubmissionPage } from '../property-submission/property-submission'
import { MetroListPage } from '../metro-list/metro-list'
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import {TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public authData: AuthProvider, afAuth: AngularFireAuth,) {
    const authObserver = afAuth.authState.subscribe(user => {
      if (user) {
        console.log( "auth")
        // this.navCtrl.setRoot(TabsPage);
                authObserver.unsubscribe();
      } else {
        this.navCtrl.setRoot(LoginPage);
        authObserver.unsubscribe();
      }
    });
  }
  
  toMainBuySearch(){
    this.navCtrl.push(MainBuySearchPage)
  }
  toMainRentSearch() {
    this.navCtrl.push(MainRentSearchPage)
  }

  toPropertySubmission() {
    this.navCtrl.push(PropertySubmissionPage)
  }


  toMetroList() {
    this.navCtrl.push(MetroListPage)
  }

}
