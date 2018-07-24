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
        "res_id":"2"
        
     }
  
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_CAH_POST_POSTING_HISTORY_LOG',body,options)
       .map(this.extractData)
       //.catch(this.handleErrorObservable);
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
