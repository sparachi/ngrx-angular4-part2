
import '@ngrx/core/add/operator/select';
import { Observable } from "rxjs/Observable";
import * as currencies from '../actions/currencies';

/*
The state of currency will have 3 things - list of available currencies, selected currency, list of exchange rates
*/
export interface State {
    currencies: Array<string>,
    selectedCurrency: string | null,
    rates: string,
    loadingRates: boolean
}

const initiaState: State = {
    currencies: ['GBP', 'EUR'],
    selectedCurrency: null,
    rates: '',
    loadingRates: true
}

export function reducer(state = initiaState, action: currencies.Actions): State {
    switch (action.type) {
        case currencies.ActionTypes.CHANGE_CURRENCY: {
            
            return {
                currencies: state.currencies,
                selectedCurrency: action.payload,
                rates: state.rates,
                loadingRates: false
            };
        }
        case currencies.ActionTypes.LOAD_CURRENCY_RATES: {
            return {
                currencies: state.currencies,
                selectedCurrency: state.selectedCurrency,
                rates: state.rates,
                loadingRates: true
            };
        }
        case currencies.ActionTypes.LOAD_CURRENCY_COMPLETE: {
            return {
                currencies: state.currencies,
                selectedCurrency: state.selectedCurrency,
                rates: action.payload,
                loadingRates: false
            };
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
