import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MainBuySearchPage } from '../pages/main-buy-search/main-buy-search';
import { MainRentSearchPage } from '../pages/main-rent-search/main-rent-search';
import { PropertySubmissionPage } from '../pages/property-submission/property-submission'

import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

import { ProfilePage } from '../pages/profile/profile'

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBPIuf4cdQ1TIII2tJ0YmCbdcdH99JGkHc",
  authDomain: "premises-1bc9e.firebaseapp.com",
  databaseURL: "https://premises-1bc9e.firebaseio.com",
  projectId: "premises-1bc9e",
  storageBucket: "premises-1bc9e.appspot.com",
  messagingSenderId: "1059170929031"
};

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
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
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
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
