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
import { NavController, NavParams, MenuController, Events } from 'ionic-angular';
import { MenuPrincipal } from './../menu-principal/menu-principal';
import { LanguageConfigService } from 'ng-2-4-language-config';
import { languagesSelections, themesListSelection } from './../../constants/config';
import { SettingsService } from "./../../services/settings";
var WelcomePage = (function () {
    function WelcomePage(navCtrl, navParams, translate, menuCtrl, settings, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.menuCtrl = menuCtrl;
        this.settings = settings;
        this.events = events;
        this.selectColor = "twitter";
        //Disable Side menu
        this.menuCtrl.enable(false);
        this.initializeValues();
        this.translate.useSelectLanguage(this.language);
    }
    WelcomePage.prototype.initializeValues = function () {
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
    };
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    WelcomePage.prototype.goToMenuPrincipal = function () {
        //TODO : Update local preferences before go to Menu principal!!
        this.settings.updatePreferences(this.userPreferences);
        //Open Menu Principal
        this.navCtrl.push(MenuPrincipal);
    };
    WelcomePage.prototype.manageUnitLengthsSelections = function (option) {
        this.settings.updateUnitLength(option, this.unitLenghts);
    };
    WelcomePage.prototype.updateSelectLanguage = function () {
        if (this.settings.updateSelectLanguage(this.language)) {
            this.translate.useSelectLanguage(this.language);
            this.initializeValues();
        }
    };
    WelcomePage.prototype.updateSelectTheme = function (theme) {
        this.selectColor = this.settings.updateTheme(theme);
        this.events.publish('theme:change', this.selectColor);
    };
    return WelcomePage;
}());
WelcomePage = __decorate([
    Component({
        selector: 'page-welcome',
        templateUrl: 'welcome.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams,
        LanguageConfigService, MenuController,
        SettingsService, Events])
], WelcomePage);
export { WelcomePage };
//# sourceMappingURL=welcome.js.map