import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TripsPage } from '../trips/trips';
import L from "leaflet";

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
  origin = "";
  destination = "";
  map: L.Map;
  center: L.PointTuple;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    origin = this.navParams.get("origin");
    this.center = [48.775556, 9.182778];
    this.initMap();
  }

  selectRoutes(){
  	this.navCtrl.push(TripsPage);
  }
  initMap(){
    this.map = L.map('map',{
      center: this.center,
      zoom: 13
    });

    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(this.map);
  }
}
