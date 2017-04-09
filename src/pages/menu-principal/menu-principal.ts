import { Component } from '@angular/core';

import { NavController, MenuController } from 'ionic-angular';
import { RunConverter } from './../../models/run-converter';
import { TranslateService } from 'ng2-translate';
import { SettingsService } from "./../../services/settings";


@Component({
  selector: 'page-menu-principal',
  templateUrl: 'menu-principal.html'
})
export class MenuPrincipal {
  converter: RunConverter;
  convertions = [{icon: 'iii', label: 'Kms'}];
  selectColor = "lightseagreen";
  constructor(public navCtrl: NavController, public translate: TranslateService, 
              private menuCtrl: MenuController, private settings: SettingsService) {


    //Active menu
    this.menuCtrl.enable(true);

    //settings.

    //console.log("Welcome COmplete? " +  settings.isWelcomeComplete());
    
    if (!settings.isWelcomeComplete())
    {
      console.log("Update preferences!!");
      settings.ourPreferences.welcomeComplete = true;
      
      settings.updatePreferences(settings.ourPreferences);
      //Finish to view welcome page and reload only this time
      window.location.reload();
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
