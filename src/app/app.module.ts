import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { NewOperation } from './new-operation.component';
import { OperationsList } from './operation-list.component';
import { operationsReducer } from './common/operations';

@NgModule({
  declarations: [
    AppComponent,
    NewOperation,
    OperationsList
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({operations: operationsReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
