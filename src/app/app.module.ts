import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { TranslateModule, TranslateLoader } from 'ng2-translate/ng2-translate';
import { createTranslateLoader } from './../services/translate-loader';
import { Http } from '@angular/http';

import { MyApp } from './app.component';

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

@NgModule({
  declarations: [
    MyApp,
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
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2, Page3, MenuPrincipal, Contact, SettingsPage, WelcomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ConvertedService]
})
export class AppModule {}
