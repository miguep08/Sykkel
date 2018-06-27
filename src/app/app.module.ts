import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {TablaPage} from '../pages/tabla/tabla';

import {RegistroPage} from '../pages/registro/registro';
import {ForcrepoPage} from '../pages/forcrepo/forcrepo';
import {ConectarseProvider} from '../providers/conectarse/conectarse';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        RegistroPage,
        TablaPage,
        ForcrepoPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        RegistroPage,
        TablaPage,
        ForcrepoPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        ConectarseProvider
    ]
})
export class AppModule {}
