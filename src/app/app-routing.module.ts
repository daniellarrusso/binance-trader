import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BinanceComponent } from './binance/binance.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    { path: '', redirectTo: '/binance', pathMatch: 'full' },
    { path: 'binance', component: BinanceComponent },
    { path: 'about', component: AboutComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [ BinanceComponent, AboutComponent ];

