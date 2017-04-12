import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';

//Models / Interfaces
import { ILanguage } from './../../interfaces/language';
import { IUnitOfLength } from './../../interfaces/unit-of-length';
import { ITheme } from './../../interfaces/theme';

//Constants
import { languagesSelections, themesListSelection } from './../../constants/config';

import { SettingsService } from "./../../services/settings";

@Component({
  selector: 'page-settings-page',
  templateUrl: 'settings-page.html'
})
export class SettingsPage {


  languages: ILanguage[];
  language: string;

  unitOfLength: IUnitOfLength[];
  unitLength: string;

  unitLenghts: Boolean[];

  themeSelect: ITheme;
  themeListSelectValues: ITheme[];

  selectColor : string;

  userPreferences: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  public translate: TranslateService, private settings: SettingsService) {
    this.initializeValues();
    translate.setDefaultLang(this.language);
  }

  //TODO optimize correctly preferences values
  initializeValues() {
    //Load user preferences
    this.settings.userPreferences = this.settings.getUserPreferences();

    this.userPreferences = this.settings.getUserPreferences();
    //console.info(this.userPreferences.getTheme);
    //console.info(this.userPreferences.getSelectLanguage());
    this.language = this.settings.getSelectLanguage();

    //Load select list options
    this.languages = languagesSelections;

    this.unitLength = this.settings.getSelectUnitLength();

     //Unit of length options
     if (this.unitLength == 'km') this.unitLenghts = [true, false];
     else this.unitLenghts = [false, true];

     //initialize app available all themesListSelection
     this.themeListSelectValues = themesListSelection;

     this.selectColor = this.settings.getTheme().id;
     console.warn(this.selectColor, this.settings.getTheme());

  }

  //Manage
  updateSelectLanguage()
  {
    if (this.language != this.settings.getSelectLanguage())
    {
      this.settings.userPreferences.langCode = this.language;
      //this.settings.
      //this.translate.setDefaultLang(this.language);
      this.initializeValues();
    }

  }

  manageUnitLengthsSelections(option)
  {
    if (option == 0) this.unitLenghts[1] = !this.unitLenghts[0];
    else this.unitLenghts[0] = !this.unitLenghts[1];

    if (this.unitLenghts[0]) localStorage.setItem('unitOfLengthSelect', 'km');
    else localStorage.setItem('unitOfLengthSelect', 'mile');
  }

}
