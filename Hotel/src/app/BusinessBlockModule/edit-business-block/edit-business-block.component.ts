import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from "ngx-webstorage";
import { Router } from "@angular/router";
import {EditBusinessBlockService} from './edit-business-block.service';

@Component({
  selector: 'app-edit-business-block',
  templateUrl: './edit-business-block.component.html',
  styleUrls: ['./edit-business-block.component.css'],
  providers:[EditBusinessBlockService]
})
export class EditBusinessBlockComponent implements OnInit {

  constructor(private editblockservice: EditBusinessBlockService, public session:SessionStorageService,private route:Router) { }
// declare variable....................................
public blockstatus=[];
public market=[];
public source=[];
public origin=[];
public payment=[];
public cancelreason=[];
public meetingsizetype=[];
public inventory=[];
public ratecode=[];
public restype=[];
public blocktype=[];
public block:any={};
public createblock:any;
public blocksuccess: string;
public blockids:any=" ";
public block_name:any=" ";
public block_code:any=" ";
public paymasters:any;
public querypay:any;
public queryroomrevenue;
public payblockid;
public queryedit=[];
public blid;
  ngOnInit() {
    // block status sropdown.....................
    this.editblockservice.blockstatusdropdown()
    .subscribe((resp: any) => {
        this.blockstatus=resp.ReturnValue;
         console.log(this.blockstatus);
     });

//   // market dropdown...........................
  this.editblockservice.marketdropdown()
  .subscribe((resp: any) => {
      this.market=resp.ReturnValue;
       console.log(this.market);
   });

  //  source dropdown.......................
  this.editblockservice.sourcedropdown()
  .subscribe((resp: any) => {
      this.source=resp.ReturnValue;
       console.log(this.source);
   });

  // Origin dropdown.........................
  this.editblockservice.origindropdown()
  .subscribe((resp: any) => {
      this.origin=resp.ReturnValue;
       console.log("originnnnnnnnnnnnnnnn",this.origin);
   });

  //  payment dropdown........................
  this.editblockservice.paymentdropdown()
  .subscribe((resp: any) => {
      this.payment=resp.ReturnValue;
       console.log(this.payment);
   });
// cancel reason dropdown....................
this.editblockservice.cancelreasondropdown()
.subscribe((resp: any) => {
    this.cancelreason=resp.ReturnValue;
     console.log(this.cancelreason);
 });

//  Meetingspacetpye dropdown......................
this.editblockservice.meetingsizetypedropdown()
.subscribe((resp: any) => {
    this.meetingsizetype=resp.ReturnValue;
     console.log(this.meetingsizetype);
 });
// inventory dropdown.............................
this.editblockservice.Inventorydropdown()
.subscribe((resp: any) => {
    this.inventory=resp.ReturnValue;
     console.log(this.inventory);
 });

//  Ratecode Dropdown.............................
this.editblockservice.Ratecodedropdown()
.subscribe((resp: any) => {
    this.ratecode=resp.ReturnValue;
     console.log(this.ratecode);
 });
// Reservation type dropdown......................
 this.editblockservice.Resetypedropdown()
.subscribe((resp: any) => {
    this.restype=resp.ReturnValue;
     console.log(this.restype);
 });
//  blocktype dropdown...............................
this.editblockservice.BlockTypedropdown()
.subscribe((resp: any) => {
    this.blocktype=resp.ReturnValue;
     console.log(this.blocktype);
 });

//  Query Editblock ....................................
this.editblockservice.QueryEditblock()
.subscribe((resp: any) => {
    this.queryedit=resp.ReturnValue;
    // this.blid=this.queryedit.block_id;
     console.log(this.queryedit);
 });

  }

  blockheader(block){
    if(block.print_rate == true)
    {
        block.print_rate = "1"
    }
    else
    {
        block.print_rate = "0"
    }
    if(block.suppress == true)
    {
        block.suppress = "1"
    }
    else{
        block.suppress = "0"
    }
    if(block.guranteeds == true)
    {
        block.guranteeds = "1"

    }
    else{
        block.guranteeds = "0"
    }
    this.editblockservice.Editblock(block)
.subscribe((resp: any) => {
    this.createblock=resp.ReturnCode;
    this.blockids = resp.Blockid;
    this.block_code = resp.blockcode;
    this.block_name = resp.Blockname;
     console.log(this.createblock);
     this.session.store("blids",this.blockids.toString());
     if(this.createblock=="RIS"){
        this.blocksuccess="Block Created Successfully"+ this.blockids
        console.log("outputblock",this.blocksuccess)
     }
     else{
         this.blocksuccess="something"
     }
 });
 
  }
// Query Room Revenue Button
  RoomrevenueButton(){
    console.log("going to calculate room revenue")
  this.editblockservice.QueryRoomRevenue()
  .subscribe((resp: any) => {
      this.queryroomrevenue=resp.ReturnValue;
       console.log(this.queryroomrevenue);
   });
}

CreatePaymaster(){
    // console.log("going to reservation button",this.blockids,typeof(this.blockids));
  // this.payblockid = this.blockids.toString();
  // console.log("stringvalue",typeof(this.payblockid))
this.editblockservice.PaymasterReservation()
.subscribe((resp: any) => {
    this.paymasters=resp.ReturnCode;
     console.log("paymasertresponse",this.paymasters);
 });
}

}
