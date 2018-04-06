webpackJsonp([16],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewSubmissionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__review_property_details_review_property_details__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReviewSubmissionsPage = (function () {
    function ReviewSubmissionsPage(navCtrl, navParams, AFdb) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AFdb = AFdb;
        this.submittedRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/Admin/SubmittedProperties');
        this.submittedRef.on('value', function (submittedList) {
            var properties = [];
            submittedList.forEach(function (property) {
                var item = property.val();
                item.key = property.key;
                properties.push(item);
                return false;
            });
            _this.submittedList = properties;
            _this.loadedSubmittedList = properties;
            console.log("done loading");
        });
    }
    ReviewSubmissionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReviewSubmissionsPage');
    };
    ReviewSubmissionsPage.prototype.toReviewDetails = function (property) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__review_property_details_review_property_details__["a" /* ReviewPropertyDetailsPage */], property);
    };
    ReviewSubmissionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-review-submissions',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/review-submissions/review-submissions.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>Review Submissions</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <u><h2>Properties For Sale:</h2></u>\n    <ion-list *ngFor="let property of submittedList">\n        <ion-item *ngIf="property.rental == \'false\'" tappable (click)="toReviewDetails(property)">\n            <b>Listing: </b>{{property.premisesType}}. {{property.otherProperty}}<br> <b>Location: </b>{{property.suburb1}}, {{property.city}}\n            <hr>\n        </ion-item>\n    </ion-list>\n    <u><h2>Properties To Rent:</h2></u>\n    <ion-list *ngFor="let property of submittedList">\n        <ion-item *ngIf="property.rental == \'true\'" tappable (click)="toReviewDetails(property)">\n            <b>Listing: </b>{{property.premisesType}}. {{property.otherProperty}}<br> <b>Location: </b>{{property.suburb1}}, {{property.city}}\n            <hr>\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/review-submissions/review-submissions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ReviewSubmissionsPage);
    return ReviewSubmissionsPage;
}());

//# sourceMappingURL=review-submissions.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertySubmissionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_storage__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_data__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__confirmation_confirmation__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















