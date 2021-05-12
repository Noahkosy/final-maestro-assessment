import { AbstractControl } from "@angular/forms";

export function futureDateValidation (ctrl: AbstractControl) {
    const str = ctrl.value;
    const now = parseInt(new Date().toISOString().slice(0,10).split('-').join(''));
    const date = parseInt(str.replaceAll("-", ''));
    if (date < now) {
        return { invalidDate: true };
    } else {
        return null;
    }
}