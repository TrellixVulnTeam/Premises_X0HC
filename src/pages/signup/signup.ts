import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireDatabaseModule, AngularFireList } from 'angularfire2/database';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import { EmailValidator } from '../../validators/email';
import { LoginPage } from '../login/login'
import * as firebase from 'firebase/app';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {


  public signupForm: FormGroup;
  public loading: Loading;
  public adminDB: AngularFireList<any>;
  user: any = {};


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public authData: AuthProvider,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public AFdb: AngularFireDatabase,
    public alertCtrl: AlertController) {

    this.signupForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
    this.adminDB = this.AFdb.list('/users/')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signupUser(user) {
    let email = this.user.email;
    let pass = this.user.password;
    this.authData.signupUser(email, pass)
      .then((regUser) => {
        console.log("Register succesfull ----> ", regUser);
          let userInfo = {
            date: firebase.database.ServerValue.TIMESTAMP,
            userID: regUser.uid,
            email: this.user.email,
          }; //user info
        const updateUser = this.AFdb.list('/users');
          updateUser.update(regUser.uid, userInfo).then(() => {
            this.authData.loginUser(email, pass)
              .then(() => {
                console.log("Login succesfull");
                this.navCtrl.setRoot(HomePage);
              });
          });
        });
  }

 }


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