import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	pages = [
    	{ title: 'Register', component: RegisterPage }
    ];
	constructor(public navCtrl: NavController) {

  	}
	openPage(page) {
    	this.navCtrl.push(page.component);
  	}
}
