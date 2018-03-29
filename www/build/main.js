webpackJsonp([13],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_buy_search_main_buy_search__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_rent_search_main_rent_search__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__property_submission_property_submission__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__metro_list_metro_list__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(44);
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/home/home.html"*/'<ion-header>\n    <!-- <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar> -->\n</ion-header>\n\n<ion-content class="masters">\n    <div class="landing-container">\n        <img class="logo" src="./assets/imgs/logo.png" />\n        <h2>Welcome to Premises!</h2>\n        <p>\n            Click the option that best describes you below:\n        </p>\n        <ion-grid>\n            <ion-row>\n                <!--I need to rent out a property-->\n                <ion-col tappable col-6 col-sm>\n                    <ion-card (click)="toMainRentSearch()">\n                        <img src="./assets/imgs/logo.png" />\n                        <ion-card-header text-wrap>\n                            Need to Rent?\n                        </ion-card-header>\n                        <ion-card-content>\n                            Click Here\n                        </ion-card-content>\n                    </ion-card>\n                </ion-col>\n                <!--I need to buy a property-->\n                <ion-col tappable col-6 col-sm>\n                    <ion-card (click)="toMainBuySearch()">\n                        <img src="./assets/imgs/logo.png" />\n                        <ion-card-header text-wrap>\n                            Need to Buy?\n                        </ion-card-header>\n                        <ion-card-content>\n                            Click Here\n                        </ion-card-content>\n                    </ion-card>\n                </ion-col>\n                <!--I want to sell a property-->\n                <!-- <ion-col tappable col-6 col-sm>\n                    <ion-card (click)="toMetroList()">\n                        <img src=" ./assets/imgs/logo.png " />\n                        <ion-card-header text-wrap>\n                            Need to Sell or Let out a property?\n                        </ion-card-header>\n                        <ion-card-content>\n                            Click Here\n                        </ion-card-content>\n                    </ion-card>\n                </ion-col> -->\n            </ion-row>\n        </ion-grid>\n        <button ion-button type="button" mode="ios" block color="primary" outline margin-top (click)="toMetroList()">Submit A Proeprty For Listing</button>\n        <button ion-button type="button" mode="ios" block color="dark" outline margin-top>Get In Touch With Us</button>\n    </div>\n    <p align="center ">Copyright 2018: Premises (PTY) Ltd</p>\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertySubmissionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_storage__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_data__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home__ = __webpack_require__(103);
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
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                authObserver.unsubscribe();
            }
            _this.suburb = _this.navParams.data;
            _this.property = _this.navParams.data;
        });
        this.adminDB = this.AFdb.list('/Admin/SubmittedProperties/'); //This needs to be the Admin Dashboard!
        //From there you need to push it into it's correct place, and be able to edit/approve/reject it from the admin dashboard.
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
    }
    PropertySubmissionPage.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
        console.log("Here's the file name:", this.selectedFile.name);
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
                console.log("Trying to find the url:", event.url);
            }
        });
    };
    //  https://firebasestorage.googleapis.com/v0/b/premises-1bc9e.appspot.com/o/resized-andrew-price-render12-final.jpg?alt=media&token=5f3a8c73-b32b-4016-8bef-16a07a4d234b
    PropertySubmissionPage.prototype.submitProperty = function () {
        this.adminDB.push(this.propertySubmissionForm.value);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__home_home__["a" /* HomePage */]);
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
            selector: 'page-property-submission',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/property-submission/property-submission.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>Submit Your Property</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <p>Currently submitting a property in <b>{{ suburb.suburb }}, {{ suburb.metro }}.</b></p>\n    <hr>\n    <form [formGroup]="propertySubmissionForm" (submit)="submitProperty()">\n        <!-- <ion-item no-lines>\n            <ion-label floating>Full Name:</ion-label>\n            <ion-input formControlName="suburb" type="text"></ion-input>\n        </ion-item> -->\n        <!--pick if selling propety or seeking tennant-->\n        <ion-list radio-group formControlName="rental">\n            <ion-label><b><u>Listing Type:</u></b></ion-label>\n            <ion-item no-lines>\n                <ion-label>I need to find a tenant</ion-label>\n                <ion-radio item-left type="radio" value=true (click)="rentPurchaseToggle1()"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>I want to sell a property</ion-label>\n                <ion-radio item-left type="radio" value=false (click)="rentPurchaseToggle2()"></ion-radio>\n            </ion-item>\n        </ion-list>\n        <hr>\n        <!--Hidden HTML info to be submitted-->\n        <ion-item hidden no-lines>\n            <ion-label floating>Date of Submission:</ion-label>\n            <ion-input displayFormat="DD/MM/YYYY" value="{{ dateTime }}" formControlName="dateTime"></ion-input>\n        </ion-item>\n        <ion-item hidden no-lines>\n            <ion-label floating>Email Address:</ion-label>\n            <ion-input formControlName="userEmail" type="text" value="{{(profile | async)?.email}}">{{(profile | async)?.email}}</ion-input>\n        </ion-item>\n        <ion-item hidden no-lines>\n            <ion-label floating>Area Key For Submission Purposes:</ion-label>\n            <ion-input formControlName="suburbKey" type="text" value="{{ suburb.key }}">{{ suburb.key }}</ion-input>\n        </ion-item>\n        <!-- Personal details-->\n        <ion-label><b><u>Personal Details:</u></b></ion-label>\n        <ion-item no-lines>\n            <ion-label floating>Full Name:</ion-label>\n            <ion-input formControlName="fullName" type="text"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Contact Number:</ion-label>\n            <ion-input formControlName="contactNumber" type="number" value="{{ contactNumber }}"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Agency Name:</ion-label>\n            <ion-input formControlName="agencyName" type="text"></ion-input>\n        </ion-item>\n        <hr>\n        <!--Details of property-->\n        <ion-list radio-group formControlName="premisesType">\n            <ion-label><b><u>Premises Type:</u></b></ion-label>\n            <ion-item no-lines>\n                <ion-label>Mini factory up to 500sqm</ion-label>\n                <ion-radio item-left type="radio" value="Mini factory up to 500sqm"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>A Factory/Warehouse over 500sqm</ion-label>\n                <ion-radio item-left type="radio" value="A factory/warehouse over 500 sqm"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Offices</ion-label>\n                <ion-radio item-left type="radio" value="Offices"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Retail</ion-label>\n                <ion-radio item-left type="radio" value="Retail"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>A mixed use building</ion-label>\n                <ion-radio item-left type="radio" value="A mixed use building"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>A stand alone house to be used as offices</ion-label>\n                <ion-radio item-left type="radio" value="A stand alone house to be used as offices"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Other</ion-label>\n                <ion-radio item-left type="radio" value="Other"></ion-radio>\n            </ion-item>\n            <ion-input formControlName="otherProperty" type="text" placeholder="Description of property if other."></ion-input>\n        </ion-list>\n        <hr>\n        <!--Holding Type-->\n        <ion-list radio-group formControlName="holding">\n            <ion-label><b><u>Holding:</u></b></ion-label>\n            <ion-item no-lines>\n                <ion-label>Freehold</ion-label>\n                <ion-radio item-left type="radio" value="Freehold"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Sectional Title</ion-label>\n                <ion-radio item-left type="radio" value="Sectional Title"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Other</ion-label>\n                <ion-radio item-left type="radio" value="Other"></ion-radio>\n            </ion-item>\n            <ion-input formControlName="otherHolding" type="text" placeholder="Description of holding if other."></ion-input>\n        </ion-list>\n        <hr>\n        <!--Property Physical Address-->\n        <ion-item no-lines>\n            <ion-label><u>Property Address:</u></ion-label>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Unit Number:</ion-label>\n            <ion-input formControlName="unitNumber" type="text"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Complex Name:</ion-label>\n            <ion-input formControlName="complexName" type="text"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Street Number:</ion-label>\n            <ion-input formControlName="streetNumber" type="text"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Street Name:</ion-label>\n            <ion-input formControlName="streetName" type="text"></ion-input>\n        </ion-item>\n        <ion-item hidden no-lines>\n            <ion-label floating>Suburb/Town:</ion-label>\n            <ion-input hidden formControlName="suburb1" type="text" value=" {{suburb.suburb}}">{{ suburb.suburb }}</ion-input>\n        </ion-item>\n        <ion-item hidden no-lines>\n            <ion-label floating>City:</ion-label>\n            <ion-input formControlName="city" type="text" value="{{ suburb.metro }}">{{ suburb.metro }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Postal Code:</ion-label>\n            <ion-input formControlName="postalCode" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>ERF Number:</ion-label>\n            <ion-input formControlName="erf" type="text"></ion-input>\n        </ion-item>\n        <hr>\n        <!--Property Sizes fields for Purchase-->\n        <ion-item no-lines *ngIf="rentPurchaseOption == false">\n            <ion-label><u>Property Sizes:</u></ion-label>\n        </ion-item>\n        <ion-item no-lines *ngIf="rentPurchaseOption == true">\n            <ion-label><u>Lettable Space:</u></ion-label>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Factory/Warehouse Size (sqm):</ion-label>\n            <ion-input formControlName="factorySize" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Office Size (sqm):</ion-label>\n            <ion-input formControlName="officeSize" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Total Factory and Office Size (sqm):</ion-label>\n            <ion-input formControlName="totalSize" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Shop Size (sqm) (If Retail):</ion-label>\n            <ion-input formControlName="shopSize" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Undercover Parking (Bays):</ion-label>\n            <ion-input formControlName="underCoverParking" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Open Parking (Bays):</ion-label>\n            <ion-input formControlName="openParking" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Usable Yard (sqm):</ion-label>\n            <ion-input formControlName="usableYard" type="number"></ion-input>\n        </ion-item>\n        <!-- Below only present if sale selected-->\n        <ion-item no-lines *ngIf="rentPurchaseOption == false">\n            <ion-label floating>Size of ERF (sqm) (If Freehold):</ion-label>\n            <ion-input formControlName="sizeOfERF" type="number"></ion-input>\n        </ion-item>\n        <hr>\n        <ion-item no-lines>\n            <ion-label><u>Heights:</u></ion-label>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Floor to Roof in Factory/Warehouse (m):</ion-label>\n            <ion-input formControlName="floorToCeilingHeights" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Height of Acccess Door (Roller Shutter) (m):</ion-label>\n            <ion-input formControlName="accessDoorHeights" type="number"></ion-input>\n        </ion-item>\n        <hr>\n        <ion-item no-lines>\n            <ion-label><u>Truck Access:</u></ion-label>\n        </ion-item>\n        <ion-list radio-group formControlName="truckAccess">\n            <ion-item no-lines>\n                <ion-label>Rigid Trucks Can Be Offloaded at the premises</ion-label>\n                <ion-radio item-left type="radio" value="Rigid Trucks Only"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Semi Trailers Can Be Offloaded at the premises</ion-label>\n                <ion-radio item-left type="radio" value="Up To Semi Trucks"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Interlinks Can Be Offloaded at the premises</ion-label>\n                <ion-radio item-left type="radio" value="Up To Interlinks"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>None of the above applies.</ion-label>\n                <ion-radio item-left type="radio" value="No Truck Can Be Offloaded"></ion-radio>\n            </ion-item>\n        </ion-list>\n        <hr>\n        <ion-item no-lines>\n            <ion-label><u>Power:</u></ion-label>\n        </ion-item>\n        <ion-list radio-group formControlName="power">\n            <ion-item no-lines>\n                <ion-label>Single Phase</ion-label>\n                <ion-radio item-left type="radio" value="Single Phase"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Three Phase</ion-label>\n                <ion-radio item-left type="radio" value="Three Phase"></ion-radio>\n            </ion-item>\n        </ion-list>\n        <ion-item no-lines>\n            <ion-label floating>Amperage:</ion-label>\n            <ion-input formControlName="amperage" type="number"></ion-input>\n        </ion-item>\n        <p>Please check your circuit breaker for the amperage.</p>\n        <hr>\n        <ion-item no-lines>\n            <ion-label><u>Cost:</u></ion-label>\n        </ion-item>\n        <!-- Selling price if sale, rental fields if looking for tenant-->\n        <ion-item no-lines *ngIf="rentPurchaseOption == false">\n            <ion-label floating>Selling Price (ZAR):</ion-label>\n            <ion-input formControlName="sellingPrice" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines *ngIf="rentPurchaseOption == true">\n            <ion-label floating>Rental Price (ZAR):</ion-label>\n            <ion-input formControlName="rentalPrice" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines *ngIf="rentPurchaseOption == true">\n            <ion-label floating>Price Per Parking Bay (ZAR):</ion-label>\n            <ion-input formControlName="pricePerBay" type="number"></ion-input>\n        </ion-item>\n        <hr>\n        <!--If purchase option, Overheads label, if rental, Additonal costs label-->\n        <ion-item no-lines *ngIf="rentPurchaseOption == false">\n            <ion-label><u>Overheads:</u></ion-label>\n        </ion-item>\n        <ion-item no-lines *ngIf="rentPurchaseOption == true">\n            <ion-label><u>Additional Costs:</u></ion-label>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Rates (ZAR):</ion-label>\n            <ion-input formControlName="rates" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Levy (ZAR):</ion-label>\n            <ion-input formControlName="levy" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Contribution to Service Costs (ZAR):</ion-label>\n            <ion-input formControlName="serviceCosts" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Other Overheads:</ion-label>\n            <ion-input formControlName="otherOverheads" type="text"></ion-input>\n        </ion-item>\n        <hr>\n        <ion-item no-lines>\n            <ion-label><u>Is The of Owner of the Property a VAT Vendor?</u></ion-label>\n        </ion-item>\n        <ion-list radio-group formControlName="VAT">\n            <!--VAT options for the sale situation-->\n            <ion-item no-lines *ngIf="rentPurchaseOption == false">\n                <ion-label>Yes</ion-label>\n                <ion-radio item-left type="radio" value="Owner Is A VAT Vendor" (click)="vatToggle1()"></ion-radio>\n            </ion-item>\n            <ion-item no-lines *ngIf="rentPurchaseOption == false">\n                <ion-label>No</ion-label>\n                <ion-radio item-left type="radio" value="Owner Is Not A VAT Vendor" (click)="vatToggle2()"></ion-radio>\n            </ion-item>\n            <ion-item no-lines *ngIf="vatOptioned == false">\n                <p>Transfer Duty Applies</p>\n            </ion-item>\n            <!--VAT options for the rental situation-->\n            <ion-item no-lines *ngIf="rentPurchaseOption == true">\n                <ion-label>Yes</ion-label>\n                <ion-radio item-left type="radio" value="Owner Is A VAT Vendor" (click)="rentVatToggle1()"></ion-radio>\n            </ion-item>\n            <ion-item no-lines *ngIf="rentPurchaseOption == true">\n                <ion-label>No</ion-label>\n                <ion-radio item-left type="radio" value="Owner Is A Not VAT Vendor" (click)="rentVatToggle2()"></ion-radio>\n            </ion-item>\n            <ion-item no-lines *ngIf="rentVatOptioned == true">\n                <ion-label floating>Owner VAT Number:</ion-label>\n                <ion-input formControlName="ownerVatNumber" type="text"></ion-input>\n            </ion-item>\n        </ion-list>\n        <!-- Third Party Tenant Options-->\n        <ion-list radio-group formControlName="thirdParty" *ngIf="rentPurchaseOption == false">\n            <ion-item no-lines>\n                <ion-label><u>Are The Presmises Tenanted By A Third Party?</u></ion-label>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Yes</ion-label>\n                <ion-radio item-left type="radio" value="Third Party Tenant" (click)="tenantToggle1()"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>No</ion-label>\n                <ion-radio item-left type="radio" value="No Third Party Tenant" (click)="tenantToggle2()"></ion-radio>\n            </ion-item>\n            <ion-item no-lines *ngIf="tenantOption == false">\n                <p>Transaction Cannot Be Zero Rated</p>\n            </ion-item>\n        </ion-list>\n        <!-- Lease Terms - Letting Only-->\n        <ion-item no-lines *ngIf="rentPurchaseOption == true">\n            <ion-label><u>Lease Terms</u></ion-label>\n        </ion-item>\n        <ion-item no-lines *ngIf="rentPurchaseOption == true">\n            <ion-label floating>% Annual Escalation in Rent:</ion-label>\n            <ion-input formControlName="escalation" type="text"></ion-input>\n        </ion-item>\n        <ion-item no-lines *ngIf="rentPurchaseOption == true">\n            <ion-label floating>Minimum Term Of Lease:</ion-label>\n            <ion-input formControlName="minLeaseTerm" type="text"></ion-input>\n        </ion-item>\n        <ion-item no-lines *ngIf="rentPurchaseOption == true">\n            <ion-label floating>Maximum Term Of Lease:</ion-label>\n            <ion-input formControlName="maxLeaseTerm" type="text"></ion-input>\n        </ion-item>\n        <!--Property Description-->\n        <hr>\n        <ion-item no-lines>\n            <ion-label><u>Property Description:</u></ion-label>\n        </ion-item>\n        <ion-textarea formControlName="description" placeholder="Describe the property here:"></ion-textarea>\n        <hr>\n        <!-- File Upload-->\n        <h1>File Upload</h1>\n\n        <input type="file" (change)="onFileSelected($event)" />\n        <!-- <button ion-button block type="button" (click)="onUpload()">Upload</button> -->\n        <!-- End of file upload -->\n        <button ion-button block type="submit" [disabled]="!propertySubmissionForm.valid" (click)="presentToast()">Submit Property For Review</button>\n    </form>\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/property-submission/property-submission.html"*/,
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

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_profile__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(103);
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

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sale_listing_detail_sale_listing_detail__ = __webpack_require__(190);
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
    function ListingsPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
            selector: 'page-listings',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/listings/listings.html"*/'<!-- Page for the properties for sale -->\n\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Properties For Sale: {{ parameter1 }} </ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n    <h3>Here is where you\'ll do the main searching.</h3>\n    <ion-grid>\n        <ion-row>\n            <ion-col tappable col-6 col-sm *ngFor="let property of listedPropertyList">\n                <ion-card class="cardList">\n                    <img align="middle" src=\'{{ property.img1}}\' />\n                    <ion-card-header text-wrap>\n                        <b>For Sale</b><br><br>\n                        <b>Type: </b>\n                        <p align="center" *ngIf="property.premisesType != \'Other\'">{{ property.premisesType}}<br><br></p>\n                        <p align="center" *ngIf="property.premisesType == \'Other\'">{{ property.otherProperty}}<br><br></p>\n                        <b>Suburb: </b>{{ property.suburb1 }}, {{ property.city }}<br><br>\n                        <b>Selling price: R {{ property.sellingPrice }}</b><br>\n                        <hr>\n                    </ion-card-header>\n                    <ion-card-content>\n                    </ion-card-content>\n                    <button ion-button color="dark" (click)="showDetail(property)">See More</button>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/listings/listings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListingsPage);
    return ListingsPage;
}());

