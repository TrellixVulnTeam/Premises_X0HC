import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase'
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFireDatabaseModule, AngularFireList } from 'angularfire2/database';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/**
 * Generated class for the ReviewPropertyDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-review-property-details',
  templateUrl: 'review-property-details.html',
})
export class ReviewPropertyDetailsPage {

  public property: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.property = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewPropertyDetailsPage');
  }

}
