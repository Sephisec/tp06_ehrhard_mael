import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ApiService } from './api.service';
import { ApiHttpInterceptor } from './http-interceptor';
import { CatalogueComponent } from './catalogue/catalogue.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, CatalogueComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiHttpInterceptor, multi: true },
    ApiService,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
