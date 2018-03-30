import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class BinanceService {
  private url = 'https://cors-anywhere.herokuapp.com/https://api.binance.com/api/v1/';
  constructor(private http: Http) { }

  getCryptos() {
    return this.http.get(this.url + 'ticker/price')
      .map(res => res.json());
  }
}
