import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RegistroPage} from '../registro/registro';
import {AlertController} from 'ionic-angular';
import {ConectarseProvider} from '../../providers/conectarse/conectarse';
import {LoadingController} from 'ionic-angular';
import {NombrePage} from '../nombre/nombre';
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController, private alertCtrl:AlertController) {

    }
    irRegistro() {
        this.navCtrl.push(RegistroPage);
    }

    irNombrePage() {
        this.navCtrl.push(NombrePage);
    }
    iniciar() {
        let alert = this.alertCtrl.create({
            title: 'Login',
            inputs: [
                {
                    name: 'Username',
                    placeholder: 'Username'
                },
                {
                    name: 'Password',
                    placeholder: 'Password',
                    type: 'password'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ingresar',
                    handler: data => {
                        this.verificar(data);
                    }
                }
            ]
        });
        alert.present();
    }
    
    verificar(data){
        
    }

    presentAlert(titulo, mensaje) {
        let alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensaje,
            buttons: ['Cerrar']
        });
        alert.present();
    }
    
    funcion(){
        
    }
}
