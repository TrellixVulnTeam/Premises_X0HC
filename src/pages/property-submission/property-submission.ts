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
import { HttpClient } from '@angular/common/http';

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


// uploader:FileUploader;
// hasBaseDropZoneOver:boolean;
// hasAnotherDropZoneOver:boolean;

// public fileOverBase(e:any):void {
//     this.hasBaseDropZoneOver = e;
//   }

// public fileOverAnother(e:any):void {
//     this.hasAnotherDropZoneOver = e;
//   }

// ngOnInit() {
//         this.uploader = new FileUploader({ url: 'gs://premises-1bc9e.appspot.com/' });
//         this.uploader.onAfterAddingFile = () => this.onUploaderAfterAddingFile();  //Ok, here you need to working upoad function.
//         this.uploader.onWhenAddingFileFailed = () => this.onUploaderWhenAddingFileFailed();       
//     }

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
    });



    
    // const URL = 'https://locationofyourserverandapiendpoint';
  
    //  this.files = this.dataProvider.getFiles();

    // this.suburb = this.navParams.data;

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
    });
  

  // this.uploader = new FileUploader({url: URL+"/VARTOBEPASSEDWITHFILE"});


  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log(event);
  }

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('https://us-central1-premises-1bc9e.cloudfunctions.net/uploadFile', fd)
    .subscribe(res => {
      console.log(res);
    });
  }

//  addFile() {
//     let inputAlert = this.alertCtrl.create({
//       title: 'Store new information',
//       inputs: [
//         {
//           name: 'info',
//           placeholder: 'Lorem ipsum dolor...' //Ok so here is where we need to pick the image.
//         }
//       ],
//       buttons: [
//         {
//           text: 'Cancel',
//           role: 'cancel'
//         },
//         {
//           text: 'Store',
//           handler: data => {
//             this.uploadInformation(data.info); //And this is the function that uploads it. So you want to pass the image string into here, but actually recognise it as an image.
//           }
//         }
//       ]
//     });
//     inputAlert.present();
//   }

  //What if you mane an input, and then passed it's NgModel into the brackets of that upload?
 
  // uploadInformation(image) {
  //   let upload = this.dataProvider.uploadToStorage(image);
 
  //   // Perhaps this syntax might change, it's no error here!
  //   upload.then().then(res => {
  //     this.dataProvider.storeInfoToDatabase(res.metadata).then(() => {
  //       let toast = this.toastCtrl.create({
  //         message: 'New File added!',
  //         duration: 3000
  //       });
  //       toast.present();
  //     });
  //   });
  // }


//    ngOnInit() { //This is the function that tries to upload the file once it's place in the input.
//         this.uploader = new FileUploader();
//         this.uploader.url = 'gs://premises-1bc9e.appspot.com/';

//         this.uploader.onAfterAddingFile = function() {
//         this.uploader.uploadAll();
//         };
//         this.uploader.onSuccessItem = function(item, response) {
//           console.log("uploaded")
// };    
// }

//You're using a hybrid of this:
// https://stackoverflow.com/questions/42023747/ng2-file-upload-cannot-read-property-queue-of-undefined
// And this:
// But First First this: https://www.youtube.com/watch?v=qcECaRgU4uI - Begining of cloud functions.
//THen this: https://www.youtube.com/watch?v=YGsmWKMMiYs
// But first we need this one: https://www.youtube.com/watch?v=qZ1EFnFOGvE - A cloud function
// This is a good video: https://www.youtube.com/watch?v=YkvqLNcJz3Y
 
  // deleteFile(file) {
  //   this.dataProvider.deleteFile(file).subscribe(() => {
  //     let toast = this.toastCtrl.create({
  //       message: 'File removed!',
  //       duration: 3000
  //     });
  //     toast.present();
  //   });
  // }
 
  // viewFile(url) {
  //   this.iab.create(url);
  // }

  // submitProperty() {
  //   this.adminDB.push(this.propertySubmissionForm.value)
  // };


  // areaSubmit() {
  //   this.propertyList.push(this.propertySubmissionForm.value)
  // };


  ionViewDidLoad() {
    console.log('ionViewDidLoad PropertySubmissionPage');
  }
  
}


