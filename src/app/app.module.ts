import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RequestDBComponent } from './request-db/request-db.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestDBComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
