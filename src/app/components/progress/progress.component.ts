import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  constructor() { }

  @Input() total = '';
  @Input() current = '';

  ngOnInit(): void {
  }

  getProgressPercentage() {
    if (+this.current == 1) return 0;
    const total = (+this.total)+1;
    return Math.trunc((+this.current/total)*100);
  }
}
