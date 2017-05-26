import { Action } from '@ngrx/store';
import { Operation } from '../models/operation.model';

//definitions of the actions that alter the state 
// Read more at https://www.pluralsight.com/guides/front-end-javascript/building-a-redux-application-with-angular-2-part-2#what-we-did-last-time#Qh34sQkp6O5J5Fjv.99
export const ActionTypes = {
    ADD_OPERATION: 'Add an operation',
    REMOVE_OPERATION: 'Remove an operation',
    INCREMENT_OPERATION: 'Increment an operation',
    DECREMENT_OPERATION: 'Decrement an operation'
}

export class AddOperationAction implements Action {
    type = ActionTypes.ADD_OPERATION;
    constructor(public payload: Operation) {

    }
}

export class RemoveOperationAction implements Action {
    type = ActionTypes.REMOVE_OPERATION;
    constructor(public payload: Operation) {

    }
}

export class IncrementOperationAction implements Action {
    type = ActionTypes.INCREMENT_OPERATION;
    constructor(public payload: Operation) {

    }
}

export class DecrementOperationAction implements Action {
    type = ActionTypes.DECREMENT_OPERATION;
    constructor(public payload: Operation) {

    }
}

export type Actions = AddOperationAction | RemoveOperationAction | IncrementOperationAction | DecrementOperationAction;


