import { Component, Input } from '@angular/core';

@Component({
  selector: 'select-options',
  templateUrl: 'select-options.html'
})
export class SelectOption {
  @Input() minValue: number = 0;

  //Manage select option type (hour, min, second, kms,...)
  @Input() type: string;

  constructor() {
    
  }

}
