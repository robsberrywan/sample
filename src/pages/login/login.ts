import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';

import { AngularFireAuth } from "angularfire2/auth";
import { User } from "../../models/user";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
    user = {} as User;
  	constructor(private afAuth: AngularFireAuth, public navCtrl: NavController) {}

  	register(){
  		this.navCtrl.push(RegisterPage);
  	}
  	async signIn(user: User){
      try{
        const res = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
        if(res){
          this.navCtrl.setRoot(HomePage);
        }
        else{
          console.log("Email or password is incorrect!");
        }
      }
      catch(e){
        console.error(e);
      }
  	}
}
