import { Component, OnInit } from '@angular/core';
import {RominglistService} from './rominglist.service';
import { Router } from "@angular/router";
import { SessionStorageService } from "ngx-webstorage";

@Component({
  selector: 'app-rominglist',
  templateUrl: './rominglist.component.html',
  styleUrls: ['./rominglist.component.css'],
  providers: [RominglistService]
})
export class RominglistComponent implements OnInit {

  constructor(private roomlistservice:RominglistService,public session:SessionStorageService,private route:Router) { }



  ngOnInit() {
   
  
  }
//  Add rows in rooming list screen............................
public affFlagg=false;
public savedetails=[];
public add;
public Names;
public Arrival;
public Depature;
public nights;
public roomtype;
public adult;
public child;
public numberofrooms;
public blockid;
public savedetails1=[];
addRows(Names,Arrival,Depature,nights,roomtype,adult,child,numberofrooms,blockid)
{
  if( roomtype!=null)
  {
 

   this.savedetails.push({
        // "business_id":this.session.retrieve("business_id")     
          "res_arrival":this.session.retrieve("arrive"),
          "res_depature":this.session.retrieve("depature"),
          "res_nights":this.session.retrieve("nightss"),
          "res_adults":adult,
          "res_child":child,
          "res_number_of_rooms":numberofrooms,
          "res_room_type":roomtype,
          "res_block_code":this.session.retrieve("blockid"),
          "pf_firstname":Names,
          "editFlag":false
      });  

      this.savedetails1.push({
        // "business_id":this.session.retrieve("business_id")     
          "res_arrival":this.session.retrieve("arrive"),
          "res_depature":this.session.retrieve("depature"),
          "res_nights":this.session.retrieve("nightss"),
          "res_adults":adult,
          "res_child":child,
          "res_number_of_rooms":numberofrooms,
          "res_room_type":roomtype,
          "res_block_code":this.session.retrieve("blockid"),
          "pf_firstname":Names,
          
      });  

      console.log("retrieve id",this.session.retrieve("blockid"));  
      // this.add={};
      this.Arrival="";
      this.Depature="";
      this.nights = "";
      this.Names="";
      this.roomtype="";
      this.adult="";
      this.child="";
      this.numberofrooms="";
      this.blockid="";


    console.log('this.savedetailssssss',this.savedetails1)
      // console.log("postdetails",this.postdetails);
  }
}

// CREATE GROUP RESERVATION
public groupresv;
CreateGroupReservation(){
  console.log("enter to component",this.savedetails1)
  this.roomlistservice.GroupReservation(this.savedetails1)
  .subscribe((resp: any) => {
          this.groupresv=resp.ReturnCode;
           console.log("success reservation",this.groupresv);
          
       });
}

}
