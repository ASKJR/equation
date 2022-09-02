import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-operator',
  template: `<h1>{{operator}}</h1>`
})
export class OperatorComponent  {

  @Input() operator!: string;
  constructor() { }

}
