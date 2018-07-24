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
resty=[];
limit=10;
public company;
  public historyitems = [
    { Action: 'Night Audit posting', Revenue_Date:'2018-06-19' ,Posting_date:'2018-06-19',User:'Supervisor',name:'Antony',Reason:'Payment posted for 2',Description:'Payment posted successfully'},
    {Action: 'Night Audit posting', Revenue_Date:'2018-06-19' ,Posting_date:'2018-06-19',User:'Supervisor',name:'Antony',Reason:'Payment posted for 2',Description:'Payment posted successfully'},
    {Action: 'Night Audit posting', Revenue_Date:'2018-06-19' ,Posting_date:'2018-06-19',User:'Supervisor',name:'Antony',Reason:'Payment posted for 2',Description:'Payment posted successfully'},
    {Action: 'Night Audit posting', Revenue_Date:'2018-06-19' ,Posting_date:'2018-06-19',User:'Supervisor',name:'Antony',Reason:'Payment posted for 2',Description:'Payment posted successfully'},
    {Action: 'Night Audit posting', Revenue_Date:'2018-06-19' ,Posting_date:'2018-06-19',User:'Supervisor',name:'Antony',Reason:'Payment posted for 2',Description:'Payment posted successfully'},
  ];

  player;
  showMore=false;
  //show more
  showMoreBut(){
    this.showMore=true;
  }
  //show less
  showLessBut(){
    this.showMore=false;
  }

  public items = [
    { Date: '16-04-2018', Code: 4121,Description:'parking',Amount:300 },
    { Date: '17-04-2018', Code: 4525,Description:'hotel',Amount:500 },
    { Date: '18-04-2018', Code: 4444,Description:'parking',Amount:400 },
    { Date: '19-04-2018', Code: 4321,Description:'hotel',Amount:100 },
  ];
  
   constructor(private cashbillservice: BillingService, public session:SessionStorageService,private route:Router) { }
  public listmark:any=[];
  ngOnInit() {

    this.cashbillservice.gethistorylog()
    .subscribe((resp: any) => {
      this.house = resp.History;
      this.home = resp.Changes;
      this.hist = resp.Original;
console.log(this.house);
console.log(this.home);
console.log(this.hist);

    });

    

//     this.cashbillservice.gethistorylog()
//     .subscribe((resp: any) => {
//       this.home = resp.Changes;
// console.log(this.house);
//     });

//     this.cashbillservice.gethistorylog()
//     .subscribe((resp: any) => {
//       this.hist = resp.Original;
// console.log(this.house);
//     });


this.cashbillservice.inhousetobilling()
.subscribe((resp: any) => {
  this.navigat = resp.ReturnValue;
  this.navtbl=resp.ReturnValue1;
  console.log("header",this.navigat);
  console.log("table_val",this.navtbl);

});


}

public room=this.session.retrieve("id");
public name=this.session.retrieve("name");
public code=this.session.retrieve("Code");
public amount=this.session.retrieve("Amount");
public pstdt=this.session.retrieve("postdat");
public quan=this.session.retrieve("quant");

public creditcd=this.session.retrieve("cc");
public creditexpdt=this.session.retrieve("expdate");
public reservtn_id=this.session.retrieve("res_id");
// display billing values
public gbalance=this.session.retrieve("balanc");
public garrival=this.session.retrieve("arr");
public gdep=this.session.retrieve("depar");
public gstat=this.session.retrieve("gstat");
public grtcd=this.session.retrieve("rtcd");
public grate=this.session.retrieve("rte");
public gperson=this.session.retrieve("persn");

selectindex=null;
selectMembersEdit(details,index){
this.selectindex=index;
this.session.store("Code",details.post_code_id);
this.session.store("Amount",details.posting_amount);
this.session.store("postdat",details.posting_date);
this.session.store("quant",details.posting_quantity);

}
roomdetails:any=[{
  "business_id":"100",
  "facilitie1":"abc",
  "facilitie2":"def",
  "facilitie3":"123",
  "id":"1",
  "room_type":"dulex",
  "room_code":"dulex001",
  "room_name":"double_bed",
  "standard_rate":"100",
  "standard_rate_currency":"USD",
  "totel_room":"25",
  "editFlag":false
}]

}
