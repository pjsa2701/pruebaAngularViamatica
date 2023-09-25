import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FacturaModule } from './factura/factura.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FacturaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
