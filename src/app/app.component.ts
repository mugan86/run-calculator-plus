import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from './../pages/page1/page1';
import { Page2 } from './../pages/page2/page2';
import { MenuPrincipal } from './../pages/menu-principal/menu-principal';
import { Contact } from './../pages/contact/contact';
import { SettingsPage } from './../pages/settings-page/settings-page';
import { WelcomePage } from './../pages/welcome/welcome';

import { SettingsService } from "./../services/settings";


@Component({
  selector: 'app-page',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //Define that page is main page (rootpage)
  rootPage: any;
  selectColor = "lightseagreen";


  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, private settings: SettingsService) {

    settings.userPreferences = settings.getUserPreferences();
    if (settings.isWelcomeComplete()) this.rootPage = MenuPrincipal;
    else this.rootPage = WelcomePage;

    this.selectColor = settings.getTheme().id;

    //Start app
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'GENERAL_INFO.TITLE', component: MenuPrincipal, icon: 'md-home' },
      { title: 'GET_KMS', component: Page1, icon: 'md-calculator' },
      { title: 'SETTINGS', component: SettingsPage, icon: 'md-build'},
      { title: 'SETTINGS', component: Page2, icon: 'md-mail'},
      { title: 'CONTACT' , component: Contact, icon: 'md-create'}

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
