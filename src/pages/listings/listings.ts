import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireDatabaseModule, AngularFireList } from 'angularfire2/database';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated'
import { AngularFireDatabase } from 'angularfire2/database';
import { SaleListingDetailPage } from '../sale-listing-detail/sale-listing-detail'
import { AlertController } from 'ionic-angular';
import { MainBuySearchPage } from '../main-buy-search/main-buy-search'
import { FilterResultsPage } from '../filter-results/filter-results'
import { App, FabContainer, ItemSliding, List, ModalController, ToastController, LoadingController, Refresher } from 'ionic-angular';
import { PropertyData } from '../../providers/property-data';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public loadingCtrl: LoadingController, public modalCtrl: ModalController,

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


  ionViewDidLoad() {
    console.log('ionViewDidLoad ListingsPage');
  }


//This is all part of the filtering experiment now.


  updateSchedule() {
    // Close any open sliding items when the schedule updates
    this.scheduleList && this.scheduleList.closeSlidingItems();

    this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
      this.shownSessions = data.shownSessions;
      this.groups = data.groups;
    });
  }


  presentFilter() {
    let modal = this.modalCtrl.create(FilterResultsPage, this.excludeTracks);
    modal.present();

    modal.onWillDismiss((data: any[]) => {
      if (data) {
        this.excludeTracks = data;
        this.updateSchedule();
      }
    });

  }

  
showDetail(property) {
  this.navCtrl.push(SaleListingDetailPage, {
param1: property
  });
}


}
