import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { SuburbListPage } from '../suburb-list/suburb-list'
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireDatabaseModule, AngularFireList } from 'angularfire2/database';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated'


@IonicPage()
@Component({
  selector: 'page-metro-list',
  templateUrl: 'metro-list.html',
})
export class MetroListPage {

  public metros: Array<any> = [];
  public metroRef: firebase.database.Reference = firebase.database().ref('/ListOfMetros');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.metroRef.on('value', itemSnapshot => {
      this.metros = [];
      itemSnapshot.forEach(itemSnap => {
        this.metros.push(itemSnap.val());
        return false;
      });
    });
    }

  // toSuburbList(){
  //   this.navCtrl.push(SuburbListPage)
    
  // }

  // toSuburbList(metro) {
  //   this.navCtrl.push(SuburbListPage, metro);
  //   console.log("ZZZZZZ", metro)
  //   //console.log(coffeeShop)
  // }

toJoburg(metro) {
    this.navCtrl.push(SuburbListPage, {
      param1: "Johannesburg"
});
}

toCapeTown(metro) {
      this.navCtrl.push(SuburbListPage, {
        param1: "CapeTown"
      }); 
}

  toDurban(metro) {
    this.navCtrl.push(SuburbListPage, {
      param1: "Durban"
    });
  }

  toPietermaritzburg(metro) {
    this.navCtrl.push(SuburbListPage, {
      param1: "Pietermaritzburg"
    });
  }
  

  toPretoria(metro) {
    this.navCtrl.push(SuburbListPage, {
      param1: "Pretoria"
    });
  }

  toPortElizabeth(metro) {
    this.navCtrl.push(SuburbListPage, {
      param1: "PortElizabeth"
    });
  }

  toBloemfontein(metro) {
    this.navCtrl.push(SuburbListPage, {
      param1: "Bloemfontein"
    });
  }

  toNelspruit(metro) {
    this.navCtrl.push(SuburbListPage, {
      param1: "Nelspruit"
    });
  }
  
  toKimberley(metro) {
    this.navCtrl.push(SuburbListPage, {
      param1: "Kimberley"
    });
  }

  toPolokwane(metro) {
    this.navCtrl.push(SuburbListPage, {
      param1: "Polokwane"
    });
  }  

};



//List the metros here. You need them to reference them in the next page.