import { Component } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable } from "rxjs";

import { Operation } from "./models/operation.model";
import * as operations from './actions/operations';
import * as fromRoot from './reducers/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx example app!';

  public operations: Observable<Operation[]>;
  public id: number = 0;

  constructor(private _store: Store<any>) {
    // https://gist.github.com/btroncone/a6e4347326749f938510#managing-middleware-with-let
    // let me have the entire observable
    // While most rxjs operators are passed emitted values from the observable, let is handed the entire observable.
    // this allows the opportunity to tack on extra operators and functionality, before returning the source observable.
    // While this may seem like a small nuance, it fits perfectly into situations where the consumer would like to define a composable,
    //  reusable block of code to be inserted at a particular slot in an observable chain.
    // below we are chaining the observable with two functions to select the subset of data
    this.operations = _store.let(fromRoot.getEntitiesData);
  }

  addOperation(operation) {
    this._store.dispatch(new operations.AddOperationAction({
      
        id: ++this.id,
        reason: operation.reason,
        amount: operation.amount
    }));
  }

  incrementOperation(operation) {
    this._store.dispatch(new operations.IncrementOperationAction(operation));
  }
  decrementOperation(operation) {
    this._store.dispatch(new operations.DecrementOperationAction(operation));
  }
  deleteOperation(operation) {
    this._store.dispatch(new operations.RemoveOperationAction(operation));
  }
}
