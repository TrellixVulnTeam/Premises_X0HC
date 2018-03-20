import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  public adminDB: AngularFireList<any>;
  public propertyList: AngularFireList<any>;
  imageURI: any;
  imageFileName: any;
  public suburb: FirebaseListObservable<any[]>;
  //User Data Below
  email: any;
  profileArray: any = [];
  profile: any;
  uid: any;
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
      this.adminDB = this.AFdb.list('/Admin/SubmittedProperties/'); //This needs to be to the right place for the listing.
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
    });

  }

  submitProperty() {
    this.adminDB.push(this.propertySubmissionForm.value)
  }; //It's an entirely new submission, to elsewhere on the DB.

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewPropertyDetailsPage');
  }

}
