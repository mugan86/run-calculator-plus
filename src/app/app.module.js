var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
/*import { TranslateModule, TranslateLoader } from 'ng2-translate/ng2-translate';
import { createTranslateLoader } from './../services/translate-loader';
import { Http } from '@angular/http';*/
import { LanguageConfigModule } from 'ng-2-4-language-config';
import { MyApp } from './app.component';
import { SelectOption } from './../components/select-options/select-options';
//Pages
import { WelcomePage } from './../pages/welcome/welcome';
import { Page1 } from './../pages/page1/page1';
import { Page2 } from './../pages/page2/page2';
import { Page3 } from './../pages/page3/page3';
import { MenuPrincipal } from './../pages/menu-principal/menu-principal';
import { Contact } from './../pages/contact/contact';
import { SettingsPage } from './../pages/settings-page/settings-page';
//Directives
import { DefaultImage } from './../directives/default-image';
//Services
import { ConvertedService } from "./../services/converter";
import { SettingsService } from './../services/settings';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            MyApp,
            SelectOption,
            WelcomePage,
            Page1,
            Page2,
            Page3,
            MenuPrincipal,
            Contact,
            SettingsPage,
            DefaultImage
        ],
        imports: [
            IonicModule.forRoot(MyApp, {
                backButtonText: '',
                platforms: {
                    ios: {
                        iconMode: 'ios',
                        tabsPlacement: 'top',
                        pageTransition: 'ios-transition',
                        backButtonIcon: 'ios-arrow-round-back'
                    },
                    android: {
                        iconMode: 'md',
                        tabsPlacement: 'bottom',
                        pageTransition: 'md-transition',
                        backButtonIcon: 'md-arrow-round-back'
                    }
                },
                modalEnter: 'modal-slide-in',
                modalLeave: 'modal-slide-out',
            }, {}),
            LanguageConfigModule.forRoot()
        ],
        bootstrap: [IonicApp],
        entryComponents: [
            MyApp,
            SelectOption,
            Page1,
            Page2, Page3, MenuPrincipal, Contact, SettingsPage, WelcomePage
        ],
        providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, ConvertedService, SettingsService],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map