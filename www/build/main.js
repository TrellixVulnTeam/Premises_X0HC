webpackJsonp([6],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_profile__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(106);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/tabs/tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Profile" tabIcon="person"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_buy_search_main_buy_search__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_rent_search_main_rent_search__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__property_submission_property_submission__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(35);
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
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/home/home.html"*/'<ion-header>\n    <!-- <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar> -->\n</ion-header>\n\n<ion-content class="masters">\n    <div class="landing-container">\n        <img class="logo" src="./assets/imgs/logo.png" />\n        <h2>Welcome to Premises!</h2>\n        <p>\n            Click the option that best describes you below:\n        </p>\n        <ion-grid>\n            <ion-row>\n                <!--I need to rent out a property-->\n                <ion-col tappable col-6 col-sm>\n                    <ion-card (click)="toMainRentSearch()">\n                        <img src="./assets/imgs/logo.png" />\n                        <ion-card-header text-wrap>\n                            Need to Rent?\n                        </ion-card-header>\n                        <ion-card-content>\n                            Click Here\n                        </ion-card-content>\n                    </ion-card>\n                </ion-col>\n                <!--I need to buy a property-->\n                <ion-col tappable col-6 col-sm>\n                    <ion-card (click)="toMainBuySearch()">\n                        <img src="./assets/imgs/logo.png" />\n                        <ion-card-header text-wrap>\n                            Need to Buy?\n                        </ion-card-header>\n                        <ion-card-content>\n                            Click Here\n                        </ion-card-content>\n                    </ion-card>\n                </ion-col>\n                <!--I want to sell a property-->\n                <ion-col tappable col-6 col-sm>\n                    <ion-card (click)="toPropertySubmission()">\n                        <img src=" ./assets/imgs/logo.png " />\n                        <ion-card-header text-wrap>\n                            Need to Sell?\n                        </ion-card-header>\n                        <ion-card-content>\n                            Click Here\n                        </ion-card-content>\n                    </ion-card>\n                </ion-col>\n                <!--I want to rent out a property-->\n                <ion-col tappable col-6 col-sm>\n                    <ion-card (click)="toPropertySubmission()">\n                        <img src=" ./assets/imgs/logo.png " />\n                        <ion-card-header text-wrap>\n                            Need to find a tenant?\n                        </ion-card-header>\n                        <ion-card-content>\n                            Click Here\n                        </ion-card-content>\n                    </ion-card>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n        <button ion-button type="button" mode="ios" block color="dark" outline margin-top>Get In Touch With Us</button>\n    </div>\n    <p align="center ">Copyright 2018: Premises (PTY) Ltd</p>\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainBuySearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(35);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-main-buy-search',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/main-buy-search/main-buy-search.html"*/'<!--\n  Generated template for the MainBuySearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>main-buy-search</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/main-buy-search/main-buy-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MainBuySearchPage);
    return MainBuySearchPage;
}());

//# sourceMappingURL=main-buy-search.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainRentSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(35);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-main-rent-search',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/main-rent-search/main-rent-search.html"*/'<!--\n  Generated template for the MainRentSearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>main-rent-search</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/main-rent-search/main-rent-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MainRentSearchPage);
    return MainRentSearchPage;
}());

