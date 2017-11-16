import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from "../home/home";

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
  	constructor(public navCtrl: NavController, public navParams: NavParams) {}
}
