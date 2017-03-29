import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { MenuPrincipal } from '../pages/menu-principal/menu-principal';
import { Contact } from '../pages/contact/contact';


@Component({
  selector: 'app-page',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform) {

    /*************************************************************************
    Check if language select, if not select nothing, set 'en'
    *************************************************************************/

    console.info("Select language: " + localStorage.getItem('selectLanguage'));
    if (localStorage.getItem('selectLanguage') == null || localStorage.getItem('selectLanguage') == "null")
    {
      localStorage.setItem('selectLanguage', 'en');
      console.info("Change language to " + localStorage.getItem('selectLanguage'));
    }

    //Start app
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'GENERAL_INFO.TITLE', component: MenuPrincipal, icon: 'md-home' },
      { title: 'GET_KMS', component: Page1, icon: 'md-calculator' },
      { title: 'SETTINGS', component: Page2, icon: 'md-build'},
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
