import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login'

/**
 * Generated class for the MainBuySearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main-buy-search',
  templateUrl: 'main-buy-search.html',
})
export class MainBuySearchPage {

  public authUser: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authData: AuthProvider, afAuth: AngularFireAuth,) {
    const authObserver = afAuth.authState.subscribe(user => {
      if (user) {
        console.log("auth")
        // this.navCtrl.setRoot(TabsPage);
        authObserver.unsubscribe();
      } else {
        this.navCtrl.setRoot(LoginPage);
        authObserver.unsubscribe();
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainBuySearchPage');
  }

}
