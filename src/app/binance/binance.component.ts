import { Component, OnInit } from '@angular/core';
import { BinanceService } from './binance.service';

@Component({
  selector: 'app-binance',
  templateUrl: './binance.component.html',
  styleUrls: ['./binance.component.css']
})
export class BinanceComponent implements OnInit {
  data: any;
  loaded: boolean;
  constructor(private binanceService: BinanceService) { }

  ngOnInit() {
    this.binanceService.getCryptos()
      .subscribe(res => {
        this.data = res;
        console.log('done');
        this.loaded = true;
      }, error => {
        console.log('something went wrong ' + error);
      });
  }

}
