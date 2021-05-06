import { AbstractControl } from "@angular/forms";

export function PrefixValidation (control: AbstractControl) {
    if (control.value.includes("arc-")){
        return { reservedPrefix: true };
    }
}