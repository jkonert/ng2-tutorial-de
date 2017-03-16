import { Directive } from '@angular/core';
import { FormControl, Validator, NG_VALIDATORS } from '@angular/forms';

function validateName(c: FormControl) {
    let NO_NUMBER_REGEXP = /^([^0-9]*)$/;

    return NO_NUMBER_REGEXP.test(c.value) ? null : {
        validateName: {
            valid: false
        }
    };
}

@Directive({
    selector: '[validateName][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: NameValidator, multi: true }
    ]
})
export class NameValidator implements Validator {

    validator: any;

    constructor() {
        this.validator = validateName;
    }

    validate(c: FormControl) {
        return this.validator(c);
    }
}