//# sourceMappingURL=main-rent-search.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertySubmissionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(17);
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
    function PropertySubmissionPage(navCtrl, navParams, authData, afAuth, AFdb, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authData = authData;
        this.afAuth = afAuth;
        this.AFdb = AFdb;
        this.formBuilder = formBuilder;
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
        this.adminDB = this.AFdb.list('/Admin/SubmittedProperties/');
        this.propertySubmissionForm = formBuilder.group({
            fullName: [''],
            agencyName: [''],
            premisesType: [''],
            otherProperty: [''],
            //Address Fields
            unitNumber: [''],
            complexName: [''],
            streetNumber: [''],
            streetName: [''],
            suburb: [''],
            city: [''],
            province: [''],
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
            uploadPhotos: [''],
        });
    }
    PropertySubmissionPage.prototype.submitProperty = function () {
        this.adminDB.push(this.propertySubmissionForm.value);
    };
    ;
    PropertySubmissionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PropertySubmissionPage');
    };
    PropertySubmissionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-property-submission',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/property-submission/property-submission.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>Submit Your Property</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form [formGroup]="propertySubmissionForm" (submit)="submitProperty()">\n        <ion-label><b><u>General Details:</u></b></ion-label>\n        <ion-item no-lines>\n            <ion-label floating>Full Name:</ion-label>\n            <ion-input formControlName="fullName" type="text"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Agency Name:</ion-label>\n            <ion-input formControlName="agencyName" type="text"></ion-input>\n        </ion-item>\n        <hr>\n        <ion-list radio-group formControlName="premisesType">\n            <ion-label><b><u>Premises Type:</u></b></ion-label>\n            <ion-item no-lines>\n                <ion-label>Mini factory up to 500sqm</ion-label>\n                <ion-radio item-left type="radio" value="Mini factory up to 500sqm"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>A Factory/Warehouse over 500sqm</ion-label>\n                <ion-radio item-left type="radio" value="A factory/warehouse over 500 sqm"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Offices</ion-label>\n                <ion-radio item-left type="radio" value="Offices"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Retail</ion-label>\n                <ion-radio item-left type="radio" value="Retail"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>A mixed use building</ion-label>\n                <ion-radio item-left type="radio" value="A mixed use building"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>A stand alone house to be used as offices</ion-label>\n                <ion-radio item-left type="radio" value="A stand alone house to be used as offices"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Other</ion-label>\n                <ion-radio item-left type="radio" value="Other"></ion-radio>\n            </ion-item>\n            <ion-input formControlName="otherProperty" type="text" placeholder="Description of property if other."></ion-input>\n        </ion-list>\n        <hr>\n        <ion-item no-lines>\n            <ion-label><u>Property Address:</u></ion-label>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Unit Number:</ion-label>\n            <ion-input formControlName="unitNumber" type="text"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Complex Name:</ion-label>\n            <ion-input formControlName="complexName" type="text"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Street Number:</ion-label>\n            <ion-input formControlName="streetNumber" type="text"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Street Name:</ion-label>\n            <ion-input formControlName="streetName" type="text"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Suburb/Town:</ion-label>\n            <ion-input formControlName="suburb" type="text"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>City:</ion-label>\n            <ion-input formControlName="city" type="text"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Province:</ion-label>\n            <ion-input formControlName="province" type="text"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Postal Code:</ion-label>\n            <ion-input formControlName="postalCode" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>ERF Number:</ion-label>\n            <ion-input formControlName="erf" type="text"></ion-input>\n        </ion-item>\n        <hr>\n        <ion-item no-lines>\n            <ion-label><u>Property Sizes:</u></ion-label>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Factory/Warehouse Size (sqm):</ion-label>\n            <ion-input formControlName="factorySize" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Office Size (sqm):</ion-label>\n            <ion-input formControlName="officeSize" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Total Factory and Office Size (sqm):</ion-label>\n            <ion-input formControlName="totalSize" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Shop Size (sqm) (If Retail):</ion-label>\n            <ion-input formControlName="shopSize" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Undercover Parking (Bays):</ion-label>\n            <ion-input formControlName="underCoverParking" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Open Parking (Bays):</ion-label>\n            <ion-input formControlName="openParking" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Usable Yard (sqm):</ion-label>\n            <ion-input formControlName="usableYard" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Size of ERF (sqm) (If Freehold):</ion-label>\n            <ion-input formControlName="sizeOfERF" type="number"></ion-input>\n        </ion-item>\n        <hr>\n        <ion-item no-lines>\n            <ion-label><u>Heights:</u></ion-label>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Floor to Roof in Factory/Warehouse:</ion-label>\n            <ion-input formControlName="floorToCeilingHeights" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Height of Acccess Door (Roller Shutter):</ion-label>\n            <ion-input formControlName="floorToCeilingHeights" type="number"></ion-input>\n        </ion-item>\n        <hr>\n        <ion-item no-lines>\n            <ion-label><u>Truck Access:</u></ion-label>\n        </ion-item>\n        <ion-list radio-group formControlName="truckAccess">\n            <ion-item no-lines>\n                <ion-label>Rigid Trucks Be Offloaded at the premises</ion-label>\n                <ion-radio item-left type="radio" value="Rigid Trucks Only"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Semi Trailers Be Offloaded at the premises</ion-label>\n                <ion-radio item-left type="radio" value="Up To Semi Trucks"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Interlinks Be Offloaded at the premises</ion-label>\n                <ion-radio item-left type="radio" value="Up To Interlinks"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>None of the above applies.</ion-label>\n                <ion-radio item-left type="radio" value="No Truck Can Be Offloaded"></ion-radio>\n            </ion-item>\n        </ion-list>\n        <hr>\n        <ion-item no-lines>\n            <ion-label><u>Power:</u></ion-label>\n        </ion-item>\n        <ion-list radio-group formControlName="power">\n            <ion-item no-lines>\n                <ion-label>Single Phase</ion-label>\n                <ion-radio item-left type="radio" value="Single Phase"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Three Phase</ion-label>\n                <ion-radio item-left type="radio" value="Three Phase"></ion-radio>\n            </ion-item>\n        </ion-list>\n        <ion-item no-lines>\n            <ion-label floating>Amperage:</ion-label>\n            <ion-input formControlName="amperage" type="number"></ion-input>\n        </ion-item>\n        <p>Please check your circuit breaker for the amperage.</p>\n        <hr>\n        <ion-item no-lines>\n            <ion-label><u>Overheads:</u></ion-label>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Rates (ZAR):</ion-label>\n            <ion-input formControlName="rates" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Levy (ZAR):</ion-label>\n            <ion-input formControlName="levy" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Contribution to Service Costs (ZAR):</ion-label>\n            <ion-input formControlName="serviceCosts" type="number"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Other Overheads:</ion-label>\n            <ion-input formControlName="otherOverheads" type="text"></ion-input>\n        </ion-item>\n        <hr>\n        <ion-item no-lines>\n            <ion-label><u>Cost:</u></ion-label>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label floating>Selling Price (ZAR):</ion-label>\n            <ion-input formControlName="sellingPrice" type="number"></ion-input>\n        </ion-item>\n        <hr>\n        <ion-item no-lines>\n            <ion-label><u>VAT:</u></ion-label>\n        </ion-item>\n        <ion-list radio-group formControlName="VAT">\n            <ion-item no-lines>\n                <ion-label>Owner of Property is a VAT Vendor</ion-label>\n                <ion-radio item-left type="radio" value="Owner Is A VAT Vendor"></ion-radio>\n            </ion-item>\n            <ion-item no-lines>\n                <p>Transfer Duty Applies</p>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>Owner of Property is not a VAT Vendor</ion-label>\n                <ion-radio item-left type="radio" value="Owner Is Not A VAT Vendor"></ion-radio>\n            </ion-item>\n            <ion-item>\n                <p>Transaction Cannot Be Zero Rated</p>\n            </ion-item>\n        </ion-list>\n        <hr>\n        <ion-item no-lines>\n            <ion-label><u>Property Description:</u></ion-label>\n        </ion-item>\n        <ion-textarea formControlName="description" placeholder="Describe the property here:"></ion-textarea>\n        <hr>\n        <ion-item no-lines>\n            <ion-label><u>Upload Photos:</u></ion-label>\n        </ion-item>\n        <hr>\n        <!-- Submit Below -->\n        <button ion-button block type="submit">Submit Property For Review</button>\n    </form>\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/property-submission/property-submission.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]])
    ], PropertySubmissionPage);
    return PropertySubmissionPage;
}());

