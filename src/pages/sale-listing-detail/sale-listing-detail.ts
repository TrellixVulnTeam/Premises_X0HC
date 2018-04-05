import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { GalleryModal } from 'ionic-gallery-modal';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireList } from 'angularfire2/database';
import { AlertController } from 'ionic-angular';
import { ListingsPage } from '../listings/listings';
import { HomePage } from '../home/home';
import { EnquirePage } from '../enquire/enquire'
import { ReviewSubmissionsPage } from '../review-submissions/review-submissions';

/**
 * Generated class for the SaleListingDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sale-listing-detail',
  templateUrl: 'sale-listing-detail.html',
})
export class SaleListingDetailPage {

  parameter1: string;
  image: string;
  public soldDB: AngularFireList<any>;


  public authUser: any;
  uid: any;
  email: any;
  profile: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public AFdb: AngularFireDatabase, afAuth: AngularFireAuth, public alertCtrl: AlertController,
) {
    this.parameter1 = navParams.get('param1');
   // console.log(this.parameter1)

  const authObserver = afAuth.authState.subscribe(user => {
    if (user) {
      this.uid = user.uid;
      this.email = user.email;
      this.profile = this.AFdb.object('/users/' + this.uid).valueChanges();
      console.log(" auth")
      // this.navCtrl.setRoot(TabsPage);  
      authObserver.unsubscribe();
    } else {
      console.log("no Auth!")
    }
  });
 

}
  ionViewDidLoad() {
    console.log('ionViewDidLoad SaleListingDetailPage');
  }

  enquirePage(parameter1) {
    this.navCtrl.push(EnquirePage, {
      param1: parameter1
    });
  }

  markAsSold(parameter1){
  this.soldDB = this.AFdb.list('/Admin/SoldProperties/')
  this.soldDB.push(this.parameter1)
  this.AFdb.list(`/ListedProperties/Sales/${parameter1.city}/` + parameter1.key).remove();
  this.navCtrl.setRoot(HomePage)
}

  archive(parameter1) {
    this.soldDB = this.AFdb.list('/Admin/Archive/')
    this.soldDB.push(this.parameter1)
    this.AFdb.list(`/ListedProperties/Sales/${parameter1.city}/` + parameter1.key).remove();
    this.navCtrl.setRoot(HomePage)
  }

  delete(parameter1) {
    let confirm = this.alertCtrl.create({
      title: 'Really Delete?',
      message: 'You cannot recover this listing after deleting.',
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
            this.AFdb.list(`/ListedProperties/Sales/${parameter1.city}/` + parameter1.key).remove();           
            this.navCtrl.setRoot(HomePage)
          }
        }
      ]
    });
    confirm.present();
  }

  openImage1(parameter1) {
    this.parameter1 = this.navParams.get('param1');
    this.image = parameter1.img1 //You need to pass the proper image.
    //console.log("NEW ==== getIndex="+getIndex);
    console.log(this.image);
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: [{ url: this.image}], 
     // initialSlide: getIndex
    });
    // console.log("getIndex="+getIndex);
    modal.present();
  }

  openImage2(parameter1) {
    this.parameter1 = this.navParams.get('param1');
    this.image = parameter1.img2 //You need to pass the proper image.
    //console.log("NEW ==== getIndex="+getIndex);
    console.log(this.image);
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: [{ url: this.image }],
      // initialSlide: getIndex
    });
    // console.log("getIndex="+getIndex);
    modal.present();
  }

  openImage3(parameter1) {
    this.parameter1 = this.navParams.get('param1');
    this.image = parameter1.img3 //You need to pass the proper image.
    //console.log("NEW ==== getIndex="+getIndex);
    console.log(this.image);
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: [{ url: this.image }],
      // initialSlide: getIndex
    });
    // console.log("getIndex="+getIndex);
    modal.present();
  }

  openImage4(parameter1) {
    this.parameter1 = this.navParams.get('param1');
    this.image = parameter1.img4 //You need to pass the proper image.
    //console.log("NEW ==== getIndex="+getIndex);
    console.log(this.image);
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: [{ url: this.image }],
      // initialSlide: getIndex
    });
    // console.log("getIndex="+getIndex);
    modal.present();
  }

  openImage5(parameter1) {
    this.parameter1 = this.navParams.get('param1');
    this.image = parameter1.img5 //You need to pass the proper image.
    //console.log("NEW ==== getIndex="+getIndex);
    console.log(this.image);
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: [{ url: this.image }],
      // initialSlide: getIndex
    });
    // console.log("getIndex="+getIndex);
    modal.present();
  }

  openImage6(parameter1) {
    this.parameter1 = this.navParams.get('param1');
    this.image = parameter1.img6 //You need to pass the proper image.
    //console.log("NEW ==== getIndex="+getIndex);
    console.log(this.image);
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: [{ url: this.image }],
      // initialSlide: getIndex
    });
    // console.log("getIndex="+getIndex);
    modal.present();
  }

}
