import { NgModule } from '@angular/core';
import { OnlyNumber } from './directives/only-number.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { TextTruncatePipe } from './pipes/text-truncate.pipe';
import { EnumToArrayPipe } from './pipes/enum-to-array.pipe';
import { MomentPipe } from './pipes/moment.pipe';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [HttpClient],
  declarations: [
    OnlyNumber,
    OrderByPipe,
    TextTruncatePipe,
    EnumToArrayPipe,
    MomentPipe
  ],
  exports: [
    OnlyNumber,
    OrderByPipe,
    TextTruncatePipe,
    EnumToArrayPipe,
    MomentPipe
  ]
})
export class NgUtilsModule { }
