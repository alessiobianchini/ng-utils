import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgUtilsModule } from 'projects/ng-utils/src/public_api';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgUtilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
