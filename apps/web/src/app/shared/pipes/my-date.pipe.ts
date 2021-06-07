import { Injectable, Pipe } from '@angular/core';

@Pipe({
    name: 'myDatePipe',
})
@Injectable()
export class myDatePipe {
    skyrimMonths: string[] = [
        'Morning Star',
        "Sun's Dawn",
        'First Seed',
        "Rain's Hand",
        'Second Seed',
        'Mid Year',
        "Sun's Height",
        'Last Seed',
        'Hearthfire',
        'Frost Fall',
        "Sun's Dusk",
        'Evening Star',
    ];

    transform(str) {
        const noDate = 'No due date.';
        if (!str) {
            return noDate;
        } else {
            let year = str.slice(0, 4);
            let day = str.slice(9, 10);
            let month = str.slice(6, 7);
            let conMonth = this.skyrimMonths[month];
            let result = conMonth + ', ' + day + ', ' + year;
            return result;
        }
    }
}