//# sourceMappingURL=listings.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaleListingDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_gallery_modal__ = __webpack_require__(618);
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
    function SaleListingDetailPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.parameter1 = navParams.get('param1');
        console.log(this.parameter1);
    }
    SaleListingDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SaleListingDetailPage');
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
            selector: 'page-sale-listing-detail',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/sale-listing-detail/sale-listing-detail.html"*/'<!--\n  Generated template for the SaleListingDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Viewing Property in {{ parameter1.suburb1 }}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding class="content" [class.transition]="transition">\n\n    <!--*********** Image header  ***********-->\n    <div class="detail-header" [ngStyle]="{\'background-image\': \'url(\' + parameter1.img1 + \')\'}">\n        <h2 class="detail-type "> {{ parameter1.propertyType }}</h2>\n        <div class="detail-city ">{{ parameter1.suburb1 }}, {{ parameter1.city }}</div>\n    </div>\n\n    <!--***********  Description ***********-->\n    <ion-card>\n        <ion-card-header no-margin>\n            <ion-item no-padding>\n                <ion-icon name="ios-clipboard-outline" item-left color="darkGray"></ion-icon>\n                <b>Description:</b>\n                <div> {{ parameter1.description }}</div><br>\n                <div>\n                    {{parameter1.holding}}\n                </div>\n            </ion-item>\n            <hr>\n        </ion-card-header>\n        <ion-card-content>\n            <ion-item no-padding *ngIf="parameter1.premisesType != \'Other\'">\n                <h4><b>Premises Type:</b></h4>\n                <ion-icon name="ios-map-outline" item-left color="darkGray"></ion-icon>\n                {{parameter1.premisesType}}</ion-item>\n            <ion-item no-padding *ngIf="parameter1.premisesType == \'Other\'">\n                <h4><b>Premises Type:</b></h4>\n                <ion-icon name="ios-map-outline" item-left color="darkGray"></ion-icon>\n                {{parameter1.otherProperty}}</ion-item>\n            <ion-item no-padding>\n                <ion-icon name="ios-pricetag-outline" item-left color="darkGray"></ion-icon>\n                <h4><b>Selling Price:</b></h4> {{ parameter1.sellingPrice }}<br><br></ion-item>\n        </ion-card-content>\n    </ion-card>\n\n    <!--*********** Extra Details  ***********-->\n    <ion-card>\n        <ion-card-header no-margin>\n            <ion-item>\n                <b>Extra Information:</b>\n            </ion-item>\n            <hr>\n        </ion-card-header>\n        <div class="info">\n            <ion-list no-lines>\n                <ion-item>\n                    <ion-icon name="ios-cube-outline" item-left color="darkGray"></ion-icon>\n                    <ion-label>Property Sizes:</ion-label>\n                </ion-item>\n                <ion-item *ngIf="parameter1.factorySize > 0">\n                    <b>Factory Size:</b> {{ parameter1.factorySize }} m&#178;\n                </ion-item>\n                <ion-item *ngIf="parameter1.officeSize > 0">\n                    <b>Office Size:</b> {{ parameter1.officeSize }} m&#178;\n                </ion-item>\n                <ion-item *ngIf="parameter1.totalSize > 0">\n                    <b>Total Factory and Office Size:</b> {{ parameter1.totalSize }} m&#178;\n                </ion-item>\n                <ion-item *ngIf="parameter1.shopSize > 0">\n                    <b>Shop Size:</b> {{ parameter1.shopSize }} m&#178;\n                </ion-item>\n                <ion-item *ngIf="parameter1.usableYard > 0">\n                    <b>Usable Yard Size:</b> {{ parameter1.usableYard }} m&#178;\n                </ion-item>\n                <ion-item *ngIf="parameter1.sizeOfERF > 0">\n                    <b>Size of erf:</b> {{ parameter1.sizeOfERF }} m&#178;\n                </ion-item>\n                <hr>\n                <ion-item>\n                    <ion-label>Parking:</ion-label>\n                    <ion-icon name="ios-car-outline" item-left color="darkGray"></ion-icon>\n                </ion-item>\n                <ion-item *ngIf="parameter1.openParking > 0">\n                    <b>Open Parking:</b> {{ parameter1.openParking }} bays\n                </ion-item>\n                <ion-item *ngIf="parameter1.underCoverParking > 0">\n                    <b>Under Cover Parking:</b> {{ parameter1.underCoverParking }} bays\n                </ion-item>\n                <ion-item *ngIf="!parameter1.openParking">\n                    <i>No open parking specified.</i>\n                </ion-item>\n                <ion-item *ngIf="!parameter1.underCoverParking">\n                    <i>No under cover parking specified.</i>\n                </ion-item>\n                <hr>\n                <ion-item>\n                    <ion-label>Heights:</ion-label>\n                    <ion-icon name="ios-arrow-dropup-outline" item-left color="darkGray"></ion-icon>\n                </ion-item>\n                <ion-item *ngIf="parameter1.floorToCeilingHeights > 0">\n                    <b>Floor to Roof in Factory/Warehouse:</b> {{ parameter1.floorToCeilingHeights }} m\n                </ion-item>\n                <ion-item *ngIf="!parameter1.floorToCeilingHeights">\n                    <i>No floor to roof height specified.</i>\n                </ion-item>\n                <ion-item *ngIf="parameter1.accessDoorHeights > 0">\n                    <b>Access Door Heights:</b> {{ parameter1.accessDoorHeights }} m\n                </ion-item>\n                <ion-item *ngIf="!parameter1.accessDoorHeights">\n                    <i>No access door heights specified.</i>\n                </ion-item>\n                <hr>\n                <ion-item>\n                    <ion-label>Truck Access:</ion-label>\n                    <ion-icon name="ios-bus-outline" item-left color="darkGray"></ion-icon>\n                </ion-item>\n                <ion-item>\n                    {{ parameter1.truckAccess }}\n                </ion-item>\n                <ion-item *ngIf="!parameter1.truckAccess">\n                    <i>No truck access specified.</i>\n                </ion-item>\n                <hr>\n                <ion-item>\n                    <ion-label>Power:</ion-label>\n                    <ion-icon name="ios-power-outline" item-left color="darkGray"></ion-icon>\n                </ion-item>\n                <ion-item>\n                    <b>Power Type:</b> {{ parameter1.power }}\n                </ion-item>\n                <ion-item *ngIf="parameter1.amperage > 0">\n                    <b>Amperage</b> {{ parameter1.amperage }}\n                </ion-item>\n                <hr>\n                <ion-item>\n                    <ion-label>Overheads:</ion-label>\n                    <ion-icon name="ios-card-outline" item-left color="darkGray"></ion-icon>\n                </ion-item>\n                <ion-item>\n                    <b>Rates:</b> R {{ parameter1.rates }}\n                </ion-item>\n                <ion-item>\n                    <b>Levy:</b> R {{ parameter1.levy }}\n                </ion-item>\n                <ion-item>\n                    <b>Contribution to Service Costs:</b> R {{ parameter1.serviceCosts }}\n                    <p *ngIf="!parameter1.serviceCosts">No service costs.</p>\n                </ion-item>\n                <ion-item>\n                    <b>Other Overheads:</b> R {{ parameter1.otherOverheads }}\n                    <p *ngIf="!parameter1.otherOverheads">No other overheads.</p>\n                </ion-item>\n                <hr>\n\n            </ion-list>\n        </div>\n    </ion-card>\n    <!--     -->\n    <!--***********  Thumbnail images ***********-->\n    <ion-card>\n        <ion-item>\n            <b>Property Photos:</b>\n        </ion-item>\n        <hr>\n        <ion-grid>\n            <ion-row wrap color="gray">\n                <ion-col tappable col-4>\n                    <img class="expanded-image" [src]="parameter1.img1" (click)="openImage1(parameter1)" />\n                </ion-col>\n                <ion-col tappable col-4>\n                    <img class="expanded-image" [src]="parameter1.img2" (click)="openImage2(parameter1)" />\n                </ion-col>\n                <ion-col tappable col-4>\n                    <img class="expanded-image" [src]="parameter1.img3" (click)="openImage3(parameter1)" />\n                </ion-col>\n                <ion-col tappable col-4>\n                    <img class="expanded-image" [src]="parameter1.img4" (click)="openImage4(parameter1)" />\n                </ion-col>\n                <ion-col tappable col-4>\n                    <img class="expanded-image" [src]="parameter1.img5" (click)="openImage5(parameter1)" />\n                </ion-col>\n                <ion-col tappable col-4>\n                    <img class="expanded-image" [src]="parameter1.img6" (click)="openImage6(parameter1)" />\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-card>\n</ion-content>\n\n\n<!-- VAT: "Owner Is Not A VAT Vendor" \naccessDoorHeights: "12" \nagencyName: "No agency Again" \ncity: "Johannesburg" \ncomplexName: "12" \ncontactNumber: "0110836578" \ndateTime: "2018-03-23T11:41:20+02:00" \ndescription: "asdfghjkl\nsdfghjkl\ndfghjkl\nfghjkl" \nerf: "12" <-- This is the ERF number\nfloorToCeilingHeights: "12" \nfullName: "Luke Venter" \nholding: "Sectional Title" \nimg1: "https://firebasestorage.googleapis.com/v0/b/pre..." \nimg2: "https://firebasestorage.googleapis.com/v0/b/pre..." \nimg3: "https://firebasestorage.googleapis.com/v0/b/pre..."\nimg4: "https://firebasestorage.googleapis.com/v0/b/pre..." \nimg5: "https://firebasestorage.googleapis.com/v0/b/pre..." \nimg6: "https://firebasestorage.googleapis.com/v0/b/pre..." \nkey: "-L8HEMRl2N0WZDi4RgMs" \nlevy: "12" \notherOverheads: "12"\notherProperty: "" \npostalCode: "1609" \npower: "Single Phase" \npremisesType: "Retail" \nrates: "12" \nrental: "false" \nsellingPrice: "123123123" \nserviceCosts: "12"\nstreetName: "11 St Dominic Road" \nstreetNumber: "Unit 1, Monique Office Park" \nsuburb1:" Airdlin" \nsuburbKey: "-L7U7e-n_jJ9v1Ps7Fk1" \nthirdParty: "Third Party Tenant" \ntruckAccess: "No Truck Can Be Offloaded" \nunderCoverParking: "12" \nunitNumber: "12" \nuserEmail: "qwertyuiop@qwertyuiop.com" -->\n\n<p>Images</p>\n<p>Enquire About Property Modal</p>'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/sale-listing-detail/sale-listing-detail.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]) === "function" && _c || Object])
    ], SaleListingDetailPage);
    return SaleListingDetailPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=sale-listing-detail.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainBuySearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__listings_listings__ = __webpack_require__(189);
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

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewSubmissionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__review_property_details_review_property_details__ = __webpack_require__(193);
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
            selector: 'page-review-submissions',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/review-submissions/review-submissions.html"*/'<!--\n  Generated template for the ReviewSubmissionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Review Submissions</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <u><h2>Properties For Sale</h2></u>\n    <ion-list *ngFor="let property of submittedList">\n        <ion-item *ngIf="property.rental == \'false\'" tappable (click)="toReviewDetails(property)">\n            <b>Listing: </b>{{property.premisesType}}. {{property.otherProperty}}<br> <b>Location: </b>{{property.suburb1}}, {{property.city}}\n            <hr>\n        </ion-item>\n    </ion-list>\n    <u><h2>Properties To Rent</h2></u>\n    <ion-list *ngFor="let property of submittedList">\n        <ion-item *ngIf="property.rental == \'true\'" tappable (click)="toReviewDetails(property)">\n            <b>Listing: </b>{{property.premisesType}}<br> <b>Location: </b>{{property.suburb1}}, {{property.city}}\n            <hr>\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/review-submissions/review-submissions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ReviewSubmissionsPage);
    return ReviewSubmissionsPage;
}());

