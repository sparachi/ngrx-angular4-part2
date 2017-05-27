import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrenciesComponent {

  constructor() { }

  @Input() currencies: Array<string>; 
  @Input() selectedCurrency: string; 
  @Output() currencySelected = new EventEmitter();

}
