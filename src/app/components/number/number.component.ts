import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-number',
  template: `

      <h1>{{numberValue}}</h1>
  `
})
export class NumberComponent {

  @Input() numberValue!: number;

}
