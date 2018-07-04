import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RegistroPage} from '../registro/registro';
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
    
    funcion(){
        this.navCtrl.push(NombrePage);
    }
}
