import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";
import { Options } from 'selenium-webdriver/edge';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Injectable()
export class EditBusinessBlockService {

  constructor(private http: Http,public session:SessionStorageService) { }

   // blockstatus dropdown.....................
   blockstatusdropdown():Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.get('https://hotel360.herokuapp.com/HOTEL_BBL_GET_SELECT_BusinessBlockStatus',options)
       .map(this.extractData)

  }
// market dropdown............................
marketdropdown():Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
 
  return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Market',options)
     .map(this.extractData)

}

// source dropdown..................................
sourcedropdown():Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
 
  return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Source',options)
     .map(this.extractData)

}

// Origin Dropdown.........................
origindropdown():Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
 
  return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Origin',options)
     .map(this.extractData)

}
// payment dropdown...................
paymentdropdown():Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
 
  return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Payment',options)
     .map(this.extractData)

}
// cancel Reason...................
cancelreasondropdown():Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
 
  return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_CancelReason',options)
     .map(this.extractData)

}

// Meeting space type...........................
meetingsizetypedropdown():Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
 
  return this.http.get('https://hotel360.herokuapp.com/HOTEL_BBL_GET_SELECT_MeetingSpaceType',options)
     .map(this.extractData)

}

// Inventory Control Dropdown....................
Inventorydropdown():Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
 
  return this.http.get('https://hotel360.herokuapp.com/HOTEL_BBL_GET_SELECT_InventoryContrtol',options)
     .map(this.extractData)

}

// Ratecode Dropdown..............................
Ratecodedropdown():Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
 
  return this.http.get('https://hotel360.herokuapp.com/Profile/profileratecode ',options)
     .map(this.extractData)

}

// Reservation type dropdown.......................
Resetypedropdown():Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
 
  return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Restype ',options)
     .map(this.extractData)

}
// block type dropdown........................................................
// Reservation type dropdown.......................
BlockTypedropdown():Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
 
  return this.http.get('https://hotel360.herokuapp.com/HOTEL_BBL_GET_SELECT_Block_Type ',options)
     .map(this.extractData)

}


  Editblock(block):  Observable<object[]> {   
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    let body={

    }
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_BBL_POST_UPDATE_BusinessBlockDefinite',body,options)
       .map(this.extractData)
  }
  

  QueryEditblock():  Observable<object[]> {   
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    let body={
        "block_id":this.session.retrieve("blockid".toString())
    }
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_BBL_POST_SELECT_EditBusinessBlockSearch',body,options)
       .map(this.extractData)
  }
  // Query Room Revenue......................................................................................
QueryRoomRevenue():Observable<object[]> {
  console.log("sucess is worked")
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
  let body = {
    
      "block_id":this.session.retrieve("blockid".toString())
      
  }
  return this.http.post('https://hotel360.herokuapp.com/HOTEL_BBL_POST_SELECT_QueryRoomRevenue',body,options)
     .map(this.extractData)

}

// Create Paymaster Reservation................................................................
PaymasterReservation():Observable<object[]> {
  // console.log("going to service",blockids,typeof(blockids))
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
  let body = {
    
      "block_id": this.session.retrieve("blockid".toString())
      
  }
  return this.http.post('https://hotel360.herokuapp.com/HOTEL_BBL_POST_INSERT_PayMasterReservation',body,options)
     .map(this.extractData)

}

Edit_grid_data(block):Observable<object[]> {
   console.log("going to service",block,typeof(block))
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
  let body = {
    
      // "block_id": this.session.retrieve("blockid".toString())
      "Definite":
           {
             "block_id":this.session.retrieve("blockid".toString()),
	           "block_status_id":"1",
             "market_id":"",
             "source_id":"",
             "owner":"",
             "origin_id":"",
	           "start_date":"",
	           "end_date":block.end_date,
	           "nights":block.nights,
	          "block_type":""
            },
     "Rooms":   {
            "block_id":this.session.retrieve("blockid".toString()),
            "res_type_id":"",
            "cutoff_date":block.cutoff_date,
            "cutoff_days":block.cutoff_days,
            "inventory_control_id ":"",
            "ratecode_id":"",
            "print_rate":"",
			      "suppress_rate":"",
			      "packages":block.packages,
		       	
			      "follow_date":""
			
            },
       "Block_details":
             {
             "block_id":this.session.retrieve("blockid".toString()),
             "payments_id":"",
             "rooming_list_duedate":block.rooming_list_duedate,
             "arrivaltime":block.arrivaltime,
             "depaturetime":block.depaturetime,
		      	 "commission":block.commission,
			       "total_rooms_perday":block.total_rooms_perday
             },
        "Catering":
             {
             "block_id":this.session.retrieve("blockid".toString()),
             "guranteed":"",
             "attenders":"",
			       "info_board":"",
			       "contract_no":"",
			       "onsite_name":"",
			       "owner_id":"",
			       "followup_date":block.follow_date
             },
        "block_meeting":
                {
				     "block_id":this.session.retrieve("blockid".toString()),
				     "meeting_space":"",
				     " meeting_space_type_id ":"",
				     "attendess":""
			      	},
       "Catering Cancel":
             {
             "block_id":this.session.retrieve("blockid".toString()),
             "catering_reason_id":"",
             "catering_comments":""
             },
       "Room Cancel":
              {
              "block_id":this.session.retrieve("blockid".toString()),
              "room_cancel_reason":"",
              "room_cancel_comments":"",
              "room_cancel_destination":""
              }
      
  }
  return this.http.post('https://hotel360.herokuapp.com/HOTEL_BBL_POST_UPDATE_BusinessBlockDefinite',body,options)
     .map(this.extractData)

}
// select_grid_data():  Observable<object[]> {   
//   const headers = new Headers({'Content-Type':'application/json'})
//   const options = new RequestOptions({ headers: headers });
//   let body={
//               "block_id":this.session.retrieve("blockid")
//   }
//     return this.http.post('https://hotel360.herokuapp.com/HOTEL_BBL_POST_SELECT_QueryGrid',body,options)
//    .map(this.extractData)

// }






  private extractData(res: Response) {
    //alert('hai20')
    console.log('res========---===='+res);
    let body = res.json();
   console.log(JSON.stringify(body));
    // a(JSON.stringify(body));
        return body;
    }

}
