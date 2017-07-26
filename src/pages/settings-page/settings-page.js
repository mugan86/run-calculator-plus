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
import { NavController, NavParams, Events } from 'ionic-angular';
import { LanguageConfigService } from 'ng-2-4-language-config';
//Constants
import { languagesSelections, themesListSelection } from './../../constants/config';
import { SettingsService } from "./../../services/settings";
/**
 * Create event emitter to use in app.html to update sidemenu
 */
var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams, translate, settings, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.settings = settings;
        this.events = events;
        this.initializeValues();
        this.selectLanguage();
    }
    SettingsPage.prototype.selectLanguage = function () {
        this.translate.useSelectLanguage(this.language);
    };
    //TODO optimize correctly preferences values
    SettingsPage.prototype.initializeValues = function () {
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
    };
    //Manage
    SettingsPage.prototype.updateSelectLanguage = function () {
        if (this.settings.updateSelectLanguage(this.language)) {
            this.selectLanguage();
            this.initializeValues();
        }
    };
    SettingsPage.prototype.manageUnitLengthsSelections = function (option) {
        this.settings.updateUnitLength(option, this.unitLenghts);
    };
    SettingsPage.prototype.updateSelectTheme = function (theme) {
        this.selectColor = this.settings.updateTheme(theme);
        this.events.publish('theme:change', this.selectColor);
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Component({
        selector: 'page-settings-page',
        templateUrl: 'settings-page.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams,
        LanguageConfigService, SettingsService, Events])
], SettingsPage);
export { SettingsPage };
//# sourceMappingURL=settings-page.js.map