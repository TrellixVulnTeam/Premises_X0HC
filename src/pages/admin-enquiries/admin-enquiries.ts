import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireDatabaseModule, AngularFireList } from 'angularfire2/database';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated'
import firebase from 'firebase';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the AdminEnquiriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-enquiries',
  templateUrl: 'admin-enquiries.html',
})
export class AdminEnquiriesPage {

  public submittedList: Array<any>;
  public loadedSubmittedList: Array<any>;
  public submittedRef: firebase.database.Query;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public AFdb: AngularFireDatabase,
    public alertCtrl: AlertController) {

    this.submittedRef = firebase.database().ref('/Admin/Enquiries');

    this.submittedRef.on('value', submittedList => {
      let properties = [];
      submittedList.forEach(property => {
        let item = property.val();
        item.key = property.key;
        properties.push(item);
        return false;
      });
      this.submittedList = properties;
      this.loadedSubmittedList = properties;
      console.log("done loading")
    });

  }

  delete(property) {
    let confirm = this.alertCtrl.create({
      title: 'Really Delete?',
      message: 'You cannot recover this query after deleting.',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.AFdb.list(`/Admin/Enquiries/` + property.key).remove();
          }
        }
      ]
    });
    confirm.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminEnquiriesPage');
  }

}