// import { FileSelectDirective, FileDropDirective, FileUploader } from '../../../node_modules/ng2-fileupload';
// import { FileSelectDirective } from '../../../node_modules/ng2-fileupload';
// import { FileUploader } from '../../../node_modules/ng2-file-upload';
//This page is for the submission of properties that are being sold, not rented.
var PropertySubmissionPage = (function () {
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
        this.dateTime = __WEBPACK_IMPORTED_MODULE_11_moment__().format();
        this.selectedFile = [];
        // selectedFile2 = File = null;
        this.selectedFile2 = [];
        this.selectedFile3 = [];
        this.selectedFile4 = [];
        this.selectedFile5 = [];
        this.selectedFile6 = [];
        this.vatOptioned = true;
        this.tenantOption = true;
        this.rentPurchaseOption = true;
        this.rentVatOptioned = false;
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
            _this.suburb = _this.navParams.data;
            _this.property = _this.navParams.data;
        });
        var ref = this.afStorage.ref('/resized-021.jpg'); //This gets the download URL.
        this.profileUrl = ref.getDownloadURL();
        console.log(ref.getDownloadURL());
        this.adminDB = this.AFdb.list('/Admin/SubmittedProperties/'); //This needs to be the Admin Dashboard!
        //From there you need to push it into it's correct place, and be able to edit/approve/reject it from the admin dashboard.
        this.adminDB2 = this.AFdb.list('/Metros/Durban/'); //!!!!!!!!!Change it here.
        this.suburbSubmissionForm = formBuilder.group({
            suburb: [],
            metro: ['Durban'],
        });
        this.propertySubmissionForm = formBuilder.group({
            fullName: [],
            userEmail: [],
            contactNumber: [],
            agencyName: [],
            premisesType: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required],
            otherProperty: [],
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
            truckAccess: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required],
            power: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required],
            amperage: [],
            // overheads: [''],
            rates: [],
            levy: [],
            serviceCosts: [],
            otherOverheads: [],
            sellingPrice: [],
            VAT: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required],
            thirdParty: [],
            description: [],
            imageUplaod: [],
            holding: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required],
            otherHolding: [],
            suburbKey: [],
            dateTime: [this.dateTime],
            rental: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required],
            rentalPrice: [],
            pricePerBay: [],
            ownerVatNumber: [],
            escalation: [],
            minLeaseTerm: [],
            maxLeaseTerm: [],
            img1: [this.selectedFile.name, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required],
            img2: [this.selectedFile2.name, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required],
            img3: [this.selectedFile3.name, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required],
            img4: [this.selectedFile4.name, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required],
            img5: [this.selectedFile5.name, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required],
            img6: [this.selectedFile6.name, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required],
        });
    }
    PropertySubmissionPage.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
        console.log("Here's the file name:", this.selectedFile.name);
        console.log("Here's the details:", this.selectedFile);
        //console.log(event);
    };
    PropertySubmissionPage.prototype.onFileSelected2 = function (event) {
        this.selectedFile2 = event.target.files[0];
        console.log("Here's the file name:", this.selectedFile2.name);
        //console.log(event);
    };
    PropertySubmissionPage.prototype.onFileSelected3 = function (event) {
        this.selectedFile3 = event.target.files[0];
        console.log("Here's the file name:", this.selectedFile3.name);
        //console.log(event);
    };
    PropertySubmissionPage.prototype.onFileSelected4 = function (event) {
        this.selectedFile4 = event.target.files[0];
        console.log("Here's the file name:", this.selectedFile4.name);
        //console.log(event);
    };
    PropertySubmissionPage.prototype.onFileSelected5 = function (event) {
        this.selectedFile5 = event.target.files[0];
        console.log("Here's the file name:", this.selectedFile5.name);
        //console.log(event);
    };
    PropertySubmissionPage.prototype.onFileSelected6 = function (event) {
        this.selectedFile6 = event.target.files[0];
        console.log("Here's the file name:", this.selectedFile6.name);
        //console.log(event);
    };
    PropertySubmissionPage.prototype.onUpload = function () {
        var fd = new FormData();
        fd.append('image', this.selectedFile, this.selectedFile.name);
        this.http.post('https://us-central1-premises-1bc9e.cloudfunctions.net/uploadFile', fd, {
            reportProgress: true,
            observe: 'events'
        })
            .subscribe(function (event) {
            if (event.type === __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["c" /* HttpEventType */].UploadProgress) {
                console.log('Upload Progress:' + Math.round(event.loaded / event.total * 100) + '%');
            }
            else if (event.type === __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["c" /* HttpEventType */].Response) {
                console.log(event);
            }
        });
    };
    PropertySubmissionPage.prototype.onUpload2 = function () {
        var fd = new FormData();
        fd.append('image', this.selectedFile2, this.selectedFile2.name);
        this.http.post('https://us-central1-premises-1bc9e.cloudfunctions.net/uploadFile', fd, {
            reportProgress: true,
            observe: 'events'
        })
            .subscribe(function (event) {
            if (event.type === __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["c" /* HttpEventType */].UploadProgress) {
                console.log('Upload Progress:' + Math.round(event.loaded / event.total * 100) + '%');
            }
            else if (event.type === __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["c" /* HttpEventType */].Response) {
                console.log(event);
            }
        });
    };
    PropertySubmissionPage.prototype.onUpload3 = function () {
        var fd = new FormData();
        fd.append('image', this.selectedFile3, this.selectedFile3.name);
        this.http.post('https://us-central1-premises-1bc9e.cloudfunctions.net/uploadFile', fd, {
            reportProgress: true,
            observe: 'events'
        })
            .subscribe(function (event) {
            if (event.type === __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["c" /* HttpEventType */].UploadProgress) {
                console.log('Upload Progress:' + Math.round(event.loaded / event.total * 100) + '%');
            }
            else if (event.type === __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["c" /* HttpEventType */].Response) {
                console.log(event);
            }
        });
    };
    PropertySubmissionPage.prototype.onUpload4 = function () {
        var fd = new FormData();
        fd.append('image', this.selectedFile4, this.selectedFile4.name);
        this.http.post('https://us-central1-premises-1bc9e.cloudfunctions.net/uploadFile', fd, {
            reportProgress: true,
            observe: 'events'
        })
            .subscribe(function (event) {
            if (event.type === __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["c" /* HttpEventType */].UploadProgress) {
                console.log('Upload Progress:' + Math.round(event.loaded / event.total * 100) + '%');
            }
            else if (event.type === __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["c" /* HttpEventType */].Response) {
                console.log(event);
            }
        });
    };
    PropertySubmissionPage.prototype.onUpload5 = function () {
        var fd = new FormData();
        fd.append('image', this.selectedFile5, this.selectedFile5.name);
        this.http.post('https://us-central1-premises-1bc9e.cloudfunctions.net/uploadFile', fd, {
            reportProgress: true,
            observe: 'events'
        })
            .subscribe(function (event) {
            if (event.type === __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["c" /* HttpEventType */].UploadProgress) {
                console.log('Upload Progress:' + Math.round(event.loaded / event.total * 100) + '%');
            }
            else if (event.type === __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["c" /* HttpEventType */].Response) {
                console.log(event);
            }
        });
    };
    PropertySubmissionPage.prototype.onUpload6 = function () {
        var fd = new FormData();
        fd.append('image', this.selectedFile6, this.selectedFile6.name);
        this.http.post('https://us-central1-premises-1bc9e.cloudfunctions.net/uploadFile', fd, {
            reportProgress: true,
            observe: 'events'
        })
            .subscribe(function (event) {
            if (event.type === __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["c" /* HttpEventType */].UploadProgress) {
                console.log('Upload Progress:' + Math.round(event.loaded / event.total * 100) + '%');
            }
            else if (event.type === __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["c" /* HttpEventType */].Response) {
                console.log(event);
            }
        });
    };
    PropertySubmissionPage.prototype.submitProperty = function () {
        this.propertySubmissionForm.markAsDirty();
        this.adminDB.push(this.propertySubmissionForm.value);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__confirmation_confirmation__["a" /* ConfirmationPage */]);
    };
    ;
    PropertySubmissionPage.prototype.submitSuburb = function () {
        this.adminDB2.push(this.suburbSubmissionForm.value);
    };
    ;
    PropertySubmissionPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Property Was Submitted Succesfully',
            duration: 5000,
            position: 'middle'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PropertySubmissionPage.prototype.vatOption = function (vatOption) {
        console.log("vatOption = ", vatOption);
    };
    PropertySubmissionPage.prototype.vatToggle1 = function () {
        this.vatOptioned = true;
    };
    PropertySubmissionPage.prototype.vatToggle2 = function () {
        this.vatOptioned = false;
    };
    PropertySubmissionPage.prototype.rentVatToggle1 = function () {
        this.rentVatOptioned = true;
    };
    PropertySubmissionPage.prototype.rentVatToggle2 = function () {
        this.rentVatOptioned = false;
    };
    PropertySubmissionPage.prototype.tenantToggle1 = function () {
        this.tenantOption = true;
    };
    PropertySubmissionPage.prototype.tenantToggle2 = function () {
        this.tenantOption = false;
    };
    PropertySubmissionPage.prototype.rentPurchaseToggle1 = function () {
        this.rentPurchaseOption = true;
    }; //This is to assign all the rental fields
    PropertySubmissionPage.prototype.rentPurchaseToggle2 = function () {
        this.rentPurchaseOption = false;
    }; //This is to assign all the purchase fields
    PropertySubmissionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-property-submission',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/property-submission/property-submission.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>Submit Your Property</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n\n    <h2>Cape Town</h2>\n\n    <form [formGroup]="suburbSubmissionForm" (submit)="submitSuburb()">\n        <ion-item no-lines>\n            <ion-label floating>Suburb Name:</ion-label>\n            <ion-input type="text" formControlName="suburb"></ion-input>\n        </ion-item>\n        <button ion-button type="submit">Submit</button>\n    </form>\n\n\n    <p>Currently submitting a property in <b>{{ suburb.suburb }}, {{ suburb.metro }}.</b></p>\n    <hr>\n    <form [formGroup]="propertySubmissionForm" (submit)="submitProperty()">\n        <!-- <ion-item no-lines>\n            <ion-label floating>Full Name:</ion-label>\n            <ion-input formControlName="suburb" type="text"></ion-input>\n        </ion-item> -->\n        <!--pick if selling propety or seeking tennant-->\n        <ion-list radio-group formControlName="rental">\n            <ion-label><b><u>Listing Type:</u></b></ion-label>\n            <ion-item no-lines>\n                <ion-label>I need to find a tenant</ion-label>\n                <ion-radio item-left type="radio" value=true (click)="rentPurchaseToggle1()"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>I want to sell a property</ion-label>\n                <ion-radio item-left type="radio" value=false (click)="rentPurchaseToggle2()"></ion-radio>\n            </ion-item>\n        </ion-list>\n        <hr>\n        <!--Hidden HTML info to be submitted-->\n        <ion-item hidden no-lines>\n            <ion-label floating>Date of Submission:</ion-label>\n            <ion-input displayFormat="DD/MM/YYYY" value="{{ dateTime }}" formControlName="dateTime"></ion-input>\n        </ion-item>\n        <ion-item hidden no-lines>\n            <ion-label floating>Email Address:</ion-label>\n            <ion-input formControlName="userEmail" type="text" value="{{(profile | async)?.email}}">{{(profile | async)?.email}}</ion-input>\n        </ion-item>\n        <ion-item hidden no-lines>\n            <ion-label floating>Area Key For Submission Purposes:</ion-label>\n            <ion-input formControlName="suburbKey" type="text" value="{{ suburb.key }}">{{ suburb.key }}</ion-input>\n        </ion-item>\n        <!-- Personal details-->\n        <ion-label><b><u>Personal Details:</u></b></ion-label>\n        <ion-item no-lines>\n            <ion-label floating>Full Name:</ion-label>\n            <ion-input formControlName="fullName" type="text"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Contact Number:</ion-label>\n            <ion-input formControlName="contactNumber" type="number" value="{{ contactNumber }}"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Agency Name:</ion-label>\n            <ion-input formControlName="agencyName" type="text"></ion-input>\n        </ion-item>\n        <hr>\n        <!--Details of property-->\n        <ion-list radio-group formControlName="premisesType">\n            <ion-label><b><u>Premises Type:</u></b></ion-label>\n            <ion-item no-lines>\n                <ion-label>Mini factory up to 500sqm</ion-label>\n                <ion-radio item-left type="radio" value="Mini factory up to 500sqm"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>A Factory/Warehouse over 500sqm</ion-label>\n                <ion-radio item-left type="radio" value="A factory/warehouse over 500 sqm"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Offices</ion-label>\n                <ion-radio item-left type="radio" value="Offices"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Retail</ion-label>\n                <ion-radio item-left type="radio" value="Retail"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>A mixed use building</ion-label>\n                <ion-radio item-left type="radio" value="A mixed use building"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>A stand alone house to be used as offices</ion-label>\n                <ion-radio item-left type="radio" value="A stand alone house to be used as offices"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Other</ion-label>\n                <ion-radio item-left type="radio" value="Other"></ion-radio>\n            </ion-item>\n            <ion-input formControlName="otherProperty" type="text" placeholder="Description of property if other."></ion-input>\n        </ion-list>\n        <hr>\n        <!--Holding Type-->\n        <ion-list radio-group formControlName="holding">\n            <ion-label><b><u>Holding:</u></b></ion-label>\n            <ion-item no-lines>\n                <ion-label>Freehold</ion-label>\n                <ion-radio item-left type="radio" value="Freehold"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Sectional Title</ion-label>\n                <ion-radio item-left type="radio" value="Sectional Title"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Other</ion-label>\n                <ion-radio item-left type="radio" value="Other"></ion-radio>\n            </ion-item>\n            <ion-input formControlName="otherHolding" type="text" placeholder="Description of holding if other."></ion-input>\n        </ion-list>\n        <hr>\n        <!--Property Physical Address-->\n        <ion-item no-lines>\n            <ion-label><u>Property Address:</u></ion-label>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Unit Number:</ion-label>\n            <ion-input formControlName="unitNumber" type="text"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Complex Name:</ion-label>\n            <ion-input formControlName="complexName" type="text"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Street Number:</ion-label>\n            <ion-input formControlName="streetNumber" type="text"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Street Name:</ion-label>\n            <ion-input formControlName="streetName" type="text"></ion-input>\n        </ion-item>\n        <ion-item hidden no-lines>\n            <ion-label floating>Suburb/Town:</ion-label>\n            <ion-input hidden formControlName="suburb1" type="text" value=" {{suburb.suburb}}">{{ suburb.suburb }}</ion-input>\n        </ion-item>\n        <ion-item hidden no-lines>\n            <ion-label floating>City:</ion-label>\n            <ion-input formControlName="city" type="text" value="{{ suburb.metro }}">{{ suburb.metro }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Postal Code:</ion-label>\n            <ion-input formControlName="postalCode" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>ERF Number:</ion-label>\n            <ion-input formControlName="erf" type="text"></ion-input>\n        </ion-item>\n        <hr>\n        <!--Property Sizes fields for Purchase-->\n        <ion-item no-lines *ngIf="rentPurchaseOption == false">\n            <ion-label><u>Property Sizes:</u></ion-label>\n        </ion-item>\n        <ion-item no-lines *ngIf="rentPurchaseOption == true">\n            <ion-label><u>Lettable Space:</u></ion-label>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Factory/Warehouse Size (sqm):</ion-label>\n            <ion-input formControlName="factorySize" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Office Size (sqm):</ion-label>\n            <ion-input formControlName="officeSize" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Total Factory and Office Size (sqm):</ion-label>\n            <ion-input formControlName="totalSize" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Shop Size (sqm) (If Retail):</ion-label>\n            <ion-input formControlName="shopSize" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Undercover Parking (Bays):</ion-label>\n            <ion-input formControlName="underCoverParking" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Open Parking (Bays):</ion-label>\n            <ion-input formControlName="openParking" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Usable Yard (sqm):</ion-label>\n            <ion-input formControlName="usableYard" type="number"></ion-input>\n        </ion-item>\n        <!-- Below only present if sale selected-->\n        <ion-item no-lines *ngIf="rentPurchaseOption == false">\n            <ion-label floating>Size of ERF (sqm) (If Freehold):</ion-label>\n            <ion-input formControlName="sizeOfERF" type="number"></ion-input>\n        </ion-item>\n        <hr>\n        <ion-item no-lines>\n            <ion-label><u>Heights:</u></ion-label>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Floor to Roof in Factory/Warehouse (m):</ion-label>\n            <ion-input formControlName="floorToCeilingHeights" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Height of Acccess Door (Roller Shutter) (m):</ion-label>\n            <ion-input formControlName="accessDoorHeights" type="number"></ion-input>\n        </ion-item>\n        <hr>\n        <ion-item no-lines>\n            <ion-label><u>Truck Access:</u></ion-label>\n        </ion-item>\n        <ion-list radio-group formControlName="truckAccess">\n            <ion-item no-lines>\n                <ion-label>Rigid Trucks Can Be Offloaded at the premises</ion-label>\n                <ion-radio item-left type="radio" value="Rigid Trucks Only"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Semi Trailers Can Be Offloaded at the premises</ion-label>\n                <ion-radio item-left type="radio" value="Up To Semi Trucks"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Interlinks Can Be Offloaded at the premises</ion-label>\n                <ion-radio item-left type="radio" value="Up To Interlinks"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>None of the above applies.</ion-label>\n                <ion-radio item-left type="radio" value="No Truck Can Be Offloaded"></ion-radio>\n            </ion-item>\n        </ion-list>\n        <hr>\n        <ion-item no-lines>\n            <ion-label><u>Power:</u></ion-label>\n        </ion-item>\n        <ion-list radio-group formControlName="power">\n            <ion-item no-lines>\n                <ion-label>Single Phase</ion-label>\n                <ion-radio item-left type="radio" value="Single Phase"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Three Phase</ion-label>\n                <ion-radio item-left type="radio" value="Three Phase"></ion-radio>\n            </ion-item>\n        </ion-list>\n        <ion-item no-lines>\n            <ion-label floating>Amperage:</ion-label>\n            <ion-input formControlName="amperage" type="number"></ion-input>\n        </ion-item>\n        <p>Please check your circuit breaker for the amperage.</p>\n        <hr>\n        <ion-item no-lines>\n            <ion-label><u>Cost:</u></ion-label>\n        </ion-item>\n        <!-- Selling price if sale, rental fields if looking for tenant-->\n        <ion-item no-lines *ngIf="rentPurchaseOption == false">\n            <ion-label floating>Selling Price (ZAR):</ion-label>\n            <ion-input formControlName="sellingPrice" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines *ngIf="rentPurchaseOption == true">\n            <ion-label floating>Rental Price (ZAR):</ion-label>\n            <ion-input formControlName="rentalPrice" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines *ngIf="rentPurchaseOption == true">\n            <ion-label floating>Price Per Parking Bay (ZAR):</ion-label>\n            <ion-input formControlName="pricePerBay" type="number"></ion-input>\n        </ion-item>\n        <hr>\n        <!--If purchase option, Overheads label, if rental, Additonal costs label-->\n        <ion-item no-lines *ngIf="rentPurchaseOption == false">\n            <ion-label><u>Overheads:</u></ion-label>\n        </ion-item>\n        <ion-item no-lines *ngIf="rentPurchaseOption == true">\n            <ion-label><u>Additional Costs:</u></ion-label>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Rates (ZAR):</ion-label>\n            <ion-input formControlName="rates" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Levy (ZAR):</ion-label>\n            <ion-input formControlName="levy" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Contribution to Service Costs (ZAR):</ion-label>\n            <ion-input formControlName="serviceCosts" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Other Overheads:</ion-label>\n            <ion-input formControlName="otherOverheads" type="text"></ion-input>\n        </ion-item>\n        <hr>\n        <ion-item no-lines>\n            <ion-label><u>Is The of Owner of the Property a VAT Vendor?</u></ion-label>\n        </ion-item>\n        <ion-list radio-group formControlName="VAT">\n            <!--VAT options for the sale situation-->\n            <ion-item no-lines *ngIf="rentPurchaseOption == false">\n                <ion-label>Yes</ion-label>\n                <ion-radio item-left type="radio" value="Owner Is A VAT Vendor" (click)="vatToggle1()"></ion-radio>\n            </ion-item>\n            <ion-item no-lines *ngIf="rentPurchaseOption == false">\n                <ion-label>No</ion-label>\n                <ion-radio item-left type="radio" value="Owner Is Not A VAT Vendor" (click)="vatToggle2()"></ion-radio>\n            </ion-item>\n            <ion-item no-lines *ngIf="vatOptioned == false">\n                <p>Transfer Duty Applies</p>\n            </ion-item>\n            <!--VAT options for the rental situation-->\n            <ion-item no-lines *ngIf="rentPurchaseOption == true">\n                <ion-label>Yes</ion-label>\n                <ion-radio item-left type="radio" value="Owner Is A VAT Vendor" (click)="rentVatToggle1()"></ion-radio>\n            </ion-item>\n            <ion-item no-lines *ngIf="rentPurchaseOption == true">\n                <ion-label>No</ion-label>\n                <ion-radio item-left type="radio" value="Owner Is A Not VAT Vendor" (click)="rentVatToggle2()"></ion-radio>\n            </ion-item>\n            <ion-item no-lines *ngIf="rentVatOptioned == true">\n                <ion-label floating>Owner VAT Number:</ion-label>\n                <ion-input formControlName="ownerVatNumber" type="text"></ion-input>\n            </ion-item>\n        </ion-list>\n        <!-- Third Party Tenant Options-->\n        <ion-list radio-group formControlName="thirdParty" *ngIf="rentPurchaseOption == false">\n            <ion-item no-lines>\n                <ion-label><u>Are The Presmises Tenanted By A Third Party?</u></ion-label>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Yes</ion-label>\n                <ion-radio item-left type="radio" value="Third Party Tenant" (click)="tenantToggle1()"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>No</ion-label>\n                <ion-radio item-left type="radio" value="No Third Party Tenant" (click)="tenantToggle2()"></ion-radio>\n            </ion-item>\n            <ion-item no-lines *ngIf="tenantOption == false">\n                <p>Transaction Cannot Be Zero Rated</p>\n            </ion-item>\n        </ion-list>\n        <!-- Lease Terms - Letting Only-->\n        <ion-item no-lines *ngIf="rentPurchaseOption == true">\n            <ion-label><u>Lease Terms</u></ion-label>\n        </ion-item>\n        <ion-item no-lines *ngIf="rentPurchaseOption == true">\n            <ion-label floating>% Annual Escalation in Rent:</ion-label>\n            <ion-input formControlName="escalation" type="text"></ion-input>\n        </ion-item>\n        <ion-item no-lines *ngIf="rentPurchaseOption == true">\n            <ion-label floating>Minimum Term Of Lease:</ion-label>\n            <ion-input formControlName="minLeaseTerm" type="text"></ion-input>\n        </ion-item>\n        <ion-item no-lines *ngIf="rentPurchaseOption == true">\n            <ion-label floating>Maximum Term Of Lease:</ion-label>\n            <ion-input formControlName="maxLeaseTerm" type="text"></ion-input>\n        </ion-item>\n        <!--Property Description-->\n        <hr>\n        <ion-item no-lines>\n            <ion-label><u>Property Description:</u></ion-label>\n        </ion-item>\n        <ion-textarea formControlName="description" placeholder="Describe the property here:"></ion-textarea>\n        <hr>\n        <!-- File Upload-->\n        <h1>Image Upload</h1>\n        <ion-label color="danger">You need to upload exactly 6 images.</ion-label>\n        <ion-item>\n            <label>Image 1 (This will be your cover image)</label><br><br>\n            <input type="file" (change)="onFileSelected($event)" />\n        </ion-item>\n\n        <ion-item hidden>\n            <ion-input type="text" formControlName="img1" value="{{ this.selectedFile.name }}"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <label>Image 2</label><br><br>\n            <input type="file" (change)="onFileSelected2($event)" />\n        </ion-item>\n\n        <ion-item hidden>\n            <ion-input type="text" formControlName="img2" value="{{ this.selectedFile2.name }}"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <label>Image 3</label><br><br>\n            <input type="file" (change)="onFileSelected3($event)" />\n        </ion-item>\n\n        <ion-item hidden>\n            <ion-input type="text" formControlName="img3" value="{{ this.selectedFile3.name }}"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <label>Image 4</label><br><br>\n            <input type="file" (change)="onFileSelected4($event)" />\n        </ion-item>\n\n        <ion-item hidden>\n            <ion-input type="text" formControlName="img4" value="{{ this.selectedFile4.name }}"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <label>Image 5</label><br><br>\n            <input type="file" (change)="onFileSelected5($event)" />\n        </ion-item>\n\n        <ion-item hidden>\n            <ion-input type="text" formControlName="img5" value="{{ this.selectedFile5.name }}"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <label>Image 6</label><br><br>\n            <input type="file" (change)="onFileSelected6($event)" />\n        </ion-item>\n\n        <ion-item hidden>\n            <ion-input type="text" formControlName="img6" value="{{ this.selectedFile6.name }}"></ion-input>\n        </ion-item>\n\n        <!-- <button ion-button block type="button" (click)="onUpload()" (click)="onUpload2()">Upload</button> -->\n        <!-- End of file upload -->\n        <ion-label *ngIf="!propertySubmissionForm.valid" color="danger">Please complete all the fields before submitting the form.</ion-label>\n        <button ion-button block type="submit" [disabled]="!propertySubmissionForm.valid" (click)="presentToast()" (click)="onUpload()" (click)="onUpload2()" (click)="onUpload3()" (click)="onUpload4()" (click)="onUpload5()" (click)="onUpload6()">Submit Property For Review</button>\n    </form>\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/property-submission/property-submission.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_storage__["a" /* AngularFireStorage */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClient */]])
    ], PropertySubmissionPage);
    return PropertySubmissionPage;
}());

