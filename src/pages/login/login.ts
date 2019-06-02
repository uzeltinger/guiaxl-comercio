import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegistroPage } from '../registro/registro';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  showSplash: boolean = false;
  username: string = "";
  password: string = "";
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  logForm() {
    console.log(this.username);
    console.log(this.password);
    this.showSplash = true;
    setTimeout(() => {
      this.navCtrl.setRoot(HomePage);   
      this.showSplash = false;
    }, 1000);
  }

  ingresar(){
    console.log(this.username);
  }
  
  registrarse(){
    this.showSplash = true;
    setTimeout(() => {
      this.navCtrl.push(RegistroPage);  
      this.showSplash = false;
    }, 400); 
  }
}
