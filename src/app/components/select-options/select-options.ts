import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'select-options',
  templateUrl: 'select-options.html'
})
export class SelectOption {
  convertions = [{icon: 'iii', label: 'Kms'}];
  selectColor = "twitter";
  constructor(public navCtrl: NavController, public translate: TranslateService) {
    translate.setDefaultLang(localStorage.getItem('selectLanguage'));
    console.log(this.convertions[0].icon);
  }

}
