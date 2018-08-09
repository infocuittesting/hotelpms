import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class RevenuemanagementService {

  constructor(private http: Http) { }

  ratecategorydropdown():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_REVENUE_MANAGEMENT_POST_SELECT_RATECATEGORY',options)
       .map(this.extractData)

  }
  revenuepackages():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_REVENUE_MANAGEMENT_SELECT_Packages',options)
       .map(this.extractData)

  }

  ratecodedropdown():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_REVENUE_MANAGEMENT_POST_SELECT_RATECODE',options)
       .map(this.extractData)

  }

  marketdropdown():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_REVENUE_MANAGEMENT_POST_SELECT_MARKET_SELECT',options)
       .map(this.extractData)

  }

  sourcedropdown():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_REVENUE_MANAGEMENT_POST_SELECT_MARKET_SOURCE_SELECT',options)
       .map(this.extractData)

  }
  currencydropdown():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_REVENUE_MANAGEMENT_POST_SELECT_MARKET_CURRENCY_SELECT',options)
       .map(this.extractData)

  }
  seasoncode():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_REVENUE_MANAGEMENT_SELECT_Seasoncode',options)
       .map(this.extractData)

  }
  roomtypesdropdown():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.post('https://hotel360.herokuapp.com/Select_Room_Type',options)
       .map(this.extractData)

  }

  insertnewnego(input:any): Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   let body={ 

    "rate_code_id":input.ratecod.toString(),
    "negotiate_begin_sell_date":input.begin,
    "negotiate_end_sell_date":input.endsel,
    "negotiate_commision_code_id":0
   }
   console.log(JSON.stringify(body));

    return this.http.post('https://hotel360.herokuapp.com/HOTEL_REVENUE_MANAGEMENT_POST_INSERT_NEGOTIATED',body,options)
       .map(this.extractData)

  }

  deletenego():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
    let body={
      "negotiated_code_id":"3"
    }
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_REVENUE_MANAGEMENT_DELETE_Negotiated_Rate',body,options)
       .map(this.extractData)

  }

  NegotiatedRate():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.get('http://hotel360.herokuapp.com/HOTEL_REVENUE_MANAGEMENT_SELECT_Negotiated_Rate',options)
       .map(this.extractData)

  }
  
  saverateheader(ratecode,cat_id,rmid,rmid1,input:any): Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   let body=
   {
    "rate_code_details":{
      "rate_code":ratecode  ,
      "rate_description":"abcdefg",
      "rate_category_id":input.ratecategoryid
    },
    "begin_sell_date":input.beginselldate,
    "end_sell_date":input.endselldate,
    "market_id":input.market_id.toString(),
      "source_id":input.source_id.toString(),
      "display_sequence":3,
      "room_types":rmid,
      "package":rmid1,
      "sell_controls":{
        "min_stay":input.Minimum_stay_through,
        "max_stay":input.Maximum_stay_through,
        "min_advance_book":input.Minimum_Advance_Booking,
        "max_advance_book":input.Maximum_Advance_Booking,
        "min_occupancy":input.Minimum_Occupancy,
        "max_occupancy":input.Maximum_Occupancy
      },
      "transaction_details":{
        "tranction_code_id":3,
        "pkg_tranction_code_id":3,
          "currency_code_id":4,
          "exchange_type_id":3,
          "tax_inc":3
      },
      "components":{
          "package":input.Package,
          "day_use":input.Day,
          "negotiated":input.Negotiated,
          "complimentary":input.Complimentary,
          "suppress_rate":input.Suppress,
          "house_use":input.House,
          "print_rate":input.Rate,
          "day_type":input.Type,
          "discount":input.discount,
          "membership":input.Membership
      }
  }
  
   console.log(JSON.stringify(body));

    return this.http.post('https://hotel360.herokuapp.com/HOTEL_REM_POST_INSERT_UpdateRatecodeSetup',body,options)
       .map(this.extractData)

  }

  insertratedetail(ratecode,seasoncod,strtdt,enddate,onead,twoad,threead,fourad,extraad,onech,twoch,extrach,rmid2,rmid3):  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
    let body={
    
        "ratecode_id":ratecode,
        "season_code_id":seasoncod,
        "start_date":strtdt,
        "end_date":enddate,
        "days":{
            "sun":0,
            "mon":0,
            "tue":0,
            "wed":1,
            "thu":0,
            "fri":1,
            "sat":1
        },
        "one_adult_amount":onead,
       "two_adult_amount":twoad,
       "three_adult_amount":threead,
       "four_adult_amount":fourad,
       "extra_adult_amount":extraad,
       "one_child_amount":onech,
       "two_child_amount":twoch,
       "extra_child_amount":extrach,
       "room_types":rmid2,
       "package":rmid3,
       "rate_tier_id":0
    }
 
    return this.http.post('http://hotel360.herokuapp.com/HOTEL_REM_POST_INSERT_RATE_DETAILS',body,options)
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
