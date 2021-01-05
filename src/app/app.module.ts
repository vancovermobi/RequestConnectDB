import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RequestDBComponent } from './request-db/request-db.component';
import { KetquadtComponent } from './KetquaDT/ketquadt/ketquadt.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestDBComponent,
    KetquadtComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule , RouterModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
