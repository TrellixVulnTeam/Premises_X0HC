import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
//import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { DataProvider } from '../providers/data';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MainBuySearchPage } from '../pages/main-buy-search/main-buy-search';
import { MainRentSearchPage } from '../pages/main-rent-search/main-rent-search';
import { PropertySubmissionPage } from '../pages/property-submission/property-submission'
import { MetroListPage } from '../pages/metro-list/metro-list'
import { SuburbListPage } from '../pages/suburb-list/suburb-list'
import { SuburbDetailPage } from '../pages/suburb-detail/suburb-detail'
import { FileChooser } from '@ionic-native/file-chooser';
import { HttpClientModule } from '@angular/common/http';

import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

import { ProfilePage } from '../pages/profile/profile'
import { ReviewSubmissionsPage } from '../pages/review-submissions/review-submissions'

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { InAppBrowser } from '@ionic-native/in-app-browser';

// import { FileSelectDirective, FileDropDirective, FileUploader, FileUploadModule } from '../../node_modules/ng2-file-upload';

import { FileUploadModule } from '../../node_modules/ng2-file-upload';

const firebaseConfig = {
  apiKey: "AIzaSyBPIuf4cdQ1TIII2tJ0YmCbdcdH99JGkHc",
  authDomain: "premises-1bc9e.firebaseapp.com",
  databaseURL: "https://premises-1bc9e.firebaseio.com",
  projectId: "premises-1bc9e",
  storageBucket: "premises-1bc9e.appspot.com",
  messagingSenderId: "1059170929031"
};

class CameraMock extends Camera {
  getPicture(options) {
    return new Promise((resolve, reject) => {
      resolve("BASE_64_ENCODED_DATA_GOES_HERE");
    })
  }
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MainBuySearchPage,
    MainRentSearchPage,
    PropertySubmissionPage,
    LoginPage,
    SignupPage,
    ProfilePage,
    MetroListPage,
    SuburbListPage,
    SuburbDetailPage,
    ReviewSubmissionsPage,
    // FileSelectDirective,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    FileUploadModule,
    HttpClientModule,
    // FileSelectDirective,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MainBuySearchPage,
    MainRentSearchPage,
    PropertySubmissionPage,
    LoginPage,
    SignupPage,
    ProfilePage,
    MetroListPage,
    SuburbListPage,
    SuburbDetailPage,
    ReviewSubmissionsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    FileTransfer,
    FileTransferObject,
    FileChooser,
    File,
    InAppBrowser,
    DataProvider,
  ]
})
export class AppModule {}
