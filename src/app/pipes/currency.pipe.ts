import { Pipe, PipeTransform } from '@angular/core';
import { State, Store } from "@ngrx/store";
import * as fromRoot from '../reducers/index';

/* Requiring money.js and setting the base currency to USD. In this case, we infer that the base currency is USD. 
However, if you add a baseCurrency attribute to the currencies state, you can make the base currency dynamic as well. */
// https://stackoverflow.com/questions/43104114/cannot-find-name-require-after-upgrading-to-angular4
const fx = require('money');
fx.base = "USD";

@Pipe({
    name: 'currencyPipe'
})
export class CustomCurrencyPipe implements PipeTransform {
    /* One of the main advantages of Redux is that the state of the application can be observed from any file 
       by simply implementing a selector and calling it where needed. */
    constructor(private _store: Store<fromRoot.AppState>) {
        this._store.let(fromRoot.getRatesData)
            .subscribe((rates) => { fx.rates = rates; });
    }

    /* The currency parameter obtains its value from the selectedCurrency property. 
    An alternative implementation would be to call getSelectedCurrency within the pipe 
    and get the selectedCurrency within the pipe. */
    transform(value: number, currency): string {
        console.log('Inside transform of CustomCurrencyPipe');
        if (currency != null) {
            value = fx.convert(value, { from: "USD", to: currency });
            return currency + ' ' + value;
        } else {
            return 'USD' + ' ' + value;
        }
    }
}
