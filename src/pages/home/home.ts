import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';

import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	pages = [
    	{ title: 'Register', component: RegisterPage },
      { title: 'Sign Out', component: LoginPage }
    ];
	constructor(private afAuth: AngularFireAuth, public navCtrl: NavController) {}
	openPage(page) {
      if(page.component==LoginPage){
        this.afAuth.auth.signOut();
        this.navCtrl.setRoot(page.component);
      }
    	else{
      this.navCtrl.push(page.component);
      }
  	}
}
