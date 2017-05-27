import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from './app.component';
import { NewOperation } from './new-operation.component';
import { OperationsList } from './operation-list.component';
import { appReducer } from './reducers/index';
import { CurrenciesComponent } from './currencies.component';
import { CurrencyService } from "./services/currency.service";
import { CurrencyEffects } from "./effects/currencies";
import { CustomCurrencyPipe } from "./pipes/currency.pipe";

@NgModule({
  declarations: [
    AppComponent,
    NewOperation,
    OperationsList,
    CurrenciesComponent,
    CustomCurrencyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    StoreModule.provideStore(appReducer),
    EffectsModule.run(CurrencyEffects)
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
