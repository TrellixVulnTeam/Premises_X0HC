import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
//import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

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

import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

import { ProfilePage } from '../pages/profile/profile'

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';

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
    SuburbDetailPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

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
    SuburbDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    FileTransfer,
    FileTransferObject,
    File,
    Camera,
    ImagePicker,
    { provide: Camera, useClass: CameraMock }
  ]
})
export class AppModule {}
