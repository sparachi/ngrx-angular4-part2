import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';

import * as operations from '../actions/operations';
import { Operation } from '../models/operation.model';

/* From a simple array ( [] ), the state becomes a object where the array is contained within the entities property */
/* Create a custom interface 'State' and 'entities' property in it, which can later be extended to include additional properties */
export interface State {
    entities: Array<Operation>
};
const initialState: State = { entities: [] };

/* Instead of using a constant of type ActionReducer, the function is directly exported */
export function reducer(state = initialState, action: operations.Actions): State {
    switch (action.type) {
        //In Redux, you cannot mutate the state. In this case using .push(), .pop(), 
        // .shift() or .unshift() is against the convention. 
        case operations.ActionTypes.ADD_OPERATION: {//Action type
            const operation: Operation = action.payload;//the contents of an operation 
            /* Because the state is now an object instead of an array, the return statements of the reducer have to be adapted. */
            return {
                entities: [...state.entities, operation]
            };

        }
        case operations.ActionTypes.INCREMENT_OPERATION: {
            const operation = ++action.payload.amount;
            return Object.assign({}, state, { entities: state.entities.map(item => item.id === action.payload.id ? Object.assign({}, item, operation) : item) });
        }
        case operations.ActionTypes.DECREMENT_OPERATION: {
            const operation = --action.payload.amount;
            return Object.assign({}, state, { entities: state.entities.map(item => item.id === action.payload.id ? Object.assign({}, item, operation) : item) });

        }
        case operations.ActionTypes.REMOVE_OPERATION: {
            return Object.assign({}, state, { entities: state.entities.filter(operation => operation.id !== action.payload.id) })
        }
        default://if the action.type is unknown, return the state 
            return state;
    }
};