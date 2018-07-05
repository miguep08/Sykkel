import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RegistroPage} from '../registro/registro';
import {AlertController} from 'ionic-angular';
import {ConectarswProvider} from '../../providers/conectarsw/conectarsw';
import {LoadingController} from 'ionic-angular';
import {NombrePage} from '../nombre/nombre';
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {

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

    verificar(datosUser) {
        if (datosUser.username == "" || datosUser.clave == "") {
            this.presentAlert("Error #1 ", "Hay que llenar los campos solicitados");
        } else {
            let loader = this.loading.create({
                content: "<b>Se está procesando la solicitud</b>"
            });
            loader.present();

            let estado = this.conecta.ingreso(datosUser);
            estado.subscribe(data => {
                console.table(data);
                this.navCtrl.setRoot(NombrePage, {usuario: data[0]});
                loader.dismiss();
            }, err => {
                console.table(err);
                loader.dismiss();
            })
        }
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
