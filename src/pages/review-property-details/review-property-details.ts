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
// import * as firebase from 'firebase'
import firebase from 'firebase'
import { LoginPage } from '../login/login'
import { Observable } from 'rxjs/Observable';
import { FirebaseStorage } from '@firebase/storage-types';
import { ReviewSubmissionsPage } from '../review-submissions/review-submissions';


@IonicPage()
@Component({
  selector: 'page-review-property-details',
  templateUrl: 'review-property-details.html',
})
export class ReviewPropertyDetailsPage {

  // public property: FirebaseListObservable<any[]>;
  public property: any = [];
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
  images: any = [];
  imageCollection: any = [];
  profile: any;
  uid: any;
  city: any;
  dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  selectedFile = File = null;
  public vatOptioned: boolean = true;
  public tenantOption: boolean = true;
  public rentPurchaseOption: boolean = true;
  public rentVatOptioned: boolean = false;  
  img1Url: Observable<string | null>;
  img2Url: Observable<string | null>;
  img3Url: Observable<string | null>;
  img4Url: Observable<string | null>;
  img5Url: Observable<string | null>;
  img6Url: Observable<string | null>;
  public propertyRef: AngularFireObject<any>;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authData: AuthProvider,
    public afAuth: AngularFireAuth,
    public afStorage: AngularFireStorage,
    public AFdb: AngularFireDatabase,
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController,
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
      img1: [this.img1Url],
      img2: [this.img2Url],
      img3: [this.img3Url],
      img4: [this.img4Url],
      img5: [this.img5Url],
      img6: [this.img6Url],
    });

    this.property = this.navParams.data;

//Below somewhat works!

    // console.log("Image NAME::::::::::", this.property.img1)

    const ref1 = firebase.storage().ref("/resized-" + this.property.img1); //This gets the download URL. You need to dynamically pass in the file name here.
    ref1.getDownloadURL().then(url => {
      this.img1Url = url;
      console.log(this.img1Url);
    });


    const ref2 = firebase.storage().ref("/resized-" + this.property.img2); //This gets the download URL. You need to dynamically pass in the file name here.
    ref2.getDownloadURL().then(url => {
      this.img2Url = url;
      console.log(this.img2Url);
    });


    const ref3 = firebase.storage().ref("/resized-" + this.property.img3); //This gets the download URL. You need to dynamically pass in the file name here.
    ref3.getDownloadURL().then(url => {
      this.img3Url = url;
      console.log(this.img3Url);
    });
    
    const ref4 = firebase.storage().ref("/resized-" + this.property.img4); //This gets the download URL. You need to dynamically pass in the file name here.
    ref4.getDownloadURL().then(url => {
      this.img4Url = url;
      console.log(this.img4Url);
    });

    const ref5 = firebase.storage().ref("/resized-" + this.property.img5); //This gets the download URL. You need to dynamically pass in the file name here.
    ref5.getDownloadURL().then(url => {
      this.img5Url = url;
      console.log(this.img5Url);
    });

    const ref6 = firebase.storage().ref("/resized-" + this.property.img6); //This gets the download URL. You need to dynamically pass in the file name here.
    ref6.getDownloadURL().then(url => {
      this.img6Url = url;
      console.log(this.img6Url);
    });

    // const ref2 = this.afStorage.ref("/resized-" + this.property.img2); //This gets the download URL. You need to dynamically pass in the file name here.
    // this.img2Url = ref2.getDownloadURL()
    // // console.log(this.img2Url);

    // console.log(this.img6Url)
    //push the image url to under the property!
    // this.propertyRef = this.AFdb.object('/Admin/SubmittedProperties/');
    // this.propertyRef.update(this.property)
    // console.log("Image URL::::::::::", ref1.getDownloadURL())
  }

  //submitPropertyToListingRental() {
    //this.adminRentalDB.set(this.propertySubmissionForm.value)
  //}; //It's an entirely new submission, to elsewhere on the DB.


  submitPropertyToListingRental(property) {
    const toSend = this.AFdb.list(`/ListedProperties/Rentals/${property.city}/`);
    toSend.push(this.propertySubmissionForm.value);
    //console.log(property.city)
  }  

  submitPropertyToListingSale(property) {
    const toSend = this.AFdb.list(`/ListedProperties/Sales/${property.city}/`);
    toSend.push(this.propertySubmissionForm.value);
  }; //It's an entirely new submission, to elsewhere on the DB.

  deleteOnSubmit(property) {
    this.AFdb.list('/Admin/SubmittedProperties/' + this.property.key).remove();
    this.navCtrl.push(ReviewSubmissionsPage)
  } //Delete single listing here.

  submitAlert() {
    let confirm = this.alertCtrl.create({
      title: 'Property Submitted',
      message: 'Your users can now view and enquire.',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Ok clicked');
          }
        },
      ]
    });
    confirm.present();
  }


logURLS(){
  console.log(this.img1Url)
  console.log(this.img2Url)
  console.log(this.img3Url)
  console.log(this.img4Url)
  console.log(this.img5Url)
  console.log(this.img6Url)
}

  deleteConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Really Delete?',
      message: 'You cannot recover this listing after deleting.',
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
            this.AFdb.list('/Admin/SubmittedProperties/' + this.property.key).remove();
            this.navCtrl.setRoot(ReviewSubmissionsPage)
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
