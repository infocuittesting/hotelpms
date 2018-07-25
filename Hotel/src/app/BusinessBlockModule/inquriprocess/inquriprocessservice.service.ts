import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";
 
@Injectable()
export class InquriprocessserviceService {

  constructor(private http: Http,public session:SessionStorageService) { }
// RoomtypeDroupDowns
  roomtypedroupdown():  Observable<object[]> {   
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    
    return this.http.post('https://hotel360.herokuapp.com/Select_Room_Type',options)
       .map(this.extractData)
}

roomtypedroupdown1():  Observable<object[]> {   
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  
  return this.http.post('https://hotel360.herokuapp.com/Select_Room_Type',options)
     .map(this.extractData)
}
roomtypedroupdown2():  Observable<object[]> {   
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  
  return this.http.post('https://hotel360.herokuapp.com/Select_Room_Type',options)
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
