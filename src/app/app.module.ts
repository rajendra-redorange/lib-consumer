import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LibTestRkModule } from 'lib-test-rk';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LibTestRkModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
