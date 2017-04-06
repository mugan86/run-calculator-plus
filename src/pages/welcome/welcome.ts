import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { MenuPrincipal } from './../menu-principal/menu-principal';
import { TranslateService } from 'ng2-translate';
import { ILanguage } from './../../interfaces/language';
import { ITheme } from './../../interfaces/theme';
import { languagesSelections, themesListSelection} from './../../constants/config';


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
  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService, private menuCtrl: MenuController) {

    //Disable Side menu
    this.menuCtrl.enable(false);

    
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
    this.initializeValues();

    translate.setDefaultLang(defaultLanguage);
  }

  private initializeValues()
  {
    //Unit of length options
    this.unitLenghts = [true, false];

    //Languages options
    this.languages = languagesSelections;
    this.language = localStorage.getItem('selectLanguage');
    console.info(this.language);

    this.themeListSelectValues = themesListSelection;
    this.themeSelect = this.themeListSelectValues[0];
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  goToMenuPrincipal()
  {
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
    console.log("Theme: ", theme);
  }

}
