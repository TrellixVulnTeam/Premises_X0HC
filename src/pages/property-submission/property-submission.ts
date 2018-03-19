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
// import { FileSelectDirective, FileDropDirective, FileUploader } from '../../../node_modules/ng2-fileupload';
// import { FileSelectDirective } from '../../../node_modules/ng2-fileupload';
import { FileUploader } from '../../../node_modules/ng2-file-upload';


@IonicPage()
@Component({
  selector: 'page-property-submission',
  templateUrl: 'property-submission.html',
})
export class PropertySubmissionPage {

  public uploader: FileUploader;
  files: Observable<any[]>;
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

  selectedFile = File = null;


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
    });
   
  
    this.adminDB = this.AFdb.list('/Admin/SubmittedProperties/'); //This needs to be the Admin Dashboard!
   //From there you need to push it into it's correct place, and be able to edit/approve/reject it from the admin dashboard.

    this.propertySubmissionForm = formBuilder.group({
      fullName: [''],
      userEmail: [''],
      agencyName: [''], //If applicable.
      premisesType: [''], //Radio Group Selector
      otherProperty: [''], //If not listed
      //Address Fields
      unitNumber: [''],
      complexName: [''],
      streetNumber: [''],
      streetName: [''],
      suburb1: [''],
      city: [''],
      // province: [''],
      postalCode: [''],
      erf: [''],
      //Property Size Fields
      factorySize: [''],
      officeSize: [''],
      totalSize: [''],
      shopSize: [''],
      underCoverParking: [''],
      openParking: [''],
      usableYard: [''],
      sizeOfERF: [''],
      //Heights Field
      floorToCeilingHeights: [''], 
      accessDoorHeights: [''], 
      //AccessFields
      truckAccess: [''],
      power: [''],
      amperage: [''],
      // overheads: [''],
      rates: [''],
      levy: [''],
      serviceCosts: [''],
      otherOverheads: [''],
      sellingPrice: [''],
      VAT: [''],
      description: [''],
      imageUplaod: [''],
      suburbKey: [''],
    });
  

  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log ("Here's the file name:", this.selectedFile.name)
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
        console.log("Trying to find the url:", event.url)
      }
    });
    }


//  https://firebasestorage.googleapis.com/v0/b/premises-1bc9e.appspot.com/o/resized-andrew-price-render12-final.jpg?alt=media&token=5f3a8c73-b32b-4016-8bef-16a07a4d234b


  submitProperty() {
    this.adminDB.push(this.propertySubmissionForm.value)
  };
  
}