//# sourceMappingURL=review-submissions.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewPropertyDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_storage__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(44);
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
        this.profileArray = [];
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
    ReviewPropertyDetailsPage.prototype.deleteListing = function (property) {
        console.log("Item =>", this.property);
        //this.AFdb.list('/Admin/SubmittedProperties/').remove(property);
    }; //Delete single listing here.
    ReviewPropertyDetailsPage.prototype.deleteConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Really Delete?',
            message: 'You cannot recover this file after deleting.',
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
                        //Delete file.
                        //Push back to list.
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
            selector: 'page-review-property-details',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/review-property-details/review-property-details.html"*/'<!--\n  Generated template for the ReviewPropertyDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Review Property Details</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <h2>Edit the lsiting before it gets published.</h2>\n    <p>Currently reviewing a property in <b>{{ property.suburb1 }}, {{ property.city }}</b>, submitted by <b>{{ property.fullName }}</b>, from <b>{{ property.agencyName }}</b></p>\n    <p> You can contact them on <b>{{ property.contactNumber }}</b> or <b>{{ property.userEmail }}</b></p>\n    <hr>\n    <ion-item no-padding no-lines *ngIf="property.rental == \'true\'">Property submitted as a Rental</ion-item>\n    <ion-item no-padding no-lines *ngIf="property.rental == \'false\'">Property submitted as a Sale</ion-item>\n\n    <hr>\n    <form [formGroup]="propertySubmissionForm">\n\n        <!--Admin Submission Fields To All Be Hidden-->\n\n        <!--Property Specific Details-->\n        <ion-item hidden no-lines>\n            <ion-label>City:</ion-label>\n            <ion-input formControlName="city" value="{{property.city}}">{{property.city}}</ion-input>\n        </ion-item>\n        <ion-item hidden no-lines>\n            <ion-label>Suburb:</ion-label>\n            <ion-input formControlName="suburb1" value="{{property.suburb1}}">{{property.suburb1}}</ion-input>\n        </ion-item>\n\n        <!--User details-->\n        <ion-item hidden no-lines>\n            <ion-label>User Name:</ion-label>\n            <ion-input formControlName="fullName" value="{{property.fullName}}">{{property.fullName}}</ion-input>\n        </ion-item>\n        <ion-item hidden no-lines>\n            <ion-label>User Email:</ion-label>\n            <ion-input formControlName="userEmail" value="{{property.userEmail}}">{{property.userEmail}}</ion-input>\n        </ion-item>\n        <ion-item hidden no-lines>\n            <ion-label>User Contact Number:</ion-label>\n            <ion-input formControlName="contactNumber" value="{{property.contactNumber}}">{{property.contactNumber}}</ion-input>\n        </ion-item>\n        <ion-item hidden no-lines>\n            <ion-label floating>Agency Name:</ion-label>\n            <ion-input formControlName="agencyName" type="text" value="{{property.agencyName}}">{{property.agencyName}}</ion-input>\n        </ion-item>\n\n        <!--Date and time of submission-->\n        <ion-item hidden no-lines>\n            <ion-label floating>Date of Submission:</ion-label>\n            <ion-input formControlName="dateTime" displayFormat="DD:MM:YYYY" value="{{property.dateTime}}">{{property.dateTime}}</ion-input>\n        </ion-item>\n\n        <!--Key of property from list, probably not relevant here.-->\n        <ion-item hidden no-lines>\n            <ion-label floating>Area Key For Submission Purposes:</ion-label>\n            <ion-input formControlName="suburbKey" type="text" value="{{ property.key }}">{{ property.key }}</ion-input>\n        </ion-item>\n\n        <!-- End of admin fields -->\n\n        <!--Type of premises selected by user-->\n        <ion-list radio-group formControlName="premisesType" ngDefaultControl [(ngModel)]="property.premisesType">\n            <ion-label><b><u>Premises Type:</u></b></ion-label>\n            <ion-item no-lines>\n                <ion-label>Mini factory up to 500sqm</ion-label>\n                <ion-radio item-left type="radio" value="Mini factory up to 500sqm"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>A Factory/Warehouse over 500sqm</ion-label>\n                <ion-radio item-left type="radio" value="A factory/warehouse over 500 sqm"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Offices</ion-label>\n                <ion-radio item-left type="radio" value="Offices"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Retail</ion-label>\n                <ion-radio item-left type="radio" value="Retail"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>A mixed use building</ion-label>\n                <ion-radio item-left type="radio" value="A mixed use building"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>A stand alone house to be used as offices</ion-label>\n                <ion-radio item-left type="radio" value="A stand alone house to be used as offices"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Other</ion-label>\n                <ion-radio item-left type="radio" value="Other"></ion-radio>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Other Property Description:</ion-label>\n                <ion-input formControlName="otherProperty" type="text" value="{{property.otherProperty}}">{{ property.otherProperty }}</ion-input>\n            </ion-item>\n        </ion-list>\n        <!--End of premises Type-->\n\n        <!--Premises Allocation-->\n        <ion-list radio-group formControlName="holding" ngDefaultControl [(ngModel)]="property.holding">\n            <ion-label><b><u>Holding:</u></b></ion-label>\n            <ion-item no-lines>\n                <ion-label>Freehold</ion-label>\n                <ion-radio item-left type="radio" value="Freehold"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Sectional Title</ion-label>\n                <ion-radio item-left type="radio" value="Sectional Title"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Other</ion-label>\n                <ion-radio item-left type="radio" value="Other"></ion-radio>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Other Holding Description:</ion-label>\n                <ion-input formControlName="otherHolding" type="text" value="{{property.otherHolding}}">{{ property.otherHolding }}</ion-input>\n            </ion-item>\n        </ion-list>\n        <!--End of Premises Allocation-->\n\n        <!-- Start of property Address -->\n        <hr>\n        <ion-item no-lines>\n            <ion-label><u>Property Address:</u></ion-label>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Unit Number:</ion-label>\n            <ion-input formControlName="unitNumber" type="text" value="{{ property.unitNumber }}">{{property.unitNumber }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Complex Name:</ion-label>\n            <ion-input formControlName="complexName" type="text" value="{{ property.complexName }}">{{property.complexName }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Street Number:</ion-label>\n            <ion-input formControlName="streetNumber" type="text" value="{{ property.streetNumber }}">{{property.streetNumber }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Street Name:</ion-label>\n            <ion-input formControlName="streetName" type="text" value="{{ property.streetName }}">{{property.streetName }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Suburb/Town:</ion-label>\n            <ion-input formControlName="suburb1" type="text" value="{{ property.suburb1 }}">{{ property.suburb1 }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>City:</ion-label>\n            <ion-input formControlName="city" type="text" value="{{ property.city }}">{{ property.city }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Postal Code:</ion-label>\n            <ion-input formControlName="postalCode" type="number" value="{{ property.postalCode }}">{{property.postalCode }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>ERF Number:</ion-label>\n            <ion-input formControlName="erf" type="text" value="{{ property.erf }}">{{property.erf }}</ion-input>\n        </ion-item>\n        <!-- End of property Address -->\n\n        <!--Property Sizes -->\n        <hr>\n        <!--Labels-->\n        <ion-item no-lines *ngIf="property.rental == \'false\'">\n            <ion-label><u>Property Sizes:</u></ion-label>\n        </ion-item>\n        <ion-item no-lines *ngIf="property.rental == \'true\'">\n            <ion-label><u>Lettable Space:</u></ion-label>\n        </ion-item>\n        <!-- Inputs-->\n        <ion-item no-lines>\n            <ion-label floating>Factory/Warehouse Size (sqm):</ion-label>\n            <ion-input formControlName="factorySize" type="number" value="{{ property.factorySize }}">{{property.factorySize }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Office Size (sqm):</ion-label>\n            <ion-input formControlName="officeSize" type="number" value="{{ property.officeSize }}">{{property.officeSize }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Total Factory and Office Size (sqm):</ion-label>\n            <ion-input formControlName="totalSize" type="number" value="{{ property.totalSize }}">{{property.totalSize }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Shop Size (sqm) (If Retail):</ion-label>\n            <ion-input formControlName="shopSize" type="number" value="{{ property.shopSize }}">{{property.shopSize }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Undercover Parking (Bays):</ion-label>\n            <ion-input formControlName="underCoverParking" type="number" value="{{ property.underCoverParking }}">{{property.underCoverParking }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Open Parking (Bays):</ion-label>\n            <ion-input formControlName="openParking" type="number" value="{{ property.openParking }}">{{property.openParking }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Usable Yard (sqm):</ion-label>\n            <ion-input formControlName="usableYard" type="number" value="{{ property.usableYard }}">{{property.usableYard }}</ion-input>\n        </ion-item>\n        <ion-item no-lines *ngIf="property.rental == \'false\'">\n            <ion-label floating>Size of ERF (sqm) (If Freehold):</ion-label>\n            <ion-input formControlName="sizeOfERF" type="text" value="{{ property.sizeOfERF }}">{{ property.sizeOfERF }}</ion-input>\n        </ion-item>\n        <hr>\n        <!-- End of property sizes -->\n\n        <!--Property Heights-->\n        <ion-item no-lines>\n            <ion-label><u>Heights:</u></ion-label>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Floor to Roof in Factory/Warehouse (m):</ion-label>\n            <ion-input formControlName="floorToCeilingHeights" type="number" value="{{ property.floorToCeilingHeights }}">{{ property.floorToCeilingHeights }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Height of Acccess Door (Roller Shutter) (m):</ion-label>\n            <ion-input formControlName="accessDoorHeights" type="number" value="{{ property.accessDoorHeights }}">{{ property.accessDoorHeights }}</ion-input>\n        </ion-item>\n        <hr>\n        <!--End of Property Heights-->\n\n        <!--Start of Truck Access-->\n\n        <ion-item no-lines>\n            <ion-label><u>Truck Access:</u></ion-label>\n        </ion-item>\n        <ion-list radio-group formControlName="truckAccess" ngDefaultControl [(ngModel)]="property.truckAccess">\n            <ion-item no-lines>\n                <ion-label>Rigid Trucks Can Be Offloaded at the premises</ion-label>\n                <ion-radio item-left type="radio" value="Rigid Trucks Only"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Semi Trailers Can Be Offloaded at the premises</ion-label>\n                <ion-radio item-left type="radio" value="Up To Semi Trucks"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Interlinks Can Be Offloaded at the premises</ion-label>\n                <ion-radio item-left type="radio" value="Up To Interlinks"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>None of the above applies.</ion-label>\n                <ion-radio item-left type="radio" value="No Truck Can Be Offloaded"></ion-radio>\n            </ion-item>\n        </ion-list>\n        <hr>\n        <!--End of Truck Access-->\n\n        <!-- Start Of Property Power Situation -->\n\n        <ion-item no-lines>\n            <ion-label><u>Power:</u></ion-label>\n        </ion-item>\n        <ion-list radio-group formControlName="power" ngDefaultControl [(ngModel)]="property.power">\n            <ion-item no-lines>\n                <ion-label>Single Phase</ion-label>\n                <ion-radio item-left type="radio" value="Single Phase"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Three Phase</ion-label>\n                <ion-radio item-left type="radio" value="Three Phase"></ion-radio>\n            </ion-item>\n        </ion-list>\n        <ion-item no-lines>\n            <ion-label floating>Amperage:</ion-label>\n            <ion-input formControlName="amperage" type="text" value="{{ property.amperage }}">{{ property.amperage }}</ion-input>\n        </ion-item>\n        <p>Please check your circuit breaker for the amperage.</p>\n        <hr>\n        <!-- End Of Property Power Situation -->\n\n        <!-- Start of selling/rental price -->\n        <ion-item no-lines>\n            <ion-label><u>Cost:</u></ion-label>\n        </ion-item>\n        <ion-item no-lines *ngIf="property.rental == \'false\'">\n            <ion-label floating>Selling Price (ZAR):</ion-label>\n            <ion-input formControlName="sellingPrice" type="number" value="{{ property.sellingPrice }}">{{ property.sellingPrice }}</ion-input>\n        </ion-item>\n        <ion-item no-lines *ngIf="property.rental == \'true\'">\n            <ion-label floating>Rental Price (ZAR):</ion-label>\n            <ion-input formControlName="rentalPrice" type="number" value="{{ property.rentalPrice }}">{{ property.rentalPrice }}</ion-input>\n        </ion-item>\n        <ion-item no-lines *ngIf="property.rental == \'true\'">\n            <ion-label floating>Price Per Parking Bay (ZAR):</ion-label>\n            <ion-input formControlName="pricePerBay" type="number" value="{{ property.pricePerBay }}">{{ property.pricePerBay }}</ion-input>\n        </ion-item>\n        <hr>\n        <!-- End of selling/rental price -->\n\n        <!-- Start of extra costs section -->\n        <ion-item no-lines *ngIf="property.rental == \'false\'">\n            <ion-label><u>Overheads:</u></ion-label>\n        </ion-item>\n        <ion-item no-lines *ngIf="property.rental == \'true\'">\n            <ion-label><u>Additional Costs:</u></ion-label>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Rates (ZAR):</ion-label>\n            <ion-input formControlName="rates" type="number" value="{{ property.rates }}">{{ property.rates }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Levy (ZAR):</ion-label>\n            <ion-input formControlName="levy" type="number" value="{{ property.levy }}">{{ property.levy }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Contribution to Service Costs (ZAR):</ion-label>\n            <ion-input formControlName="serviceCosts" type="number" value="{{ property.serviceCosts }}">{{ property.serviceCosts }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Other Overheads:</ion-label>\n            <ion-input formControlName="otherOverheads" type="text" value="{{ property.otherOverheads }}">{{ property.otherOverheads }}</ion-input>\n        </ion-item>\n        <hr>\n        <!-- End of extra costs section -->\n\n        <!-- Start of VAT section -->\n\n        <ion-item no-lines>\n            <ion-label><u>Is The of Owner of the Property a VAT Vendor?</u></ion-label>\n        </ion-item>\n        <ion-list radio-group formControlName="VAT" ngDefaultControl [(ngModel)]="property.VAT">\n            <ion-item no-lines *ngIf="property.rental == \'false\'">\n                <ion-label>Yes</ion-label>\n                <ion-radio item-left type="radio" value="Owner Is A VAT Vendor"></ion-radio>\n            </ion-item>\n            <ion-item no-lines *ngIf="property.rental == \'false\'">\n                <ion-label>No</ion-label>\n                <ion-radio item-left type="radio" value="Owner Is Not A VAT Vendor"></ion-radio>\n            </ion-item>\n            <ion-item>\n                <p>If No, Transfer Duty Applies</p>\n            </ion-item>\n            <ion-item no-lines *ngIf="property.rental == \'true\'">\n                <ion-label>Yes</ion-label>\n                <ion-radio item-left type="radio" value="Owner Is A VAT Vendor"></ion-radio>\n            </ion-item>\n            <ion-item no-lines *ngIf="property.rental == \'true\'">\n                <ion-label>No</ion-label>\n                <ion-radio item-left type="radio" value="Owner Is A Not VAT Vendor"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label floating>Owner VAT Number:</ion-label>\n                <ion-input formControlName="ownerVatNumber" type="text" value="{{ property.ownerVatNumber }}">{{ property.ownerVatNumber }}</ion-input>\n            </ion-item>\n        </ion-list>\n        <ion-list radio-group formControlName="thirdParty" *ngIf="property.rental == \'false\'" ngDefaultControl [(ngModel)]="property.thirdParty">\n            <ion-item no-lines>\n                <ion-label><u>Are The Presmises Tenanted By A Third Party?</u></ion-label>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Yes</ion-label>\n                <ion-radio item-left type="radio" value="Third Party Tenant"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>No</ion-label>\n                <ion-radio item-left type="radio" value="No Third Party Tenant"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <p> If no, Transaction Cannot Be Zero Rated</p>\n            </ion-item>\n        </ion-list>\n        <hr>\n        <!-- End of VAT section -->\n\n        <!-- Start of Rental Options -->\n        <ion-item no-lines *ngIf="property.rental == \'true\'">\n            <ion-label><u>Lease Terms</u></ion-label>\n        </ion-item>\n        <ion-item no-lines *ngIf="property.rental == \'true\'">\n            <ion-label floating>% Annual Escalation in Rent:</ion-label>\n            <ion-input formControlName="escalation" type="text" value="{{ property.escalation }}">{{ property.escalation }}</ion-input>\n        </ion-item>\n        <ion-item no-lines *ngIf="property.rental == \'true\'">\n            <ion-label floating>Minimum Term Of Lease:</ion-label>\n            <ion-input formControlName="minLeaseTerm" type="text" value="{{ property.minLeaseTerm }}">{{ property.minLeaseTerm }}</ion-input>\n        </ion-item>\n        <ion-item no-lines *ngIf="property.rental == \'true\'">\n            <ion-label floating>Maximum Term Of Lease:</ion-label>\n            <ion-input formControlName="maxLeaseTerm" type="text" value="{{ property.maxLeaseTerm }}">{{ property.maxLeaseTerm }}</ion-input>\n        </ion-item>\n        <hr>\n        <!-- End of Rental Options -->\n\n        <!-- Start of Property Description -->\n        <ion-item no-lines>\n            <ion-label><u>Property Description:</u></ion-label>\n        </ion-item>\n        <ion-textarea formControlName="description" placeholder="Describe the property here:" value="{{ property.description }}">\n            <p>{{ property.description }}</p>\n        </ion-textarea>\n        <hr>\n\n        <!-- Start of Uploaded Images -->\n        <ion-item no-lines>\n            <ion-label><u>Property Images:</u></ion-label>\n        </ion-item>\n        <ion-item no-lines>\n            <img src="{{ property.img1 }}">\n            <ion-input hidden formControlName="img1" type="text" value="{{ property.img1 }}">{{ property.img1 }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <img src="{{ property.img2 }}">\n            <ion-input hidden formControlName="img2" type="text" value="{{ property.img2 }}">{{ property.img2 }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <img src="{{ property.img3 }}">\n            <ion-input hidden formControlName="img3" type="text" value="{{ property.img3 }}">{{ property.img3 }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <img src="{{ property.img4 }}">\n            <ion-input hidden formControlName="img4" type="text" value="{{ property.img4 }}">{{ property.img4 }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <img src="{{ property.img5 }}">\n            <ion-input hidden formControlName="img5" type="text" value="{{ property.img5 }}">{{ property.img5 }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <img src="{{ property.img6 }}">\n            <ion-input hidden formControlName="img6" type="text" value="{{ property.img6 }}">{{ property.img6 }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <img src="{{ property.img7 }}">\n            <ion-input hidden formControlName="img7" type="text" value="{{ property.img7 }}">{{ property.img7 }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <img src="{{ property.img8 }}">\n            <ion-input hidden formControlName="img8" type="text" value="{{ property.img8 }}">{{ property.img8 }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <img src="{{ property.img9 }}">\n            <ion-input hidden formControlName="img9" type="text" value="{{ property.img9 }}">{{ property.img9 }}</ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <img src="{{ property.img10 }}">\n            <ion-input hidden formControlName="img10" type="text" value="{{ property.img10 }}">{{ property.img10 }}</ion-input>\n        </ion-item>\n        <!-- End of Uploaded Images -->\n\n        <!-- Start of Submission Button -->\n\n        <button *ngIf="property.rental == \'false\'" ion-button (click)="submitPropertyToListingSale(property)">Submit to Sale Directory</button>\n        <button *ngIf="property.rental == \'true\'" ion-button (click)="submitPropertyToListingRental(property)">Submit to Rental Directory</button>\n\n        <!-- End of Submission Button -->\n        <!--End of form-->\n        <button ion-button (click)="deleteConfirm()">Delete Listing</button>\n    </form>\n\n    <!--\n         <input type="file" (change)="onFileSelected($event)" /> \n         <button ion-button block type="button" (click)="onUpload()">Upload</button> End of file upload\n        <button ion-button block type="submit">Submit Property For Review</button> -->\n\n    <!--Don\'t forget to create inputs for the stuff you aren\'t allowing to be changed on this form.-->\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/review-property-details/review-property-details.html"*/,
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

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainRentSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(44);
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

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetroListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__suburb_list_suburb_list__ = __webpack_require__(196);
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

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuburbListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__property_submission_property_submission__ = __webpack_require__(108);
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

