import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Equation } from '../models/equation';

@Injectable({
  providedIn: 'root'
})
export class EquationApiService {

  constructor(private htpp: HttpClient) { }

  getEquations(qty = 10) : Observable<Equation[]>{
    return this.htpp
    .get<Equation[]>(`https://equation-api.albertokato.com.br/api/v1/equations?qty=${qty}`)
    .pipe(catchError(
      (error) => {
        return throwError(() => new Error('API is DOWN.'))
      }
    ))
  }
}
