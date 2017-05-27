import { Action } from '@ngrx/store';

export const ActionTypes = {
    CHANGE_CURRENCY: 'Changes the currency type',
    LOAD_CURRENCY_RATES: 'Loading currency rate',
    LOAD_CURRENCY_COMPLETE: 'Loading currency rates is completed'
}

export class ChangeCurrencyAction implements Action {
    type = ActionTypes.CHANGE_CURRENCY;
    constructor(public payload: string) {}
}

export class LoadCurrencyRateAction implements Action {
    type = ActionTypes.LOAD_CURRENCY_RATES;
    constructor(public payload: string){}
}

export class LoadRatesCompleteAction implements Action {
    type = ActionTypes.LOAD_CURRENCY_RATES;
    constructor(public payload: string){}
}

export type Actions = ChangeCurrencyAction | LoadCurrencyRateAction | LoadRatesCompleteAction;