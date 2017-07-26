var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
var SelectOption = (function () {
    function SelectOption() {
        this.minValue = "39393030";
        //Manage select option type (hour, min, second, kms,...)
        this.type = "Test";
        this.select = 0;
        this.values = [];
        console.log(this.minValue, this.type);
        for (var i = 0; i < 60; i++) {
            console.log(i);
            this.values.push(i);
        }
    }
    return SelectOption;
}());
__decorate([
    Input('minValue'),
    __metadata("design:type", String)
], SelectOption.prototype, "minValue", void 0);
__decorate([
    Input('type'),
    __metadata("design:type", String)
], SelectOption.prototype, "type", void 0);
SelectOption = __decorate([
    Component({
        selector: 'select-options',
        templateUrl: 'select-options.html'
    }),
    __metadata("design:paramtypes", [])
], SelectOption);
export { SelectOption };
//# sourceMappingURL=select-options.js.map