import { Component, Output, EventEmitter} from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { LanguageConfigService } from 'ng-2-4-language-config';

//Models / Interfaces
import { ILanguage } from './../../interfaces/language';
import { IUnitOfLength } from './../../interfaces/unit-of-length';
import { ITheme } from './../../interfaces/theme';

//Constants
import { languagesSelections, themesListSelection } from './../../constants/config';

import { SettingsService } from "./../../services/settings";
 

/**
 * Create event emitter to use in app.html to update sidemenu
 */

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
  public translate: LanguageConfigService, private settings: SettingsService, private events: Events) {
    this.initializeValues();
    this.selectLanguage();
  }

  selectLanguage() {
    this.translate.useSelectLanguage(this.language);
  }

  //TODO optimize correctly preferences values
  initializeValues() {
    //Load user preferences
    //this.settings.userPreferences = this.settings.getUserPreferences();

    this.userPreferences = this.settings.getUserPreferences();

    this.language = this.settings.getSelectLanguage();

    //Load select list options
    this.languages = languagesSelections;

    this.unitLength = this.settings.getSelectUnitLength();

     //Unit of length options (get correct value from preferences)
    this.unitLenghts = this.settings.getUnitLengthValuesToManageInLayout();

    //initialize app available all themesListSelection
    this.themeListSelectValues = themesListSelection;
     
    //Important to add in ngModel select value of theme!!!
    this.themeSelect = this.userPreferences.defaultTheme;

    this.selectColor = this.themeSelect.id;

  }

  //Manage
  updateSelectLanguage()
  {
    if (this.settings.updateSelectLanguage(this.language)) {
      this.selectLanguage();
      this.initializeValues();
    }

  }

  manageUnitLengthsSelections(option)
  {
    this.settings.updateUnitLength(option, this.unitLenghts);
  }

  updateSelectTheme(theme)
  {
    this.selectColor = this.settings.updateTheme(theme);
    this.events.publish('theme:change', this.selectColor);
  }

}
