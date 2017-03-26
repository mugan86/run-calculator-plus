import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { RunConverter } from '../models/run-converter';

@Injectable()
export class ConvertedService {
    urlLocalhost: string = "http://ergast.com/api/f1/";
    allf1SeasonsURL: string = this.urlLocalhost + "seasons.json?limit=100";
    driverSelectYearUrl: string = this.urlLocalhost;

    converter: RunConverter;
    constructor(private _http: Http) { }

    //World championship drivers http://ergast.com/api/f1
    //Check select driver world champion: http://ergast.com/api/f1/driverStandings/1/drivers/<driverId>
    findF1SeasonsList() //GET
    {
      return this.getRequest(this.allf1SeasonsURL);
    }

    //Function to make GET Requests
    getRequest(url)
    {
      console.log(url);
      return this._http.get(url)
          .map(response => {
              { return response.json() };
          })
          .catch(error => Observable.throw(error.json()));
    }

    //Function to make POST Requests

}
