import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HomePage} from '../home/home';
import {AlertController} from 'ionic-angular';

/**
 * Generated class for the NombrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-nombre',
    templateUrl: 'nombre.html',
})
export class NombrePage {
    username;
    constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
        this.username = this.navParams.get("username");
        console.table(this.username);

    }
    iewDidLoad() {
        console.log('ionViewDidLoad NombrePage');
    }

    presentAlert(titulo, mensaje) {
        let alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensaje,
            buttons: ['Cerrar']
        });
        alert.present();
    }
}
