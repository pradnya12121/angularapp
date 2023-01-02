import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RapiService {
url="'https://bb-finance.p.rapidapi.com/market/auto-complete?query/apple"
  constructor(private httpClient:HttpClient) { }
  getDataFromBB() :Observable <any>{
    let header = new HttpHeaders({
      'X-RapidAPI-Key': '4b10ce1375msh541f63a2c88605dp13e6f0jsna8f81c89b50d',
    'X-RapidAPI-Host': 'bb-finance.p.rapidapi.com'
    })
    return this.httpClient.get(this.url)
    
  }

}
