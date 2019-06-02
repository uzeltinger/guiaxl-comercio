import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MiCuentaPage } from '../mi-cuenta/mi-cuenta';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

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
    console.log('ionViewDidLoad RegistroPage');
  }

  registroForm() {
    console.log(this.username);
    console.log(this.password);
    this.showSplash = true;
    setTimeout(() => {
      this.navCtrl.setRoot(MiCuentaPage);   
      this.showSplash = false;
    }, 500);
  }

}
