
import '@ngrx/core/add/operator/select';
import { Observable } from "rxjs/Observable";
import * as currencies from '../actions/currencies';

/*
The state of currency will have 3 things - list of available currencies, selected currency, list of exchange rates
*/
export interface State {
    currencies: Array<string>,
    selectedCurrency: string | null,
    rates: Array<Object>
}

const initiaState: State = {
    currencies: ['GBP', 'INR', 'USD'],
    selectedCurrency: null,
    rates: []
}

export function reducer(state = initiaState, action: currencies.Actions): State {
    switch (action.type) {
        case currencies.ActionTypes.CHANGE_CURRENCY: {
            return {
                currencies: state.currencies,
                selectedCurrency: action.payload,
                rates: state.rates
            }
        }
        default:
            return state;
    }
}

// below 3 selector functions to provide slices of currency state

export function getCurrencies(state$: Observable<State>) {
    return state$.select(s => s.currencies);
}

export function getSelectedCurrency(state$: Observable<State>) {
    return state$.select(s => s.selectedCurrency);
}

export function getRates(state$: Observable<State>) {
    return state$.select(s => s.rates);
}
