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
import * as _ from 'lodash';
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
  
  public newProperties: any;
public filteredProperties: any;

//Filterable attributes
public power: boolean;
public truckAccess: boolean;
public premisesType: string;
public openParking: number;

filters = {};

  constructor 
  (
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private alertCtrl: AlertController, 
    public modalCtrl: ModalController, 
    private db: AngularFireDatabase
   ) {

    this.parameter1 = navParams.get('param1'); 
    console.log(this.parameter1)

    // this.listedPropertyRef = firebase.database().ref('/ListedProperties/Sales/' + this.parameter1 + '/');

    // this.listedPropertyRef.on('value', listedPropertyList => {
    //   let properties = [];
    //   listedPropertyList.forEach(property => {
    //     let item = property.val();
    //     item.key = property.key;
    //     properties.push(item);
    //     return false;
    //   });
    //   this.listedPropertyList = properties;
    //   this.loadedListedPropertyList = properties;
    //   this.applyFilters()
    //   console.log("done loading")


    //   if (this.listedPropertyList.length == 0) {
    //     let alert = this.alertCtrl.create({
    //       title: 'Our Apologies',
    //       subTitle: 'There are no properties currently listed in this city.',
    //       buttons: [
    //         {
    //           text: 'Ok',
    //           role: 'cancel',
    //           handler: () => {
    //             this.navCtrl.setRoot(MainBuySearchPage)
    //           }
    //         },
    //       ]
    //     });
    //     alert.present();
    //   } else {
    //   }
    // });
    

    this.db.list('/ListedProperties/Sales/' + this.parameter1 + '/').valueChanges().subscribe(newProperties => {
      this.newProperties = newProperties;
      this.applyFilters()

      if (this.newProperties.length == 0) {
        let alert = this.alertCtrl.create({
          title: 'Our Apologies',
          subTitle: 'There are no properties currently listed in this city.',
          buttons: [
            {
              text: 'Ok',
              role: 'cancel',
              handler: () => {
                this.navCtrl.setRoot(MainBuySearchPage)
              }
            },
          ]
        });
        alert.present();
      } else {
      }
    }
  
  )

  }

ngOnInit(){
  //Animals = newProperties
}

applyFilters(){
  this.filteredProperties = _.filter(this.newProperties, _.conforms(this.filters))
}

filterExact(property: string, rule: any) {
  this.filters[property] = val => val == rule
this.applyFilters()
}

filterGreaterThan(property: string, rule: number) {
    this.filters[property] = val => val >= rule
    this.applyFilters()
  }

filterBoolean(property: string, rule: boolean) {
  if (!rule) this.removeFilter(property)
  else{
    this.filters[property] = val => val
    this.applyFilters()
  }
  }

  removeFilter(property: string) {
    delete this.filters[property]
    this[property] = null
    this.applyFilters()
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

//This looks like what I need:

//https://angularfirebase.com/lessons/multi-property-data-filtering-with-firebase-and-angular-4/

//Client Side Filtering.