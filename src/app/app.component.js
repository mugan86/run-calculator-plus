var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Page1 } from './../pages/page1/page1';
import { Page2 } from './../pages/page2/page2';
import { MenuPrincipal } from './../pages/menu-principal/menu-principal';
import { Contact } from './../pages/contact/contact';
import { SettingsPage } from './../pages/settings-page/settings-page';
import { WelcomePage } from './../pages/welcome/welcome';
import { SettingsService } from "./../services/settings";
var MyApp = (function () {
    function MyApp(platform, settings, events) {
        var _this = this;
        this.platform = platform;
        this.settings = settings;
        this.events = events;
        this.selectColor = "lightseagreen";
        settings.userPreferences = settings.getUserPreferences();
        if (settings.isWelcomeComplete())
            this.rootPage = SettingsPage; //MenuPrincipal
        else
            this.rootPage = WelcomePage;
        this.selectColor = settings.getTheme().id;
        //Start app
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'GENERAL_INFO.TITLE', component: MenuPrincipal, icon: 'md-home' },
            { title: 'GET_KMS', component: Page1, icon: 'md-calculator' },
            { title: 'SETTINGS', component: SettingsPage, icon: 'md-build' },
            { title: 'SETTINGS', component: Page2, icon: 'md-mail' },
            { title: 'CONTACT', component: Contact, icon: 'md-create' }
        ];
        //To manage theme change situation from settings page
        events.subscribe('theme:change', function (color) {
            // user and time are the same arguments passed in `events.publish(user, time)`
            console.log(_this.selectColor + " color change to " + color);
            _this.selectColor = color;
        });
    }
    MyApp.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    ViewChild(Nav),
    __metadata("design:type", Nav)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Component({
        selector: 'app-page',
        templateUrl: 'app.html'
    }),
    __metadata("design:paramtypes", [Platform, SettingsService, Events])
], MyApp);
export { MyApp };
//# sourceMappingURL=app.component.js.map