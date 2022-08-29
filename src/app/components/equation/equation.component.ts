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

  equations: Equation[] = [];
  totalEquations = 15;
  equationIndex = 0;
  currentEquation!: Equation;
  clearInput = false;
  finished = false;
  startTime!: number;
  endTime!: number;

  ngOnInit(): void {
    this.init();
  }


  init() {

    this.equationIndex = 0;
    this.clearInput = false;
    this.finished = false;
    this.equationApiService.getEquations(this.totalEquations).subscribe({

      next: (response) => {
        this.equations = response;
        this.currentEquation = this.equations[this.equationIndex];
        this.startTime = performance.now();
      },

      error: (e) => {
        console.log(`
          API used to fetch equations is not working due to the following ${e}
          \n Using default equations until API is back.
        `);

        this.equations = Equation.getDafaultEquations();
        this.currentEquation = this.equations[this.equationIndex];
        this.startTime = performance.now();
      }

    });

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
    if (this.isQuizOver()) {
      this.finished = true;
      this.endTime = performance.now();
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

  isQuizOver() : boolean {
    return this.equationIndex === this.totalEquations;
  }

  restart() {
    this.init();
  }
}
