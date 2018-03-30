import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SuiModule } from 'ng2-semantic-ui';
import { HttpModule } from '@angular/http';

// components
import { AppComponent } from './app.component';

// services
import { BinanceService } from './binance/binance.service';

import { AppRoutingModule, routedComponents } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    routedComponents
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SuiModule,
    AppRoutingModule
  ],
  providers: [ BinanceService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
