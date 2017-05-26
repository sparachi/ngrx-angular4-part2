
import { combineReducers, ActionReducer } from "@ngrx/store";
import { Observable } from "rxjs";
import { compose } from "@ngrx/core";

import * as fromOperations from "./operations";

/*
combineReducers is a function that takes an object with all the reducer functions as property values and extracts its keys. 
Then it uses Array.reduce()  to accumulate the return value of each of the reducer functions into a state tree and 
reassign it to the key to which the reducer corresponds. 
The return value is an object which contains the key-value pairs of the reducers and the states they returned.
*/
// https://www.youtube.com/watch?v=gBER4Or86hE
// http://onehungrymind.com/build-better-angular-2-application-redux-ngrx/

// custom top level 'State' interface
export interface AppState {
    operations: fromOperations.State
}

// this reducers variable represents map of all reducer functions that are going to be grouped in this meta reducer
// above AppState keys, and below keys must match
const reducersList = {
    operations: fromOperations.reducer
}

// this will still work const ourCombinedReducer = combineReducers(reducersList);
// but our actions are of type 'Action' so we would like to leverage ActionReducer
const ourCombinedReducer : ActionReducer<AppState> = combineReducers(reducersList);

export function appReducer(state: any, action: any){
    // syntax of ActionReducer is https://github.com/ngrx/store/blob/master/src/reducer.ts 
    return ourCombinedReducer(state, action);
}

// now that we have combined our reducers i.e. tables in database
// we will now provide functions to access these slices of data

// this function will return the operations object from the state tree
// returned data will be like 
/*
{
    entities: [...array of operations]
}
*/
export function getOperations(state$: Observable<AppState>) {
    return state$.select(state => state.operations);
}

// this function will return the entities in an operation. 
// It must be actually in operations.ts file, moved here for easy understanding
export function getEntitiesInOperation(state$: Observable<fromOperations.State>){
    return state$.select(s => s.entities);
}

/*
Function composition is one of the building blocks of functional programming. 
It executes a set of functions, putting the returned value of the first function as the argument for the second function. 
In math, composition of two functions f(x) and g(x) would result in f(g(x)).
compose() applies functions from right to left.
syntax of compose() https://github.com/ngrx/core/blob/master/src/compose.ts

Below, getOperations first access the 'operations' state from the root state tree and feeds to 
getEntitiesInOperation function which then gets the value of 'entities' property
*/
export const getEntitiesData = compose(getEntitiesInOperation, getOperations);