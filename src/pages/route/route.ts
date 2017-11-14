import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MapPage } from '../map/map';
import { Route } from "../../models/route";
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
 	route = {} as Route;
  	constructor(public navCtrl: NavController, public navParams: NavParams) {}

  	map(route: Route){
  		this.navCtrl.push(MapPage);
  	}
}
