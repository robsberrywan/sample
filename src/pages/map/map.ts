import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TripsPage } from '../trips/trips';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  public origin;
  public destination;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.origin = navParams.get("origin");
    this.destination = navParams.get("dest");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

  selectRoutes(){
  	this.navCtrl.push(TripsPage);
  }

}
