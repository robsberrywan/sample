import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireAuth } from "angularfire2/auth";
import { User } from "../../models/user";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
	user = {} as User;
  	constructor(private afAuth: AngularFireAuth, public navCtrl: NavController) {
  	}
  	async signUp(user: User, cpass){
  		try{
  			if(user.password==cpass){
  				const res = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  				console.log(res);
  			}
  			else{
  				console.log("Password do not match!");
  			}
  		}
  		catch(e){
  			console.log("sfasdfasdfsdf");
  			console.error(e);
  		}
  		
  	}
  	toSignIn(){
  		this.navCtrl.pop();
  	}
}
