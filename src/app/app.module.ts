import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquationComponent } from './components/equation/equation.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EquationApiService } from './services/equation-api.service';
import { NumberComponent } from './components/number/number.component';
import { OperatorComponent } from './components/operator/operator.component';
import { AnswerComponent } from './components/answer/answer.component';
import { ProgressComponent } from './components/progress/progress.component';
import { ResultsComponent } from './components/results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    EquationComponent,
    NumberComponent,
    OperatorComponent,
    AnswerComponent,
    ProgressComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    EquationApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
