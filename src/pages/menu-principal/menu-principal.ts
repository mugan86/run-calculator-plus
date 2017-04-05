import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { RunConverter } from './../../models/run-converter';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'page-menu-principal',
  templateUrl: 'menu-principal.html'
})
export class MenuPrincipal {
  converter: RunConverter;
  convertions = [{icon: 'iii', label: 'Kms'}];
  selectColor = "lightseagreen";
  constructor(public navCtrl: NavController, public translate: TranslateService) {

    if (localStorage.getItem('welcomeComplete') != "1")
    {
      //Finish to view welcome page
      localStorage.setItem('welcomeComplete', "1");
    }


    translate.setDefaultLang(localStorage.getItem('selectLanguage'));
    this.converter= new RunConverter();
    console.log("17.9 km/h = " + this.converter.KilometersPerHourToPaceMinKm(17.9)  + " min/km");
    console.log(this.convertions[0].icon);
  }

  makeBasicConversion()
  {
    console.log("21.1 km/h = " + this.converter.KilometersPerHourToPaceMinKm(21.1)  + " min/km");
  }


}
