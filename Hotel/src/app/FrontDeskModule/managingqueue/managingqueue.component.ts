import { Component, OnInit } from '@angular/core';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionStorageService } from "ngx-webstorage";

import { Router } from "@angular/router";
import { ManagingqueueService } from "./managingqueue.service";
@Component({
  selector: 'app-managingqueue',
  templateUrl: './managingqueue.component.html',
  styleUrls: ['./managingqueue.component.css'],
  providers:[ManagingqueueService]
})
export class ManagingqueueComponent implements OnInit {
  
  constructor(private pService:ManagingqueueService,private route:Router,public session:SessionStorageService ) { 
    this.search=this.someData;
  }

public search = [];
public list=[];
someData = []

roomtype;

onSelect(val){
  console.log(val.toLowerCase());
  this.search = this.someData.filter(x => x.rm_room_type == val.toLowerCase())
  console.log(this.search);
}

  //checkin
  status={};

checkinProfile(){
  let inputparms={
    "Res_id":this.session.retrieve("id"),
    "pf_id":this.session.retrieve("id1"),
    "Res_unique_id":this.session.retrieve("uniq")
  }
  
  this.pService.checkinProfile(inputparms)
   .subscribe((resp: any) => {
    this.status=resp.Return;
  });

}

  ngOnInit() {
  
  this.pService.checkin()
  .subscribe((resp: any) => {
   this.search=resp.ReturnValue;
 });

 this.pService.checkin()
 .subscribe((resp: any) => {
  this.someData=resp.ReturnValue;
});

 this.pService.roomtype()
 .subscribe((resp: any) => {
  this.list=resp.ReturnValue;
});

}

selectindex=null;
selectMembersEdit(details,index){
this.selectindex=index;
this.session.store("id",details.res_id.toString());
this.session.store("id1",details.pf_id.toString());
this.session.store("id2",details.res_room.toString());
this.session.store("uniq",details.res_unique_id.toString());
console.log(this.session.retrieve("id"));
}

}