/***/ 197:
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

/***/ 209:
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
webpackEmptyAsyncContext.id = 209;

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/listings/listings.module": [
		771,
		12
	],
	"../pages/login/login.module": [
		772,
		11
	],
	"../pages/main-buy-search/main-buy-search.module": [
		773,
		10
	],
	"../pages/main-rent-search/main-rent-search.module": [
		774,
		9
	],
	"../pages/metro-list/metro-list.module": [
		775,
		8
	],
	"../pages/profile/profile.module": [
		776,
		7
	],
	"../pages/property-submission/property-submission.module": [
		777,
		6
	],
	"../pages/reset-password/reset-password.module": [
		778,
		0
	],
	"../pages/review-property-details/review-property-details.module": [
		779,
		5
	],
	"../pages/review-submissions/review-submissions.module": [
		780,
		4
	],
	"../pages/sale-listing-detail/sale-listing-detail.module": [
		781,
		3
	],
	"../pages/suburb-detail/suburb-detail.module": [
		782,
		2
	],
	"../pages/suburb-list/suburb-list.module": [
		783,
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
webpackAsyncContext.id = 253;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__review_submissions_review_submissions__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(50);
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
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Your Profile</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <p>User Email Address: {{(profile | async)?.email}}</p>\n    <button *ngIf="(profile | async)?.admin" ion-button full (click)="reviewSubmissions()">Review Submissions</button>\n\n    <button ion-button full color="primary" (click)="logout()">Logout</button>\n\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/profile/profile.html"*/,
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

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(38);
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

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validators_email__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact__ = __webpack_require__(464);
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

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(44);
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

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__ = __webpack_require__(100);
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

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validators_email__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app__ = __webpack_require__(254);
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

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuburbDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(518);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(763);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_storage__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_main_buy_search_main_buy_search__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_main_rent_search_main_rent_search__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_property_submission_property_submission__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_metro_list_metro_list__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_suburb_list_suburb_list__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_suburb_detail_suburb_detail__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_file_chooser__ = __webpack_require__(764);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common_http__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ionic_gallery_modal__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_login_login__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_signup_signup__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_profile_profile__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_review_submissions_review_submissions__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_review_property_details_review_property_details__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_listings_listings__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_sale_listing_detail_sale_listing_detail__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angularfire2__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angularfire2_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_status_bar__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_splash_screen__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_auth_auth__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_file_transfer__ = __webpack_require__(765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_file__ = __webpack_require__(766);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_camera__ = __webpack_require__(767);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_in_app_browser__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__node_modules_ng2_file_upload__ = __webpack_require__(768);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__node_modules_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_36__node_modules_ng2_file_upload__);
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
}(__WEBPACK_IMPORTED_MODULE_34__ionic_native_camera__["a" /* Camera */]));
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
                __WEBPACK_IMPORTED_MODULE_22__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_metro_list_metro_list__["a" /* MetroListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_suburb_list_suburb_list__["a" /* SuburbListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_suburb_detail_suburb_detail__["a" /* SuburbDetailPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_review_submissions_review_submissions__["a" /* ReviewSubmissionsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_review_property_details_review_property_details__["a" /* ReviewPropertyDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_listings_listings__["a" /* ListingsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_sale_listing_detail_sale_listing_detail__["a" /* SaleListingDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
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
                __WEBPACK_IMPORTED_MODULE_27_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_28_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_storage__["b" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_36__node_modules_ng2_file_upload__["FileUploadModule"],
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
                __WEBPACK_IMPORTED_MODULE_22__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_metro_list_metro_list__["a" /* MetroListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_suburb_list_suburb_list__["a" /* SuburbListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_suburb_detail_suburb_detail__["a" /* SuburbDetailPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_review_submissions_review_submissions__["a" /* ReviewSubmissionsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_review_property_details_review_property_details__["a" /* ReviewPropertyDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_listings_listings__["a" /* ListingsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_sale_listing_detail_sale_listing_detail__["a" /* SaleListingDetailPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_31__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_6__providers_data__["a" /* DataProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 736:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 336,
	"./af.js": 336,
	"./ar": 337,
	"./ar-dz": 338,
	"./ar-dz.js": 338,
	"./ar-kw": 339,
	"./ar-kw.js": 339,
	"./ar-ly": 340,
	"./ar-ly.js": 340,
	"./ar-ma": 341,
	"./ar-ma.js": 341,
	"./ar-sa": 342,
	"./ar-sa.js": 342,
	"./ar-tn": 343,
	"./ar-tn.js": 343,
	"./ar.js": 337,
	"./az": 344,
	"./az.js": 344,
	"./be": 345,
	"./be.js": 345,
	"./bg": 346,
	"./bg.js": 346,
	"./bm": 347,
	"./bm.js": 347,
	"./bn": 348,
	"./bn.js": 348,
	"./bo": 349,
	"./bo.js": 349,
	"./br": 350,
	"./br.js": 350,
	"./bs": 351,
	"./bs.js": 351,
	"./ca": 352,
	"./ca.js": 352,
	"./cs": 353,
	"./cs.js": 353,
	"./cv": 354,
	"./cv.js": 354,
	"./cy": 355,
	"./cy.js": 355,
	"./da": 356,
	"./da.js": 356,
	"./de": 357,
	"./de-at": 358,
	"./de-at.js": 358,
	"./de-ch": 359,
	"./de-ch.js": 359,
	"./de.js": 357,
	"./dv": 360,
	"./dv.js": 360,
	"./el": 361,
	"./el.js": 361,
	"./en-au": 362,
	"./en-au.js": 362,
	"./en-ca": 363,
	"./en-ca.js": 363,
	"./en-gb": 364,
	"./en-gb.js": 364,
	"./en-ie": 365,
	"./en-ie.js": 365,
	"./en-il": 366,
	"./en-il.js": 366,
	"./en-nz": 367,
	"./en-nz.js": 367,
	"./eo": 368,
	"./eo.js": 368,
	"./es": 369,
	"./es-do": 370,
	"./es-do.js": 370,
	"./es-us": 371,
	"./es-us.js": 371,
	"./es.js": 369,
	"./et": 372,
	"./et.js": 372,
	"./eu": 373,
	"./eu.js": 373,
	"./fa": 374,
	"./fa.js": 374,
	"./fi": 375,
	"./fi.js": 375,
	"./fo": 376,
	"./fo.js": 376,
	"./fr": 377,
	"./fr-ca": 378,
	"./fr-ca.js": 378,
	"./fr-ch": 379,
	"./fr-ch.js": 379,
	"./fr.js": 377,
	"./fy": 380,
	"./fy.js": 380,
	"./gd": 381,
	"./gd.js": 381,
	"./gl": 382,
	"./gl.js": 382,
	"./gom-latn": 383,
	"./gom-latn.js": 383,
	"./gu": 384,
	"./gu.js": 384,
	"./he": 385,
	"./he.js": 385,
	"./hi": 386,
	"./hi.js": 386,
	"./hr": 387,
	"./hr.js": 387,
	"./hu": 388,
	"./hu.js": 388,
	"./hy-am": 389,
	"./hy-am.js": 389,
	"./id": 390,
	"./id.js": 390,
	"./is": 391,
	"./is.js": 391,
	"./it": 392,
	"./it.js": 392,
	"./ja": 393,
	"./ja.js": 393,
	"./jv": 394,
	"./jv.js": 394,
	"./ka": 395,
	"./ka.js": 395,
	"./kk": 396,
	"./kk.js": 396,
	"./km": 397,
	"./km.js": 397,
	"./kn": 398,
	"./kn.js": 398,
	"./ko": 399,
	"./ko.js": 399,
	"./ky": 400,
	"./ky.js": 400,
	"./lb": 401,
	"./lb.js": 401,
	"./lo": 402,
	"./lo.js": 402,
	"./lt": 403,
	"./lt.js": 403,
	"./lv": 404,
	"./lv.js": 404,
	"./me": 405,
	"./me.js": 405,
	"./mi": 406,
	"./mi.js": 406,
	"./mk": 407,
	"./mk.js": 407,
	"./ml": 408,
	"./ml.js": 408,
	"./mr": 409,
	"./mr.js": 409,
	"./ms": 410,
	"./ms-my": 411,
	"./ms-my.js": 411,
	"./ms.js": 410,
	"./mt": 412,
	"./mt.js": 412,
	"./my": 413,
	"./my.js": 413,
	"./nb": 414,
	"./nb.js": 414,
	"./ne": 415,
	"./ne.js": 415,
	"./nl": 416,
	"./nl-be": 417,
	"./nl-be.js": 417,
	"./nl.js": 416,
	"./nn": 418,
	"./nn.js": 418,
	"./pa-in": 419,
	"./pa-in.js": 419,
	"./pl": 420,
	"./pl.js": 420,
	"./pt": 421,
	"./pt-br": 422,
	"./pt-br.js": 422,
	"./pt.js": 421,
	"./ro": 423,
	"./ro.js": 423,
	"./ru": 424,
	"./ru.js": 424,
	"./sd": 425,
	"./sd.js": 425,
	"./se": 426,
	"./se.js": 426,
	"./si": 427,
	"./si.js": 427,
	"./sk": 428,
	"./sk.js": 428,
	"./sl": 429,
	"./sl.js": 429,
	"./sq": 430,
	"./sq.js": 430,
	"./sr": 431,
	"./sr-cyrl": 432,
	"./sr-cyrl.js": 432,
	"./sr.js": 431,
	"./ss": 433,
	"./ss.js": 433,
	"./sv": 434,
	"./sv.js": 434,
	"./sw": 435,
	"./sw.js": 435,
	"./ta": 436,
	"./ta.js": 436,
	"./te": 437,
	"./te.js": 437,
	"./tet": 438,
	"./tet.js": 438,
	"./tg": 439,
	"./tg.js": 439,
	"./th": 440,
	"./th.js": 440,
	"./tl-ph": 441,
	"./tl-ph.js": 441,
	"./tlh": 442,
	"./tlh.js": 442,
	"./tr": 443,
	"./tr.js": 443,
	"./tzl": 444,
	"./tzl.js": 444,
	"./tzm": 445,
	"./tzm-latn": 446,
	"./tzm-latn.js": 446,
	"./tzm.js": 445,
	"./ug-cn": 447,
	"./ug-cn.js": 447,
	"./uk": 448,
	"./uk.js": 448,
	"./ur": 449,
	"./ur.js": 449,
	"./uz": 450,
	"./uz-latn": 451,
	"./uz-latn.js": 451,
	"./uz.js": 450,
	"./vi": 452,
	"./vi.js": 452,
	"./x-pseudo": 453,
	"./x-pseudo.js": 453,
	"./yo": 454,
	"./yo.js": 454,
	"./zh-cn": 455,
	"./zh-cn.js": 455,
	"./zh-hk": 456,
	"./zh-hk.js": 456,
	"./zh-tw": 457,
	"./zh-tw.js": 457
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
webpackContext.id = 736;

/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(44);
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

/***/ })

},[510]);
//# sourceMappingURL=main.js.map