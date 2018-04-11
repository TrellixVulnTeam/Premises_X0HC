import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireDatabaseModule, AngularFireList } from 'angularfire2/database';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated'
import { AngularFireDatabase } from 'angularfire2/database';
import { SaleListingDetailPage } from '../sale-listing-detail/sale-listing-detail'
import { AlertController, ModalController } from 'ionic-angular';
import { MainRentSearchPage } from '../main-rent-search/main-rent-search'
import { RentalListDetailPage } from '../rental-list-detail/rental-list-detail'
import * as _ from 'lodash';
/**
 * Generated class for the RentalListingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rental-listing',
  templateUrl: 'rental-listing.html',
})
export class RentalListingPage {

  parameter1: string;
  public item: FirebaseListObservable<any[]>;
  public listedPropertyList: Array<any>;
  public loadedListedPropertyList: Array<any>;
  public listedPropertyRef: firebase.database.Query;

  public newProperties: any;
  public filteredProperties: any;

  //Filterable Attributes:

  public premisesType: string;
  public rentalPrice: number;
  public factorySize: number;
  public officeSize: number;
  public shopSize: number;
  public openParking: number;
  public underCoverParking: number;
  public usableYard: number;
  public floorToCeilingHeights: number;
  public accessDoorHeights: number;
  public truckAccess: string;
  public power: string;
  public amperage: number;

  public showFilters: boolean = false;

  filters = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public modalCtrl: ModalController,
    private db: AngularFireDatabase 
  ) {
    this.parameter1 = navParams.get('param1');
    console.log(this.parameter1)

    this.db.list('/ListedProperties/Rentals/' + this.parameter1 + '/').valueChanges().subscribe(newProperties => {
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
                this.navCtrl.setRoot(MainRentSearchPage)
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

  applyFilters() {
    this.filteredProperties = _.filter(this.newProperties, _.conforms(this.filters))

    if (this.filteredProperties.length == 0) {
      let alert = this.alertCtrl.create({
        title: 'No properties match your requirements',
        subTitle: '\nPlease try a broader search.',
        buttons: [
          {
            text: 'Ok',
            role: 'cancel',
            handler: () => {
              // this.navCtrl.setRoot(MainBuySearchPage)
            }
          },
        ]
      });
      alert.present();
    } else {
    }
  }

  filterExact(property: string, rule: any) {
    this.filters[property] = val => val == rule
    this.applyFilters()
  } //Use this for text values.

  filterGreaterThan(property: string, rule: number) {
    this.filters[property] = val => val >= rule
    this.applyFilters()
  } //Use this for number values.


  filterBoolean(property: string, rule: boolean) {
    if (!rule) this.removeFilter(property)
    else {
      this.filters[property] = val => val
      this.applyFilters()
    }
  }

  removeFilter(property: string) {
    delete this.filters[property]
    this[property] = null
    this.applyFilters()
  }

  filterToggle() {
    this.showFilters = true;
  }

  filterToggleHide() {
    this.showFilters = false;
  }


  showDetail(property) {
    this.navCtrl.push(RentalListDetailPage, {
      param1: property
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RentalListingPage');
  }

}
