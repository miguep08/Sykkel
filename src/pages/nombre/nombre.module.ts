import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NombrePage } from './nombre';

@NgModule({
  declarations: [
    NombrePage,
  ],
  imports: [
    IonicPageModule.forChild(NombrePage),
  ],
})
export class NombrePageModule {}
