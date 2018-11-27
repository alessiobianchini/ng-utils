# Angular directives and pipes pack

## Installation

`npm i ng-utils-pack`

and </br>

`import { NgUtilsModule } from 'ng-utils-pack'`

or </br>

`import { SingleElement } from 'ng-utils-pack'`

## Directives

### OnlyNumber 

Numerical formatter for input.
Allowed: 
numbers (numpad to), space, '+', Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X, home, end, left and right.

Usage: </br>
`[OnlyNumber]="true"`

## Pipes

### EnumToArrayPipe

Convert enumerator to array.

Usage: </br>
`*ngFor="let element of elements | enumToArray"`

### MomentPipe

Return the date in the format provided.
Parameters: string = date format.

Usage: </br>
`string | moment: 'DD/MM/YYYY'`

### OrderByPipe

Sort array in *ngFor.
Parameters: string[] = properties to sort.

Usage: </br>
`*ngFor="let element of elements | orderBy: ['element.firstProperty', 'element.secondProperty']"`

### TextTruncatePipe

Return truncated string.
Parameter: number = string length.

Usage: </br>
`string | truncate: 450`
