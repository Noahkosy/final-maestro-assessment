import { AbstractControl } from "@angular/forms";

export function FutureDateValidation (ctrl: AbstractControl) {
    let str = ctrl.value;
    let now = parseInt(new Date().toISOString().slice(0,10).split('-').join(''));
    let date = parseInt(str.replaceAll("-", ''));
    if (date < now) {
        return { invalidDate: true };
    } else {
        return null;
    }
}