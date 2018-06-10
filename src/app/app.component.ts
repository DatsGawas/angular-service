import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any;
  foods: any;
  showTest: boolean;
  constructor(private _http: HttpClient) {
    this.showTest = false;

    this.foods = [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'}
    ];
  }

  getData() {
    const headers = new HttpHeaders().append(
      'Access-Control-Allow-Origin', '*'
    );
    let response: any;
    this._http.get('https://mfapps.indiatimes.com/ET_Calculators/getBankDetailsByIfsc.htm?ifsccode=HDFC0000486', { headers }).subscribe(
      res => {
      response = res;
    },
    err => {
      console.log('Error occured');
    },
      () => {
        if (response) {
          this.data = response;
        }
      }
      );
  }


}
