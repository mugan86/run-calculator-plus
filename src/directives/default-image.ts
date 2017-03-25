//our root app component
import {Directive, Output, Input} from '@angular/core'
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
  @Input() default:string = "./assets/img/icons/birthday.png";

  updateUrl() {
    this.src = this.default;
  }
}
