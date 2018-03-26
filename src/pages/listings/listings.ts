import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireDatabaseModule, AngularFireList } from 'angularfire2/database';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated'
import { AngularFireDatabase } from 'angularfire2/database';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {

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
    });


  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ListingsPage');
  }

  
}
