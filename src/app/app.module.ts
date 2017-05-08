import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TableUserComponent } from './table-user/table-user.component';
import { FormUserComponent } from './form-user/form-user.component';

@NgModule({
  declarations: [
    AppComponent,
    TableUserComponent,
    FormUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
