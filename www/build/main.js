webpackJsonp([9],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertySubmissionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_storage__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_data__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(328);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var PropertySubmissionPage = (function () {
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
    function PropertySubmissionPage(navCtrl, 
        // public fileSelect: FileSelectDirective,
        // public platform: Platform,
        navParams, authData, afAuth, afStorage, AFdb, formBuilder, loadingCtrl, toastCtrl, dataProvider, alertCtrl, iab, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authData = authData;
        this.afAuth = afAuth;
        this.afStorage = afStorage;
        this.AFdb = AFdb;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.dataProvider = dataProvider;
        this.alertCtrl = alertCtrl;
        this.iab = iab;
        this.http = http;
        this.profileArray = [];
        this.selectedFile = File = null;
        var authObserver = afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.uid = user.uid;
                _this.email = user.email;
                //this.profilePicture = "https://www.gravatar.com/avatar/" + md5(this.email.toLowerCase(), 'hex');
                _this.profile = _this.AFdb.object('/users/' + _this.uid).valueChanges();
                // this.profile.valueChanges().subscribe(profile => {
                //   this.profileArray = profile;
                // })
                console.log(user.uid);
                console.log(user.email);
                console.log("auth");
                // this.navCtrl.setRoot(TabsPage);  
                authObserver.unsubscribe();
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
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
            agencyName: [''],
            premisesType: [''],
            otherProperty: [''],
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
    PropertySubmissionPage.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
        console.log(event);
    };
    PropertySubmissionPage.prototype.onUpload = function () {
        var fd = new FormData();
        fd.append('image', this.selectedFile, this.selectedFile.name);
        this.http.post('https://us-central1-premises-1bc9e.cloudfunctions.net/uploadFile', fd)
            .subscribe(function (res) {
            console.log(res);
        });
    };
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
    PropertySubmissionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PropertySubmissionPage');
    };
    PropertySubmissionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-property-submission',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/property-submission/property-submission.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>Submit Your Property</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <!-- <p>Currently submitting a property in <b>{{ suburb.suburb }}, {{ suburb.metro }}.</b></p> -->\n    <hr>\n    <form [formGroup]="propertySubmissionForm" (submit)="submitProperty()">\n        <ion-label><b><u>General Details:</u></b></ion-label>\n        <!-- <ion-item no-lines>\n            <ion-label floating>Full Name:</ion-label>\n            <ion-input formControlName="suburb" type="text"></ion-input>\n        </ion-item> -->\n        <ion-item hidden no-lines>\n            <ion-label floating>Email Address:</ion-label>\n            <ion-input formControlName="userEmail" type="text" value="{{(profile | async)?.email}}">{{(profile | async)?.email}}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Full Name:</ion-label>\n            <ion-input formControlName="fullName" type="text"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Agency Name:</ion-label>\n            <ion-input formControlName="agencyName" type="text"></ion-input>\n        </ion-item>\n        <hr>\n        <ion-list radio-group formControlName="premisesType">\n            <ion-label><b><u>Premises Type:</u></b></ion-label>\n            <ion-item no-lines>\n                <ion-label>Mini factory up to 500sqm</ion-label>\n                <ion-radio item-left type="radio" value="Mini factory up to 500sqm"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>A Factory/Warehouse over 500sqm</ion-label>\n                <ion-radio item-left type="radio" value="A factory/warehouse over 500 sqm"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Offices</ion-label>\n                <ion-radio item-left type="radio" value="Offices"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Retail</ion-label>\n                <ion-radio item-left type="radio" value="Retail"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>A mixed use building</ion-label>\n                <ion-radio item-left type="radio" value="A mixed use building"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>A stand alone house to be used as offices</ion-label>\n                <ion-radio item-left type="radio" value="A stand alone house to be used as offices"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Other</ion-label>\n                <ion-radio item-left type="radio" value="Other"></ion-radio>\n            </ion-item>\n            <ion-input formControlName="otherProperty" type="text" placeholder="Description of property if other."></ion-input>\n        </ion-list>\n        <hr>\n        <ion-item no-lines>\n            <ion-label><u>Property Address:</u></ion-label>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Unit Number:</ion-label>\n            <ion-input formControlName="unitNumber" type="text"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Complex Name:</ion-label>\n            <ion-input formControlName="complexName" type="text"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Street Number:</ion-label>\n            <ion-input formControlName="streetNumber" type="text"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Street Name:</ion-label>\n            <ion-input formControlName="streetName" type="text"></ion-input>\n        </ion-item>\n        <!-- <ion-item hidden no-lines>\n            <ion-label floating>Suburb/Town:</ion-label>\n            <ion-input formControlName="suburb1" type="text" value=" {{ suburb.suburb }}">{{ suburb.suburb }}</ion-input>\n        </ion-item>\n        <ion-item hidden no-lines>\n            <ion-label floating>City:</ion-label>\n            <ion-input formControlName="city" type="text" value="{{ suburb.metro }}">{{ suburb.metro }}</ion-input>\n        </ion-item> -->\n        <!-- <ion-item no-lines>\n            <ion-label floating>Province:</ion-label>\n            <ion-input formControlName="province" type="text"></ion-input>\n        </ion-item> -->\n        <ion-item no-lines>\n            <ion-label floating>Postal Code:</ion-label>\n            <ion-input formControlName="postalCode" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>ERF Number:</ion-label>\n            <ion-input formControlName="erf" type="text"></ion-input>\n        </ion-item>\n        <hr>\n        <ion-item no-lines>\n            <ion-label><u>Property Sizes:</u></ion-label>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Factory/Warehouse Size (sqm):</ion-label>\n            <ion-input formControlName="factorySize" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Office Size (sqm):</ion-label>\n            <ion-input formControlName="officeSize" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Total Factory and Office Size (sqm):</ion-label>\n            <ion-input formControlName="totalSize" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Shop Size (sqm) (If Retail):</ion-label>\n            <ion-input formControlName="shopSize" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Undercover Parking (Bays):</ion-label>\n            <ion-input formControlName="underCoverParking" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Open Parking (Bays):</ion-label>\n            <ion-input formControlName="openParking" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Usable Yard (sqm):</ion-label>\n            <ion-input formControlName="usableYard" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Size of ERF (sqm) (If Freehold):</ion-label>\n            <ion-input formControlName="sizeOfERF" type="number"></ion-input>\n        </ion-item>\n        <hr>\n        <ion-item no-lines>\n            <ion-label><u>Heights:</u></ion-label>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Floor to Roof in Factory/Warehouse:</ion-label>\n            <ion-input formControlName="floorToCeilingHeights" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Height of Acccess Door (Roller Shutter):</ion-label>\n            <ion-input formControlName="floorToCeilingHeights" type="number"></ion-input>\n        </ion-item>\n        <hr>\n        <ion-item no-lines>\n            <ion-label><u>Truck Access:</u></ion-label>\n        </ion-item>\n        <ion-list radio-group formControlName="truckAccess">\n            <ion-item no-lines>\n                <ion-label>Rigid Trucks Be Offloaded at the premises</ion-label>\n                <ion-radio item-left type="radio" value="Rigid Trucks Only"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Semi Trailers Be Offloaded at the premises</ion-label>\n                <ion-radio item-left type="radio" value="Up To Semi Trucks"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Interlinks Be Offloaded at the premises</ion-label>\n                <ion-radio item-left type="radio" value="Up To Interlinks"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>None of the above applies.</ion-label>\n                <ion-radio item-left type="radio" value="No Truck Can Be Offloaded"></ion-radio>\n            </ion-item>\n        </ion-list>\n        <hr>\n        <ion-item no-lines>\n            <ion-label><u>Power:</u></ion-label>\n        </ion-item>\n        <ion-list radio-group formControlName="power">\n            <ion-item no-lines>\n                <ion-label>Single Phase</ion-label>\n                <ion-radio item-left type="radio" value="Single Phase"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Three Phase</ion-label>\n                <ion-radio item-left type="radio" value="Three Phase"></ion-radio>\n            </ion-item>\n        </ion-list>\n        <ion-item no-lines>\n            <ion-label floating>Amperage:</ion-label>\n            <ion-input formControlName="amperage" type="number"></ion-input>\n        </ion-item>\n        <p>Please check your circuit breaker for the amperage.</p>\n        <hr>\n        <ion-item no-lines>\n            <ion-label><u>Overheads:</u></ion-label>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Rates (ZAR):</ion-label>\n            <ion-input formControlName="rates" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Levy (ZAR):</ion-label>\n            <ion-input formControlName="levy" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Contribution to Service Costs (ZAR):</ion-label>\n            <ion-input formControlName="serviceCosts" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Other Overheads:</ion-label>\n            <ion-input formControlName="otherOverheads" type="text"></ion-input>\n        </ion-item>\n        <hr>\n        <ion-item no-lines>\n            <ion-label><u>Cost:</u></ion-label>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Selling Price (ZAR):</ion-label>\n            <ion-input formControlName="sellingPrice" type="number"></ion-input>\n        </ion-item>\n        <hr>\n        <ion-item no-lines>\n            <ion-label><u>VAT:</u></ion-label>\n        </ion-item>\n        <ion-list radio-group formControlName="VAT">\n            <ion-item no-lines>\n                <ion-label>Owner of Property is a VAT Vendor</ion-label>\n                <ion-radio item-left type="radio" value="Owner Is A VAT Vendor"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <p>Transfer Duty Applies</p>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Owner of Property is not a VAT Vendor</ion-label>\n                <ion-radio item-left type="radio" value="Owner Is Not A VAT Vendor"></ion-radio>\n            </ion-item>\n            <ion-item>\n                <p>Transaction Cannot Be Zero Rated</p>\n            </ion-item>\n        </ion-list>\n        <hr>\n        <ion-item no-lines>\n            <ion-label><u>Property Description:</u></ion-label>\n        </ion-item>\n        <ion-textarea formControlName="description" placeholder="Describe the property here:"></ion-textarea>\n        <hr>\n        <ion-label><u>Upload Photos:</u></ion-label>\n        <ion-item no-lines>\n            <ion-input formControlName="imageUplaod" id="upimgfile" type="file"></ion-input>\n        </ion-item>\n        <hr>\n        <button ion-button block type="submit">Submit Property For Review</button>\n    </form>\n\n\n    <ion-card *ngFor="let file of files | async">\n        <ion-card-header>\n            {{ file.created | date:\'medium\' }}\n        </ion-card-header>\n\n        <ion-card-content>\n\n            <button ion-button block icon-left outline (click)="viewFile(file.url)">\n        <ion-icon name="eye"></ion-icon>\n        {{ file.fullPath }} <!--this is what you will need to be submitted for each image to the Firebase database for referencing later-->\n      </button>\n\n\n            <button ion-button block outline icon-left color="danger" (click)="deleteFile(file)">\n        <ion-icon name="trash"></ion-icon> Delete\n      </button>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-fab right bottom>\n        <button ion-fab color="primary" (click)="addFile()">\n      <ion-icon name="cloud-upload"></ion-icon>\n    </button>\n    </ion-fab>\n\n    <!-- <ion-grid>\n        <ion-row>\n            <ion-col>\n                <h3>Select files</h3>\n                <input type="file" ng2FileSelect [uploader]="uploader" multiple /><br/>\n            </ion-col>\n            <ion-col>\n                <h3>Upload queue</h3>\n                <p>Queue length: {{ uploader?.queue?.length }}</p>\n                <table class="table">\n                    <tbody>\n                        <tr *ngFor="let item of uploader.queue">\n                            <td><strong>{{ item?.file?.name }}</strong></td>\n                            <td *ngIf="uploader.isHTML5" nowrap>{{ item?.file?.size/1024/1024 | number:\'.2\' }} MB</td>\n                            <td *ngIf="uploader.isHTML5">\n                                <progress id="progressbar" max="100" value="{{ item.progress }}"> </progress>\n                                <div id="progressbarlabel">{{ item.progress }} %</div>\n                            </td>\n                            <td class="text-center">\n                                <span *ngIf="item.isCancel"><ion-icon name="close-circle"></ion-icon></span>\n                                <span *ngIf="item.isError"><ion-icon name="trash"></ion-icon></span>\n                            </td>\n                            <td nowrap>\n                                <button ion-button icon-right *ngIf="!item.isSuccess" (click)="item.upload()" [disabled]="item.isReady || item.isUploading || item.isSuccess">Upload<ion-icon name="cloud-upload"></ion-icon></button>\n                                <button ion-button icon-right *ngIf="!item.isSuccess" (click)="item.remove()" [ngStyle]="{\'background-color\': \'#D2691E\'}">Cancel<ion-icon name="close-circle"></ion-icon></button>\n                                <button ion-button icon-right *ngIf="!item.isSuccess" color="danger">Remove<ion-icon name="trash"></ion-icon></button>\n                                <button ion-button icon-right *ngIf="item.isSuccess" [ngStyle]="{\'background-color\': \'Green\'}">Image Uploaded!<ion-icon name="checkmark-circle-outline"></ion-icon></button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <div>\n                    <div>\n                        Queue progress:\n                        <progress id="progressbar" [ngStyle]="{\'background-color\': \'Green\'}" max="100" value="{{ uploader.progress }}"> </progress>\n                        <div id="progressbarlabel">{{ uploader.progress }} %</div>\n                    </div>\n                    <button ion-button icon-right (click)="uploader.uploadAll()" [disabled]="!uploader.getNotUploadedItems().length">Upload all<ion-icon name="cloud-upload"></ion-icon></button>\n                    <button ion-button icon-right (click)="uploader.cancelAll()" [ngStyle]="{\'background-color\': \'#D2691E\'}" [disabled]="!uploader.isUploading">Cancel all<ion-icon name="close-circle"></ion-icon></button>\n                    <button ion-button icon-right color="danger" (click)="uploader.clearQueue()" [disabled]="!uploader.queue.length">Remove all<ion-icon name="trash"></ion-icon></button>\n                    <button type="button" class="btn btn-warning btn-s" (click)="uploader.cancelAll()" [disabled]="!uploader.isUploading"></button>\n                    <button type="button" class="btn btn-danger btn-s" (click)="uploader.clearQueue()" [disabled]="!uploader.queue.length">\n                </button>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid> -->\n\n    <h1>File Upload</h1>\n\n    <input type="file" (change)="onFileSelected($event)" />\n    <button type="button" (click)="onUpload()">Upload</button>\n\n    <!-- <img ng-src="imagesrc" class="avatar" ng-click="uploadProfilePic()" />\n    <button class="button button-primary" ng-click="uploadProfilePic()">Change Picture</button>\n    <input type="file" accept="image/*" id="upload" /> -->\n\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/property-submission/property-submission.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_angularfire2_storage__["a" /* AngularFireStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angularfire2_storage__["a" /* AngularFireStorage */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_9__providers_data__["a" /* DataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__providers_data__["a" /* DataProvider */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClient */]) === "function" && _o || Object])
    ], PropertySubmissionPage);
    return PropertySubmissionPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
}());

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
//# sourceMappingURL=property-submission.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_profile__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__profile_profile__["a" /* ProfilePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/tabs/tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Profile" tabIcon="person"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_buy_search_main_buy_search__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_rent_search_main_rent_search__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__property_submission_property_submission__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__metro_list_metro_list__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = (function () {
    function HomePage(navCtrl, authData, afAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.authData = authData;
        var authObserver = afAuth.authState.subscribe(function (user) {
            if (user) {
                console.log("auth");
                // this.navCtrl.setRoot(TabsPage);
                authObserver.unsubscribe();
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
                authObserver.unsubscribe();
            }
        });
    }
    HomePage.prototype.toMainBuySearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__main_buy_search_main_buy_search__["a" /* MainBuySearchPage */]);
    };
    HomePage.prototype.toMainRentSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__main_rent_search_main_rent_search__["a" /* MainRentSearchPage */]);
    };
    HomePage.prototype.toPropertySubmission = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__property_submission_property_submission__["a" /* PropertySubmissionPage */]);
    };
    HomePage.prototype.toMetroList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__metro_list_metro_list__["a" /* MetroListPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/home/home.html"*/'<ion-header>\n    <!-- <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar> -->\n</ion-header>\n\n<ion-content class="masters">\n    <div class="landing-container">\n        <img class="logo" src="./assets/imgs/logo.png" />\n        <h2>Welcome to Premises!</h2>\n        <p>\n            Click the option that best describes you below:\n        </p>\n        <ion-grid>\n            <ion-row>\n                <!--I need to rent out a property-->\n                <ion-col tappable col-6 col-sm>\n                    <ion-card (click)="toMainRentSearch()">\n                        <img src="./assets/imgs/logo.png" />\n                        <ion-card-header text-wrap>\n                            Need to Rent?\n                        </ion-card-header>\n                        <ion-card-content>\n                            Click Here\n                        </ion-card-content>\n                    </ion-card>\n                </ion-col>\n                <!--I need to buy a property-->\n                <ion-col tappable col-6 col-sm>\n                    <ion-card (click)="toMainBuySearch()">\n                        <img src="./assets/imgs/logo.png" />\n                        <ion-card-header text-wrap>\n                            Need to Buy?\n                        </ion-card-header>\n                        <ion-card-content>\n                            Click Here\n                        </ion-card-content>\n                    </ion-card>\n                </ion-col>\n                <!--I want to sell a property-->\n                <ion-col tappable col-6 col-sm>\n                    <ion-card (click)="toMetroList()">\n                        <img src=" ./assets/imgs/logo.png " />\n                        <ion-card-header text-wrap>\n                            Need to Sell?\n                        </ion-card-header>\n                        <ion-card-content>\n                            Click Here\n                        </ion-card-content>\n                    </ion-card>\n                </ion-col>\n                <!--I want to rent out a property-->\n                <ion-col tappable col-6 col-sm>\n                    <ion-card (click)="toMetroList()">\n                        <img src=" ./assets/imgs/logo.png " />\n                        <ion-card-header text-wrap>\n                            Need to find a tenant?\n                        </ion-card-header>\n                        <ion-card-content>\n                            Click Here\n                        </ion-card-content>\n                    </ion-card>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n        <button ion-button type="button" mode="ios" block color="dark" outline margin-top>Get In Touch With Us</button>\n    </div>\n    <p align="center ">Copyright 2018: Premises (PTY) Ltd</p>\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainBuySearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MainBuySearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MainBuySearchPage = (function () {
    function MainBuySearchPage(navCtrl, navParams, authData, afAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authData = authData;
        var authObserver = afAuth.authState.subscribe(function (user) {
            if (user) {
                console.log("auth");
                // this.navCtrl.setRoot(TabsPage);
                authObserver.unsubscribe();
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                authObserver.unsubscribe();
            }
        });
    }
    MainBuySearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainBuySearchPage');
    };
    MainBuySearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-main-buy-search',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/main-buy-search/main-buy-search.html"*/'<!--\n  Generated template for the MainBuySearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>main-buy-search</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/main-buy-search/main-buy-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MainBuySearchPage);
    return MainBuySearchPage;
}());

