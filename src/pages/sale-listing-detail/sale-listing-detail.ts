import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { GalleryModal } from 'ionic-gallery-modal';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,) {
    this.parameter1 = navParams.get('param1');
    console.log(this.parameter1)



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaleListingDetailPage');
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
