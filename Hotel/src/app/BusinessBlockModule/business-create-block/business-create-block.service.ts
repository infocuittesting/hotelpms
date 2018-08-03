import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";
import { Options } from 'selenium-webdriver/edge';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Injectable()
export class BusinessCreateBlockService {

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
// create businessBlock................................
CreateBusinessBlock(block):Observable<object[]> {
  console.log("servicets",block)
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
  let body = {
    "Definite":
           {
            "pf_id":"cpy71",
	          "block_status_id":block.statusblock,
            "market_id":block.marketcode,
            "source_id":block.sourcecode,
            "owner":block.owner,
            "origin_id":block.origincode,
	          "start_date":block.startdate,
	          "end_date":block.enddate,
            "nights":block.nights,
	          "block_type":block.blocktypes
            },
"Rooms":   {
            
            "res_type_id":block.restypes,
            "cutoff_date":block.cuttoff,
            "cutoff_days":block.cut_days,
            " inventory_control_id ":block.inventorys,
            "ratecode_id":block.ratecodes,
            "print_rate":block.print_rate,
			      "suppress_rate":block.suppress,
			      "packages":block.packagess,
            "trace_code":block.tracess,
            "follow_date":block.followdates
			     
            },
"Block_details":
             {
             
             
             "payments_id":block.payments,
             "rooming_list_duedate":block.roominglistdue,
             "arrivaltime":block.arrival_tim,
             "depaturetime":block.depature_tim,
			       "commission":block.commis
             },
"Catering":
             {
          
             "guranteed":"",
             "attendess":block.attender,
	           "info_board":block.info_boards,
             "contract_no":block.contract,
             "onsite_name":block.onsite,
             
			       "followup_date":block.follow_dates
			      
			 
             },

"block_meeting":
                {
				     "meeting_space":block.meetingsizes,
				     " meeting_space_type_id ":block.space_type,
				     "attendess":block.Attend
				}
}
  
 
  return this.http.post('https://hotel360.herokuapp.com/HOTEL_BBL_POST_INSERT_BusinessBlockDefinite ',body,options)
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
