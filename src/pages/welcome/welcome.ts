import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuPrincipal } from './../menu-principal/menu-principal';
import { TranslateService } from 'ng2-translate';
import { ILanguage } from './../../interfaces/language';

/*
  Generated class for the Welcome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  //Languages
  languages: ILanguage[];
  language: string;

  km: Boolean;
  kmBeforeChange: Boolean;
  mile: Boolean;
  mileBeforeChange: Boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService) {
    let defaultLanguage = navigator.language.split('-')[0];
    if (defaultLanguage != null)
    {
      localStorage.setItem('selectLanguage', defaultLanguage);
    }
    if ( localStorage.getItem('selectLanguage') == null || localStorage.getItem('selectLanguage') == "")
    {
      defaultLanguage = 'es';
    }

    console.log(defaultLanguage);

    translate.setDefaultLang(defaultLanguage);


    this.initializeValues()
  }

  private initializeValues()
  {
    //Unit of length options
    this.km = this. kmBeforeChange = true;
    this.mile = this.mileBeforeChange = false;

    //Languages options
    this.language = localStorage.getItem('selectLanguage');
    console.info(this.language);
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
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  goToMenuPrincipal()
  {
    this.navCtrl.push(MenuPrincipal);
  }


  manageUnitLengthsSelections()
  {
    console.log(this.km);
    console.log(this.mile);
    console.log(this.kmBeforeChange);
    console.log(this.mileBeforeChange);
     /*console.log("Before change");
    console.log(this.kmBeforeChange);
    console.log(this.mileBeforeChange);
    console.log("======================");*/
    if (this.km == this.kmBeforeChange)
    {
      this.mile = true;
      this.mileBeforeChange = true;
      console.log("KM false");
    }
    else if (this.mile == false)
    {
      this.km = true;
      console.log("Mile false");
    }
    else if (this.km == true)
    {
      this.mile = false;
      console.log("KM true");
    }
    else if (this.mile == true)
    {
      this.km = false;
      console.log("Mile true");
    }
    console.log(this.km);
    console.log(this.mile);

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

}
