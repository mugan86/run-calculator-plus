//our root app component
import {Directive, Input} from '@angular/core'
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
    this.src = this.default;
  }
}