//# sourceMappingURL=property-submission.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_profile__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(81);
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

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
            selector: 'page-contact',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/contact/contact.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Contact\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-item>\n        <ion-icon name="call" item-start></ion-icon>\n        Call Us on: 087 822 1102 </ion-item>\n    <ion-item>\n        <ion-icon name="mail" item-start></ion-icon>\n        Email Us: Contact@GetPremises.co.za </ion-item>\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminEnquiriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
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
 * Generated class for the AdminEnquiriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminEnquiriesPage = (function () {
    function AdminEnquiriesPage(navCtrl, navParams, AFdb, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AFdb = AFdb;
        this.alertCtrl = alertCtrl;
        this.submittedRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/Admin/Enquiries');
        this.submittedRef.on('value', function (submittedList) {
            var properties = [];
            submittedList.forEach(function (property) {
                var item = property.val();
                item.key = property.key;
                properties.push(item);
                return false;
            });
            _this.submittedList = properties;
            _this.loadedSubmittedList = properties;
            console.log("done loading");
        });
    }
    AdminEnquiriesPage.prototype.delete = function (property) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Really Delete?',
            message: 'You cannot recover this query after deleting.',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.AFdb.list("/Admin/Enquiries/" + property.key).remove();
                    }
                }
            ]
        });
        confirm.present();
    };
    AdminEnquiriesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminEnquiriesPage');
    };
    AdminEnquiriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-admin-enquiries',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/admin-enquiries/admin-enquiries.html"*/'<!--\n  Generated template for the AdminEnquiriesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Admin Enquiries</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <u><h2>Queries For Purchase</h2></u>\n    <ion-list *ngFor="let property of submittedList">\n        <ion-card *ngIf="property.rental == \'false\'">\n            <ion-card-header>\n                <b>Full Name:</b> {{property.fullName}}<br>\n                <b>Email:</b> {{property.userEmail}}<br>\n                <b>Contact Number:</b> {{property.contactNumber}}<br>\n            </ion-card-header>\n            <hr>\n            <ion-card-content> <b>Premises Type:</b> {{property.premisesType }}<br>\n                <b>Unit Number:</b> {{property.unitNumber}}<br>\n                <b>Complex Name:</b> {{property.streetNumber}}<br>\n                <b>Street Name:</b> {{property.streetName}}<br>\n                <b>Suburb:</b> {{property.suburb1}}<br>\n                <b>City:</b> {{property.city}}<br>\n                <b>Postal Code:</b> {{property.postalCode}}<br>\n                <b>Erf Number</b> {{property.erf}}<br>\n                <b>Date & Time:</b> {{property.dateTime}}<br>\n            </ion-card-content>\n            <hr>\n            <ion-card-content>\n                <button ion-button (click)="delete(property)">Delete Query</button>\n            </ion-card-content>\n        </ion-card>\n    </ion-list>\n    <u><h2>Queries For Rental</h2></u>\n    <ion-list *ngFor="let property of submittedList">\n        <ion-card *ngIf="property.rental == \'true\'">\n            <ion-card-header>\n                <b>Full Name:</b> {{property.fullName}}<br>\n                <b>Email:</b> {{property.userEmail}}<br>\n                <b>Contact Number:</b> {{property.contactNumber}}<br>\n            </ion-card-header>\n            <hr>\n            <ion-card-content> <b>Premises Type:</b> {{property.premisesType }}<br>\n                <b>Unit Number:</b> {{property.unitNumber}}<br>\n                <b>Complex Name:</b> {{property.streetNumber}}<br>\n                <b>Street Name:</b> {{property.streetName}}<br>\n                <b>Suburb:</b> {{property.suburb1}}<br>\n                <b>City:</b> {{property.city}}<br>\n                <b>Postal Code:</b> {{property.postalCode}}<br>\n                <b>Erf Number</b> {{property.erf}}<br>\n                <b>Date & Time:</b> {{property.dateTime}}<br>\n            </ion-card-content>\n            <hr>\n            <ion-card-content>\n                <button ion-button (click)="delete(property)">Delete Query</button>\n            </ion-card-content>\n        </ion-card>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/admin-enquiries/admin-enquiries.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AdminEnquiriesPage);
    return AdminEnquiriesPage;
}());

//# sourceMappingURL=admin-enquiries.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the ConfirmationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfirmationPage = (function () {
    function ConfirmationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConfirmationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfirmationPage');
    };
    ConfirmationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-confirmation',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/confirmation/confirmation.html"*/'<!--\n  Generated template for the ConfirmationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Confirmation</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <h2>Your property has been submitted.</h2>\n    <hr>\n    <p>We will review it and approve it if it meets our guidelines.</p>\n    <p>A link to the payment page will also be included here.</p>\n\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/confirmation/confirmation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ConfirmationPage);
    return ConfirmationPage;
}());

//# sourceMappingURL=confirmation.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnquirePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
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
 * Generated class for the EnquirePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EnquirePage = (function () {
    function EnquirePage(navCtrl, navParams, modalCtrl, viewCtrl, formBuilder, AFdb, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.AFdb = AFdb;
        this.toastCtrl = toastCtrl;
        this.dateTime = __WEBPACK_IMPORTED_MODULE_5_moment__().format('MMMM Do YYYY, h:mm:ss a');
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
    EnquirePage.prototype.submitEnquiry = function () {
        this.adminDB.push(this.enuqirySubmissionForm.value);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    ;
    EnquirePage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Property Was Submitted Succesfully',
            duration: 5000,
            position: 'middle'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    EnquirePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnquirePage');
    };
    EnquirePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-enquire',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/enquire/enquire.html"*/'<!--\n  Generated template for the EnquirePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Enquire About Property</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item no-padding>\n        <b>Confirm Enquiry for:</b>\n    </ion-item>\n    <ion-item no-padding *ngIf="parameter1.premisesType != \'Other\'">\n        <h4><b>Premises Type:</b></h4>\n        {{parameter1.premisesType}}</ion-item>\n    <ion-item no-padding *ngIf="parameter1.premisesType == \'Other\'">\n        <h4><b>Premises Type:</b></h4>\n        {{parameter1.otherProperty}}</ion-item>\n\n    <ion-item no-padding>\n        <b>In Location:</b><br>\n        <div>{{ parameter1.suburb1 }}, {{ parameter1.city }}</div>\n    </ion-item>\n    <!--Form Below Here-->\n    <form [formGroup]="enuqirySubmissionForm" (submit)="submitEnquiry()">\n        <ion-item hidden>\n            <ion-input formControlName="fullName" type="text" value="{{ parameter1.fullName }}">{{ parameter1.fullName }}</ion-input>\n            <b>Full Name:</b> {{ parameter1.fullName }}<br><br>\n        </ion-item>\n\n        <ion-item hidden>\n            <ion-input formControlName="userEmail" type="text" value="{{ parameter1.userEmail }}">{{ parameter1.userEmail }}</ion-input>\n            <b>Email Address:</b> {{ parameter1.userEmail }}<br><br>\n        </ion-item>\n\n        <ion-item hidden>\n            <ion-input formControlName="contactNumber" type="text" value="{{ parameter1.contactNumber }}">{{ parameter1.contactNumber }}</ion-input>\n            <b>Contact Number:</b> {{ parameter1.contactNumber }}<br><br>\n        </ion-item>\n\n        <ion-item hidden>\n            <ion-input formControlName="premisesType" type="text" value="{{ parameter1.premisesType }}">{{ parameter1.premisesType }}</ion-input>\n            <b>Premises Type:</b> {{ parameter1.premisesType }}<br><br>\n        </ion-item>\n\n        <ion-item hidden>\n            <ion-input formControlName="unitNumber" type="text" value="{{ parameter1.unitNumber }}">{{ parameter1.unitNumber }}</ion-input>\n            <b>Unit Number:</b> {{ parameter1.unitNumber }}<br><br>\n        </ion-item>\n\n        <ion-item hidden>\n            <ion-input formControlName="complexName" type="text" value="{{ parameter1.complexName }}">{{ parameter1.complexName }}</ion-input>\n            <b>Complex Name:</b> {{parameter1.complexName }}<br><br>\n        </ion-item>\n\n        <ion-item hidden>\n            <ion-input formControlName="streetNumber" type="text" value="{{ parameter1.streetNumber }}">{{ parameter1.streetNumber }}</ion-input>\n            <b>Street Number:</b> {{ parameter1.streetNumber }}<br><br>\n        </ion-item>\n\n        <ion-item hidden>\n            <ion-input formControlName="streetName" type="text" value="{{ parameter1.streetName }}">{{ parameter1.streetName }}</ion-input>\n            <b>Street Name:</b> {{parameter1.streetName }}<br><br>\n        </ion-item>\n\n        <ion-item hidden>\n            <ion-input formControlName="suburb1" type="text" value="{{ parameter1.suburb1 }}">{{ parameter1.suburb1 }}</ion-input>\n            <b>Suburb/Town:</b>{{ parameter1.suburb1 }}<br><br>\n        </ion-item>\n\n        <ion-item hidden>\n            <ion-input formControlName="city" type="text" value="{{ parameter1.city }}">{{ parameter1.city }}</ion-input>\n            <b>City:</b> {{ parameter1.city }}<br><br>\n        </ion-item>\n\n        <ion-item hidden>\n            <ion-input formControlName="postalCode" type="text" value="{{ parameter1.postalCode }}">{{ parameter1.postalCode }}</ion-input>\n            <b>Postal Code:</b> {{parameter1.postalCode }}<br><br>\n        </ion-item>\n\n        <ion-item hidden>\n            <ion-input formControlName="erf" type="text" value="{{ parameter1.erf }}">{{ parameter1.erf }}</ion-input>\n            <b>ERF Number:</b> {{parameter1.erf }}<br><br>\n        </ion-item>\n        <ion-item hidden>\n            <ion-input formControlName="rental" type="text" value="{{ parameter1.rental }}">{{ parameter1.rental }}</ion-input>\n            <b>ERF Number:</b> {{parameter1.rental }}<br><br>\n        </ion-item>\n        <button ion-button block type="submit" (click)="presentToast()">Send Enquiry</button>\n    </form>\n</ion-content>\n\nfullName: userEmail: rental: premisesType:'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/enquire/enquire.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], EnquirePage);
    return EnquirePage;
}());

//# sourceMappingURL=enquire.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainBuySearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__listings_listings__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







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
        this.submittedPropertyRef = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref('/ListedProperties/Sales');
        this.submittedPropertyRef.on('value', function (submittedPropertyList) {
            var properties = [];
            submittedPropertyList.forEach(function (property) {
                var item = property.val();
                item.key = property.key;
                properties.push(item);
                return false;
            });
            _this.submittedPropertyList = properties;
            _this.loadedSubmittedPropertyList = properties;
            console.log("done loading");
        });
    }
    //   toListingsPage(item) {
    // this.navCtrl.push(ListingsPage, item);
    //   };
    MainBuySearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainBuySearchPage');
    };
    MainBuySearchPage.prototype.toJoburg = function (listing) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__listings_listings__["a" /* ListingsPage */], {
            param1: "Johannesburg"
        });
    };
    MainBuySearchPage.prototype.toCapeTown = function (listing) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__listings_listings__["a" /* ListingsPage */], {
            param1: "CapeTown"
        });
    };
    MainBuySearchPage.prototype.toDurban = function (listing) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__listings_listings__["a" /* ListingsPage */], {
            param1: "Durban"
        });
    };
    MainBuySearchPage.prototype.toPietermaritzburg = function (listing) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__listings_listings__["a" /* ListingsPage */], {
            param1: "Pietermaritzburg"
        });
    };
    MainBuySearchPage.prototype.toPretoria = function (listing) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__listings_listings__["a" /* ListingsPage */], {
            param1: "Pretoria"
        });
    };
    MainBuySearchPage.prototype.toPortElizabeth = function (listing) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__listings_listings__["a" /* ListingsPage */], {
            param1: "PortElizabeth"
        });
    };
    MainBuySearchPage.prototype.toBloemfontein = function (listing) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__listings_listings__["a" /* ListingsPage */], {
            param1: "Bloemfontein"
        });
    };
    MainBuySearchPage.prototype.toNelspruit = function (listing) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__listings_listings__["a" /* ListingsPage */], {
            param1: "Nelspruit"
        });
    };
    MainBuySearchPage.prototype.toKimberley = function (listing) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__listings_listings__["a" /* ListingsPage */], {
            param1: "Kimberley"
        });
    };
    MainBuySearchPage.prototype.toPolokwane = function (listing) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__listings_listings__["a" /* ListingsPage */], {
            param1: "Polokwane"
        });
    };
    MainBuySearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-main-buy-search',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/main-buy-search/main-buy-search.html"*/'<!--\n  Generated template for the MainBuySearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Buy A Property</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <h3>Pick Your City</h3>\n    <ion-list>\n        <ion-item (click)="toJoburg(listing)">\n            <b>Johannesburg</b>\n        </ion-item>\n        <ion-item (click)="toCapeTown(listing)">\n            <b>Cape Town</b>\n        </ion-item>\n        <ion-item (click)="toDurban(listing)">\n            <b>Durban</b>\n        </ion-item>\n        <ion-item (click)="toPietermaritzburg(listing)">\n            <b>Pietermaritzburg</b>\n        </ion-item>\n        <ion-item (click)="toPretoria(listing)">\n            <b>Pretoria</b>\n        </ion-item>\n        <ion-item (click)="toPortElizabeth(listing)">\n            <b>Port-Elizabeth</b>\n        </ion-item>\n        <ion-item (click)="toBloemfontein(listing)">\n            <b>Bloemfontein</b>\n        </ion-item>\n        <ion-item (click)="toNelspruit(listing)">\n            <b>Nelspruit</b>\n        </ion-item>\n        <ion-item (click)="toKimberley(listing)">\n            <b>Kimberley</b>\n        </ion-item>\n        <ion-item (click)="toPolokwane(listing)">\n            <b>Polokwane</b>\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/main-buy-search/main-buy-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MainBuySearchPage);
    return MainBuySearchPage;
}());

