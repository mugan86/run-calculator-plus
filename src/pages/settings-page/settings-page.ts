import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';

//Models / Interfaces
import { RunConverter } from './../../models/run-converter';
import { ILanguage } from './../../interfaces/language';
import { IUnitOfLength } from './../../interfaces/unit-of-length';
import { ITheme } from './../../interfaces/theme';

//Constants
import { languagesSelections, themesListSelection } from './../../constants/config';

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

  unitLenghts: Boolean[];

  themeSelect: ITheme;
  themeListSelectValues: ITheme[];

  selectColor : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService) {
    translate.setDefaultLang(localStorage.getItem('selectLanguage'));
    this.converter= new RunConverter();
    console.log("17.9 km/h = " + this.converter.KilometersPerHourToPaceMinKm(17.9)  + " min/km");

    this.initializeValues();
  }

  initializeValues() {
    this.language = localStorage.getItem('selectLanguage');
    this.languages = languagesSelections;

    this.unitLength = localStorage.getItem('unitOfLengthSelect');

     //Unit of length options
     if (this.unitLength == 'km') this.unitLenghts = [true, false];
     else this.unitLenghts = [false, true];

     //initialize app available all themesListSelection
     this.themeListSelectValues = themesListSelection;

     this.selectColor = "violet";

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

  manageUnitLengthsSelections(option)
  {
    if (option == 0) this.unitLenghts[1] = !this.unitLenghts[0];
    else this.unitLenghts[0] = !this.unitLenghts[1];

    if (this.unitLenghts[0]) localStorage.setItem('unitOfLengthSelect', 'km');
    else localStorage.setItem('unitOfLengthSelect', 'mile');
  }

}
