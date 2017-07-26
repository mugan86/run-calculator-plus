var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { LanguageConfigService } from 'ng-2-4-language-config';
import { SettingsService } from "./../../services/settings";
var MenuPrincipal = (function () {
    function MenuPrincipal(navCtrl, translate, menuCtrl, settings) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.menuCtrl = menuCtrl;
        this.settings = settings;
        this.selectColor = "violet";
        //Active menu
        this.menuCtrl.enable(true);
        //Load user preferences
        settings.userPreferences = settings.getUserPreferences();
        //console.log("Welcome COmplete? " +  settings.isWelcomeComplete());
        if (!settings.isWelcomeComplete()) {
            console.log("Update preferences!!");
            settings.userPreferences.welcomeComplete = true;
            settings.updatePreferences(settings.userPreferences);
            //Finish to view welcome page and reload only this time
            window.location.reload();
        }
        translate.useSelectLanguage(settings.getSelectLanguage());
        this.selectColor = settings.getTheme().id;
    }
    return MenuPrincipal;
}());
MenuPrincipal = __decorate([
    Component({
        selector: 'page-menu-principal',
        templateUrl: 'menu-principal.html'
    }),
    __metadata("design:paramtypes", [NavController, LanguageConfigService,
        MenuController, SettingsService])
], MenuPrincipal);
export { MenuPrincipal };
//# sourceMappingURL=menu-principal.js.map