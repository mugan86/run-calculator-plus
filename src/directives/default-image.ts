//our root app component
import {Component, Directive, Output, EventEmitter, Input, SimpleChange} from '@angular/core'
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/Rx';

@Directive({
  selector: 'img[default]',
  host: {
    '(error)':'updateUrl()',
    '[src]':'src'
   }
})
export class DefaultImage {
  @Input() src:string;
  //Add default image to show if not load correct select src
  @Input() default:string = "./../../assets/visa.png";

  updateUrl() {
    console.log("Error in load image");
    this.src = this.default;
  }
}
