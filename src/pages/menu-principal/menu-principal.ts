import { Component } from '@angular/core';

import { NavController, MenuController } from 'ionic-angular';
import { LanguageConfigService } from 'ng-2-4-language-config/dist';
import { SettingsService } from "./../../services/settings";


@Component({
  selector: 'page-menu-principal',
  templateUrl: 'menu-principal.html'
})
export class MenuPrincipal {
  selectColor = "violet";
  constructor(public navCtrl: NavController, public translate: LanguageConfigService, 
              private menuCtrl: MenuController, private settings: SettingsService) {
    //Active menu
    this.menuCtrl.enable(true);

    //Load user preferences
    settings.userPreferences = settings.getUserPreferences();

    //console.log("Welcome COmplete? " +  settings.isWelcomeComplete());
    
    if (!settings.isWelcomeComplete())
    {
      console.log("Update preferences!!");
      settings.userPreferences.welcomeComplete = true;
      settings.updatePreferences(settings.userPreferences);
      //Finish to view welcome page and reload only this time
      window.location.reload();
    }
    translate.useSelectLanguage(settings.getSelectLanguage());

    this.selectColor = settings.getTheme().id;
  }

}
