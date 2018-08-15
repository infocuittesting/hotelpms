import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";
import { Options } from 'selenium-webdriver/edge';

@Injectable()
export class EditRevenueManagementService {

  constructor(private http: Http,public session:SessionStorageService) { }

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

  deleteratedet(ratedetidvar):  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
    let body={
      "rate_details_id": ratedetidvar
    }
    return this.http.post('https://hotel360.herokuapp.com/Delete_Rate_details',body,options)
       .map(this.extractData)

  }

 getallvalues():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.get('https://hotel360.herokuapp.com/HOTEL_REM_POST_SELECT_SelectRatesetupAll',options)
       .map(this.extractData)

  }


  allvalues():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
    let body={
      "ratecode_id":this.session.retrieve("ratecodeedit")
    }
    console.log("binding values ratecodeeeeeeeee",JSON.stringify(body));
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_REM_POST_SELECT_UpdateRatecodeSetup ',body,options)
       .map(this.extractData)

  }
  
  updaterateheader(cat_id,rmid,rmid1,input:any): Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   let body=
   {
    "rate_code_details":{
      "rate_code":""  ,
      "rate_description":"abcdefg",
      "rate_category_id":input.ratecategoryid,
      "ratecode_id":25
    },
    "rateheader_id":121,
    "begin_sell_date":input.beginselldate,
    "end_sell_date":input.endselldate,
    "market_id":input.market_id.toString(),
      "source_id":input.source_id.toString(),
      "display_sequence":3,
      "room_types":rmid,
      "package":rmid1,
      "packages_id":27,
      "sell_controls":{
        "min_stay":input.Minimum_stay_through,
        "max_stay":input.Maximum_stay_through,
        "min_advance_book":input.Minimum_Advance_Booking,
        "max_advance_book":input.Maximum_Advance_Booking,
        "min_occupancy":input.Minimum_Occupancy,
        "max_occupancy":input.Maximum_Occupancy,
        "sell_id":18
      },
      "transaction_details":{
        "tranction_code_id":3,
        "pkg_tranction_code_id":3,
          "currency_code_id":4,
          "exchange_type_id":3,
          "tax_inc":3,
          "tranction_detail_id":12
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
          "membership":input.Membership,
          "components_id":10
      }
  }
  
   console.log(JSON.stringify(body));

    return this.http.post('https://hotel360.herokuapp.com/HOTEL_REM_POST_INSERT_UpdateRatecodeSetup',body,options)
       .map(this.extractData)

  }

  updateratedetail(ratecode,seasoncod,strtdt,enddate,onead,twoad,threead,fourad,extraad,onech,twoch,extrach,rmid2,rmid3,mondy,tuesdy,wednesdy,thursdy,fridy,saturdy,sundy):  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
    let body={
    
        "rate_details_id":86,
        "season_code_id":seasoncod,
        "start_date":strtdt,
        "end_date":enddate,
        "days":{
            "sun":sundy,
            "mon":mondy,
            "tue":tuesdy,
            "wed":wednesdy, 
            "thu":thursdy,
            "fri":fridy,
            "sat":saturdy
        },
        "rate_days_id":10,
        "one_adult_amount":onead,
       "two_adult_amount":twoad,
       "three_adult_amount":threead,
       "four_adult_amount":fourad,
       "extra_adult_amount":extraad,
       "one_child_amount":onech,
       "two_child_amount":twoch,
       "extra_child_amount":extrach,
       "room_types":rmid2,
       "rooms_id":20,
       "package":rmid3,
       "packages_id":19,
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