//# sourceMappingURL=main-buy-search.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainRentSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MainRentSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MainRentSearchPage = (function () {
    function MainRentSearchPage(navCtrl, navParams, authData, afAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authData = authData;
        var authObserver = afAuth.authState.subscribe(function (user) {
            if (user) {
                console.log("auth");
                // this.navCtrl.setRoot(TabsPage);
                authObserver.unsubscribe();
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                authObserver.unsubscribe();
            }
        });
    }
    MainRentSearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainRentSearchPage');
    };
    MainRentSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-main-rent-search',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/main-rent-search/main-rent-search.html"*/'<!--\n  Generated template for the MainRentSearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>main-rent-search</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/main-rent-search/main-rent-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MainRentSearchPage);
    return MainRentSearchPage;
}());

//# sourceMappingURL=main-rent-search.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetroListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__suburb_list_suburb_list__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MetroListPage = (function () {
    function MetroListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.metros = [];
        this.metroRef = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/ListOfMetros');
    }
    MetroListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.metroRef.on('value', function (itemSnapshot) {
            _this.metros = [];
            itemSnapshot.forEach(function (itemSnap) {
                _this.metros.push(itemSnap.val());
                return false;
            });
        });
    };
    // toSuburbList(){
    //   this.navCtrl.push(SuburbListPage)
    // }
    // toSuburbList(metro) {
    //   this.navCtrl.push(SuburbListPage, metro);
    //   console.log("ZZZZZZ", metro)
    //   //console.log(coffeeShop)
    // }
    MetroListPage.prototype.toJoburg = function (metro) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__suburb_list_suburb_list__["a" /* SuburbListPage */], {
            param1: "Johannesburg"
        });
    };
    MetroListPage.prototype.toCapeTown = function (metro) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__suburb_list_suburb_list__["a" /* SuburbListPage */], {
            param1: "CapeTown"
        });
    };
    MetroListPage.prototype.toDurban = function (metro) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__suburb_list_suburb_list__["a" /* SuburbListPage */], {
            param1: "Durban"
        });
    };
    MetroListPage.prototype.toPietermaritzburg = function (metro) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__suburb_list_suburb_list__["a" /* SuburbListPage */], {
            param1: "Pietermaritzburg"
        });
    };
    MetroListPage.prototype.toPretoria = function (metro) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__suburb_list_suburb_list__["a" /* SuburbListPage */], {
            param1: "Pretoria"
        });
    };
    MetroListPage.prototype.toPortElizabeth = function (metro) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__suburb_list_suburb_list__["a" /* SuburbListPage */], {
            param1: "PortElizabeth"
        });
    };
    MetroListPage.prototype.toBloemfontein = function (metro) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__suburb_list_suburb_list__["a" /* SuburbListPage */], {
            param1: "Bloemfontein"
        });
    };
    MetroListPage.prototype.toNelspruit = function (metro) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__suburb_list_suburb_list__["a" /* SuburbListPage */], {
            param1: "Nelspruit"
        });
    };
    MetroListPage.prototype.toKimberley = function (metro) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__suburb_list_suburb_list__["a" /* SuburbListPage */], {
            param1: "Kimberley"
        });
    };
    MetroListPage.prototype.toPolokwane = function (metro) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__suburb_list_suburb_list__["a" /* SuburbListPage */], {
            param1: "Polokwane"
        });
    };
    MetroListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-metro-list',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/metro-list/metro-list.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>Pick Your City</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-list>\n        <ion-item (click)="toJoburg(metro)">\n            <b>Johannesburg</b>\n        </ion-item>\n        <ion-item (click)="toCapeTown(metro)">\n            <b>Cape Town</b>\n        </ion-item>\n        <ion-item (click)="toDurban(metro)">\n            <b>Durban</b>\n        </ion-item>\n        <ion-item (click)="toPietermaritzburg(metro)">\n            <b>Pietermaritzburg</b>\n        </ion-item>\n        <ion-item (click)="toPretoria(metro)">\n            <b>Pretoria</b>\n        </ion-item>\n        <ion-item (click)="toPortElizabeth(metro)">\n            <b>Port-Elizabeth</b>\n        </ion-item>\n        <ion-item (click)="toBloemfontein(metro)">\n            <b>Bloemfontein</b>\n        </ion-item>\n        <ion-item (click)="toNelspruit(metro)">\n            <b>Nelspruit</b>\n        </ion-item>\n        <ion-item (click)="toKimberley(metro)">\n            <b>Kimberley</b>\n        </ion-item>\n        <ion-item (click)="toPolokwane(metro)">\n            <b>Polokwane</b>\n        </ion-item>\n    </ion-list>\n\n    <!-- <ion-card tappable >\n        <ion-card-header>\n            <h2>Johannesburg, Gauteng</h2>\n        </ion-card-header>\n    </ion-card>\n    <ion-card tappable (click)="toSuburbList(metro)">\n        <ion-card-header>\n            <h2>Cape Town, Western Cape</h2>\n        </ion-card-header>\n    </ion-card>\n    <ion-card tappable>\n        <ion-card-header>\n            <h2>Durban, KwaZulu-Natal</h2>\n        </ion-card-header>\n    </ion-card>\n    <ion-card tappable>\n        <ion-card-header>\n            <h2>Pretoria, Gauteng</h2>\n        </ion-card-header>\n    </ion-card>\n    <ion-card tappable>\n        <ion-card-header>\n            <h2>Port Elizabeth, Eastern Cape</h2>\n        </ion-card-header>\n    </ion-card>\n    <ion-card tappable>\n        <ion-card-header>\n            <h2>Bloemfontein, Free State</h2>\n        </ion-card-header>\n    </ion-card>\n    <ion-card tappable>\n        <ion-card-header>\n            <h2>Nelspruit, Mpumalanga</h2>\n        </ion-card-header>\n    </ion-card>\n    <ion-card tappable>\n        <ion-card-header>\n            <h2>Kimberley, Northern Cape</h2>\n        </ion-card-header>\n    </ion-card>\n    <ion-card tappable>\n        <ion-card-header>\n            <h2>Pietermaritzburg, KwaZulu-Natal</h2>\n        </ion-card-header>\n    </ion-card>\n    <ion-card tappable>\n        <ion-card-header>\n            <h2>Polokwane, Limpopo</h2>\n        </ion-card-header>\n    </ion-card> -->\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/metro-list/metro-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], MetroListPage);
    return MetroListPage;
}());

