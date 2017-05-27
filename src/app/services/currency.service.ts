import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class CurrencyService {

  constructor(private http: Http) { }

  loadCurrencies() {
    //Inferring that the base is USD 
    return this.http.get('http://api.fixer.io/latest?base=USD')
                    .map((response) => { let body = response.json(); return body.rates as string});
  }


}
