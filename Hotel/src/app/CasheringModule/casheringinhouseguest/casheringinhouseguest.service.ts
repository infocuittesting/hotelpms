import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";


@Injectable()
export class CasheringinhouseguestService {

  constructor( private http: Http,public session:SessionStorageService) { }
  

  restypedropdown():  Observable<object[]> {    
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Restype')
       .map(this.extractData)
  }

  postbuttoninsert(input): Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   let body={ 
    "res_id":this.session.retrieve("id1"),
    "Payment_code_id":input.selected,
    "currency_id":input.currency,
    "Postig_amount":input.amount,
    "payment_supplemet":input.supp,
    "Posting_reference":input.ref,
    "credicard_id":"222", 
   }
   console.log(JSON.stringify(body));
  
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_CAH_POST_INSERT_UPDATEPOSTINGPAYMENT',body,options)
       .map(this.extractData)
  
  }


  currencydropdown():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_REVENUE_MANAGEMENT_POST_SELECT_MARKET_CURRENCY_SELECT',options)
       .map(this.extractData)

  }
  inhousetable():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.get('https://hotel360.herokuapp.com/HOTEL_CAH_POST_SELECT_QUERYINHOUSERECORD')
       .map(this.extractData)

  }
  
  foliohistory():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_CAH_POST_FOLIO_HISTORY',options)
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
