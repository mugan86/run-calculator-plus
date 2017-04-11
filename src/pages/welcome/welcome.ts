import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { MenuPrincipal } from './../menu-principal/menu-principal';
import { TranslateService } from 'ng2-translate';
import { ILanguage } from './../../interfaces/language';
import { ITheme } from './../../interfaces/theme';
import { ISettings } from './../../interfaces/settings';
import { languagesSelections, themesListSelection} from './../../constants/config';
import { localStorageValues } from './../../constants/local-storage';
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
                private settings: SettingsService) {

    //Disable Side menu
    this.menuCtrl.enable(false);

    this.initializeValues();
    this.translate.setDefaultLang(this.language);
    
  }

  private initializeValues()
  {
    //Unit of length options
    this.unitLenghts = [true, false];

    //Languages options
    this.languages = languagesSelections;

    this.themeListSelectValues = themesListSelection;
    this.themeSelect = this.themeListSelectValues[3];

    //Check if exist preferences values storage in local storage
    if (JSON.parse(localStorage.getItem(localStorageValues['userPreferences']))) {
      console.log("contain storage");
      this.userPreferences = JSON.parse(localStorage.getItem(localStorageValues['userPreferences']));
    }
    else {
      //Asign user default preferences settings to start
      this.userPreferences = {
                            "langCode": this.defaultLanguage, 
                            "defaultTheme": this.themeSelect,
                            "welcomeComplete" : false,
                            "unitOfLength": "km"
                          };

      this.settings.updatePreferences(this.userPreferences);
    }
    //Important to add in ngModel select value of theme!!!
    this.themeSelect = this.userPreferences.defaultTheme;
    //Important to add in ngModel select value of theme!!!
    this.language = this.userPreferences.langCode;

    this.updateSelectColor( this.themeSelect.id );
    console.log(this.language);
    
   
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
    if (option == 0) this.unitLenghts[1] = !this.unitLenghts[0];
    else this.unitLenghts[0] = !this.unitLenghts[1];

    if (this.unitLenghts[0]) localStorage.setItem('unitOfLengthSelect', 'km');
    else localStorage.setItem('unitOfLengthSelect', 'mile');
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

  updateSelectTheme(theme)
  {
    let foundTheme = false;
    //Find select color theme with color ID
    for (let i = 0; i < themesListSelection.length && !foundTheme; i++)
    {
      if (theme.id == themesListSelection[i].id) {
        this.userPreferences.defaultTheme = themesListSelection[i];
        foundTheme = true;
      }
    }
    
    //Convert object to string and save in local storage
    localStorage.setItem(localStorageValues['userPreferences'], JSON.stringify(this.userPreferences));
    this.updateSelectColor( this.themeSelect.id );
}

//TODO Pending to pass all color and update correctly preferences
  updateSelectColor(color)
  {
     this.selectColor = color;
  }

}
