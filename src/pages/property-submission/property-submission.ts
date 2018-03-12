import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login'
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-property-submission',
  templateUrl: 'property-submission.html',
})
export class PropertySubmissionPage {

  public authUser: any;
  propertySubmissionForm: FormGroup;
  public adminDB: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public authData: AuthProvider,
    public afAuth: AngularFireAuth,
    public AFdb: AngularFireDatabase,
    public formBuilder: FormBuilder,) {
    const authObserver = afAuth.authState.subscribe(user => {
      if (user) {
        console.log("auth")
        // this.navCtrl.setRoot(TabsPage);  
        authObserver.unsubscribe();
      } else {
        this.navCtrl.setRoot(LoginPage);
        authObserver.unsubscribe();
      }
    });
  
    this.adminDB = this.AFdb.list('/Admin/SubmittedProperties/');

    this.propertySubmissionForm = formBuilder.group({
      fullName: [''],
      agencyName: [''],
    });
  }

  submitProperty() {
    this.adminDB.push(this.propertySubmissionForm.value)
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad PropertySubmissionPage');
  }

}