//# sourceMappingURL=main-buy-search.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewPropertyDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_storage__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__review_submissions_review_submissions__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ReviewPropertyDetailsPage = (function () {
    function ReviewPropertyDetailsPage(navCtrl, navParams, authData, afAuth, afStorage, AFdb, formBuilder, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authData = authData;
        this.afAuth = afAuth;
        this.afStorage = afStorage;
        this.AFdb = AFdb;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        // public property: FirebaseListObservable<any[]>;
        this.property = [];
        this.profileArray = [];
        this.images = [];
        this.imageCollection = [];
        this.dateTime = __WEBPACK_IMPORTED_MODULE_7_moment__().format();
        this.selectedFile = File = null;
        this.vatOptioned = true;
        this.tenantOption = true;
        this.rentPurchaseOption = true;
        this.rentVatOptioned = false;
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
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
                authObserver.unsubscribe();
            }
            _this.property = _this.navParams.data;
            // this.adminRentalDB = this.AFdb.list('/ListedProperties/Rentals/' + this.property + '/city'); //This needs to be to the right place for the listing. The city needs to be included here.
            _this.adminRentalDB = _this.AFdb.list('/ListedProperties/Rentals/'); //This needs to be to the right place for the listing. The city needs to be included here.
            _this.adminSaleDB = _this.AFdb.list('/ListedProperties/Sales/'); //This needs to be to the right place for the listing. The city needs to be included here.
            _this.adminProfile = _this.AFdb.object('/Admin/SubmittedProperties/');
        });
        this.propertySubmissionForm = formBuilder.group({
            fullName: [],
            userEmail: [],
            contactNumber: [],
            agencyName: [],
            premisesType: [],
            otherProperty: [],
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
        //Below somewhat works!
        console.log("Image NAME::::::::::", this.property.img1);
        var ref1 = this.afStorage.ref("/resized-" + this.property.img1); //This gets the download URL. You need to dynamically pass in the file name here.
        this.img1Url = ref1.getDownloadURL();
        console.log(this.img1Url);
        var ref2 = this.afStorage.ref("/resized-" + this.property.img2); //This gets the download URL. You need to dynamically pass in the file name here.
        this.img2Url = ref2.getDownloadURL();
        console.log(this.img2Url);
        var ref3 = this.afStorage.ref("/resized-" + this.property.img3); //This gets the download URL. You need to dynamically pass in the file name here.
        this.img3Url = ref3.getDownloadURL();
        console.log(this.img3Url);
        var ref4 = this.afStorage.ref("/resized-" + this.property.img4); //This gets the download URL. You need to dynamically pass in the file name here.
        this.img4Url = ref4.getDownloadURL();
        console.log(this.img4Url);
        var ref5 = this.afStorage.ref("/resized-" + this.property.img5); //This gets the download URL. You need to dynamically pass in the file name here.
        this.img5Url = ref5.getDownloadURL();
        console.log(this.img5Url);
        var ref6 = this.afStorage.ref("/resized-" + this.property.img6); //This gets the download URL. You need to dynamically pass in the file name here.
        this.img6Url = ref6.getDownloadURL();
        console.log(this.img6Url);
        //push the image url to under the property!
        // this.propertyRef = this.AFdb.object('/Admin/SubmittedProperties/');
        // this.propertyRef.update(this.property)
        console.log("Image URL::::::::::", ref1.getDownloadURL());
    }
    //submitPropertyToListingRental() {
    //this.adminRentalDB.set(this.propertySubmissionForm.value)
    //}; //It's an entirely new submission, to elsewhere on the DB.
    ReviewPropertyDetailsPage.prototype.submitPropertyToListingRental = function (property) {
        var toSend = this.AFdb.list("/ListedProperties/Rentals/" + property.city + "/");
        toSend.push(this.property);
        //console.log(property.city)
    };
    ReviewPropertyDetailsPage.prototype.submitPropertyToListingSale = function (property) {
        var toSend = this.AFdb.list("/ListedProperties/Sales/" + property.city + "/");
        toSend.push(this.property);
    };
    ; //It's an entirely new submission, to elsewhere on the DB.
    ReviewPropertyDetailsPage.prototype.deleteOnSubmit = function (property) {
        this.AFdb.list('/Admin/SubmittedProperties/' + this.property.key).remove();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__review_submissions_review_submissions__["a" /* ReviewSubmissionsPage */]);
    }; //Delete single listing here.
    ReviewPropertyDetailsPage.prototype.submitAlert = function () {
        var confirm = this.alertCtrl.create({
            title: 'Property Submitted',
            message: 'Your users can now view and enquire.',
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        console.log('Ok clicked');
                    }
                },
            ]
        });
        confirm.present();
    };
    ReviewPropertyDetailsPage.prototype.deleteConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Really Delete?',
            message: 'You cannot recover this listing after deleting.',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        console.log("Item =>", _this.property);
                        _this.AFdb.list('/Admin/SubmittedProperties/' + _this.property.key).remove();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__review_submissions_review_submissions__["a" /* ReviewSubmissionsPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    ReviewPropertyDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReviewPropertyDetailsPage');
    };
    ReviewPropertyDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-review-property-details',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/review-property-details/review-property-details.html"*/'<!--\n  Generated template for the ReviewPropertyDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Review Property Details</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <h2>Edit the lsiting before it gets published.</h2>\n    <p>Currently reviewing a property in <b>{{ property.suburb1 }}, {{ property.city }}</b>, submitted by <b>{{ property.fullName }}</b>, from <b>{{ property.agencyName }}</b></p>\n    <p> You can contact them on <b>{{ property.contactNumber }}</b> or <b>{{ property.userEmail }}</b></p>\n    <hr>\n    <ion-item no-padding no-lines *ngIf="property.rental == \'true\'">Property submitted as a Rental</ion-item>\n    <ion-item no-padding no-lines *ngIf="property.rental == \'false\'">Property submitted as a Sale</ion-item>\n\n    <hr>\n    <form [formGroup]="propertySubmissionForm">\n\n        <!--Admin Submission Fields To All Be Hidden-->\n\n        <!--Property Specific Details-->\n        <ion-item hidden no-lines>\n            <ion-label>City:</ion-label>\n            <ion-input formControlName="city" value="{{property.city}}">{{property.city}}</ion-input>\n        </ion-item>\n        <ion-item hidden no-lines>\n            <ion-label>Suburb:</ion-label>\n            <ion-input formControlName="suburb1" value="{{property.suburb1}}">{{property.suburb1}}</ion-input>\n        </ion-item>\n\n        <!--User details-->\n        <ion-item hidden no-lines>\n            <ion-label>User Name:</ion-label>\n            <ion-input formControlName="fullName" value="{{property.fullName}}">{{property.fullName}}</ion-input>\n        </ion-item>\n        <ion-item hidden no-lines>\n            <ion-label>User Email:</ion-label>\n            <ion-input formControlName="userEmail" value="{{property.userEmail}}">{{property.userEmail}}</ion-input>\n        </ion-item>\n        <ion-item hidden no-lines>\n            <ion-label>User Contact Number:</ion-label>\n            <ion-input formControlName="contactNumber" value="{{property.contactNumber}}">{{property.contactNumber}}</ion-input>\n        </ion-item>\n        <ion-item hidden no-lines>\n            <ion-label floating>Agency Name:</ion-label>\n            <ion-input formControlName="agencyName" type="text" value="{{property.agencyName}}">{{property.agencyName}}</ion-input>\n        </ion-item>\n\n        <!--Date and time of submission-->\n        <ion-item hidden no-lines>\n            <ion-label floating>Date of Submission:</ion-label>\n            <ion-input formControlName="dateTime" displayFormat="DD:MM:YYYY" value="{{property.dateTime}}">{{property.dateTime}}</ion-input>\n        </ion-item>\n\n        <!--Key of property from list, probably not relevant here.-->\n        <ion-item hidden no-lines>\n            <ion-label floating>Area Key For Submission Purposes:</ion-label>\n            <ion-input formControlName="suburbKey" type="text" value="{{ property.key }}">{{ property.key }}</ion-input>\n        </ion-item>\n\n        <!-- End of admin fields -->\n\n        <!--Type of premises selected by user-->\n        <ion-list radio-group formControlName="premisesType" ngDefaultControl [(ngModel)]="property.premisesType">\n            <ion-label><b><u>Premises Type:</u></b></ion-label>\n            <ion-item no-lines>\n                <ion-label>Mini factory up to 500sqm</ion-label>\n                <ion-radio item-left type="radio" value="Mini factory up to 500sqm"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>A Factory/Warehouse over 500sqm</ion-label>\n                <ion-radio item-left type="radio" value="A factory/warehouse over 500 sqm"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Offices</ion-label>\n                <ion-radio item-left type="radio" value="Offices"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Retail</ion-label>\n                <ion-radio item-left type="radio" value="Retail"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>A mixed use building</ion-label>\n                <ion-radio item-left type="radio" value="A mixed use building"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>A stand alone house to be used as offices</ion-label>\n                <ion-radio item-left type="radio" value="A stand alone house to be used as offices"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Other</ion-label>\n                <ion-radio item-left type="radio" value="Other"></ion-radio>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Other Property Description:</ion-label>\n                <ion-input formControlName="otherProperty" type="text" value="{{property.otherProperty}}">{{ property.otherProperty }}</ion-input>\n            </ion-item>\n        </ion-list>\n        <!--End of premises Type-->\n\n        <!--Premises Allocation-->\n        <ion-list radio-group formControlName="holding" ngDefaultControl [(ngModel)]="property.holding">\n            <ion-label><b><u>Holding:</u></b></ion-label>\n            <ion-item no-lines>\n                <ion-label>Freehold</ion-label>\n                <ion-radio item-left type="radio" value="Freehold"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Sectional Title</ion-label>\n                <ion-radio item-left type="radio" value="Sectional Title"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Other</ion-label>\n                <ion-radio item-left type="radio" value="Other"></ion-radio>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Other Holding Description:</ion-label>\n                <ion-input formControlName="otherHolding" type="text" value="{{property.otherHolding}}">{{ property.otherHolding }}</ion-input>\n            </ion-item>\n        </ion-list>\n        <!--End of Premises Allocation-->\n\n        <!-- Start of property Address -->\n        <hr>\n        <ion-item no-lines>\n            <ion-label><u>Property Address:</u></ion-label>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Unit Number:</ion-label>\n            <ion-input formControlName="unitNumber" type="text" value="{{ property.unitNumber }}">{{property.unitNumber }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Complex Name:</ion-label>\n            <ion-input formControlName="complexName" type="text" value="{{ property.complexName }}">{{property.complexName }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Street Number:</ion-label>\n            <ion-input formControlName="streetNumber" type="text" value="{{ property.streetNumber }}">{{property.streetNumber }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Street Name:</ion-label>\n            <ion-input formControlName="streetName" type="text" value="{{ property.streetName }}">{{property.streetName }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Suburb/Town:</ion-label>\n            <ion-input formControlName="suburb1" type="text" value="{{ property.suburb1 }}">{{ property.suburb1 }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>City:</ion-label>\n            <ion-input formControlName="city" type="text" value="{{ property.city }}">{{ property.city }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Postal Code:</ion-label>\n            <ion-input formControlName="postalCode" type="number" value="{{ property.postalCode }}">{{property.postalCode }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>ERF Number:</ion-label>\n            <ion-input formControlName="erf" type="text" value="{{ property.erf }}">{{property.erf }}</ion-input>\n        </ion-item>\n        <!-- End of property Address -->\n\n        <!--Property Sizes -->\n        <hr>\n        <!--Labels-->\n        <ion-item no-lines *ngIf="property.rental == \'false\'">\n            <ion-label><u>Property Sizes:</u></ion-label>\n        </ion-item>\n        <ion-item no-lines *ngIf="property.rental == \'true\'">\n            <ion-label><u>Lettable Space:</u></ion-label>\n        </ion-item>\n        <!-- Inputs-->\n        <ion-item no-lines>\n            <ion-label floating>Factory/Warehouse Size (sqm):</ion-label>\n            <ion-input formControlName="factorySize" type="number" value="{{ property.factorySize }}">{{property.factorySize }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Office Size (sqm):</ion-label>\n            <ion-input formControlName="officeSize" type="number" value="{{ property.officeSize }}">{{property.officeSize }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Total Factory and Office Size (sqm):</ion-label>\n            <ion-input formControlName="totalSize" type="number" value="{{ property.totalSize }}">{{property.totalSize }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Shop Size (sqm) (If Retail):</ion-label>\n            <ion-input formControlName="shopSize" type="number" value="{{ property.shopSize }}">{{property.shopSize }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Undercover Parking (Bays):</ion-label>\n            <ion-input formControlName="underCoverParking" type="number" value="{{ property.underCoverParking }}">{{property.underCoverParking }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Open Parking (Bays):</ion-label>\n            <ion-input formControlName="openParking" type="number" value="{{ property.openParking }}">{{property.openParking }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Usable Yard (sqm):</ion-label>\n            <ion-input formControlName="usableYard" type="number" value="{{ property.usableYard }}">{{property.usableYard }}</ion-input>\n        </ion-item>\n        <ion-item no-lines *ngIf="property.rental == \'false\'">\n            <ion-label floating>Size of ERF (sqm) (If Freehold):</ion-label>\n            <ion-input formControlName="sizeOfERF" type="text" value="{{ property.sizeOfERF }}">{{ property.sizeOfERF }}</ion-input>\n        </ion-item>\n        <hr>\n        <!-- End of property sizes -->\n\n        <!--Property Heights-->\n        <ion-item no-lines>\n            <ion-label><u>Heights:</u></ion-label>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Floor to Roof in Factory/Warehouse (m):</ion-label>\n            <ion-input formControlName="floorToCeilingHeights" type="number" value="{{ property.floorToCeilingHeights }}">{{ property.floorToCeilingHeights }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Height of Acccess Door (Roller Shutter) (m):</ion-label>\n            <ion-input formControlName="accessDoorHeights" type="number" value="{{ property.accessDoorHeights }}">{{ property.accessDoorHeights }}</ion-input>\n        </ion-item>\n        <hr>\n        <!--End of Property Heights-->\n\n        <!--Start of Truck Access-->\n\n        <ion-item no-lines>\n            <ion-label><u>Truck Access:</u></ion-label>\n        </ion-item>\n        <ion-list radio-group formControlName="truckAccess" ngDefaultControl [(ngModel)]="property.truckAccess">\n            <ion-item no-lines>\n                <ion-label>Rigid Trucks Can Be Offloaded at the premises</ion-label>\n                <ion-radio item-left type="radio" value="Rigid Trucks Only"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Semi Trailers Can Be Offloaded at the premises</ion-label>\n                <ion-radio item-left type="radio" value="Up To Semi Trucks"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Interlinks Can Be Offloaded at the premises</ion-label>\n                <ion-radio item-left type="radio" value="Up To Interlinks"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>None of the above applies.</ion-label>\n                <ion-radio item-left type="radio" value="No Truck Can Be Offloaded"></ion-radio>\n            </ion-item>\n        </ion-list>\n        <hr>\n        <!--End of Truck Access-->\n\n        <!-- Start Of Property Power Situation -->\n\n        <ion-item no-lines>\n            <ion-label><u>Power:</u></ion-label>\n        </ion-item>\n        <ion-list radio-group formControlName="power" ngDefaultControl [(ngModel)]="property.power">\n            <ion-item no-lines>\n                <ion-label>Single Phase</ion-label>\n                <ion-radio item-left type="radio" value="Single Phase"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Three Phase</ion-label>\n                <ion-radio item-left type="radio" value="Three Phase"></ion-radio>\n            </ion-item>\n        </ion-list>\n        <ion-item no-lines>\n            <ion-label floating>Amperage:</ion-label>\n            <ion-input formControlName="amperage" type="text" value="{{ property.amperage }}">{{ property.amperage }}</ion-input>\n        </ion-item>\n        <p>Please check your circuit breaker for the amperage.</p>\n        <hr>\n        <!-- End Of Property Power Situation -->\n\n        <!-- Start of selling/rental price -->\n        <ion-item no-lines>\n            <ion-label><u>Cost:</u></ion-label>\n        </ion-item>\n        <ion-item no-lines *ngIf="property.rental == \'false\'">\n            <ion-label floating>Selling Price (ZAR):</ion-label>\n            <ion-input formControlName="sellingPrice" type="number" value="{{ property.sellingPrice }}">{{ property.sellingPrice }}</ion-input>\n        </ion-item>\n        <ion-item no-lines *ngIf="property.rental == \'true\'">\n            <ion-label floating>Rental Price (ZAR):</ion-label>\n            <ion-input formControlName="rentalPrice" type="number" value="{{ property.rentalPrice }}">{{ property.rentalPrice }}</ion-input>\n        </ion-item>\n        <ion-item no-lines *ngIf="property.rental == \'true\'">\n            <ion-label floating>Price Per Parking Bay (ZAR):</ion-label>\n            <ion-input formControlName="pricePerBay" type="number" value="{{ property.pricePerBay }}">{{ property.pricePerBay }}</ion-input>\n        </ion-item>\n        <hr>\n        <!-- End of selling/rental price -->\n\n        <!-- Start of extra costs section -->\n        <ion-item no-lines *ngIf="property.rental == \'false\'">\n            <ion-label><u>Overheads:</u></ion-label>\n        </ion-item>\n        <ion-item no-lines *ngIf="property.rental == \'true\'">\n            <ion-label><u>Additional Costs:</u></ion-label>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Rates (ZAR):</ion-label>\n            <ion-input formControlName="rates" type="number" value="{{ property.rates }}">{{ property.rates }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Levy (ZAR):</ion-label>\n            <ion-input formControlName="levy" type="number" value="{{ property.levy }}">{{ property.levy }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Contribution to Service Costs (ZAR):</ion-label>\n            <ion-input formControlName="serviceCosts" type="number" value="{{ property.serviceCosts }}">{{ property.serviceCosts }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Other Overheads:</ion-label>\n            <ion-input formControlName="otherOverheads" type="text" value="{{ property.otherOverheads }}">{{ property.otherOverheads }}</ion-input>\n        </ion-item>\n        <hr>\n        <!-- End of extra costs section -->\n\n        <!-- Start of VAT section -->\n\n        <ion-item no-lines>\n            <ion-label><u>Is The of Owner of the Property a VAT Vendor?</u></ion-label>\n        </ion-item>\n        <ion-list radio-group formControlName="VAT" ngDefaultControl [(ngModel)]="property.VAT">\n            <ion-item no-lines *ngIf="property.rental == \'false\'">\n                <ion-label>Yes</ion-label>\n                <ion-radio item-left type="radio" value="Owner Is A VAT Vendor"></ion-radio>\n            </ion-item>\n            <ion-item no-lines *ngIf="property.rental == \'false\'">\n                <ion-label>No</ion-label>\n                <ion-radio item-left type="radio" value="Owner Is Not A VAT Vendor"></ion-radio>\n            </ion-item>\n            <ion-item>\n                <p>If No, Transfer Duty Applies</p>\n            </ion-item>\n            <ion-item no-lines *ngIf="property.rental == \'true\'">\n                <ion-label>Yes</ion-label>\n                <ion-radio item-left type="radio" value="Owner Is A VAT Vendor"></ion-radio>\n            </ion-item>\n            <ion-item no-lines *ngIf="property.rental == \'true\'">\n                <ion-label>No</ion-label>\n                <ion-radio item-left type="radio" value="Owner Is A Not VAT Vendor"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label floating>Owner VAT Number:</ion-label>\n                <ion-input formControlName="ownerVatNumber" type="text" value="{{ property.ownerVatNumber }}">{{ property.ownerVatNumber }}</ion-input>\n            </ion-item>\n        </ion-list>\n        <ion-list radio-group formControlName="thirdParty" *ngIf="property.rental == \'false\'" ngDefaultControl [(ngModel)]="property.thirdParty">\n            <ion-item no-lines>\n                <ion-label><u>Are The Presmises Tenanted By A Third Party?</u></ion-label>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Yes</ion-label>\n                <ion-radio item-left type="radio" value="Third Party Tenant"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>No</ion-label>\n                <ion-radio item-left type="radio" value="No Third Party Tenant"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <p> If no, Transaction Cannot Be Zero Rated</p>\n            </ion-item>\n        </ion-list>\n        <hr>\n        <!-- End of VAT section -->\n\n        <!-- Start of Rental Options -->\n        <ion-item no-lines *ngIf="property.rental == \'true\'">\n            <ion-label><u>Lease Terms</u></ion-label>\n        </ion-item>\n        <ion-item no-lines *ngIf="property.rental == \'true\'">\n            <ion-label floating>% Annual Escalation in Rent:</ion-label>\n            <ion-input formControlName="escalation" type="text" value="{{ property.escalation }}">{{ property.escalation }}</ion-input>\n        </ion-item>\n        <ion-item no-lines *ngIf="property.rental == \'true\'">\n            <ion-label floating>Minimum Term Of Lease:</ion-label>\n            <ion-input formControlName="minLeaseTerm" type="text" value="{{ property.minLeaseTerm }}">{{ property.minLeaseTerm }}</ion-input>\n        </ion-item>\n        <ion-item no-lines *ngIf="property.rental == \'true\'">\n            <ion-label floating>Maximum Term Of Lease:</ion-label>\n            <ion-input formControlName="maxLeaseTerm" type="text" value="{{ property.maxLeaseTerm }}">{{ property.maxLeaseTerm }}</ion-input>\n        </ion-item>\n        <hr>\n        <!-- End of Rental Options -->\n\n        <!-- Start of Property Description -->\n        <ion-item no-lines>\n            <ion-label><u>Property Description:</u></ion-label>\n        </ion-item>\n        <ion-textarea formControlName="description" placeholder="Describe the property here:" value="{{ property.description }}">\n            <p>{{ property.description }}</p>\n        </ion-textarea>\n        <hr>\n\n        <!-- Start of Uploaded Images -->\n        <ion-item no-lines>\n            <ion-label><u>Property Images:</u></ion-label>\n        </ion-item>\n        <ion-item no-lines>\n            <img src="{{ property.img1 }}">\n            <ion-input formControlName="img1" type="text" value="{{ property.img1 }}">{{ property.img1 }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <img src="{{ property.img2 }}">\n            <ion-input formControlName="img2" type="text" value="{{ property.img2 }}">{{ property.img2 }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <img src="{{ property.img3 }}">\n            <ion-input formControlName="img3" type="text" value="{{ property.img3 }}">{{ property.img3 }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <img src="{{ property.img4 }}">\n            <ion-input formControlName="img4" type="text" value="{{ property.img4 }}">{{ property.img4 }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <img src="{{ property.img5 }}">\n            <ion-input formControlName="img5" type="text" value="{{ property.img5 }}">{{ property.img5 }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <img src="{{ property.img6 }}">\n            <ion-input formControlName="img6" type="text" value="{{ property.img6 }}">{{ property.img6 }}</ion-input>\n        </ion-item>\n        <!-- End of Uploaded Images -->\n\n        <!-- Start of Submission Button -->\n\n        <button *ngIf="property.rental == \'false\'" ion-button (click)="submitPropertyToListingSale(property)" (click)="deleteOnSubmit(property)" (click)="submitAlert()">Submit to Sale Directory</button>\n        <button *ngIf=" property.rental==\'true\' " ion-button (click)="submitPropertyToListingRental(property) " (click)="deleteOnSubmit(property)" (click)="submitAlert()">Submit to Rental Directory</button>\n\n        <!-- End of Submission Button -->\n        <!--End of form-->\n        <button ion-button (click)="deleteConfirm() ">Delete Listing</button>\n    </form>\n\n    <!--\n         <input type="file " (change)="onFileSelected($event) " /> \n         <button ion-button block type="button " (click)="onUpload() ">Upload</button> End of file upload\n        <button ion-button block type="submit ">Submit Property For Review</button> -->\n\n    <!--Don\'t forget to create inputs for the stuff you aren\'t allowing to be changed on this form.-->\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/review-property-details/review-property-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_storage__["a" /* AngularFireStorage */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ReviewPropertyDetailsPage);
    return ReviewPropertyDetailsPage;
}());

