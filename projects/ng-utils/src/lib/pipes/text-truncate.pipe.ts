import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncate'
})
export class TextTruncatePipe implements PipeTransform {

    /**
     * Truncate the input string
     * @param value string to truncate
     * @param length length of the new string
     */
    public transform(value: string, length: number): string {

        // With no data, return
        if (!value) {
            return '-';
        }

        if (value.length > length) {
            // Return truncated string
            return (value.substring(0, length) + ' [...]');
        } else {
            // Return original string value if input paramenter length is less than value length or input paramenter length is undefined
            return value;
        }
    }
}
