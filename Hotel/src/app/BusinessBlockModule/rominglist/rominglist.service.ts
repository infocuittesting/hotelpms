import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";

@Injectable()
export class RominglistService {

  constructor(private http: Http,public session:SessionStorageService) { }

// Create Group Reservation
GroupReservation(savedetails1):Observable<object[]> {
    console.log("insert going to service", savedetails1)
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
    let body = savedetails1 
      
        // [
        //     {
        //     "res_arrival":savedetails.res_arrival,
        //     "res_depature":savedetails.res_depature,
        //     "res_nights":savedetails.res_nights,
        //     "res_adults":savedetails.res_adults,
        //     "res_child":savedetails.res_child,
        //     "res_number_of_rooms":savedetails.res_number_of_rooms,
        //     "res_room_type":savedetails.res_room_type,
        //     "res_block_code":this.session.retrieve("blockid"),
        //     "pf_firstname":savedetails.pf_firstname
        //     }
        // ]   
    
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_BBL_POST_INSERT_GroupReservations',body,options)
       .map(this.extractData)
  
  } 

  QueryRoomtypeGrid():Observable<object[]> {
    console.log("query hhhhh")
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
    let body = {
      
        "block_id":this.session.retrieve('blockid')
        
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
