import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';
import { RunConverter } from './../../models/run-converter';
import { ILanguage } from './../../interfaces/language';
import { IUnitOfLength } from './../../interfaces/unit-of-length';
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

  //Page use values
  converter: RunConverter;

  languages: ILanguage[];
  language: string;

  unitOfLength: IUnitOfLength[];
  unitLength: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService) {
    translate.setDefaultLang(localStorage.getItem('selectLanguage'));
    this.converter= new RunConverter();
    console.log("17.9 km/h = " + this.converter.KilometersPerHourToPaceMinKm(17.9)  + " min/km");

    this.initializeValues();
  }

  initializeValues() {
    this.language = localStorage.getItem('selectLanguage');
    this.languages = [
      { label: 'LANGUAGE.LABELS.CATALA', code: 'ca'},
      { label: 'LANGUAGE.LABELS.DEUTCH', code: 'de'},
      { label: 'LANGUAGE.LABELS.ENGLISH', code: 'en'},
      { label: 'LANGUAGE.LABELS.SPANISH', code: 'es'},
      { label: 'LANGUAGE.LABELS.BASQUE', code: 'eu'},
      { label: 'LANGUAGE.LABELS.FRANCAIS', code: 'fr'},
      { label: 'LANGUAGE.LABELS.GALEGO', code: 'gl'},
      { label: 'LANGUAGE.LABELS.ITALIANO', code: 'it'},
      { label: 'LANGUAGE.LABELS.JAPANESE', code: 'ja'},
      { label: 'LANGUAGE.LABELS.PORTUGUES', code: 'pt'},
      { label: 'LANGUAGE.LABELS.RUSO', code: 'ru'}
    ];

    this.unitLength = localStorage.getItem('unitOfLengthSelect');
    this.unitOfLength = [
      {
        label: 'UNIT_OF_LENGTH.KM.LABEL',
        code: 'km'
      },
      {
        label: 'UNIT_OF_LENGTH.MILE.LABEL',
        code: 'mille'
      }
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPagePage');
  }

  updateSelectLanguage()
  {
    if (this.language != localStorage.getItem('selectLanguage'))
    {
      console.info("Change from " + localStorage.getItem('selectLanguage') + " to " + this.language);
      this.translate.setDefaultLang(this.language);
      localStorage.setItem('selectLanguage', this.language);
      this.initializeValues();
    }

  }

  updateSelectUnitLength()
  {
    if (this.unitLength != localStorage.getItem('selectLanguage'))
    {
      console.info("Change from " + localStorage.getItem('unitOfLengthSelect') + " to " + this.unitLength);
      localStorage.setItem('unitOfLengthSelect', this.unitLength);
      this.initializeValues();
    }
  }

}