//# sourceMappingURL=review-property-details.js.map

/***/ }),

/***/ 196:
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

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sale_listing_detail_sale_listing_detail__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_buy_search_main_buy_search__ = __webpack_require__(194);
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
 * Generated class for the ListingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListingsPage = (function () {
    function ListingsPage(navCtrl, navParams, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.parameter1 = navParams.get('param1');
        console.log(this.parameter1);
        this.listedPropertyRef = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/ListedProperties/Sales/' + this.parameter1 + '/');
        this.listedPropertyRef.on('value', function (listedPropertyList) {
            var properties = [];
            listedPropertyList.forEach(function (property) {
                var item = property.val();
                item.key = property.key;
                properties.push(item);
                return false;
            });
            _this.listedPropertyList = properties;
            _this.loadedListedPropertyList = properties;
            console.log("done loading");
            if (_this.listedPropertyList.length == 0) {
                var alert = _this.alertCtrl.create({
                    title: 'Our Apologies',
                    subTitle: 'There are no properties currently listed in this city.',
                    buttons: [
                        {
                            text: 'Ok',
                            role: 'cancel',
                            handler: function () {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__main_buy_search_main_buy_search__["a" /* MainBuySearchPage */]);
                            }
                        },
                    ]
                });
                alert.present();
            }
            else {
            }
        });
    }
    ListingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListingsPage');
    };
    ListingsPage.prototype.showDetail = function (property) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sale_listing_detail_sale_listing_detail__["a" /* SaleListingDetailPage */], {
            param1: property
        });
    };
    ListingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-listings',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/listings/listings.html"*/'<!-- Page for the properties for sale -->\n\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Properties For Sale: {{ parameter1 }} </ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n    <h3>Here is where you\'ll do the main searching.</h3>\n    <ion-grid>\n        <ion-row>\n            <ion-col tappable col-6 col-sm *ngFor="let property of listedPropertyList" (click)="showDetail(property)">\n                <ion-card class="cardList">\n                    <img align="middle" src=\'{{ property.img1}}\' />\n                    <ion-card-header text-wrap>\n                        <b>For Sale</b><br><br>\n                        <b>Type: </b>\n                        <p align="center" *ngIf="property.premisesType != \'Other\'">{{ property.premisesType}}<br><br></p>\n                        <p align="center" *ngIf="property.premisesType == \'Other\'">{{ property.otherProperty}}<br><br></p>\n                        <b>Suburb: </b>{{ property.suburb1 }}, {{ property.city }}<br><br>\n                        <b>Selling price: R {{ property.sellingPrice }}</b><br>\n                        <hr>\n                    </ion-card-header>\n                    <ion-card-content>\n                    </ion-card-content>\n                    <button ion-button color="dark">See More</button>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/listings/listings.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object])
    ], ListingsPage);
    return ListingsPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=listings.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaleListingDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_gallery_modal__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__enquire_enquire__ = __webpack_require__(193);
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
 * Generated class for the SaleListingDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SaleListingDetailPage = (function () {
    function SaleListingDetailPage(navCtrl, navParams, modalCtrl, AFdb, afAuth, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.AFdb = AFdb;
        this.alertCtrl = alertCtrl;
        this.parameter1 = navParams.get('param1');
        // console.log(this.parameter1)
        var authObserver = afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.uid = user.uid;
                _this.email = user.email;
                _this.profile = _this.AFdb.object('/users/' + _this.uid).valueChanges();
                console.log(" auth");
                // this.navCtrl.setRoot(TabsPage);  
                authObserver.unsubscribe();
            }
            else {
                console.log("no Auth!");
            }
        });
    }
    SaleListingDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SaleListingDetailPage');
    };
    SaleListingDetailPage.prototype.enquirePage = function (parameter1) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__enquire_enquire__["a" /* EnquirePage */], {
            param1: parameter1
        });
    };
    SaleListingDetailPage.prototype.markAsSold = function (parameter1) {
        this.soldDB = this.AFdb.list('/Admin/SoldProperties/');
        this.soldDB.push(this.parameter1);
        this.AFdb.list("/ListedProperties/Sales/" + parameter1.city + "/" + parameter1.key).remove();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
    };
    SaleListingDetailPage.prototype.archive = function (parameter1) {
        this.soldDB = this.AFdb.list('/Admin/Archive/');
        this.soldDB.push(this.parameter1);
        this.AFdb.list("/ListedProperties/Sales/" + parameter1.city + "/" + parameter1.key).remove();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
    };
    SaleListingDetailPage.prototype.delete = function (parameter1) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Really Delete?',
            message: 'You cannot recover this listing after deleting.',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.AFdb.list("/ListedProperties/Sales/" + parameter1.city + "/" + parameter1.key).remove();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    SaleListingDetailPage.prototype.openImage1 = function (parameter1) {
        this.parameter1 = this.navParams.get('param1');
        this.image = parameter1.img1; //You need to pass the proper image.
        //console.log("NEW ==== getIndex="+getIndex);
        console.log(this.image);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2_ionic_gallery_modal__["a" /* GalleryModal */], {
            photos: [{ url: this.image }],
        });
        // console.log("getIndex="+getIndex);
        modal.present();
    };
    SaleListingDetailPage.prototype.openImage2 = function (parameter1) {
        this.parameter1 = this.navParams.get('param1');
        this.image = parameter1.img2; //You need to pass the proper image.
        //console.log("NEW ==== getIndex="+getIndex);
        console.log(this.image);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2_ionic_gallery_modal__["a" /* GalleryModal */], {
            photos: [{ url: this.image }],
        });
        // console.log("getIndex="+getIndex);
        modal.present();
    };
    SaleListingDetailPage.prototype.openImage3 = function (parameter1) {
        this.parameter1 = this.navParams.get('param1');
        this.image = parameter1.img3; //You need to pass the proper image.
        //console.log("NEW ==== getIndex="+getIndex);
        console.log(this.image);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2_ionic_gallery_modal__["a" /* GalleryModal */], {
            photos: [{ url: this.image }],
        });
        // console.log("getIndex="+getIndex);
        modal.present();
    };
    SaleListingDetailPage.prototype.openImage4 = function (parameter1) {
        this.parameter1 = this.navParams.get('param1');
        this.image = parameter1.img4; //You need to pass the proper image.
        //console.log("NEW ==== getIndex="+getIndex);
        console.log(this.image);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2_ionic_gallery_modal__["a" /* GalleryModal */], {
            photos: [{ url: this.image }],
        });
        // console.log("getIndex="+getIndex);
        modal.present();
    };
    SaleListingDetailPage.prototype.openImage5 = function (parameter1) {
        this.parameter1 = this.navParams.get('param1');
        this.image = parameter1.img5; //You need to pass the proper image.
        //console.log("NEW ==== getIndex="+getIndex);
        console.log(this.image);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2_ionic_gallery_modal__["a" /* GalleryModal */], {
            photos: [{ url: this.image }],
        });
        // console.log("getIndex="+getIndex);
        modal.present();
    };
    SaleListingDetailPage.prototype.openImage6 = function (parameter1) {
        this.parameter1 = this.navParams.get('param1');
        this.image = parameter1.img6; //You need to pass the proper image.
        //console.log("NEW ==== getIndex="+getIndex);
        console.log(this.image);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2_ionic_gallery_modal__["a" /* GalleryModal */], {
            photos: [{ url: this.image }],
        });
        // console.log("getIndex="+getIndex);
        modal.present();
    };
    SaleListingDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sale-listing-detail',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/sale-listing-detail/sale-listing-detail.html"*/'<!--\n  Generated template for the SaleListingDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Viewing Property in {{ parameter1.suburb1 }}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding class="content" [class.transition]="transition">\n\n    <!--*********** Image header  ***********-->\n    <div class="detail-header" [ngStyle]="{\'background-image\': \'url(\' + parameter1.img1 + \')\'}">\n        <h2 class="detail-type "> {{ parameter1.propertyType }}</h2>\n        <div class="detail-city ">{{ parameter1.suburb1 }}, {{ parameter1.city }}</div>\n    </div>\n\n    <!--***********  Description ***********-->\n    <ion-card>\n        <ion-card-header no-margin>\n            <ion-item no-padding>\n                <ion-icon name="ios-clipboard-outline" item-left color="darkGray"></ion-icon>\n                <b>Description:</b><br>\n                <div text-wrap>\n                    <br>{{ parameter1.description }}\n                </div><br>\n                <div>\n                    {{parameter1.holding}}\n                </div>\n            </ion-item>\n            <hr>\n        </ion-card-header>\n        <ion-card-content>\n            <ion-item no-padding *ngIf="parameter1.premisesType != \'Other\'">\n                <h4><b>Premises Type:</b></h4>\n                <ion-icon name="ios-map-outline" item-left color="darkGray"></ion-icon>\n                {{parameter1.premisesType}}</ion-item>\n            <ion-item no-padding *ngIf="parameter1.premisesType == \'Other\'">\n                <h4><b>Premises Type:</b></h4>\n                <ion-icon name="ios-map-outline" item-left color="darkGray"></ion-icon>\n                {{parameter1.otherProperty}}</ion-item>\n            <ion-item no-padding>\n                <ion-icon name="ios-pricetag-outline" item-left color="darkGray"></ion-icon>\n                <h4><b>Selling Price:</b></h4> {{ parameter1.sellingPrice }}<br><br></ion-item>\n        </ion-card-content>\n    </ion-card>\n\n    <!--*********** Extra Details  ***********-->\n    <ion-card>\n        <ion-card-header no-margin>\n            <ion-item>\n                <b>Extra Information:</b>\n            </ion-item>\n            <hr>\n        </ion-card-header>\n        <div class="info">\n            <ion-list no-lines>\n                <ion-item>\n                    <ion-icon name="ios-cube-outline" item-left color="darkGray"></ion-icon>\n                    <ion-label>Property Sizes:</ion-label>\n                </ion-item>\n                <ion-item *ngIf="parameter1.factorySize > 0">\n                    <b>Factory Size:</b> {{ parameter1.factorySize }} m&#178;\n                </ion-item>\n                <ion-item *ngIf="parameter1.officeSize > 0">\n                    <b>Office Size:</b> {{ parameter1.officeSize }} m&#178;\n                </ion-item>\n                <ion-item *ngIf="parameter1.totalSize > 0">\n                    <b>Total Factory and Office Size:</b> {{ parameter1.totalSize }} m&#178;\n                </ion-item>\n                <ion-item *ngIf="parameter1.shopSize > 0">\n                    <b>Shop Size:</b> {{ parameter1.shopSize }} m&#178;\n                </ion-item>\n                <ion-item *ngIf="parameter1.usableYard > 0">\n                    <b>Usable Yard Size:</b> {{ parameter1.usableYard }} m&#178;\n                </ion-item>\n                <ion-item *ngIf="parameter1.sizeOfERF > 0">\n                    <b>Size of erf:</b> {{ parameter1.sizeOfERF }} m&#178;\n                </ion-item>\n                <hr>\n                <ion-item>\n                    <ion-label>Parking:</ion-label>\n                    <ion-icon name="ios-car-outline" item-left color="darkGray"></ion-icon>\n                </ion-item>\n                <ion-item *ngIf="parameter1.openParking > 0">\n                    <b>Open Parking:</b> {{ parameter1.openParking }} bays\n                </ion-item>\n                <ion-item *ngIf="parameter1.underCoverParking > 0">\n                    <b>Under Cover Parking:</b> {{ parameter1.underCoverParking }} bays\n                </ion-item>\n                <ion-item *ngIf="!parameter1.openParking">\n                    <i>No open parking specified.</i>\n                </ion-item>\n                <ion-item *ngIf="!parameter1.underCoverParking">\n                    <i>No under cover parking specified.</i>\n                </ion-item>\n                <hr>\n                <ion-item>\n                    <ion-label>Heights:</ion-label>\n                    <ion-icon name="ios-arrow-dropup-outline" item-left color="darkGray"></ion-icon>\n                </ion-item>\n                <ion-item *ngIf="parameter1.floorToCeilingHeights > 0">\n                    <b>Floor to Roof in Factory/Warehouse:</b> {{ parameter1.floorToCeilingHeights }} m\n                </ion-item>\n                <ion-item *ngIf="!parameter1.floorToCeilingHeights">\n                    <i>No floor to roof height specified.</i>\n                </ion-item>\n                <ion-item *ngIf="parameter1.accessDoorHeights > 0">\n                    <b>Access Door Heights:</b> {{ parameter1.accessDoorHeights }} m\n                </ion-item>\n                <ion-item *ngIf="!parameter1.accessDoorHeights">\n                    <i>No access door heights specified.</i>\n                </ion-item>\n                <hr>\n                <ion-item>\n                    <ion-label>Truck Access:</ion-label>\n                    <ion-icon name="ios-bus-outline" item-left color="darkGray"></ion-icon>\n                </ion-item>\n                <ion-item>\n                    {{ parameter1.truckAccess }}\n                </ion-item>\n                <ion-item *ngIf="!parameter1.truckAccess">\n                    <i>No truck access specified.</i>\n                </ion-item>\n                <hr>\n                <ion-item>\n                    <ion-label>Power:</ion-label>\n                    <ion-icon name="ios-power-outline" item-left color="darkGray"></ion-icon>\n                </ion-item>\n                <ion-item>\n                    <b>Power Type:</b> {{ parameter1.power }}\n                </ion-item>\n                <ion-item *ngIf="parameter1.amperage > 0">\n                    <b>Amperage</b> {{ parameter1.amperage }}\n                </ion-item>\n                <hr>\n                <ion-item>\n                    <ion-label>Overheads:</ion-label>\n                    <ion-icon name="ios-card-outline" item-left color="darkGray"></ion-icon>\n                </ion-item>\n                <ion-item>\n                    <b>Rates:</b> R {{ parameter1.rates }}\n                </ion-item>\n                <ion-item>\n                    <b>Levy:</b> R {{ parameter1.levy }}\n                </ion-item>\n                <ion-item>\n                    <b>Contribution to Service Costs:</b> R {{ parameter1.serviceCosts }}\n                    <p *ngIf="!parameter1.serviceCosts">No service costs.</p>\n                </ion-item>\n                <ion-item>\n                    <b>Other Overheads:</b> R {{ parameter1.otherOverheads }}\n                    <p *ngIf="!parameter1.otherOverheads">No other overheads.</p>\n                </ion-item>\n                <hr>\n\n            </ion-list>\n        </div>\n    </ion-card>\n    <!--     -->\n    <!--***********  Thumbnail images ***********-->\n    <ion-card>\n        <ion-item>\n            <b>Property Photos:</b>\n        </ion-item>\n        <hr>\n        <ion-grid>\n            <ion-row wrap color="gray">\n                <ion-col tappable col-4>\n                    <img class="expanded-image" [src]="parameter1.img1" (click)="openImage1(parameter1)" />\n                </ion-col>\n                <ion-col tappable col-4>\n                    <img class="expanded-image" [src]="parameter1.img2" (click)="openImage2(parameter1)" />\n                </ion-col>\n                <ion-col tappable col-4>\n                    <img class="expanded-image" [src]="parameter1.img3" (click)="openImage3(parameter1)" />\n                </ion-col>\n                <ion-col tappable col-4>\n                    <img class="expanded-image" [src]="parameter1.img4" (click)="openImage4(parameter1)" />\n                </ion-col>\n                <ion-col tappable col-4>\n                    <img class="expanded-image" [src]="parameter1.img5" (click)="openImage5(parameter1)" />\n                </ion-col>\n                <ion-col tappable col-4>\n                    <img class="expanded-image" [src]="parameter1.img6" (click)="openImage6(parameter1)" />\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-card>\n\n    <ion-card align="center">\n        <ion-card-header>\n            <b>Enquire About This Property</b>\n        </ion-card-header>\n        <ion-card-content>\n            <button ion-button (click)="enquirePage(parameter1)">Click Here</button>\n        </ion-card-content>\n    </ion-card>\n\n    <!-- Admin options below-->\n    <ion-card *ngIf=" (profile | async)?.admin ">\n        <ion-item>\n            <b>Admin Card: (Only Admins can see this)</b>\n        </ion-item>\n        <ion-item>\n            <button ion-button (click)="markAsSold(parameter1) ">Mark As Sold</button>\n        </ion-item>\n        <ion-item>\n            <button ion-button (click)="archive(parameter1) ">Archive</button>\n        </ion-item>\n        <ion-item>\n            <button ion-button (click)="delete(parameter1) ">Delete</button>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label><u>Property Address:</u></ion-label>\n        </ion-item>\n        <ion-item>\n            <b>Unit Number:</b> {{ parameter1.unitNumber }}<br><br> <b>Complex Name:</b> {{parameter1.complexName }}<br><br> <b>Street Number:</b> {{ parameter1.streetNumber }}<br><br><b>Street Name:</b> {{parameter1.streetName }}<br><br> <b>Suburb/Town:</b>            {{ parameter1.suburb1 }}<br><br> <b>City:</b> {{ parameter1.city }}\n            <br><br> <b>Postal Code:</b> {{parameter1.postalCode }}<br><br> <b>ERF Number:</b> {{parameter1.erf }}<br><br>\n        </ion-item>\n    </ion-card>\n</ion-content>\n\n\n\n<!-- VAT: "Owner Is Not A VAT Vendor " \naccessDoorHeights: "12 " \nagencyName: "No agency Again " \ncity: "Johannesburg " \ncomplexName: "12 " \ncontactNumber: "0110836578 " \ndateTime: "2018-03-23T11:41:20+02:00 " \ndescription: "asdfghjkl\nsdfghjkl\ndfghjkl\nfghjkl " \nerf: "12 " <-- This is the ERF number\nfloorToCeilingHeights: "12 " \nfullName: "Luke Venter " \nholding: "Sectional Title " \nimg1: "https://firebasestorage.googleapis.com/v0/b/pre... " \nimg2: "https://firebasestorage.googleapis.com/v0/b/pre... " \nimg3: "https://firebasestorage.googleapis.com/v0/b/pre... "\nimg4: "https://firebasestorage.googleapis.com/v0/b/pre... " \nimg5: "https://firebasestorage.googleapis.com/v0/b/pre... " \nimg6: "https://firebasestorage.googleapis.com/v0/b/pre... " \nkey: "-L8HEMRl2N0WZDi4RgMs " \nlevy: "12 " \notherOverheads: "12 "\notherProperty: " " \npostalCode: "1609 " \npower: "Single Phase " \npremisesType: "Retail " \nrates: "12 " \nrental: "false " \nsellingPrice: "123123123 " \nserviceCosts: "12 "\nstreetName: "11 St Dominic Road " \nstreetNumber: "Unit 1, Monique Office Park " \nsuburb1:" Airdlin " \nsuburbKey: "-L7U7e-n_jJ9v1Ps7Fk1 " \nthirdParty: "Third Party Tenant " \ntruckAccess: "No Truck Can Be Offloaded " \nunderCoverParking: "12 " \nunitNumber: "12 " \nuserEmail: "qwertyuiop@qwertyuiop.com " -->\n\n<p>Images</p>\n<p>Enquire About Property Modal</p>'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/sale-listing-detail/sale-listing-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SaleListingDetailPage);
    return SaleListingDetailPage;
}());

