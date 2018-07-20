import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";

@Injectable()
export class BillingService {

  constructor( private http: Http,public session:SessionStorageService) { }

  cashbill():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    let body={
      "res_id":"154",
      "res_room":this.session.retrieve("id")
   };

    return this.http.post('https://hotel360.herokuapp.com/HOTEL_CAH_POST_SELECT_QUERYGUESTBILLING',body,options)
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
