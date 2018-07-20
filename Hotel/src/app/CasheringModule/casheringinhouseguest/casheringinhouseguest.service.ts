import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";


@Injectable()
export class CasheringinhouseguestService {

  constructor( private http: Http,public session:SessionStorageService) { }

  currencydropdown():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_REVENUE_MANAGEMENT_POST_SELECT_MARKET_CURRENCY_SELECT',options)
       .map(this.extractData)

  }

  saverateheader(input:any): Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   let body=
   {
    "res_id":"1",
    "Payment_code_id":"9009",
    "currency_id":"2",
    "Postig_amount":"1500",
    "payment_supplemet":"icici",
    "Posting_reference":"hotel",
    "credicard_id":"1"
    }
    

   console.log(JSON.stringify(body));

    return this.http.post('https://hotel360.herokuapp.com/HOTEL_CAH_POST_INSERT_UPDATEPOSTINGPAYMENT',body,options)
       .map(this.extractData)

  }

  private extractData(res: Response) {
    //alert('hai20')
    console.log('res========---===='+res);
    let body = res.json();
    // alert(JSON.stringify(body))
    console.log(JSON.stringify(body));
        return body;
    }

}
