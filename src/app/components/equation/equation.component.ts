import { Component, OnInit } from '@angular/core';
import { EquationApiService } from '../../services/equation-api.service'
import { Equation } from '../../models/equation'

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {

  constructor(private equationApiService: EquationApiService) {}

  equations: Equation[] = [
    { "numberOne": 1, "numberTwo": 1, "operator": "+", "answer": 2},
    { "numberOne": 10, "numberTwo": 10, "operator": "+", "answer": 20 },
    { "numberOne": 5, "numberTwo": 5, "operator": "*", "answer": 25 },
    { "numberOne": 200, "numberTwo": 300, "operator": "+", "answer": 500 }
  ];
  totalEquations = 15;
  equationIndex = 0;
  currentEquation!: Equation;
  clearInput = false;

  ngOnInit(): void {
    this.equationApiService.getEquations(this.totalEquations).subscribe((response) => {
      this.equations = response;

      if (this.equations.length > 0) {
        this.currentEquation = this.equations[this.equationIndex];
      }

    })
    this.currentEquation = this.equations[this.equationIndex];
  }

  receivedUserAnswer(answer: string) {
    if (this.isUserAnswerCorrect(answer)) {
      this.nextEquation();
    }
  }

  isUserAnswerCorrect(answer: string): boolean {
    return answer == this.currentEquation.answer+'';
  }

  nextEquation() {
    if (this.shouldIncrementEquationIndex()) {
      this.incrementEquationIndex();
      this.updateCurrentEquation();
    }
  }

  incrementEquationIndex() : void {
    ++this.equationIndex;
  }

  shouldIncrementEquationIndex() : boolean {
    return this.equationIndex < this.totalEquations;
  }

  updateCurrentEquation() {
    this.clearInput = !this.clearInput;
    this.currentEquation = this.equations[this.equationIndex];
  }
}
