import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeGeocoder, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';

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
    this.origin = this.navParams.get("origin");
    this.destination = this.navParams.get("destination");
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
    this.map.locate({
      setView: true,
      maxZoom: 15
    }).on('locationfound', (e) => {
      let markerGroup = L.featureGroup();
      let marker: any = L.marker([e.latitude, e.longitude]).on('click', () => {
        markerGroup.addLayer(marker);
        this.map.addLayer(markerGroup);
      })
    });
    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(this.map);
  }
  
}
