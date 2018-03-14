    
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireDatabaseModule, AngularFireList } from 'angularfire2/database';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import firebase from 'firebase';
import { SuburbDetailPage } from '../suburb-detail/suburb-detail'
import { PropertySubmissionPage } from '../property-submission/property-submission'

@IonicPage()
@Component({
  selector: 'page-suburb-list',
  templateUrl: 'suburb-list.html',
})
export class SuburbListPage {

  parameter1: string;
  suburbSubmissionForm: FormGroup;
  public adminDB: AngularFireList<any>;
  public suburbList: Array<any>;
  public loadedSuburbList: Array<any>;
  public suburbRef: firebase.database.Query;
  public metro: any;
  metroString: any;
  suburb: AngularFireList<any>;
  // So this.metro is the correct thimg, but we need to access to child of it and use that data. hmmmmm.

  constructor(public navCtrl: NavController, public navParams: NavParams, public AFdb: AngularFireDatabase, public formBuilder: FormBuilder) {
    // this.adminDB = this.AFdb.list('/Metros/CapeTown/');
    this.parameter1 = navParams.get('param1'); 
    console.log(this.parameter1)

    this.metro = this.navParams.data;
    this.adminDB = this.AFdb.list('/Metros/' + this.parameter1);

    this.suburbSubmissionForm = formBuilder.group({
      suburb: [''],
      metro: [this.parameter1]
    });

    console.log("Metro:::", this.parameter1)
    
    this.suburbRef = firebase.database().ref('/Metros/' + this.parameter1 + '/').orderByChild('suburb'); //Inlcude dynamic metro here.

    this.suburbRef.on('value', suburbList => {
      let suburbs = [];
      suburbList.forEach(suburb => {
        let item = suburb.val();
        item.key = suburb.key;
        suburbs.push(item);
        return false;
      });
      this.suburbList = suburbs;
      this.loadedSuburbList = suburbs;
    });

  }


  initializeItems(): void {
    this.suburbList = this.loadedSuburbList;
  }

  getSuburbs(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();

    // set q to the value of the searchbar
    var q = searchbar.srcElement.value;

    // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }

    this.suburbList = this.suburbList.filter((v) => {
      if (v.suburb && q) {
        if (v.suburb.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });

    console.log(q, this.suburbList.length);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuburbListPage');
  }

  goToSubmitProperty(suburb) {
    this.navCtrl.push(PropertySubmissionPage, suburb)
    console.log("Suburb:", suburb)
  } //Include parameters here.


  suburbSubmit() {
    this.adminDB.push(this.suburbSubmissionForm.value)
  };

  // goToSuburbDetail() {
  //   this.navCtrl.push(SuburbDetailPage)
  // }

};


