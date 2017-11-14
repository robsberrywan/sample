import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';

import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  route(){
      this.navCtrl.push(RoutePage);
    }

	pages = [
    	{ title: 'Register', component: RegisterPage },
      { title: 'Sign Out', component: LoginPage }
    ];
	constructor(private afAuth: AngularFireAuth, private toast: ToastController, public navCtrl: NavController) {}
  ionViewWillLoad(){
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

}
