import { Component, Input } from '@angular/core';

import { NavController } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';

import { ILanguage } from './../../../interfaces/language';
import { ITheme } from './../../../interfaces/theme';
import { ISettings } from './../../../interfaces/settings';

@Component({
  selector: 'select-options',
  templateUrl: 'select-options.html'
})
export class SelectOption {
  @Input() minValue: number = 0;
  @Input() maxValue: number = 59;
  //Manage select option type
  @Input() type: string;
  @Input() languagesList: ILanguage[] = [];
  convertions = [{icon: 'iii', label: 'Kms'}];
  selectColor = "twitter";
  constructor(public navCtrl: NavController, public translate: TranslateService) {
    translate.setDefaultLang(localStorage.getItem('selectLanguage'));
    console.log(this.convertions[0].icon);
  }

}