//# sourceMappingURL=sale-listing-detail.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainRentSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(45);
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
            selector: 'page-main-rent-search',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/main-rent-search/main-rent-search.html"*/'<!--\n  Generated template for the MainRentSearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Rent A Property</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <h3>Pick Your City</h3>\n    Here you need a list of the cities under the metros.\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/main-rent-search/main-rent-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MainRentSearchPage);
    return MainRentSearchPage;
}());

//# sourceMappingURL=main-rent-search.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetroListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__suburb_list_suburb_list__ = __webpack_require__(201);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MetroListPage);
    return MetroListPage;
}());

;
//List the metros here. You need them to reference them in the next page. 
//# sourceMappingURL=metro-list.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuburbListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__property_submission_property_submission__ = __webpack_require__(109);
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
            selector: 'page-suburb-list',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/suburb-list/suburb-list.html"*/'<!--\n  Generated template for the SuburbListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Pick Suburb In {{parameter1}}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-searchbar (ionInput)="getSuburbs($event)"></ion-searchbar>\n    <ion-list>\n        <ion-item tappable no-lines *ngFor="let suburb of suburbList">\n            <button ion-item detail-push (click)="goToSubmitProperty(suburb)">\n            <h2> {{ suburb.suburb }} </h2>\n            <p>{{ suburb.metro }}</p>\n            <!-- {{ suburb.key }} -->\n            </button>\n            <hr>\n        </ion-item>\n\n    </ion-list>\n    <!-- \n    <form [formGroup]="suburbSubmissionForm" (submit)="suburbSubmit()">\n        <ion-label><b><u>Suburb Name:</u></b></ion-label>\n        <ion-item no-lines>\n            <ion-label floating>Suburb Name:</ion-label>\n             <ion-input formControlName="suburb" type="text"></ion-input>\n            <ion-input formControlName="suburb" type="text"></ion-input>\n        </ion-item>\n        <button ion-button block type="submit">Submit Property For Review</button>\n    </form> -->\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/suburb-list/suburb-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], SuburbListPage);
    return SuburbListPage;
}());

