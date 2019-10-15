import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MzCardModule, MzDropdownModule, MzNavbarModule, MzSelectModule, MzToastModule} from 'ngx-materialize';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoaderComponent} from '../services/interceptors/loader/loader.component';
import {LoaderInterceptorService} from '../services/interceptors/loader/loader-interceptor.service';
import {FileSaverModule} from 'ngx-filesaver';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FileSaverModule,
    MzNavbarModule,
    MzCardModule,
    FormsModule,
    MzSelectModule,
    MzDropdownModule,
    MzToastModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
