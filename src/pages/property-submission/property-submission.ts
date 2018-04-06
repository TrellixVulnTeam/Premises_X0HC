import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login'
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFireDatabaseModule, AngularFireList } from 'angularfire2/database';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ToastController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { DataProvider } from './../../providers/data';
import { AlertController } from 'ionic-angular'
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpEventType, HttpRequest, HttpParams } from '@angular/common/http';
import * as firebase from 'firebase'
import * as moment from 'moment'
import { HomePage } from '../home/home';
import { ConfirmationPage } from '../confirmation/confirmation'
// import { FileSelectDirective, FileDropDirective, FileUploader } from '../../../node_modules/ng2-fileupload';
// import { FileSelectDirective } from '../../../node_modules/ng2-fileupload';
// import { FileUploader } from '../../../node_modules/ng2-file-upload';

//This page is for the submission of properties that are being sold, not rented.

@IonicPage()
@Component({
  selector: 'page-property-submission',
  templateUrl: 'property-submission.html',
})
export class PropertySubmissionPage {

  // public uploader: FileUploader;
  public property: FirebaseListObservable<any[]>;
  files: Observable<any[]>;
  public authUser: any;
  propertySubmissionForm: FormGroup;
  suburbSubmissionForm: FormGroup;
  public adminDB: AngularFireList<any>;
  public adminDB2: AngularFireList<any>;
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
  selectedFile: any = [];
  // selectedFile2 = File = null;
  selectedFile2: any = [];
  selectedFile3: any = [];
  selectedFile4: any = [];
  selectedFile5: any = [];
  selectedFile6: any = [];
  public vatOptioned: boolean = true;
  public tenantOption: boolean = true;
  public rentPurchaseOption: boolean = true;
  public rentVatOptioned: boolean = false;
  profileUrl: Observable<string | null>;

