import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';
import { RunConverter } from '../../models/run-converter';
import { ILanguage } from '../../interfaces/language';
/*
  Generated class for the SettingsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings-page',
  templateUrl: 'settings-page.html'
})
export class SettingsPage {
  converter: RunConverter;
  languages: ILanguage[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService) {
    translate.setDefaultLang(localStorage.getItem('selectLanguage'));
    this.converter= new RunConverter();
    console.log("17.9 km/h = " + this.converter.KilometersPerHourToPaceMinKm(17.9)  + " min/km");

    this.initializeLanguages();
  }

  initializeLanguages() {

    this.languages = [
      { label: 'LANGUAGES.LABEL.CATALA', code: 'ca'},
      { label: 'LANGUAGES.LABEL.DEUTCH', code: 'de'},
      { label: 'LANGUAGES.LABEL.ENGLISH', code: 'en'},
      { label: 'LANGUAGES.LABEL.SPANISH', code: 'es'},
      { label: 'LANGUAGES.LABEL.BASQUE', code: 'eu'},
      { label: 'LANGUAGES.LABEL.FRANCAIS', code: 'fr'},
      { label: 'LANGUAGES.LABEL.GALEGO', code: 'gl'},
      { label: 'LANGUAGES.LABEL.ITALIANO', code: 'it'},
      { label: 'LANGUAGES.LABEL.JAPANESE', code: 'ja'},
      { label: 'LANGUAGES.LABEL.PORTUGUES', code: 'pt'},
      { label: 'LANGUAGES.LABEL.RUSO', code: 'ru'}

    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPagePage');
  }

}
