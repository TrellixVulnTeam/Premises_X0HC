import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireDatabaseModule, AngularFireList } from 'angularfire2/database';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated'
import { AngularFireDatabase } from 'angularfire2/database';
import { SaleListingDetailPage } from '../sale-listing-detail/sale-listing-detail'
import { AlertController, ModalController } from 'ionic-angular';
import { MainBuySearchPage } from '../main-buy-search/main-buy-search'
import { FilterResultsPage } from '../filter-results/filter-results'
/**
 * Generated class for the ListingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listings',
  templateUrl: 'listings.html',
})
export class ListingsPage {

  parameter1: string;
  public item: FirebaseListObservable<any[]>;
  public listedPropertyList: Array<any>;
  public loadedListedPropertyList: Array<any>;
  public listedPropertyRef: firebase.database.Query;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public modalCtrl: ModalController,
) {

    this.parameter1 = navParams.get('param1'); 
    console.log(this.parameter1)

    this.listedPropertyRef = firebase.database().ref('/ListedProperties/Sales/' + this.parameter1 + '/');

    this.listedPropertyRef.on('value', listedPropertyList => {
      let properties = [];
      listedPropertyList.forEach(property => {
        let item = property.val();
        item.key = property.key;
        properties.push(item);
        return false;
      });
      this.listedPropertyList = properties;
      this.loadedListedPropertyList = properties;
      console.log("done loading")
      if (this.listedPropertyList.length == 0) {
        let alert = this.alertCtrl.create({
          title: 'Our Apologies',
          subTitle: 'There are no properties currently listed in this city.',
          buttons: [
            {
              text: 'Ok',
              role: 'cancel',
              handler: () => {
                this.navCtrl.setRoot(MainBuySearchPage)              }
            },
          ]
        });
        alert.present();
      } else {
      }
    });
    

  }



  presentFilter() {
    let modal = this.modalCtrl.create(FilterResultsPage);
    modal.present();

    modal.onWillDismiss((data: any[]) => {
      if (data) {
console.log("Dismissed")
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListingsPage');
  }

  
showDetail(property) {
  this.navCtrl.push(SaleListingDetailPage, {
param1: property
  });
}


}
