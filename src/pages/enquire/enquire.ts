import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomePage } from '../home/home'
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFireDatabaseModule, AngularFireList } from 'angularfire2/database';
import { ToastController } from 'ionic-angular';
import * as moment from 'moment'

/**
 * Generated class for the EnquirePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enquire',
  templateUrl: 'enquire.html',
})
export class EnquirePage {

  parameter1: string;
  enuqirySubmissionForm: FormGroup;
  public adminDB: AngularFireList<any>;
  dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    public formBuilder: FormBuilder,
    public AFdb: AngularFireDatabase,
    public toastCtrl: ToastController,

) {    

    this.parameter1 = navParams.get('param1');

    this.adminDB = this.AFdb.list('/Admin/Enquiries/');

    this.enuqirySubmissionForm = formBuilder.group({
      fullName: [],
      userEmail: [],
      contactNumber: [],
      premisesType: [],
      unitNumber: [],
      complexName: [],
      streetNumber: [],
      streetName: [],
      suburb1: [],
      city: [],
      postalCode: [],
      erf: [],
      rental: [],
      dateTime: [this.dateTime],
    });
  }


  submitEnquiry() {
    this.adminDB.push(this.enuqirySubmissionForm.value)
    this.navCtrl.setRoot(HomePage)
  };

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Property Was Submitted Succesfully',
      duration: 5000,
      position: 'middle'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EnquirePage');
  }


}
