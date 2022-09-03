import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
})
export class ResultsComponent implements OnInit {

  @Input() startTimeInMs!: number;
  @Input() endTimeInMs!: number;
  constructor() { }

  ngOnInit(): void {
  }

  timeResult () {
    return new Date(this.endTimeInMs-this.startTimeInMs).toISOString().substring(11,19);
  }
}
