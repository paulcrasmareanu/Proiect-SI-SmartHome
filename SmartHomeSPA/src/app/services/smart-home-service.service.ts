import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class SmartHomeServiceService {

  constructor(private http: HttpClient) {}

  sendLedData(input, url) {
    
    this.http.post(url, input).subscribe();

  }

  giveData(url) {
   return this.http.get(url);

  }


}
