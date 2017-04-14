import { Component, Input } from '@angular/core';

@Component({
  selector: 'select-options',
  templateUrl: 'select-options.html'
})
export class SelectOption {
  @Input('minValue') minValue: string = "39393030";

  //Manage select option type (hour, min, second, kms,...)
  @Input('type') type: string = "Test";

  select: number = 0;

  values: number[] = [];

  constructor() {
    console.log(this.minValue, this.type);
    for(let i = 0; i < 60; i++)
    {
      console.log(i);
      this.values.push(i);
    }

    
  }

}
