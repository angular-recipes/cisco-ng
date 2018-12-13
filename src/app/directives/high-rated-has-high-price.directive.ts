import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[highRatedHasHighPrice]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: HighRatedHasHighPriceDirective,
    multi: true
  }]
})
export class HighRatedHasHighPriceDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    let priceControl = control.get('price');
    let ratingControl = control.get('rating');

    if (priceControl && ratingControl && priceControl.value && ratingControl.value) {
      let price = +priceControl.value;
      let rating = +ratingControl.value;
      if (price > 50 && rating < 4) {
        return { highRatedHasHighPrice: true };
      }
    }

    return null;
  }
}
