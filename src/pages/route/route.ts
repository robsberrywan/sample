import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MapPage } from '../map/map';

/**
 * Generated class for the RoutePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-route',
  templateUrl: 'route.html',
})
export class RoutePage {
  	constructor(public navCtrl: NavController, public navParams: NavParams) {}

  	map(){
  		this.navCtrl.push(MapPage);
  	}
}
