import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { RunConverter } from '../../models/run-converter';
import { TranslateService, LangChangeEvent } from 'ng2-translate';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  converter: RunConverter;
  constructor(public navCtrl: NavController, public translate: TranslateService) {
    translate.setDefaultLang(localStorage.getItem('selectLanguage'));
    this.converter= new RunConverter();
    console.log("17.9 km/h = " + this.converter.KilometersPerHourToPaceMinKm(17.9)  + " min/km");
  }

  makeBasicConversion()
  {
    console.log("21.1 km/h = " + this.converter.KilometersPerHourToPaceMinKm(21.1)  + " min/km");
  }

  changeLanguage (newLanguage: string) {
		this.translate.use(newLanguage).subscribe(ready => {
			//this.updateVariables();
      console.log("Select language is: " + newLanguage);
      localStorage.setItem('selectLanguage', newLanguage);
		});
	}
}
