import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { RunConverter } from './../../models/run-converter';
import { TranslateService } from 'ng2-translate';

import {email, github} from './../../constants/contact-info';
import { SettingsService } from "./../../services/settings";


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class Contact {
  
  convertions = [{icon: 'iii', label: 'Kms'}];
  selectColor = "twitter";
  constructor(public navCtrl: NavController, public translate: TranslateService, public settings: SettingsService) {
    translate.setDefaultLang(settings.getSelectLanguage());
    
    console.log(this.convertions[0].icon);

    this.selectColor = settings.getTheme().id;
  }
}