//# sourceMappingURL=property-submission.js.map

/***/ }),

/***/ 140:
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

/***/ 152:
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
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		448,
		5
	],
	"../pages/main-buy-search/main-buy-search.module": [
		449,
		4
	],
	"../pages/main-rent-search/main-rent-search.module": [
		450,
		3
	],
	"../pages/profile/profile.module": [
		452,
		2
	],
	"../pages/property-submission/property-submission.module": [
		451,
		1
	],
	"../pages/reset-password/reset-password.module": [
		453,
		0
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
webpackAsyncContext.id = 195;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(35);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Your Profile</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <button ion-button full (click)="logout()">Logout</button>\n\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(35);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validators_email__ = __webpack_require__(140);
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
    function SignupPage(navCtrl, navParams, authData, formBuilder, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authData = authData;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.signupForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__validators_email__["a" /* EmailValidator */].isValid])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.signupUser = function () {
        var _this = this;
        if (!this.signupForm.valid) {
            console.log(this.signupForm.value);
        }
        else {
            this.authData.signupUser(this.signupForm.value.email, this.signupForm.value.password)
                .then(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    var errorMessage = error.message;
                    var alert = _this.alertCtrl.create({
                        message: errorMessage,
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
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/signup/signup.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>\n            Create an Account\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <form [formGroup]="signupForm" (submit)="signupUser()" novalidate>\n\n        <ion-item>\n            <ion-label stacked>Email</ion-label>\n            <ion-input formControlName="email" type="email" placeholder="Your email address" [class.invalid]="!signupForm.controls.email.valid && signupForm.controls.email.dirty"></ion-input>\n        </ion-item>\n        <ion-item class="error-message" *ngIf="!signupForm.controls.email.valid  && signupForm.controls.email.dirty">\n            <p>Please enter a valid email.</p>\n        </ion-item>\n\n        <ion-item>\n            <ion-label stacked>Password</ion-label>\n            <ion-input formControlName="password" type="password" placeholder="Your password" [class.invalid]="!signupForm.controls.password.valid && signupForm.controls.password.dirty"></ion-input>\n        </ion-item>\n        <ion-item class="error-message" *ngIf="!signupForm.controls.password.valid  && signupForm.controls.password.dirty">\n            <p>Your password needs more than 6 characters.</p>\n        </ion-item>\n\n        <button ion-button block type="submit">\n      Create an Account\n    </button>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(30);
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
    AuthProvider.prototype.signupUser = function (newEmail, newPassword) {
        return this.afAuth.auth.createUserWithEmailAndPassword(newEmail, newPassword);
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(312);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_main_buy_search_main_buy_search__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_main_rent_search_main_rent_search__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_property_submission_property_submission__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_auth_auth__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var firebaseConfig = {
    apiKey: "AIzaSyBPIuf4cdQ1TIII2tJ0YmCbdcdH99JGkHc",
    authDomain: "premises-1bc9e.firebaseapp.com",
    databaseURL: "https://premises-1bc9e.firebaseio.com",
    projectId: "premises-1bc9e",
    storageBucket: "premises-1bc9e.appspot.com",
    messagingSenderId: "1059170929031"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_main_buy_search_main_buy_search__["a" /* MainBuySearchPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_main_rent_search_main_rent_search__["a" /* MainRentSearchPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_property_submission_property_submission__["a" /* PropertySubmissionPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main-buy-search/main-buy-search.module#MainBuySearchPageModule', name: 'MainBuySearchPage', segment: 'main-buy-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main-rent-search/main-rent-search.module#MainRentSearchPageModule', name: 'MainRentSearchPage', segment: 'main-rent-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/property-submission/property-submission.module#PropertySubmissionPageModule', name: 'PropertySubmissionPage', segment: 'property-submission', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-password/reset-password.module#ResetPasswordPageModule', name: 'ResetPasswordPage', segment: 'reset-password', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__["b" /* AngularFireAuthModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_main_buy_search_main_buy_search__["a" /* MainBuySearchPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_main_rent_search_main_rent_search__["a" /* MainRentSearchPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_property_submission_property_submission__["a" /* PropertySubmissionPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__["a" /* ProfilePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_auth_auth__["a" /* AuthProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validators_email__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact__ = __webpack_require__(247);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
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

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(35);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Premises/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/LukeVenter/Desktop/Premises/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[291]);
//# sourceMappingURL=main.js.map