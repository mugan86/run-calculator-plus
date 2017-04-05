import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuPrincipal } from './../menu-principal/menu-principal';
import { TranslateService } from 'ng2-translate';
/*
  Generated class for the Welcome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  unitLengths : Boolean[];
  km: Boolean;
  mile: Boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService) {
    let defaultLanguage = navigator.language.split('-')[0];
    if (defaultLanguage != null)
    {
      localStorage.setItem('selectLanguage', defaultLanguage);
    }
    if ( localStorage.getItem('selectLanguage') == null || localStorage.getItem('selectLanguage') == "")
    {
      defaultLanguage = 'es';
    }

    console.log(defaultLanguage);
    
    translate.setDefaultLang(defaultLanguage);
    this.unitLengths = [true, false];
    this.km = true;
    this.mile = false;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  goToMenuPrincipal()
  {
    this.navCtrl.push(MenuPrincipal);
  }

  selectUnitOfLength(value)
  {
    console.log(value);
    if (value == 1)
    {
      if (this.unitLengths[0] == false)
      {
        this.unitLengths[0] = true;
        this.unitLengths[1] = false;
      }

    }
    if (value == 2)
    {
      if (this.unitLengths[1] == false)
      {
        this.unitLengths[0] = false;
        this.unitLengths[1] = true;
      }
    }
  }

  test()
  {
    console.log(this.km);
    console.log(this.mile);
    console.log("======================");
    if (this.km == true && this.mile == true)
    {
      this.km = false;
      console.log("133");
    }
    else if (this.km == true)
    {
      this.mile = false;
      console.log("1");
    }
    else if (this.km == false)
    {
      this.mile = true;
      console.log("2");

    }
     else if (this.mile == false)
    {
      this.km = true;
      console.log("3");
    }
    else if (this.mile == true && this.km == true)
    {
      this.km = false;
      console.log("4");
    }
  }

}
