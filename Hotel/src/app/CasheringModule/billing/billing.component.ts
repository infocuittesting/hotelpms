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
    { Date: '16-04-2018', Code: 4121,Description:'parking',Amount:500 },
    { Date: '16-04-2018', Code: 4121,Description:'parking',Amount:500 },
    { Date: '16-04-2018', Code: 4121,Description:'parking',Amount:500 },
    { Date: '16-04-2018', Code: 4121,Description:'parking',Amount:500 },
  ];
   constructor(private cashbillservice: BillingService, public session:SessionStorageService,private route:Router) { }
  public listmark:any=[];
  ngOnInit() {

    this.cashbillservice.cashbill()
    .subscribe((resp:any) => {
      this.listmark=resp.ReturnValue;
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
