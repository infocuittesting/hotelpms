import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";

@Injectable()
export class BusinessBlockGridService {

  constructor(private http: Http,public session:SessionStorageService) { }

//RoomTypeDroup down
roomtype():  Observable<object[]> {   
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  
  return this.http.post('https://hotel360.herokuapp.com/Select_Room_Type',options)
     .map(this.extractData)

}
//savebutton
insertGrid(params):Observable<object[]> {  
  console.log("varuthuuuu",params) 
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  let body_input = {
    "grid":params
  }
  
  return this.http.post('https://hotel360.herokuapp.com/HOTEL_BBL_POST_INSERT_Grid',body_input,options)
     .map(this.extractData)

}

querygridvalue():  Observable<object[]> {   
  console.log("opennnnnnnnnnnnnnnnnnnnnn")
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  let body={
              "block_id":this.session.retrieve("blockid".toString())
  }
  
  return this.http.post('https://hotel360.herokuapp.com/HOTEL_BBL_POST_SELECT_QueryGrid',body,options)
     .map(this.extractData)

}

  private extractData(res: Response) {
    //alert('hai20')
    console.log('res========---===='+res);
    let body = res.json();
    //alert(JSON.stringify(body))
    console.log(JSON.stringify(body));
        return body;
        
    }
}
