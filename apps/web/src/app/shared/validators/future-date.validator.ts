import { AbstractControl } from '@angular/forms';

export function futureDateValidation(ctrl: AbstractControl) {
    const str = ctrl.value;
    const now = parseInt(new Date().toISOString().slice(0, 10).split('-').join(''));
    const date = parseInt(str.replaceAll('-', ''));
    if (!str) {
        return false;
    } else if (date < now) {
        return { invalidDate: true };
    } else {
        return;
    }
}

// When specifying a return type on a function that has multiple options (here we have boolean, object, or nothing) how do you reflect that in typescript?
