import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { RoutePage } from '../route/route';
import L from "leaflet";
import { NativeGeocoder, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';

import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  map: L.Map;
  center: L.PointTuple;
	pages = [
      { title: 'Friends', component: RegisterPage},
      { title: 'Sign Out', component: LoginPage }
  ];
	constructor(private afAuth: AngularFireAuth, private toast: ToastController, public navCtrl: NavController) {}
  
  ionViewWillLoad(){
    this.initMap();
    this.center = [48.775556, 9.182778];
    this.afAuth.authState.subscribe(data => {
      if(data.email && data.uid){
        this.toast.create({
          message: `Welcome, ${data.email}!`,
          duration: 3000
        }).present();
      }
    });
  }
	openPage(page) {
    if(page.component==LoginPage){
      this.afAuth.auth.signOut().then(() => {
        this.navCtrl.setRoot(page.component);
      });
    }
    else{
      this.navCtrl.push(page.component);
    }
  }
  route(){
    this.navCtrl.push(RoutePage);
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
      })
    });
    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(this.map);
  }
}
