import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'orderBy', pure: false })
export class OrderByPipe implements PipeTransform {

    static _orderByComparator(a: any, b: any): number {
        if (((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) && (a != null && b !=null)) {
            if (a.toLowerCase() < b.toLowerCase()) return -1;
            if (a.toLowerCase() > b.toLowerCase()) return 1;
        }
        else {
            if (parseFloat(a) < parseFloat(b)) return -1;
            if (parseFloat(a) > parseFloat(b)) return 1;
        }

        return 0;
    }

    transform(input: any, [config = '+']): any {
        if (!Array.isArray(input)) return input;

        if (!Array.isArray(config) || (Array.isArray(config) && config.length == 1)) {
            var propertyToCheck: string = !Array.isArray(config) ? config : config[0];
            var desc = propertyToCheck.substr(0, 1) == '-';

            if (!propertyToCheck || propertyToCheck == '-' || propertyToCheck == '+') {
                return !desc ? input.sort() : input.sort().reverse();
            }
            else {
                var property: string = propertyToCheck.substr(0, 1) == '+' || propertyToCheck.substr(0, 1) == '-'
                    ? propertyToCheck.substr(1)
                    : propertyToCheck;

                return input.sort(function (a: any, b: any) {
                    let splitted = property.split('.');
                    let aValue = a;
                    let bValue = b;
                    splitted.forEach(key => {
                        if (aValue)
                            aValue = aValue[key];
                        if (bValue)
                            bValue = bValue[key];
                    })
                    return !desc
                        ? OrderByPipe._orderByComparator(aValue, bValue)
                        : -OrderByPipe._orderByComparator(aValue, bValue);
                });
            }
        }
        else {
            return input.sort(function (a: any, b: any) {
                for (var i: number = 0; i < config.length; i++) {
                    var desc = config[i].substr(0, 1) == '-';
                    var property = config[i].substr(0, 1) == '+' || config[i].substr(0, 1) == '-'
                        ? config[i].substr(1)
                        : config[i];

                    let splitted = property.split('.');
                    let aValue = a;
                    let bValue = b;
                    splitted.forEach(key => {
                        if (aValue)
                            aValue = aValue[key];
                        if (bValue)
                            bValue = bValue[key];
                    })

                    var comparison = !desc
                        ? OrderByPipe._orderByComparator(aValue, bValue)
                        : -OrderByPipe._orderByComparator(aValue, bValue);

                    if (comparison != 0) return comparison;
                }

                return 0;
            });
        }
    }
}
