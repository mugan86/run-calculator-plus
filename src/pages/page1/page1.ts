import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';

import { SettingsService } from "./../../services/settings";

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  
  selectColor = "twitter";
  constructor(public navCtrl: NavController, public translate: TranslateService, private settings: SettingsService,) {
    translate.setDefaultLang(settings.getSelectLanguage());
    
  }

}
