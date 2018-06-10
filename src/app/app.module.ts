import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app.routing.module";
import {DashboardComponent} from "./dashboard/dashboard/dashboard.component";
import { EditBookComponent } from './edit-book/edit-book/edit-book.component';
import { EditReaderComponent } from './edit-reader/edit-reader/edit-reader.component';

@NgModule({
  declarations: [
    AppComponent, DashboardComponent, EditBookComponent, EditReaderComponent,

],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
