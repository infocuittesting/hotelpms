import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";
@Injectable()
export class PackagesnewService {

  constructor(private http: Http,public session:SessionStorageService) { }

  //Forecast Dropdown
  Forecastgroupdropdown():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_PAC_POST_SELECT_Forecastgroup',options)
       .map(this.extractData)
       //.catch(this.handleErrorObservable);
  }

  //transaction
  Transactiondropdown():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_PAC_POST_SELECT_Transactioncode',options)
       .map(this.extractData)
       //.catch(this.handleErrorObservable);
  }

    //currency
    currencydropdown():  Observable<object[]> {
       
      const headers = new Headers({'Content-Type':'application/json'})
      const options = new RequestOptions({ headers: headers });
      return this.http.get('https://hotel360.herokuapp.com/Profile/profilecurrency')
         .map(this.extractData)
         //.catch(this.handleErrorObservable);
    }

        //Postingrhythm
        rhythmdropdown():  Observable<object[]> {
       
          const headers = new Headers({'Content-Type':'application/json'})
          const options = new RequestOptions({ headers: headers });
          return this.http.post('https://hotel360.herokuapp.com/HOTEL_PAC_POST_SELECT_Postingrhythm',options)
             .map(this.extractData)
             //.catch(this.handleErrorObservable);
        }

         //Calculaterule
         Calculaterule():  Observable<object[]> {
       
          const headers = new Headers({'Content-Type':'application/json'})
          const options = new RequestOptions({ headers: headers });
          return this.http.post('https://hotel360.herokuapp.com/HOTEL_PAC_POST_SELECT_Calculaterule',options)
             .map(this.extractData)
             //.catch(this.handleErrorObservable);
        } 

        //Seasoncode
        Seasoncode():  Observable<object[]> {
      
         const headers = new Headers({'Content-Type':'application/json'})
         const options = new RequestOptions({ headers: headers });
         return this.http.post('https://hotel360.herokuapp.com/HOTEL_REVENUE_MANAGEMENT_SELECT_Seasoncode',options)
            .map(this.extractData)
            //.catch(this.handleErrorObservable);
       }

        //Iteminventory
        Iteminventory():  Observable<object[]> {
      
         const headers = new Headers({'Content-Type':'application/json'})
         const options = new RequestOptions({ headers: headers });
         return this.http.post('https://hotel360.herokuapp.com/HOTEL_PAC_POST_SELECT_Iteminventory',options)
            .map(this.extractData)
            //.catch(this.handleErrorObservable);
       }

               //Alternative
               Alternate():  Observable<object[]> {
      
                const headers = new Headers({'Content-Type':'application/json'})
                const options = new RequestOptions({ headers: headers });
                return this.http.post('https://hotel360.herokuapp.com/HOTEL_PAC_POST_SELECT_Packages_All',options)
                   .map(this.extractData)
                   //.catch(this.handleErrorObservable);
              }


        //Seasoncode
        Packages(input:any,post_next_day,sell_separate,attributes_id,Alternates,item_inventory_selected_id):  Observable<object[]> {
      
         const headers = new Headers({'Content-Type':'application/json'})
         const options = new RequestOptions({ headers: headers });
        let body= {
          "package_code":input.package_code,
          "forecast_code_id":input.forecast_code_id,
          "short_description":input.short_description,
          "description":input.description,
          "transaction_code_id":input.transaction_code_id,
          "alternates":[parseInt(Alternates)],
          "currency_id":input.currency_id,
          "attributes_id":parseInt(attributes_id),
          "sell_separate":sell_separate,
          "post_next_day":post_next_day,
          "posting_rhythm_id":input.posting_rhythm_id,
          "calculate_rule_id":input.calculate_rule_id,
          "valid_time_from":input.valid_time_from,
          "valid_time_to":input.valid_time_to,
          "item_inventory_selected_id":[parseInt(item_inventory_selected_id)]
        }
        console.log(JSON.stringify(body));
         return this.http.post('https://hotel360.herokuapp.com/HOTEL_PAC_POST_INSERT_Packages',body,options)
            .map(this.extractData)
            //.catch(this.handleErrorObservable);
       }
        //Seasoncode
        Packdetails(input:any):  Observable<object[]> {
      
          const headers = new Headers({'Content-Type':'application/json'})
          const options = new RequestOptions({ headers: headers });
         let body= {
          "package_code_id":input.package_code_id,
          "season_code_id":input.season_code_id,
          "start_date":input.start_date,
          "end_date":input.end_date,
          "price":input.price,
          "allowance":input.allowance
         }
         console.log(JSON.stringify(body));
          return this.http.post('https://hotel360.herokuapp.com/HOTEL_PAC_POST_INSERT_Packagesdetails',body,options)
             .map(this.extractData)
             //.catch(this.handleErrorObservable);
        }

              //package details table
               packagedetails():  Observable<object[]> {
      
                const headers = new Headers({'Content-Type':'application/json'})
                const options = new RequestOptions({ headers: headers });
              let body={
                "package_code_id":this.session.retrieve("id")
              }
                return this.http.post('https://hotel360.herokuapp.com/HOTEL_PAC_POST_SELECT_Packages',body,options)
                   .map(this.extractData)
                   //.catch(this.handleErrorObservable);
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
