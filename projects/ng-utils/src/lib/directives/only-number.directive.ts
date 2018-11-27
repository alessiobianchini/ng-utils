import { Directive, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[OnlyNumber]'
})
export class OnlyNumber {

    regexFirst = /^[0-9]*$/;
    regEx = /^[0-9 +]+$/;
    constructor() { }

    @Input() OnlyNumber: boolean = true;

    @HostListener('change', ['$event']) onChange(event) {
        let e = event.target.value;
        if (this.OnlyNumber) {
            if (this.regEx.test(e))
                return;
            else
                event.target.value = '';
        }
    }

    @HostListener('keydown', ['$event']) onKeyDown(event) {
        let e = <KeyboardEvent>event;
        if (this.OnlyNumber) {
            if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
                // Allow: Ctrl+A
                (e.keyCode == 65 && e.ctrlKey === true) ||
                // Allow: Ctrl+C
                (e.keyCode == 67 && e.ctrlKey === true) ||
                // Allow: Ctrl+V
                (e.keyCode == 86 && e.ctrlKey === true) ||
                // Allow: Ctrl+X
                (e.keyCode == 88 && e.ctrlKey === true) ||
                // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                // let it happen, don't do anything
                return;
            }
            let ch = String.fromCharCode(e.keyCode);
            // Allow: space
            if (e.keyCode == 32) {
                return;
            }
            // Allow: +
            if (e.keyCode == 107) {
                return;
            }
            // Allow: numpad
            if ((e.keyCode >= 96 && e.keyCode <= 105) && e.altKey === false) {
                return;
            }
            if (this.regexFirst.test(ch))
                return;
            else
                e.preventDefault();
        }
    }

    @HostListener('keypress', ['$event']) onKeyUp(event) {
        let e = <KeyboardEvent>event;
        if (e.code == 'AltLeft' || e.code == 'AltRight')
            e.preventDefault();
        else
            return;
    }
}
