var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
var ConvertedService = (function () {
    function ConvertedService(_http) {
        this._http = _http;
        this.urlLocalhost = "http://ergast.com/api/f1/";
        this.allf1SeasonsURL = this.urlLocalhost + "seasons.json?limit=100";
        this.driverSelectYearUrl = this.urlLocalhost;
    }
    //World championship drivers http://ergast.com/api/f1
    //Check select driver world champion: http://ergast.com/api/f1/driverStandings/1/drivers/<driverId>
    ConvertedService.prototype.findF1SeasonsList = function () {
        return this.getRequest(this.allf1SeasonsURL);
    };
    //Function to make GET Requests
    ConvertedService.prototype.getRequest = function (url) {
        console.log(url);
        return this._http.get(url)
            .map(function (response) {
            {
                return response.json();
            }
            ;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    return ConvertedService;
}());
ConvertedService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], ConvertedService);
export { ConvertedService };
//# sourceMappingURL=converter.js.map