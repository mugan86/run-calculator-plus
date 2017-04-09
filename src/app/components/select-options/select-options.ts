import { Component, Input } from '@angular/core';

import { ILanguage } from './../../../interfaces/language';
import { ITheme } from './../../../interfaces/theme';
import { ISettings } from './../../../interfaces/settings';

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