;
//List the metros here. You need them to reference them in the next page. 
//# sourceMappingURL=metro-list.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuburbListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__property_submission_property_submission__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SuburbListPage = (function () {
    // So this.metro is the correct thimg, but we need to access to child of it and use that data. hmmmmm.
    function SuburbListPage(navCtrl, navParams, AFdb, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AFdb = AFdb;
        this.formBuilder = formBuilder;
        // this.adminDB = this.AFdb.list('/Metros/CapeTown/');
        this.parameter1 = navParams.get('param1');
        console.log(this.parameter1);
        this.metro = this.navParams.data;
        this.adminDB = this.AFdb.list('/Metros/' + this.parameter1);
        this.suburbSubmissionForm = formBuilder.group({
            suburb: [''],
            metro: [this.parameter1]
        });
        console.log("Metro:::", this.parameter1);
        this.suburbRef = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('/Metros/' + this.parameter1 + '/').orderByChild('suburb'); //Inlcude dynamic metro here.
        this.suburbRef.on('value', function (suburbList) {
            var suburbs = [];
            suburbList.forEach(function (suburb) {
                var item = suburb.val();
                item.key = suburb.key;
                suburbs.push(item);
                return false;
            });
            _this.suburbList = suburbs;
            _this.loadedSuburbList = suburbs;
        });
    }
    SuburbListPage.prototype.initializeItems = function () {
        this.suburbList = this.loadedSuburbList;
    };
    SuburbListPage.prototype.getSuburbs = function (searchbar) {
        // Reset items back to all of the items
        this.initializeItems();
        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;
        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }
        this.suburbList = this.suburbList.filter(function (v) {
            if (v.suburb && q) {
                if (v.suburb.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
        console.log(q, this.suburbList.length);
    };
    SuburbListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SuburbListPage');
    };
    SuburbListPage.prototype.goToSubmitProperty = function (suburb) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__property_submission_property_submission__["a" /* PropertySubmissionPage */], suburb);
        console.log("Suburb:", suburb);
    }; //Include parameters here.
    SuburbListPage.prototype.suburbSubmit = function () {
        this.adminDB.push(this.suburbSubmissionForm.value);
    };
    ;
    SuburbListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-suburb-list',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/suburb-list/suburb-list.html"*/'<!--\n  Generated template for the SuburbListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Pick Suburb In {{parameter1}}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-searchbar (ionInput)="getSuburbs($event)"></ion-searchbar>\n    <ion-list>\n        <ion-item tappable no-lines *ngFor="let suburb of suburbList" detail-push>\n            <button ion-item detail-push (click)="goToSubmitProperty(suburb)">\n            <h2> {{ suburb.suburb }} </h2>\n            <p>{{ suburb.metro }}</p>\n            </button>\n            <hr>\n        </ion-item>\n\n    </ion-list>\n\n    <form [formGroup]="suburbSubmissionForm" (submit)="suburbSubmit()">\n        <ion-label><b><u>Suburb Name:</u></b></ion-label>\n        <ion-item no-lines>\n            <ion-label floating>Suburb Name:</ion-label>\n            <!-- <ion-input formControlName="suburb" type="text"></ion-input> -->\n            <ion-input formControlName="suburb" type="text"></ion-input>\n        </ion-item>\n        <button ion-button block type="submit">Submit Property For Review</button>\n    </form>\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/suburb-list/suburb-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], SuburbListPage);
    return SuburbListPage;
}());

