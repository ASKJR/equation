export class Equation {
  answer = 0;
  numberOne = 0;
  numberTwo = 0;
  operator = '*';

  static getDafaultEquations(): Equation[] {
    return [
      { "numberOne": 8, "numberTwo": 10, "operator": "-", "answer": -2 },
      { "numberOne": 4, "numberTwo": 7, "operator": "*", "answer": 28 },
      { "numberOne": 8, "numberTwo": 7, "operator": "+", "answer": 15 },
      { "numberOne": 6, "numberTwo": 1, "operator": "*", "answer": 6 },
      { "numberOne": 5, "numberTwo": 1, "operator": "+", "answer": 6 },
      { "numberOne": 1, "numberTwo": 1, "operator": "*", "answer": 1 },
      { "numberOne": 1, "numberTwo": 1, "operator": "+", "answer": 2 },
      { "numberOne": 7, "numberTwo": 6, "operator": "-", "answer": 1 },
      { "numberOne": 10, "numberTwo": 2, "operator": "*", "answer": 20 },
      { "numberOne": 10, "numberTwo": 3, "operator": "+", "answer": 13 },
      { "numberOne": 7, "numberTwo": 2, "operator": "*", "answer": 14 },
      { "numberOne": 10, "numberTwo": 6, "operator": "-", "answer": 4 },
      { "numberOne": 2, "numberTwo": 4, "operator": "+", "answer": 6 },
      { "numberOne": 8, "numberTwo": 2, "operator": "*", "answer": 16 },
      { "numberOne": 7, "numberTwo": 7, "operator": "-", "answer": 0 }
    ];
  }
}