;
//# sourceMappingURL=suburb-list.js.map

/***/ }),

/***/ 213:
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
webpackEmptyAsyncContext.id = 213;

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin-enquiries/admin-enquiries.module": [
		774,
		15
	],
	"../pages/confirmation/confirmation.module": [
		775,
		14
	],
	"../pages/enquire/enquire.module": [
		776,
		13
	],
	"../pages/listings/listings.module": [
		777,
		12
	],
	"../pages/login/login.module": [
		778,
		11
	],
	"../pages/main-buy-search/main-buy-search.module": [
		779,
		10
	],
	"../pages/main-rent-search/main-rent-search.module": [
		780,
		9
	],
	"../pages/metro-list/metro-list.module": [
		781,
		8
	],
	"../pages/profile/profile.module": [
		782,
		7
	],
	"../pages/property-submission/property-submission.module": [
		783,
		6
	],
	"../pages/reset-password/reset-password.module": [
		784,
		0
	],
	"../pages/review-property-details/review-property-details.module": [
		785,
		5
	],
	"../pages/review-submissions/review-submissions.module": [
		786,
		4
	],
	"../pages/sale-listing-detail/sale-listing-detail.module": [
		787,
		3
	],
	"../pages/suburb-detail/suburb-detail.module": [
		788,
		2
	],
	"../pages/suburb-list/suburb-list.module": [
		789,
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
webpackAsyncContext.id = 257;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__review_submissions_review_submissions__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_enquiries_admin_enquiries__ = __webpack_require__(191);
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
    function ProfilePage(navCtrl, navParams, authData, afAuth, AFdb) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authData = authData;
        this.AFdb = AFdb;
        var authObserver = afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.uid = user.uid;
                _this.email = user.email;
                _this.profile = _this.AFdb.object('/users/' + _this.uid).valueChanges();
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
    ProfilePage.prototype.reviewSubmissions = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__review_submissions_review_submissions__["a" /* ReviewSubmissionsPage */]);
    };
    ProfilePage.prototype.reviewEnquiries = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__admin_enquiries_admin_enquiries__["a" /* AdminEnquiriesPage */]);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Your Profile</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <p>User Email Address: {{(profile | async)?.email}}</p>\n    <button *ngIf="(profile | async)?.admin" ion-button full (click)="reviewSubmissions()">Review Submissions</button>\n    <button *ngIf="(profile | async)?.admin" ion-button full (click)="reviewEnquiries()">Review Enquiries</button>\n\n    <button ion-button full color="primary" (click)="logout()">Logout</button>\n\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(35);
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

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validators_email__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact__ = __webpack_require__(166);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(45);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validators_email__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app__ = __webpack_require__(309);
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
            selector: 'page-signup',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/signup/signup.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>\n            Create an Account\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <form [formGroup]="signupForm" (submit)="signupUser()" novalidate>\n\n        <ion-item>\n            <ion-label stacked>Email</ion-label>\n            <ion-input formControlName="email" [(ngModel)]="user.email" type="email" placeholder="Your email address" [class.invalid]="!signupForm.controls.email.valid && signupForm.controls.email.dirty"></ion-input>\n        </ion-item>\n        <ion-item class="error-message" *ngIf="!signupForm.controls.email.valid  && signupForm.controls.email.dirty">\n            <p>Please enter a valid email.</p>\n        </ion-item>\n\n        <ion-item>\n            <ion-label stacked>Password</ion-label>\n            <ion-input formControlName="password" [(ngModel)]="user.password" type=" password" placeholder="Your password" [class.invalid]="!signupForm.controls.password.valid && signupForm.controls.password.dirty"></ion-input>\n        </ion-item>\n        <ion-item class="error-message" *ngIf="!signupForm.controls.password.valid && signupForm.controls.password.dirty">\n            <p>Your password needs more than 6 characters.</p>\n        </ion-item>\n\n        <button ion-button block type="submit">\n      Create an Account\n    </button>\n\n    </form>\n\n</ion-content>\n\n<!-- <ion-item>\n    <ion-input type="text" placeholder="Email Address" [(ngModel)]="user.email"></ion-input>\n</ion-item>\n\n<ion-item>\n    <ion-input type="password" placeholder="Password (Min 6 Characters)" [(ngModel)]="user.password"></ion-input>\n</ion-item>\n<br><br>\n<button ion-button (click)="register(user)">Complete Registration</button>\n<ion-item>Having trouble?<br>Your Password must be<br>more than 6 characters</ion-item> -->'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
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

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__ = __webpack_require__(101);
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

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuburbDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SuburbDetailPage);
    return SuburbDetailPage;
}());

