import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login'
import firebase from 'firebase';
import { AngularFireDatabaseModule, AngularFireList } from 'angularfire2/database';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated'
import { AngularFireDatabase } from 'angularfire2/database';
import { RentalListingPage } from '../rental-listing/rental-listing'

/**
 * Generated class for the MainRentSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main-rent-search',
  templateUrl: 'main-rent-search.html',
})
export class MainRentSearchPage {

  public authUser: any;
  public submittedPropertyList: Array<any>;
  public loadedSubmittedPropertyList: Array<any>;
  public submittedPropertyRef: firebase.database.Query;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authData: AuthProvider, afAuth: AngularFireAuth, ) {
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

    this.submittedPropertyRef = firebase.database().ref('/ListedProperties/Rentals');

    this.submittedPropertyRef.on('value', submittedPropertyList => {
      let properties = [];
      submittedPropertyList.forEach(property => {
        let item = property.val();
        item.key = property.key;
        properties.push(item);
        return false;
      });
      this.submittedPropertyList = properties;
      this.loadedSubmittedPropertyList = properties;
      console.log("done loading")
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainRentSearchPage');
  }

  toJoburg(listing) {
    this.navCtrl.push(RentalListingPage, {
      param1: "Johannesburg"
    });
  }

  toCapeTown(listing) {
    this.navCtrl.push(RentalListingPage, {
      param1: "CapeTown"
    });
  }

  toDurban(listing) {
    this.navCtrl.push(RentalListingPage, {
      param1: "Durban"
    });
  }

  toPietermaritzburg(listing) {
    this.navCtrl.push(RentalListingPage, {
      param1: "Pietermaritzburg"
    });
  }


  toPretoria(listing) {
    this.navCtrl.push(RentalListingPage, {
      param1: "Pretoria"
    });
  }

  toPortElizabeth(listing) {
    this.navCtrl.push(RentalListingPage, {
      param1: "PortElizabeth"
    });
  }

  toBloemfontein(listing) {
    this.navCtrl.push(RentalListingPage, {
      param1: "Bloemfontein"
    });
  }

  toNelspruit(listing) {
    this.navCtrl.push(RentalListingPage, {
      param1: "Nelspruit"
    });
  }

  toKimberley(listing) {
    this.navCtrl.push(RentalListingPage, {
      param1: "Kimberley"
    });
  }

  toPolokwane(listing) {
    this.navCtrl.push(RentalListingPage, {
      param1: "Polokwane"
    });
  }  



}
