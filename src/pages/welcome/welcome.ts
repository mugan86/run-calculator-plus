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
  pepperoni: Boolean;
  mushrooms: Boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService) {

    translate.setDefaultLang(localStorage.getItem('selectLanguage'));
    this.unitLengths = [true, false];
    this.pepperoni = true;
    this.mushrooms = false;
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
    console.log(this.mushrooms);
    console.log(this.pepperoni);
    if (this.pepperoni == true)
    {
      this.mushrooms = false;
    }
    else
    {
      this.mushrooms = true;
    }
  }

}
