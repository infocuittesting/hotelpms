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
limit=10;
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
console.log(this.house);
    });

    this.cashbillservice.gethistorylog()
    .subscribe((resp: any) => {
      this.home = resp.Changes;
console.log(this.house);
    });

    this.cashbillservice.gethistorylog()
    .subscribe((resp: any) => {
      this.hist = resp.Original;
console.log(this.house);
    });


}

public room=this.session.retrieve("id");
public name=this.session.retrieve("name");
public code=this.session.retrieve("Code");
public amount=this.session.retrieve("Amount");

selectindex=null;
selectMembersEdit(details,index){
this.selectindex=index;
this.session.store("Code",details.Code);
this.session.store("Amount",details.Amount);

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
