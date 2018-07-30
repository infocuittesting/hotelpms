import { Component, OnInit, Input } from '@angular/core';
import { SessionStorageService } from "ngx-webstorage";
import { Router } from "@angular/router";
import {BillingService} from './billing.service';
// import { ContextMenuService } from 'angular2-contextmenu/src/contextMenu.service';
// import { ContextMenuComponent } from 'angular2-contextmenu/src/contextMenu.component';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css'],
  providers:[BillingService],
})
export class BillingComponent implements OnInit {
house=[];
home=[];
hist=[];
public navigat=[];
public navtbl=[];
public wind=[];
public money=[];
resty=[];
vaal1:any=[];
vaal2:any=[];
public gaga=[];

limit=10;
public company;
  public historyitems = [
    // { Action: 'Night Audit posting', Revenue_Date:'2018-06-19' ,Posting_date:'2018-06-19',User:'Supervisor',name:'Antony',Reason:'Payment posted for 2',Description:'Payment posted successfully'},
    // {Action: 'Night Audit posting', Revenue_Date:'2018-06-19' ,Posting_date:'2018-06-19',User:'Supervisor',name:'Antony',Reason:'Payment posted for 2',Description:'Payment posted successfully'},
    // {Action: 'Night Audit posting', Revenue_Date:'2018-06-19' ,Posting_date:'2018-06-19',User:'Supervisor',name:'Antony',Reason:'Payment posted for 2',Description:'Payment posted successfully'},
    // {Action: 'Night Audit posting', Revenue_Date:'2018-06-19' ,Posting_date:'2018-06-19',User:'Supervisor',name:'Antony',Reason:'Payment posted for 2',Description:'Payment posted successfully'},
    // {Action: 'Night Audit posting', Revenue_Date:'2018-06-19' ,Posting_date:'2018-06-19',User:'Supervisor',name:'Antony',Reason:'Payment posted for 2',Description:'Payment posted successfully'},
  ];

  public items = [
    // { Date: '16-04-2018', Code: 4121,Description:'parking',Amount:300 },
    // { Date: '17-04-2018', Code: 4525,Description:'hotel',Amount:500 },
    // { Date: '18-04-2018', Code: 4444,Description:'parking',Amount:400 },
    // { Date: '19-04-2018', Code: 4321,Description:'hotel',Amount:100 },
  ];
  
   constructor(private cashbillservice: BillingService, public session:SessionStorageService,private route:Router) { }
  public listmark:any=[];

  // for editposting payment 
  editbilling(amt,quan,ed_arcode,supple,ref,ed_cqno){
// console.log("edit return values",amount,quan,ed_arcode,ed_sup,ed_ref,ed_cqno)
    this.cashbillservice.updateeditposting(amt,quan,ed_arcode,supple,ref,ed_cqno)
    .subscribe((resp: any) => {
     this.gaga=resp.Return;
    //  console.log(this.gaga);
   });
 }





  ngOnInit() {

// posting history
    this.cashbillservice.gethistorylog()
    .subscribe((resp: any) => {
      this.house = resp.History;
      this.home = resp.Changes;
      this.hist = resp.Original;
// console.log(this.house);
// console.log(this.home);
// console.log(this.hist);

    });
    //currency dropdown
    this.cashbillservice.currencydropdown()
    .subscribe((resp: any) => {

     this.money=resp.Return;
    //  console.log(this.money);
   });


this.cashbillservice.inhousetobilling()
.subscribe((resp: any) => {
  this.navigat = resp.ReturnValue;
  this.navtbl=resp.ReturnValue1;
  // console.log("header",this.navigat,typeof(this.navigat));
  // console.log("table_val",this.navtbl,typeof(this.navtbl));

  //seperating values for window1 and window2 

  for(let seperat of this.navtbl){
    
     if (seperat['post_window']==1){
      this.vaal1.push(seperat) //for window1
     }
     else{
      this.vaal2.push(seperat)  //for window2

     }
  }
  console.log("vaal1",this.vaal1,typeof(this.vaal1));
  console.log("vaal2",this.vaal2,typeof(this.vaal2));

});


}


showdiv="9000";
selectoption(flag){
  console.log(flag);
  this.showdiv=flag;
  console.log(flag);
}


public room=this.session.retrieve("id");
public name=this.session.retrieve("name");
// public code=this.session.retrieve("Code");
// public amount=this.session.retrieve("Amount");
// public pstdt=this.session.retrieve("postdat");
// public quan=this.session.retrieve("quant");
public idpos=this.session.retrieve("posid");


public creditcd=this.session.retrieve("cc");
public creditexpdt=this.session.retrieve("expdate");
public reservtn_id=this.session.retrieve("res_id");
// display billing values
    // public gbalance=this.session.retrieve("balanc");
    // public garrival=this.session.retrieve("arr");
    // public gdep=this.session.retrieve("depar");
    // public gstat=this.session.retrieve("gstat");
    // public grtcd=this.session.retrieve("rtcd");
    // public grate=this.session.retrieve("rte");
    // public gperson=this.session.retrieve("persn");
    
public supple
public ref
public cqno
public poscd
public amt
public posdt
public quant
public posid
sidx=null;
vaalvaalfunc(dtl,idx){
  // console.log("selectMembersEdit",dtl)
  //displaying values in edit posting on clicking value in table
  this.supple=dtl.posting_supplement;
  this.ref=dtl.posting_reference;
  this.cqno=dtl.checkno;
  this.poscd=dtl.posting_code;  
  this.amt=dtl.posting_amount;
  this.posdt=dtl.posting_date;
  this.quant=dtl.posting_quantity;
  
this.sidx=idx;
// this.session.store("Code",dtl.posting_code);
// this.session.store("Amount",dtl.posting_amount);
// this.session.store("postdat",dtl.posting_date);
// this.session.store("quant",dtl.posting_quantity);
this.session.store("posid",dtl.post_id);
}
 
selectindexx=null;
selectMembersEditt(detailss,indexx){
  console.log("selectMembersEditttttt",detailss)
this.supple=detailss.posting_supplement;
this.ref=detailss.posting_reference;
this.cqno=detailss.checkno;
  this.poscd=detailss.posting_code;  
  this.amt=detailss.posting_amount;
  this.posdt=detailss.posting_date;
  this.quant=detailss.posting_quantity;
// console.log("suppleeeeeeeeeeeeeeeeeee",this.supple);
// console.log(this.ref);
this.selectindexx=indexx;
// this.session.store("Code",detailss.posting_code);
// this.session.store("Amount",detailss.posting_amount);
// this.session.store("postdat",detailss.posting_date);
// this.session.store("quant",detailss.posting_quantity);
this.session.store("posid",detailss.post_id);
}


private fieldArray: Array<any> = [];
private newAttribute: any = {};
addFieldValue() {
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {};
}

//month and year dropdown in expiry date
private month:any;
private year:any;
onMonthChange(month:any){
  this.month = month.toString();
}
onYearChange(year:any){
  this.year = year.toString();
}
private creditcard_expiry:any;
getcreditexpiry(){
  this.creditcard_expiry = this.month+"/"+this.year;
  console.log(this.creditcard_expiry);
}


}
