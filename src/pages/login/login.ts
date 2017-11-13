import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';

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
  	signIn(){
      this.navCtrl.setRoot(HomePage);
  	}
}
