import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFireDatabaseModule, AngularFireList } from 'angularfire2/database';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import * as moment from 'moment'
import * as firebase from 'firebase'
import { LoginPage } from '../login/login'


@IonicPage()
@Component({
  selector: 'page-review-property-details',
  templateUrl: 'review-property-details.html',
})
export class ReviewPropertyDetailsPage {

  public property: FirebaseListObservable<any[]>;
  public authUser: any;
  propertySubmissionForm: FormGroup;
  public adminRentalDB: AngularFireList<any>;
  public adminSaleDB: AngularFireList<any>; 
  public adminProfile: AngularFireObject<any>; 
  public propertyList: AngularFireList<any>;
  imageURI: any;
  imageFileName: any;
  public suburb: FirebaseListObservable<any[]>;
  //User Data Below
  email: any;
  profileArray: any = [];
  profile: any;
  uid: any;
  city: any;
  dateTime = moment().format();
  selectedFile = File = null;
  public vatOptioned: boolean = true;
  public tenantOption: boolean = true;
  public rentPurchaseOption: boolean = true;
  public rentVatOptioned: boolean = false;  

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authData: AuthProvider,
    public afAuth: AngularFireAuth,
    public afStorage: AngularFireStorage,
    public AFdb: AngularFireDatabase,
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController
  ) {
    const authObserver = afAuth.authState.subscribe(user => {
      if (user) {
        this.uid = user.uid;
        this.email = user.email;
        //this.profilePicture = "https://www.gravatar.com/avatar/" + md5(this.email.toLowerCase(), 'hex');
        this.profile = this.AFdb.object('/users/' + this.uid).valueChanges();
        // this.profile.valueChanges().subscribe(profile => {
        //   this.profileArray = profile;
        // })
        console.log(user.uid)
        console.log(user.email)
        console.log("auth")
        // this.navCtrl.setRoot(TabsPage);  
        authObserver.unsubscribe();
      } else {
        this.navCtrl.setRoot(LoginPage);
        authObserver.unsubscribe();
      }
      this.property = this.navParams.data;
      // this.adminRentalDB = this.AFdb.list('/ListedProperties/Rentals/' + this.property + '/city'); //This needs to be to the right place for the listing. The city needs to be included here.
      this.adminRentalDB = this.AFdb.list('/ListedProperties/Rentals/'); //This needs to be to the right place for the listing. The city needs to be included here.
      this.adminSaleDB = this.AFdb.list('/ListedProperties/Sales/'); //This needs to be to the right place for the listing. The city needs to be included here.
      this.adminProfile = this.AFdb.object('/Admin/SubmittedProperties/');


    });

    this.propertySubmissionForm = formBuilder.group({
      fullName: [],
      userEmail: [],
      contactNumber: [],
      agencyName: [], //If applicable.
      premisesType: [], //Radio Group Selector
      otherProperty: [], //If not listed
      //Address Fields
      unitNumber: [],
      complexName: [],
      streetNumber: [],
      streetName: [],
      suburb1: [],
      city: [],
      // province: [''],
      postalCode: [],
      erf: [],
      //Property Size Fields
      factorySize: [],
      officeSize: [],
      totalSize: [],
      shopSize: [],
      underCoverParking: [],
      openParking: [],
      usableYard: [],
      sizeOfERF: [],
      //Heights Field
      floorToCeilingHeights: [],
      accessDoorHeights: [],
      //AccessFields
      truckAccess: [],
      power: [],
      amperage: [],
      // overheads: [''],
      rates: [],
      levy: [],
      serviceCosts: [],
      otherOverheads: [],
      sellingPrice: [],
      VAT: [],
      thirdParty: [],
      description: [],
      imageUplaod: [],
      holding: [],
      otherHolding: [],
      suburbKey: [],
      dateTime: [],
      rental: [],
      rentalPrice: [],
      pricePerBay: [],
      ownerVatNumber: [],
      escalation: [],
      minLeaseTerm: [],
      maxLeaseTerm: [],
      img1: [],
      img2: [],
      img3: [],
      img4: [],
      img5: [],
      img6: [],
      img7: [],
      img8: [],
      img9: [],
      img10: [],
    });

    this.property = this.navParams.data;
  }

  //submitPropertyToListingRental() {
    //this.adminRentalDB.set(this.propertySubmissionForm.value)
  //}; //It's an entirely new submission, to elsewhere on the DB.


  submitPropertyToListingRental(property) {
    const toSend = this.AFdb.list(`/ListedProperties/Rentals/${property.city}/`);
    toSend.push(this.property);
    //console.log(property.city)
  }

  submitPropertyToListingSale(property) {
    const toSend = this.AFdb.list(`/ListedProperties/Sales/${property.city}/`);
    toSend.push(this.property);
  }; //It's an entirely new submission, to elsewhere on the DB.

  deleteListing(property) {
    console.log("Item =>", this.property);
    //this.AFdb.list('/Admin/SubmittedProperties/').remove(property);
  } //Delete single listing here.

  deleteConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Really Delete?',
      message: 'You cannot recover this file after deleting.',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            console.log("Item =>", this.property);
            //Delete file.
            //Push back to list.
          }
        }
      ]
    });
    confirm.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewPropertyDetailsPage');
  }

}
