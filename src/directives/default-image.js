var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//our root app component
import { Directive, Input } from '@angular/core';
import 'rxjs/Rx';
var DefaultImage = (function () {
    function DefaultImage() {
        //Add default image to show if not load correct select src
        this.default = "./../../assets/visa.png";
    }
    DefaultImage.prototype.updateUrl = function () {
        this.src = this.default;
    };
    return DefaultImage;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], DefaultImage.prototype, "src", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DefaultImage.prototype, "default", void 0);
DefaultImage = __decorate([
    Directive({
        selector: 'img[default]',
        host: {
            '(error)': 'updateUrl()',
            '[src]': 'src'
        }
    })
], DefaultImage);
export { DefaultImage };
//# sourceMappingURL=default-image.js.map