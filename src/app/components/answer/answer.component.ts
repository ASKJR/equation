import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
})
export class AnswerComponent implements OnChanges {

  answer?: string | null = '';
  @Input() clearInput!: boolean;
  @Output() answerEvent = new EventEmitter<string>();


  handleUserInput() {
    this.answerEvent.emit(this.answer!);
  }

  ngOnChanges(_changes: SimpleChanges): void {
    this.answer = null;
  }

}
