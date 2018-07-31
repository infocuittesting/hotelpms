import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";
import { Options } from 'selenium-webdriver/edge';

@Injectable()
export class BillingService {

  constructor( private http: Http,public session:SessionStorageService) { }


  gethistorylog():  Observable<object[]> {
       
     const headers = new Headers({'Content-Type':'application/json'})
     const options = new RequestOptions({ headers: headers });
     let body =
     {
        "res_id":this.session.retrieve("id1")
        
     }
  
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_CAH_POST_POSTING_HISTORY_LOG',body,options)
       .map(this.extractData)
       //.catch(this.handleErrorObservable);
  }

  inhousetobilling():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    let body =
    {
       "res_id":this.session.retrieve("id1"),
       "res_room":this.session.retrieve("id")
       
    }
   console.log(JSON.stringify(body));
   return this.http.post('https://hotel360.herokuapp.com/HOTEL_CAH_POST_SELECT_QUERYGUESTBILLING',body,options)
      .map(this.extractData)
      //.catch(this.handleErrorObservable);
 }

 updateeditposting(amt,quan,ed_arcode,ed_sup,ref,cqno): Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
 let body={ 
  "Res_id":this.session.retrieve("id1"),
  "post_id":this.session.retrieve("posid"),
  "Posting_amount":amt,
  "Arrangement_code":ed_arcode.toString(),
  "Checkno":cqno.toString(),
  "Posting_supplement":ed_sup,
  "Posting_reference":ref,
  "Posting_quantity":quan.toString(),
  "res_room":this.session.retrieve("id")
 }
 console.log(JSON.stringify(body));

  return this.http.post('https://hotel360.herokuapp.com/HOTEL_CAH_POST_UPDATE_UPDATEGUESTBILLING',body,options)
     .map(this.extractData)

}


currencydropdown():  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
 
  return this.http.post('https://hotel360.herokuapp.com/HOTEL_REVENUE_MANAGEMENT_POST_SELECT_MARKET_CURRENCY_SELECT',options)
     .map(this.extractData)

}


transferwindow(poscdid,postwindow):  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
  let body={ 
    "Res_id":this.session.retrieve("id1"),
    "Post_id":poscdid.toString(),
    "Post_window":postwindow,
   }
   console.log(JSON.stringify(body));

  return this.http.post('https://hotel360.herokuapp.com/HOTEL_CAH_POST_UPDATE_TransfertoAnotherWindow',body,options)
     .map(this.extractData)

}

  private extractData(res: Response) {
    //alert('hai20')
    console.log('res========---===='+res);
    let body = res.json();
   console.log(JSON.stringify(body));
    // a(JSON.stringify(body));
        return body;
    }

}
