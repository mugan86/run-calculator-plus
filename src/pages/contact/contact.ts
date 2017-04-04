import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { RunConverter } from './../../models/run-converter';
import { TranslateService } from 'ng2-translate';

import {email, github} from './../../constants/contact-info';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class Contact {
  converter: RunConverter;
  convertions = [{icon: 'iii', label: 'Kms'}];
  constructor(public navCtrl: NavController, public translate: TranslateService) {
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