//# sourceMappingURL=suburb-detail.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(522);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(766);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_storage__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_main_buy_search_main_buy_search__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_main_rent_search_main_rent_search__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_property_submission_property_submission__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_metro_list_metro_list__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_suburb_list_suburb_list__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_suburb_detail_suburb_detail__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_file_chooser__ = __webpack_require__(767);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common_http__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ionic_gallery_modal__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_login_login__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_signup_signup__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_confirmation_confirmation__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_profile_profile__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_review_submissions_review_submissions__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_review_property_details_review_property_details__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_listings_listings__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_sale_listing_detail_sale_listing_detail__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_enquire_enquire__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_admin_enquiries_admin_enquiries__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angularfire2__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_angularfire2_auth__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_status_bar__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_splash_screen__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_auth_auth__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_file_transfer__ = __webpack_require__(768);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_file__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_camera__ = __webpack_require__(770);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_in_app_browser__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__node_modules_ng2_file_upload__ = __webpack_require__(771);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__node_modules_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_39__node_modules_ng2_file_upload__);
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
}(__WEBPACK_IMPORTED_MODULE_37__ionic_native_camera__["a" /* Camera */]));
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
                __WEBPACK_IMPORTED_MODULE_20__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_metro_list_metro_list__["a" /* MetroListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_suburb_list_suburb_list__["a" /* SuburbListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_suburb_detail_suburb_detail__["a" /* SuburbDetailPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_review_submissions_review_submissions__["a" /* ReviewSubmissionsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_review_property_details_review_property_details__["a" /* ReviewPropertyDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_listings_listings__["a" /* ListingsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_sale_listing_detail_sale_listing_detail__["a" /* SaleListingDetailPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_confirmation_confirmation__["a" /* ConfirmationPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_enquire_enquire__["a" /* EnquirePage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_admin_enquiries_admin_enquiries__["a" /* AdminEnquiriesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/admin-enquiries/admin-enquiries.module#AdminEnquiriesPageModule', name: 'AdminEnquiriesPage', segment: 'admin-enquiries', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirmation/confirmation.module#ConfirmationPageModule', name: 'ConfirmationPage', segment: 'confirmation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/enquire/enquire.module#EnquirePageModule', name: 'EnquirePage', segment: 'enquire', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listings/listings.module#ListingsPageModule', name: 'ListingsPage', segment: 'listings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main-buy-search/main-buy-search.module#MainBuySearchPageModule', name: 'MainBuySearchPage', segment: 'main-buy-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main-rent-search/main-rent-search.module#MainRentSearchPageModule', name: 'MainRentSearchPage', segment: 'main-rent-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/metro-list/metro-list.module#MetroListPageModule', name: 'MetroListPage', segment: 'metro-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/property-submission/property-submission.module#PropertySubmissionPageModule', name: 'PropertySubmissionPage', segment: 'property-submission', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-password/reset-password.module#ResetPasswordPageModule', name: 'ResetPasswordPage', segment: 'reset-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/review-property-details/review-property-details.module#ReviewPropertyDetailsPageModule', name: 'ReviewPropertyDetailsPage', segment: 'review-property-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/review-submissions/review-submissions.module#ReviewSubmissionsPageModule', name: 'ReviewSubmissionsPage', segment: 'review-submissions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sale-listing-detail/sale-listing-detail.module#SaleListingDetailPageModule', name: 'SaleListingDetailPage', segment: 'sale-listing-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/suburb-detail/suburb-detail.module#SuburbDetailPageModule', name: 'SuburbDetailPage', segment: 'suburb-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/suburb-list/suburb-list.module#SuburbListPageModule', name: 'SuburbListPage', segment: 'suburb-list', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_30_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_31_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_storage__["b" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_39__node_modules_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_18__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_19_ionic_gallery_modal__["b" /* GalleryModalModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_main_buy_search_main_buy_search__["a" /* MainBuySearchPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_main_rent_search_main_rent_search__["a" /* MainRentSearchPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_property_submission_property_submission__["a" /* PropertySubmissionPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_metro_list_metro_list__["a" /* MetroListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_suburb_list_suburb_list__["a" /* SuburbListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_suburb_detail_suburb_detail__["a" /* SuburbDetailPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_review_submissions_review_submissions__["a" /* ReviewSubmissionsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_review_property_details_review_property_details__["a" /* ReviewPropertyDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_listings_listings__["a" /* ListingsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_sale_listing_detail_sale_listing_detail__["a" /* SaleListingDetailPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_confirmation_confirmation__["a" /* ConfirmationPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_enquire_enquire__["a" /* EnquirePage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_admin_enquiries_admin_enquiries__["a" /* AdminEnquiriesPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_34__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_38__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_6__providers_data__["a" /* DataProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 739:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 340,
	"./af.js": 340,
	"./ar": 341,
	"./ar-dz": 342,
	"./ar-dz.js": 342,
	"./ar-kw": 343,
	"./ar-kw.js": 343,
	"./ar-ly": 344,
	"./ar-ly.js": 344,
	"./ar-ma": 345,
	"./ar-ma.js": 345,
	"./ar-sa": 346,
	"./ar-sa.js": 346,
	"./ar-tn": 347,
	"./ar-tn.js": 347,
	"./ar.js": 341,
	"./az": 348,
	"./az.js": 348,
	"./be": 349,
	"./be.js": 349,
	"./bg": 350,
	"./bg.js": 350,
	"./bm": 351,
	"./bm.js": 351,
	"./bn": 352,
	"./bn.js": 352,
	"./bo": 353,
	"./bo.js": 353,
	"./br": 354,
	"./br.js": 354,
	"./bs": 355,
	"./bs.js": 355,
	"./ca": 356,
	"./ca.js": 356,
	"./cs": 357,
	"./cs.js": 357,
	"./cv": 358,
	"./cv.js": 358,
	"./cy": 359,
	"./cy.js": 359,
	"./da": 360,
	"./da.js": 360,
	"./de": 361,
	"./de-at": 362,
	"./de-at.js": 362,
	"./de-ch": 363,
	"./de-ch.js": 363,
	"./de.js": 361,
	"./dv": 364,
	"./dv.js": 364,
	"./el": 365,
	"./el.js": 365,
	"./en-au": 366,
	"./en-au.js": 366,
	"./en-ca": 367,
	"./en-ca.js": 367,
	"./en-gb": 368,
	"./en-gb.js": 368,
	"./en-ie": 369,
	"./en-ie.js": 369,
	"./en-il": 370,
	"./en-il.js": 370,
	"./en-nz": 371,
	"./en-nz.js": 371,
	"./eo": 372,
	"./eo.js": 372,
	"./es": 373,
	"./es-do": 374,
	"./es-do.js": 374,
	"./es-us": 375,
	"./es-us.js": 375,
	"./es.js": 373,
	"./et": 376,
	"./et.js": 376,
	"./eu": 377,
	"./eu.js": 377,
	"./fa": 378,
	"./fa.js": 378,
	"./fi": 379,
	"./fi.js": 379,
	"./fo": 380,
	"./fo.js": 380,
	"./fr": 381,
	"./fr-ca": 382,
	"./fr-ca.js": 382,
	"./fr-ch": 383,
	"./fr-ch.js": 383,
	"./fr.js": 381,
	"./fy": 384,
	"./fy.js": 384,
	"./gd": 385,
	"./gd.js": 385,
	"./gl": 386,
	"./gl.js": 386,
	"./gom-latn": 387,
	"./gom-latn.js": 387,
	"./gu": 388,
	"./gu.js": 388,
	"./he": 389,
	"./he.js": 389,
	"./hi": 390,
	"./hi.js": 390,
	"./hr": 391,
	"./hr.js": 391,
	"./hu": 392,
	"./hu.js": 392,
	"./hy-am": 393,
	"./hy-am.js": 393,
	"./id": 394,
	"./id.js": 394,
	"./is": 395,
	"./is.js": 395,
	"./it": 396,
	"./it.js": 396,
	"./ja": 397,
	"./ja.js": 397,
	"./jv": 398,
	"./jv.js": 398,
	"./ka": 399,
	"./ka.js": 399,
	"./kk": 400,
	"./kk.js": 400,
	"./km": 401,
	"./km.js": 401,
	"./kn": 402,
	"./kn.js": 402,
	"./ko": 403,
	"./ko.js": 403,
	"./ky": 404,
	"./ky.js": 404,
	"./lb": 405,
	"./lb.js": 405,
	"./lo": 406,
	"./lo.js": 406,
	"./lt": 407,
	"./lt.js": 407,
	"./lv": 408,
	"./lv.js": 408,
	"./me": 409,
	"./me.js": 409,
	"./mi": 410,
	"./mi.js": 410,
	"./mk": 411,
	"./mk.js": 411,
	"./ml": 412,
	"./ml.js": 412,
	"./mr": 413,
	"./mr.js": 413,
	"./ms": 414,
	"./ms-my": 415,
	"./ms-my.js": 415,
	"./ms.js": 414,
	"./mt": 416,
	"./mt.js": 416,
	"./my": 417,
	"./my.js": 417,
	"./nb": 418,
	"./nb.js": 418,
	"./ne": 419,
	"./ne.js": 419,
	"./nl": 420,
	"./nl-be": 421,
	"./nl-be.js": 421,
	"./nl.js": 420,
	"./nn": 422,
	"./nn.js": 422,
	"./pa-in": 423,
	"./pa-in.js": 423,
	"./pl": 424,
	"./pl.js": 424,
	"./pt": 425,
	"./pt-br": 426,
	"./pt-br.js": 426,
	"./pt.js": 425,
	"./ro": 427,
	"./ro.js": 427,
	"./ru": 428,
	"./ru.js": 428,
	"./sd": 429,
	"./sd.js": 429,
	"./se": 430,
	"./se.js": 430,
	"./si": 431,
	"./si.js": 431,
	"./sk": 432,
	"./sk.js": 432,
	"./sl": 433,
	"./sl.js": 433,
	"./sq": 434,
	"./sq.js": 434,
	"./sr": 435,
	"./sr-cyrl": 436,
	"./sr-cyrl.js": 436,
	"./sr.js": 435,
	"./ss": 437,
	"./ss.js": 437,
	"./sv": 438,
	"./sv.js": 438,
	"./sw": 439,
	"./sw.js": 439,
	"./ta": 440,
	"./ta.js": 440,
	"./te": 441,
	"./te.js": 441,
	"./tet": 442,
	"./tet.js": 442,
	"./tg": 443,
	"./tg.js": 443,
	"./th": 444,
	"./th.js": 444,
	"./tl-ph": 445,
	"./tl-ph.js": 445,
	"./tlh": 446,
	"./tlh.js": 446,
	"./tr": 447,
	"./tr.js": 447,
	"./tzl": 448,
	"./tzl.js": 448,
	"./tzm": 449,
	"./tzm-latn": 450,
	"./tzm-latn.js": 450,
	"./tzm.js": 449,
	"./ug-cn": 451,
	"./ug-cn.js": 451,
	"./uk": 452,
	"./uk.js": 452,
	"./ur": 453,
	"./ur.js": 453,
	"./uz": 454,
	"./uz-latn": 455,
	"./uz-latn.js": 455,
	"./uz.js": 454,
	"./vi": 456,
	"./vi.js": 456,
	"./x-pseudo": 457,
	"./x-pseudo.js": 457,
	"./yo": 458,
	"./yo.js": 458,
	"./zh-cn": 459,
	"./zh-cn.js": 459,
	"./zh-hk": 460,
	"./zh-hk.js": 460,
	"./zh-tw": 461,
	"./zh-tw.js": 461
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 739;

/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(45);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_buy_search_main_buy_search__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_rent_search_main_rent_search__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__property_submission_property_submission__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__metro_list_metro_list__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_contact__ = __webpack_require__(166);
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
    HomePage.prototype.toContact = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__contact_contact__["a" /* ContactPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/home/home.html"*/'<ion-header>\n    <!-- <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar> -->\n</ion-header>\n\n<ion-content class="masters">\n    <div class="landing-container">\n        <img class="logo" src="./assets/imgs/logo.png" />\n        <h2>Welcome to Premises!</h2>\n        <p>\n            Click the option that best describes you below:\n        </p>\n        <ion-grid>\n            <ion-row>\n                <!--I need to rent out a property-->\n                <ion-col tappable col-6 col-sm>\n                    <ion-card (click)="toMainRentSearch()">\n                        <img float="center" class="icon" src="./assets/imgs/iconrent.png" />\n                        <ion-card-header text-wrap>\n                            Need to Rent?\n                        </ion-card-header>\n                        <ion-card-content>\n                            Click Here\n                        </ion-card-content>\n                    </ion-card>\n                </ion-col>\n                <!--I need to buy a property-->\n                <ion-col tappable col-6 col-sm>\n                    <ion-card (click)="toMainBuySearch()">\n                        <img class="icon" src="./assets/imgs/iconbuy.png" />\n                        <ion-card-header text-wrap>\n                            Need to Buy?\n                        </ion-card-header>\n                        <ion-card-content>\n                            Click Here\n                        </ion-card-content>\n                    </ion-card>\n                </ion-col>\n                <!--I want to sell a property-->\n                <!-- <ion-col tappable col-6 col-sm>\n                    <ion-card (click)="toMetroList()">\n                        <img src=" ./assets/imgs/logo.png " />\n                        <ion-card-header text-wrap>\n                            Need to Sell or Let out a property?\n                        </ion-card-header>\n                        <ion-card-content>\n                            Click Here\n                        </ion-card-content>\n                    </ion-card>\n                </ion-col> -->\n            </ion-row>\n        </ion-grid>\n        <button ion-button type="button" mode="ios" block color="dark" margin-top (click)="toMetroList()">Submit A Property For Listing</button>\n        <button ion-button type="button" mode="ios" block color="dark" outline margin-top (click)="toContact()">Get In Touch With Us</button>\n    </div>\n    <p align="center ">Copyright 2018: Premises (PTY) Ltd</p>\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[514]);
//# sourceMappingURL=main.js.map