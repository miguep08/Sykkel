import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

/*
  Generated class for the ConectarseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConectarseProvider {
    
    url= 'http://http://192.168.0.222/flas07/';

    options = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    constructor(public http: HttpClient) {
        console.log('Hello ConectarseProvider Provider');
    }

    ingreso(Usuario) {
        let urlLocal = this.url + "Controller/Usuario/Ingreso.php";
        return this.http.post(urlLocal, JSON.stringify(Usuario), this.options);
    }
}
