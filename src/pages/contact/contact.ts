import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LanguageConfigService } from 'ng-2-4-language-config/dist';
import { SettingsService } from "./../../services/settings";


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class Contact {
  
  convertions = [{icon: 'iii', label: 'Kms'}];
  selectColor = "twitter";
  constructor(public navCtrl: NavController, public translate: LanguageConfigService, public settings: SettingsService) {
    translate.useSelectLanguage(settings.getSelectLanguage());
    
    // console.log(this.convertions[0].icon);

    this.selectColor = settings.getTheme().id;
  }
}
