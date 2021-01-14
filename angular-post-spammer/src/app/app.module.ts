import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpamPrinterComponent } from './spam-printer/spam-printer.component';

@NgModule({
  declarations: [
    AppComponent,
    SpamPrinterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
