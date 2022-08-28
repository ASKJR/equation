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

  ngOnInit(): void {
    this.equationApiService.getEquations(this.totalEquations).subscribe((response) => {
      this.equations = response;
    })
  }

}
