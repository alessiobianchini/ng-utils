import { Pipe, PipeTransform } from '@angular/core';
import * as moment_ from 'moment';

const moment = moment_;

@Pipe({
    name: 'moment'
})
export class MomentPipe implements PipeTransform {
    public transform(value: string, format?: string): string {

        // With no data, return
        if (!value) {
            return '-';
        }

        // Convert provided value in moment object
        const momentDate: any = moment(value);

        // If argument is not specified
        if (!format) {
            format = 'YYYY-MM-DD';
        }

        // Format with format
        return momentDate.format(format);
    }

}
