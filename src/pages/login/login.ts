import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
	username = '';
	pass = '';
  	constructor(public navCtrl: NavController) {}

  	register(){
  		this.navCtrl.push(RegisterPage);
  	}

  	gui(){
  		this.navCtrl.push(UserPage);
  	}
}