// Other Durban Suburbs
// Puntans Hill
// Springfield
// Stamford Hill
// Sydenham
// Windermere
// Inanda
// South Central
// Arena Park
// Bellaire
// Cato Manor
// Chatsworth
// Glen Park
// Glenwood
// Hillary
// Jacobs Ladder
// Manor Gardens
// Memorial Park
// Merebank
// Merewent
// Montclair
// Mount Vernon
// Northdene
// North Park
// Poets Corner
// Prospecton
// Rossburgh
// Sarnia
// Seaview
// Shallcross
// Treasure Beach
// Wentworth
// Umhlatuzana
// Umlazi
// Umbilo
// Woodhaven
// Woodlands
// Yellowwood Park
// Avoca
// Canelands
// Glen Anil, Durban North
// Glen Ashley, Durban North
// La Lucia
// Mount Edgecombe
// Parkgate
// Redcliffe
// Tongaat
// Umdloti
// Umhlanga
// Verulam
// Sunningdale
// Bothas Hill
// Alverstone
// Assagay
// Bothas Hill
// Cato Ridge
// Crestholm
// Cliffdale
// Clifton Canyon
// Drummond
// Everton
// Emberton
// Forest Hills
// Fredville
// Gillitts
// Hammarsdale
// Harrison
// Hillcrest
// Inchanga
// Kloof
// KwaXimba
// Molweni
// Monteseel
// Mpumalanga
// Peacevale
// Shongweni
// Summerveld
// Waterfall
// Winston Park
// Wyebank
// Inner West
// Berea West
// Chiltern Hills
// Clermont
// Cowies Hill
// Dassenhoek
// Klaarwater
// KwaDabeka
// KwaNdengezi
// Escombe
// Malvern
// Maryvale
// Marianridge
// Marianhill
// Moseley
// Nazareth
// New Germany
// Pinetown
// Queensburgh
// Reservoir Hills
// Sarnia
// Savanna Park
// Shallcross
// St Wendolins Ridge / KwaSanti
// Thornwood
// Welbedacht
// Westville
// Amandawe
// Amanzimtoti
// Athlone Park
// Clansthal
// Craigieburn
// Isipingo
// Isipingo Beach
// Kingsborough
// KwaMakhutha
// Lower Illovo
// Lovu
// Magabeni
// Reunion
// Umbogintwini
// Umkomaas
// Warner Beach
// Widenham

// Airdlin
// B
// Barbeque Downs
// Barbeque Downs Business Park
// Bloubosrand
// Blue Hills
// Broadacres
// Buccleuch
// C
// Carlswald
// Chartwell
// Country View
// Crowthorne
// D
// Dainfern
// Diepsloot
// E
// Ebony Park
// Erand
// F
// Farmall
// G
// Glen Austin
// H
// Halfway Gardens
// Halfway House Estate
// Headway Hill
// Houtkoppen
// I
// Inadan(city)
// Ivory Park
// K
// Kya Sand
// Kya Sands, Johannesburg
// Kyalami Agricultural Holdings
// Kyalami Business Park
// Kyalami Estates
// M
// Mall of Africa
// Maroeladal
// Midrand
// Midridge Park
// Millgate Farm
// N
// Nietgedacht
// Noordwyk
// North Champagne Estates
// P
// Paulshof
// Plooysville
// R
// Rabie Ridge
// Randjesfontein Agricultural Holdings
// Randjespark
// S
// Salfred
// Sunninghill
// Sunrella
// T
// Trevallyn
// Trojan
// V
// Vorna Valley
// W
// Waterval City, Midrand
// Willaway
// Witkoppen
