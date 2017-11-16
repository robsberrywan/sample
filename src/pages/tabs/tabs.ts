import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from "../home/home";
import { MapPage } from "../map/map";

/**
 * Generated class for the RoutePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {
	tab1Root = HomePage;
	tab2Root = MapPage;
  	constructor(public navCtrl: NavController, public navParams: NavParams) {}
}
