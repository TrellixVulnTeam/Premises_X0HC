import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireDatabaseModule, AngularFireList } from 'angularfire2/database';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated'
import firebase from 'firebase';
import { ReviewPropertyDetailsPage } from '../review-property-details/review-property-details';

@IonicPage()
@Component({
  selector: 'page-review-submissions',
  templateUrl: 'review-submissions.html',
})
export class ReviewSubmissionsPage {

  public submittedList: Array<any>;
  public loadedSubmittedList: Array<any>;
  public submittedRef: firebase.database.Query;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public AFdb: AngularFireDatabase,
  ) {


    this.submittedRef = firebase.database().ref('/Admin/SubmittedProperties');

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewSubmissionsPage');
  }

toReviewDetails(property) {
  this.navCtrl.push(ReviewPropertyDetailsPage, property)
}

}
