import { NgModule } from '@angular/core';
import { OnlyNumber } from './directives/only-number.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { TextTruncatePipe } from './pipes/text-truncate.pipe';
import { EnumToArrayPipe } from './pipes/enum-to-array.pipe';
import { MomentPipe } from './pipes/moment.pipe';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RoundProgressComponent } from './components/round-progress/round-progress.component';
import { RoundProgressService } from './components/round-progress/round-progress.service';
import { RoundProgressEase } from './components/round-progress/round-progress.ease';
import { ROUND_PROGRESS_DEFAULTS_PROVIDER } from './components/round-progress/round-progress.config';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OnlyNumber,
    OrderByPipe,
    TextTruncatePipe,
    EnumToArrayPipe,
    MomentPipe,
    RoundProgressComponent
  ],
  exports: [
    OnlyNumber,
    OrderByPipe,
    TextTruncatePipe,
    EnumToArrayPipe,
    MomentPipe,
    RoundProgressComponent
  ],
  providers: [
    RoundProgressService,
    RoundProgressEase,
    ROUND_PROGRESS_DEFAULTS_PROVIDER
  ]
})
export class NgUtilsModule { }