;
//# sourceMappingURL=suburb-list.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.isValid = function (control) {
        var re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(control.value);
        if (re) {
            return null;
        }
        return {
            "invalidEmail": true
        };
    };
    return EmailValidator;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 203:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 203;

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		641,
		8
	],
	"../pages/main-buy-search/main-buy-search.module": [
		642,
		7
	],
	"../pages/main-rent-search/main-rent-search.module": [
		643,
		6
	],
	"../pages/metro-list/metro-list.module": [
		644,
		5
	],
	"../pages/profile/profile.module": [
		645,
		4
	],
	"../pages/property-submission/property-submission.module": [
		646,
		3
	],
	"../pages/reset-password/reset-password.module": [
		647,
		0
	],
	"../pages/suburb-detail/suburb-detail.module": [
		648,
		2
	],
	"../pages/suburb-list/suburb-list.module": [
		649,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 247;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, authData, afAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authData = authData;
        var authObserver = afAuth.authState.subscribe(function (user) {
            if (user) {
                console.log("auth");
                // this.navCtrl.setRoot(TabsPage);  
                authObserver.unsubscribe();
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                authObserver.unsubscribe();
            }
        });
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.logout = function () {
        this.authData.logoutUser();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        console.log("Logged Out!");
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Your Profile</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <button ion-button full (click)="logout()">Logout</button>\n\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AboutPage = (function () {
    function AboutPage(navCtrl, authData, afAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.authData = authData;
        var authObserver = afAuth.authState.subscribe(function (user) {
            if (user) {
                // this.navCtrl.setRoot(TabsPage);
                authObserver.unsubscribe();
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                authObserver.unsubscribe();
            }
        });
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__ = __webpack_require__(153);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataProvider = (function () {
    function DataProvider(db, afStorage) {
        this.db = db;
        this.afStorage = afStorage;
    }
    DataProvider.prototype.getFiles = function () {
        var ref = this.db.list('Admin/Images');
        return ref.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }; //Get the files from Firebase Storage - good for representing when you need it.
    DataProvider.prototype.uploadToStorage = function (information) {
        var newName = new Date().getTime() + ".jpg"; //Names the files.
        return this.afStorage.ref("files/" + newName).putString(information);
    }; //Upload the files.
    DataProvider.prototype.storeInfoToDatabase = function (metainfo) {
        var toSave = {
            created: metainfo.timeCreated,
            url: metainfo.downloadURLs[0],
            fullPath: metainfo.fullPath,
            contentType: metainfo.contentType
        };
        return this.db.list('Admin/Images').push(toSave);
    }; //Put's the uploaded info onto the database side.
    DataProvider.prototype.deleteFile = function (file) {
        var key = file.key;
        var storagePath = file.fullPath;
        var ref = this.db.list('files');
        ref.remove(key);
        return this.afStorage.ref(storagePath).delete();
    };
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__["a" /* AngularFireStorage */]])
    ], DataProvider);
    return DataProvider;
}()); //Deletes the file obviously.

//So now I need to do it with an image and not a text file.
/*

Here's the link to the tutorial: https://devdactic.com/store-files-firebase-storage-ionic/

But you could probably integrate it with this tutorial:

https://forum.ionicframework.com/t/ion-input-type-file-full-path/101790/8

And here's another option using ng-fileupload:

https://forum.ionicframework.com/t/pwa-approach-to-uploading-files/72805

Here is another HTML5 Option:

https://gist.github.com/MatiMenich/ac87ee097706bf61b831

And another option using File Transfer

The Data URI is what you need to get from the device.

*/ 
//# sourceMappingURL=data.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validators_email__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, authData, formBuilder, loadingCtrl, AFdb, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authData = authData;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.AFdb = AFdb;
        this.alertCtrl = alertCtrl;
        this.user = {};
        this.signupForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__validators_email__["a" /* EmailValidator */].isValid])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
        this.adminDB = this.AFdb.list('/users/');
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.signupUser = function (user) {
        var _this = this;
        var email = this.user.email;
        var pass = this.user.password;
        this.authData.signupUser(email, pass)
            .then(function (regUser) {
            console.log("Register succesfull ----> ", regUser);
            var userInfo = {
                date: __WEBPACK_IMPORTED_MODULE_7_firebase_app__["database"].ServerValue.TIMESTAMP,
                userID: regUser.uid,
                email: _this.user.email,
            }; //user info
            var updateUser = _this.AFdb.list('/users');
            updateUser.update(regUser.uid, userInfo).then(function () {
                _this.authData.loginUser(email, pass)
                    .then(function () {
                    console.log("Login succesfull");
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                });
            });
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/signup/signup.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>\n            Create an Account\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <form [formGroup]="signupForm" (submit)="signupUser()" novalidate>\n\n        <ion-item>\n            <ion-label stacked>Email</ion-label>\n            <ion-input formControlName="email" [(ngModel)]="user.email" type="email" placeholder="Your email address" [class.invalid]="!signupForm.controls.email.valid && signupForm.controls.email.dirty"></ion-input>\n        </ion-item>\n        <ion-item class="error-message" *ngIf="!signupForm.controls.email.valid  && signupForm.controls.email.dirty">\n            <p>Please enter a valid email.</p>\n        </ion-item>\n\n        <ion-item>\n            <ion-label stacked>Password</ion-label>\n            <ion-input formControlName="password" [(ngModel)]="user.password" type=" password " placeholder="Your password " [class.invalid]="!signupForm.controls.password.valid && signupForm.controls.password.dirty "></ion-input>\n        </ion-item>\n        <ion-item class="error-message " *ngIf="!signupForm.controls.password.valid && signupForm.controls.password.dirty ">\n            <p>Your password needs more than 6 characters.</p>\n        </ion-item>\n\n        <button ion-button block type="submit ">\n      Create an Account\n    </button>\n\n    </form>\n\n</ion-content>\n\n<!-- <ion-item>\n    <ion-input type="text " placeholder="Email Address " [(ngModel)]="user.email "></ion-input>\n</ion-item>\n\n<ion-item>\n    <ion-input type="password " placeholder="Password (Min 6 Characters) " [(ngModel)]="user.password "></ion-input>\n</ion-item>\n<br><br>\n<button ion-button (click)="register(user) ">Complete Registration</button>\n<ion-item>Having trouble?<br>Your Password must be<br>more than 6 characters</ion-item> -->'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SignupPage);
    return SignupPage;
}());

// Old Sign up Version that also worked but didn't add the information to the database.
//   signupUser() {
//     if (!this.signupForm.valid) {
//       console.log(this.signupForm.value);
//     } else {
//       this.authData.signupUser(this.signupForm.value.email, this.signupForm.value.password)
//       this.adminDB.push(this.signupForm.value)
//         .then(() => {
//           this.navCtrl.setRoot(HomePage);
//         }, (error) => {
//           this.loading.dismiss().then(() => {
//             var errorMessage: string = error.message;
//             let alert = this.alertCtrl.create({
//               message: errorMessage,
//               buttons: [
//                 {
//                   text: "Ok",
//                   role: 'cancel'
//                 }
//               ]
//             });
//             alert.present();
//           });
//         });
//       this.loading = this.loadingCtrl.create({
//         dismissOnPageChange: true,
//       });
//       this.loading.present();
//     }
//   } 
//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { HttpClient } from '@angular/common/http';


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = (function () {
    function AuthProvider(afAuth) {
        this.afAuth = afAuth;
    }
    AuthProvider.prototype.loginUser = function (newEmail, newPassword) {
        return this.afAuth.auth.signInWithEmailAndPassword(newEmail, newPassword);
    };
    AuthProvider.prototype.resetPassword = function (email) {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    };
    AuthProvider.prototype.logoutUser = function () {
        return this.afAuth.auth.signOut();
    };
    // signupUser(newEmail: string, newPassword: string): Promise<any> {
    //   return this.afAuth.auth.createUserWithEmailAndPassword(newEmail, newPassword);
    // }
    AuthProvider.prototype.signupUser = function (email, password) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuburbDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SuburbDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SuburbDetailPage = (function () {
    function SuburbDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SuburbDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SuburbDetailPage');
    };
    SuburbDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-suburb-detail',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/suburb-detail/suburb-detail.html"*/'<!--\n  Generated template for the SuburbDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>suburb-detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/suburb-detail/suburb-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SuburbDetailPage);
    return SuburbDetailPage;
}());

//# sourceMappingURL=suburb-detail.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(391);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_storage__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_main_buy_search_main_buy_search__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_main_rent_search_main_rent_search__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_property_submission_property_submission__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_metro_list_metro_list__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_suburb_list_suburb_list__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_suburb_detail_suburb_detail__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_file_chooser__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common_http__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_signup_signup__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_profile_profile__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_auth_auth__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_file_transfer__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_file__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_camera__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_in_app_browser__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__node_modules_ng2_file_upload__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__node_modules_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31__node_modules_ng2_file_upload__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































// import { FileSelectDirective, FileDropDirective, FileUploader, FileUploadModule } from '../../node_modules/ng2-file-upload';

var firebaseConfig = {
    apiKey: "AIzaSyBPIuf4cdQ1TIII2tJ0YmCbdcdH99JGkHc",
    authDomain: "premises-1bc9e.firebaseapp.com",
    databaseURL: "https://premises-1bc9e.firebaseio.com",
    projectId: "premises-1bc9e",
    storageBucket: "premises-1bc9e.appspot.com",
    messagingSenderId: "1059170929031"
};
var CameraMock = (function (_super) {
    __extends(CameraMock, _super);
    function CameraMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CameraMock.prototype.getPicture = function (options) {
        return new Promise(function (resolve, reject) {
            resolve("BASE_64_ENCODED_DATA_GOES_HERE");
        });
    };
    return CameraMock;
}(__WEBPACK_IMPORTED_MODULE_29__ionic_native_camera__["a" /* Camera */]));
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_main_buy_search_main_buy_search__["a" /* MainBuySearchPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_main_rent_search_main_rent_search__["a" /* MainRentSearchPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_property_submission_property_submission__["a" /* PropertySubmissionPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_metro_list_metro_list__["a" /* MetroListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_suburb_list_suburb_list__["a" /* SuburbListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_suburb_detail_suburb_detail__["a" /* SuburbDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main-buy-search/main-buy-search.module#MainBuySearchPageModule', name: 'MainBuySearchPage', segment: 'main-buy-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main-rent-search/main-rent-search.module#MainRentSearchPageModule', name: 'MainRentSearchPage', segment: 'main-rent-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/metro-list/metro-list.module#MetroListPageModule', name: 'MetroListPage', segment: 'metro-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/property-submission/property-submission.module#PropertySubmissionPageModule', name: 'PropertySubmissionPage', segment: 'property-submission', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-password/reset-password.module#ResetPasswordPageModule', name: 'ResetPasswordPage', segment: 'reset-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/suburb-detail/suburb-detail.module#SuburbDetailPageModule', name: 'SuburbDetailPage', segment: 'suburb-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/suburb-list/suburb-list.module#SuburbListPageModule', name: 'SuburbListPage', segment: 'suburb-list', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_22_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_23_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_storage__["b" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_31__node_modules_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_18__angular_common_http__["b" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_main_buy_search_main_buy_search__["a" /* MainBuySearchPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_main_rent_search_main_rent_search__["a" /* MainRentSearchPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_property_submission_property_submission__["a" /* PropertySubmissionPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_metro_list_metro_list__["a" /* MetroListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_suburb_list_suburb_list__["a" /* SuburbListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_suburb_detail_suburb_detail__["a" /* SuburbDetailPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_26__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_6__providers_data__["a" /* DataProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validators_email__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact__ = __webpack_require__(337);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, authData, formBuilder, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authData = authData;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.loginForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_5__validators_email__["a" /* EmailValidator */].isValid])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.goToResetPassword = function () {
        this.navCtrl.push('ResetPasswordPage');
    };
    LoginPage.prototype.createAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.goToContactPAge = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__contact_contact__["a" /* ContactPage */]);
    };
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        if (!this.loginForm.valid) {
            console.log(this.loginForm.value);
        }
        else {
            this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password)
                .then(function (authData) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
                        message: error.message,
                        buttons: [
                            {
                                text: "Ok",
                                role: 'cancel'
                            }
                        ]
                    });
                    alert.present();
                });
            });
            this.loading = this.loadingCtrl.create({
                dismissOnPageChange: true,
            });
            this.loading.present();
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/login/login.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>\n            Login\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <form [formGroup]="loginForm" (submit)="loginUser()" novalidate>\n\n        <ion-item>\n            <ion-label stacked>Email</ion-label>\n            <ion-input #email formControlName="email" type="email" placeholder="Your email address" [class.invalid]="!loginForm.controls.email.valid &&\n          loginForm.controls.email.dirty"></ion-input>\n        </ion-item>\n        <ion-item class="error-message" *ngIf="!loginForm.controls.email.valid  &&\n      loginForm.controls.email.dirty">\n            <p>Please enter a valid email.</p>\n        </ion-item>\n\n        <ion-item>\n            <ion-label stacked>Password</ion-label>\n            <ion-input #password formControlName="password" type="password" placeholder="Your password" [class.invalid]="!loginForm.controls.password.valid &&\n          loginForm.controls.password.dirty"></ion-input>\n        </ion-item>\n        <ion-item class="error-message" *ngIf="!loginForm.controls.password.valid  &&\n      loginForm.controls.password.dirty">\n            <p>Your password needs more than 6 characters.</p>\n        </ion-item>\n\n        <button ion-button block type="submit">\n      Login\n    </button>\n\n    </form>\n\n    <button ion-button block clear (click)="createAccount()">\n    Register Account\n  </button>\n\n    <button ion-button block clear (click)="goToResetPassword()">\n    Forgot Password?\n  </button>\n\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, afAuth) {
        var _this = this;
        var authObserver = afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
                authObserver.unsubscribe();
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
                authObserver.unsubscribe();
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[383]);
//# sourceMappingURL=main.js.map