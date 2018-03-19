import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login'
import { ReviewSubmissionsPage } from '../review-submissions/review-submissions' 
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public authUser: any;
  uid: any;
  email: any;
  profile: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public authData: AuthProvider,
    afAuth: AngularFireAuth,
    public AFdb: AngularFireDatabase,) {

    const authObserver = afAuth.authState.subscribe(user => {
      if (user) {
        this.uid = user.uid;
        this.email = user.email;
        this.profile = this.AFdb.object('/users/' + this.uid).valueChanges();
        console.log("auth")
        // this.navCtrl.setRoot(TabsPage);  
        authObserver.unsubscribe();
      } else {
        this.navCtrl.setRoot(LoginPage);
        authObserver.unsubscribe();
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  logout() {
    this.authData.logoutUser()
    this.navCtrl.setRoot(LoginPage);
    console.log("Logged Out!")
  }

  reviewSubmissions() {
    this.navCtrl.push(ReviewSubmissionsPage)
  }

}
