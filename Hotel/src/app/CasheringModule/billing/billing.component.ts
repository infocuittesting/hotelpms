import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from "ngx-webstorage";
import { Router } from "@angular/router";
// import { ContextMenuService } from 'angular2-contextmenu/src/contextMenu.service';
// import { ContextMenuComponent } from 'angular2-contextmenu/src/contextMenu.component';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
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
   constructor( public session:SessionStorageService,private route:Router) { }
  
  ngOnInit() {
}

selectindex=null;
selectMembersEdit(details,index){
this.selectindex=index;
this.session.store("id",details.Date);
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