  constructor(public navCtrl: NavController,
    // public fileSelect: FileSelectDirective,
    // public platform: Platform,
    public navParams: NavParams,
    public authData: AuthProvider,
    public afAuth: AngularFireAuth,
    public afStorage: AngularFireStorage,
    public AFdb: AngularFireDatabase,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private dataProvider: DataProvider,
    private alertCtrl: AlertController,
    private iab: InAppBrowser,
    private http: HttpClient,
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
      this.suburb = this.navParams.data;
      this.property = this.navParams.data;
    });
   
  
    const ref = this.afStorage.ref('/resized-021.jpg'); //This gets the download URL.
    this.profileUrl = ref.getDownloadURL();
    console.log(ref.getDownloadURL())


    this.adminDB = this.AFdb.list('/Admin/SubmittedProperties/'); //This needs to be the Admin Dashboard!
   //From there you need to push it into it's correct place, and be able to edit/approve/reject it from the admin dashboard.
    this.adminDB2 = this.AFdb.list('/Metros/Durban/'); //!!!!!!!!!Change it here.


    this.suburbSubmissionForm = formBuilder.group({
      suburb: [],
      metro: ['Durban'], //!!!!!!!!!Change it here.
    }); 

    this.propertySubmissionForm = formBuilder.group({
      fullName: [],
      userEmail: [],
      contactNumber: [],
      agencyName: [], //If applicable.
      premisesType: ['', Validators.required], //Radio Group Selector
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
      truckAccess: ['', Validators.required],
      power: ['', Validators.required],
      amperage: [],
      // overheads: [''],
      rates: [],
      levy: [],
      serviceCosts: [],
      otherOverheads: [],
      sellingPrice: [],
      VAT: ['', Validators.required],
      thirdParty: [],
      description: [],
      imageUplaod: [],
      holding: ['', Validators.required],
      otherHolding: [],
      suburbKey: [],
      dateTime: [this.dateTime],
      rental: ['', Validators.required],
      rentalPrice: [],
      pricePerBay: [],
      ownerVatNumber: [],
      escalation: [],
      minLeaseTerm: [],
      maxLeaseTerm: [],
      img1: [this.selectedFile.name, Validators.required],
      img2: [this.selectedFile2.name, Validators.required],
      img3: [this.selectedFile3.name, Validators.required],
      img4: [this.selectedFile4.name, Validators.required],
      img5: [this.selectedFile5.name, Validators.required],
      img6: [this.selectedFile6.name, Validators.required],
    });
  
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log ("Here's the file name:", this.selectedFile.name)
    console.log("Here's the details:", this.selectedFile)

    //console.log(event);
  }
  onFileSelected2(event) {
    this.selectedFile2 = <File>event.target.files[0];
    console.log("Here's the file name:", this.selectedFile2.name)
    //console.log(event);
  }
  onFileSelected3(event) {
    this.selectedFile3 = <File>event.target.files[0];
    console.log("Here's the file name:", this.selectedFile3.name)
    //console.log(event);
  }
  onFileSelected4(event) {
    this.selectedFile4 = <File>event.target.files[0];
    console.log("Here's the file name:", this.selectedFile4.name)
    //console.log(event);
  }
  onFileSelected5(event) {
    this.selectedFile5 = <File>event.target.files[0];
    console.log("Here's the file name:", this.selectedFile5.name)
    //console.log(event);
  }
  onFileSelected6(event) {
    this.selectedFile6 = <File>event.target.files[0];
    console.log("Here's the file name:", this.selectedFile6.name)
    //console.log(event);
  }

  onUpload() { //Here is where you need to somehow get the link.
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('https://us-central1-premises-1bc9e.cloudfunctions.net/uploadFile', fd, {
    reportProgress: true,
    observe: 'events'
    })
    .subscribe(event => {
      if (event.type === HttpEventType.UploadProgress){
        console.log('Upload Progress:' + Math.round(event.loaded / event.total * 100) + '%');
      } else if (event.type === HttpEventType.Response) {
        console.log(event);
      }
    });
    }

  onUpload2() { //Here is where you need to somehow get the link.
    const fd = new FormData();
    fd.append('image', this.selectedFile2, this.selectedFile2.name);
    this.http.post('https://us-central1-premises-1bc9e.cloudfunctions.net/uploadFile', fd, {
      reportProgress: true,
      observe: 'events'
    })
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          console.log('Upload Progress:' + Math.round(event.loaded / event.total * 100) + '%');
        } else if (event.type === HttpEventType.Response) {
          console.log(event);
        }
      });
  }

  onUpload3() { //Here is where you need to somehow get the link.
    const fd = new FormData();
    fd.append('image', this.selectedFile3, this.selectedFile3.name);
    this.http.post('https://us-central1-premises-1bc9e.cloudfunctions.net/uploadFile', fd, {
      reportProgress: true,
      observe: 'events'
    })
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          console.log('Upload Progress:' + Math.round(event.loaded / event.total * 100) + '%');
        } else if (event.type === HttpEventType.Response) {
          console.log(event);
        }
      });
  }

  onUpload4() { //Here is where you need to somehow get the link.
    const fd = new FormData();
    fd.append('image', this.selectedFile4, this.selectedFile4.name);
    this.http.post('https://us-central1-premises-1bc9e.cloudfunctions.net/uploadFile', fd, {
      reportProgress: true,
      observe: 'events'
    })
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          console.log('Upload Progress:' + Math.round(event.loaded / event.total * 100) + '%');
        } else if (event.type === HttpEventType.Response) {
          console.log(event);
        }
      })
    }

  onUpload5() { //Here is where you need to somehow get the link.
    const fd = new FormData();
    fd.append('image', this.selectedFile5, this.selectedFile5.name);
    this.http.post('https://us-central1-premises-1bc9e.cloudfunctions.net/uploadFile', fd, {
      reportProgress: true,
      observe: 'events'
    })
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          console.log('Upload Progress:' + Math.round(event.loaded / event.total * 100) + '%');
        } else if (event.type === HttpEventType.Response) {
          console.log(event);
        }
      })
  }

  onUpload6() { //Here is where you need to somehow get the link.
    const fd = new FormData();
    fd.append('image', this.selectedFile6, this.selectedFile6.name);
    this.http.post('https://us-central1-premises-1bc9e.cloudfunctions.net/uploadFile', fd, {
      reportProgress: true,
      observe: 'events'
    })
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          console.log('Upload Progress:' + Math.round(event.loaded / event.total * 100) + '%');
        } else if (event.type === HttpEventType.Response) {
          console.log(event);
        }
      })
  }


  submitProperty() {
    this.propertySubmissionForm.markAsDirty();
    this.adminDB.push(this.propertySubmissionForm.value)
    this.navCtrl.setRoot(ConfirmationPage)
  };

  submitSuburb() {
    this.adminDB2.push(this.suburbSubmissionForm.value)
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
  
  vatOption(vatOption) {
    console.log("vatOption = ", vatOption);
  }

  vatToggle1() {
    this.vatOptioned = true;
  }

  vatToggle2() {
    this.vatOptioned = false;
  }

  rentVatToggle1() {
    this.rentVatOptioned = true;
  }

  rentVatToggle2() {
    this.rentVatOptioned = false;
  }


  tenantToggle1() {
    this.tenantOption = true;
  }

  tenantToggle2() {
    this.tenantOption = false;
  }

  rentPurchaseToggle1() {
    this.rentPurchaseOption = true;
  } //This is to assign all the rental fields

  rentPurchaseToggle2() {
    this.rentPurchaseOption = false;
  } //This is to assign all the purchase fields

  
}
