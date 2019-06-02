import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  showSplash: boolean = false;
  name: string = "";
  lastname: string = "";
  dni: string = "";
  gender: string = "";
  username: string = "";
  password: string = "";
  password2: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  perfilForm() {
    console.log(this.username);
    console.log(this.password);
    this.showSplash = true;
    setTimeout(() => {
      this.navCtrl.setRoot(HomePage);   
      this.showSplash = false;
    }, 500);
  }

}
