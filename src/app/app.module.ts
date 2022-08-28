import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquationComponent } from './components/equation/equation.component';
import { HttpClientModule } from '@angular/common/http';
import { EquationApiService } from './services/equation-api.service';

@NgModule({
  declarations: [
    AppComponent,
    EquationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    EquationApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
