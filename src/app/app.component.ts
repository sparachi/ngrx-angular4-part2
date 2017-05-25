import { Component } from '@angular/core';
import { State, Store } from '@ngrx/store';

import { Operation } from './common/operation.model';
import * as operations from './common/operations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx example app!';

  public operations: any;
  public id: number = 0;

  constructor(private _store: Store<any>) {
    //By using observables, @ngrx/store lets you have access to the most recent state in real time 
    this.operations = _store.select('operations');
  }

  addOperation(operation) {
    this._store.dispatch({
      type: operations.ADD_OPERATION, payload: {
        id: ++this.id,
        reason: operation.reason,
        amount: operation.amount
      }
    });
  }

  incrementOperation(operation) {
    this._store.dispatch({ type: operations.INCREMENT_OPERATION, payload: operation });
  }
  decrementOperation(operation) {
    this._store.dispatch({ type: operations.DECREMENT_OPERATION, payload: operation });
  }
  deleteOperation(operation) {
    this._store.dispatch({ type: operations.REMOVE_OPERATION, payload: operation });
  }
}
