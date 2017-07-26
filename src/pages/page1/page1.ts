import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LanguageConfigService } from 'ng-2-4-language-config';

import { SettingsService } from "./../../services/settings";

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  
  selectColor = "twitter";
  constructor(public navCtrl: NavController, public translate: LanguageConfigService, private settings: SettingsService,) {
    translate.useSelectLanguage(settings.getSelectLanguage());
    
  }

}
