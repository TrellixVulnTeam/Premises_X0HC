import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login'
import firebase from 'firebase';
import { AngularFireDatabaseModule, AngularFireList } from 'angularfire2/database';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated'
import { AngularFireDatabase } from 'angularfire2/database';
import { ListingsPage } from '../listings/listings'

@IonicPage()
@Component({
  selector: 'page-main-buy-search',
  templateUrl: 'main-buy-search.html',
})
export class MainBuySearchPage {

  public authUser: any;
  public submittedPropertyList: Array<any>;
  public loadedSubmittedPropertyList: Array<any>;
  public submittedPropertyRef: firebase.database.Query;


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

    this.submittedPropertyRef = firebase.database().ref('/ListedProperties/Sales');

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


//   toListingsPage(item) {
// this.navCtrl.push(ListingsPage, item);
//   };

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainBuySearchPage');
  }


  toJoburg(listing) {
    this.navCtrl.push(ListingsPage, {
      param1: "Johannesburg"
    });
  }

  toCapeTown(listing) {
    this.navCtrl.push(ListingsPage, {
      param1: "CapeTown"
    });
  }

  toDurban(listing) {
    this.navCtrl.push(ListingsPage, {
      param1: "Durban"
    });
  }

  toPietermaritzburg(listing) {
    this.navCtrl.push(ListingsPage, {
      param1: "Pietermaritzburg"
    });
  }


  toPretoria(listing) {
    this.navCtrl.push(ListingsPage, {
      param1: "Pretoria"
    });
  }

  toPortElizabeth(listing) {
    this.navCtrl.push(ListingsPage, {
      param1: "PortElizabeth"
    });
  }

  toBloemfontein(listing) {
    this.navCtrl.push(ListingsPage, {
      param1: "Bloemfontein"
    });
  }

  toNelspruit(listing) {
    this.navCtrl.push(ListingsPage, {
      param1: "Nelspruit"
    });
  }

  toKimberley(listing) {
    this.navCtrl.push(ListingsPage, {
      param1: "Kimberley"
    });
  }

  toPolokwane(listing) {
    this.navCtrl.push(ListingsPage, {
      param1: "Polokwane"
    });
  }  

}
