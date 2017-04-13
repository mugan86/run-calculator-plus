import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, Events } from 'ionic-angular';
import { MenuPrincipal } from './../menu-principal/menu-principal';
import { TranslateService } from 'ng2-translate';
import { ILanguage } from './../../interfaces/language';
import { ITheme } from './../../interfaces/theme';
import { ISettings } from './../../interfaces/settings';
import { languagesSelections, themesListSelection} from './../../constants/config';
import { SettingsService } from "./../../services/settings";


@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  //Languages
  languages: ILanguage[];
  language: string;

  unitLenghts: Boolean[];

  themeSelect: ITheme;
  themeListSelectValues: ITheme[];
  
  selectColor = "twitter";

  userPreferences: ISettings;
  defaultLanguage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
                public translate: TranslateService, private menuCtrl: MenuController,
                private settings: SettingsService, private events: Events) {

    //Disable Side menu
    this.menuCtrl.enable(false);

    this.initializeValues();
    this.translate.setDefaultLang(this.language);

    
    
  }

  private initializeValues()
  {
    
    //Languages options
    this.languages = languagesSelections;
    this.language = this.languages[3].code;

    this.themeListSelectValues = themesListSelection;
    this.themeSelect = this.themeListSelectValues[3];
    
    //Load user preferences
    this.userPreferences = this.settings.getUserPreferences();
    
    //Important to add in ngModel select value of theme!!!
    this.themeSelect = this.userPreferences.defaultTheme;
    //Important to add in ngModel select value of theme!!!
    this.language = this.userPreferences.langCode;

    this.selectColor = this.themeSelect.id;
    console.log(this.userPreferences);

    //Unit of length options (get correct value from preferences)
    this.unitLenghts = this.settings.getUnitLengthValuesToManageInLayout();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  goToMenuPrincipal()
  {
    //TODO : Update local preferences before go to Menu principal!!
    this.settings.updatePreferences(this.userPreferences);

    //Open Menu Principal
    this.navCtrl.push(MenuPrincipal);
  }


  manageUnitLengthsSelections(option)
  {
    this.settings.updateUnitLength(option, this.unitLenghts);
  }

  updateSelectLanguage()
  {
    if (this.settings.updateSelectLanguage(this.language)) {
      this.translate.setDefaultLang(this.language);
      this.initializeValues();
    }
  }

  updateSelectTheme(theme)
  {
    this.selectColor = this.settings.updateTheme(theme);
    this.events.publish('theme:change', this.selectColor);
  }

}
