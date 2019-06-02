import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';

/**
 * Generated class for the MiCuentaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mi-cuenta',
  templateUrl: 'mi-cuenta.html',
})
export class MiCuentaPage {

  showSplash: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MiCuentaPage');
  }
  goMiPerfil(){
    this.showSplash = true;
    setTimeout(() => {
      this.navCtrl.push(PerfilPage);  
      this.showSplash = false;
    }, 400); 
  }
}
