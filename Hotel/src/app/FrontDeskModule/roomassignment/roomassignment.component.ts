import { Component, OnInit } from '@angular/core';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { RoomassignmentService } from "./roomassignment.service";
import { SessionStorageService } from "ngx-webstorage";

@Component({
  selector: 'app-roomassignment',
  templateUrl: './roomassignment.component.html',
  styleUrls: ['./roomassignment.component.css'],
  providers:[ RoomassignmentService]
})
export class RoomassignmentComponent implements OnInit {

 public searchandedit =[];
  constructor(private RoomassignmentService:RoomassignmentService,private route:Router,public session:SessionStorageService) { }

  // Room Unassign
  status=[];
  unassignProfile(){
     let inputparms={
       "Res_id":this.session.retrieve("rmid"),
      "Res_room": this.session.retrieve("hsid"),
      "Res_unique_id":this.session.retrieve("uniq")

    }
   this.RoomassignmentService.unassignProfile(inputparms)
   .subscribe((resp: any) => {
    this.status=resp.ReturnValue;
  });
}

// Room Checkin
checkinProfile(){
  let inputparms={
    "Res_id":this.session.retrieve("rmid"),
    "pf_id":this.session.retrieve("rmpfid"),
    "Res_unique_id":this.session.retrieve("uniq")

  }
  
  this.RoomassignmentService.checkinProfile(inputparms)
   .subscribe((resp: any) => {
    this.status=resp.Return;
  });

}

ngOnInit() {

  this.RoomassignmentService.searchedit()
  .subscribe((resp: any) => {
   this.searchandedit=resp.ReturnValue;
 });

}
selectindex=null;
selectMembersEdit(details,index){
this.selectindex=index;
this.session.store("rmid",details.res_id.toString());
this.session.store("rmpfid",details.pf_id.toString());
this.session.store("uniq",details.res_unique_id.toString());

}

}
