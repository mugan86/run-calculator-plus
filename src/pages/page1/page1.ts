import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { RunConverter } from '../../models/run-converter';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController) {
    let converter = new RunConverter();
    console.log("17.9 km/h = " + converter.KilometersPerHourToPaceMinKm(17.9)  + " min/km");
  }




}
