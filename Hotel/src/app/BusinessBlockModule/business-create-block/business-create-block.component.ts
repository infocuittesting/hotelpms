
import { Component, OnInit, Input } from '@angular/core';
import { SessionStorageService } from "ngx-webstorage";
import { Router } from "@angular/router";
import { BusinessCreateBlockService } from './business-create-block.service'

@Component({
  selector: 'app-business-create-block',
  templateUrl: './business-create-block.component.html',
  styleUrls: ['./business-create-block.component.css'],
  providers:[BusinessCreateBlockService]
})
export class BusinessCreateBlockComponent implements OnInit {

  constructor(private businessblock: BusinessCreateBlockService, public session:SessionStorageService,private route:Router) { }
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
public blockids:any;
public block_name:any="";
public block_code:any;

// ................................................
  ngOnInit() {

    // block status sropdown.....................
    this.businessblock.blockstatusdropdown()
    .subscribe((resp: any) => {
        this.blockstatus=resp.ReturnValue;
         console.log(this.blockstatus);
     });

  // market dropdown...........................
  this.businessblock.marketdropdown()
  .subscribe((resp: any) => {
      this.market=resp.ReturnValue;
       console.log(this.market);
   });

  //  source dropdown.......................
  this.businessblock.sourcedropdown()
  .subscribe((resp: any) => {
      this.source=resp.ReturnValue;
       console.log(this.source);
   });

  // Origin dropdown.........................
  this.businessblock.origindropdown()
  .subscribe((resp: any) => {
      this.origin=resp.ReturnValue;
       console.log(this.origin);
   });

  //  payment dropdown........................
  this.businessblock.paymentdropdown()
  .subscribe((resp: any) => {
      this.payment=resp.ReturnValue;
       console.log(this.payment);
   });
// cancel reason dropdown....................
this.businessblock.cancelreasondropdown()
.subscribe((resp: any) => {
    this.cancelreason=resp.ReturnValue;
     console.log(this.cancelreason);
 });

//  Meetingspacetpye dropdown......................
this.businessblock.meetingsizetypedropdown()
.subscribe((resp: any) => {
    this.meetingsizetype=resp.ReturnValue;
     console.log(this.meetingsizetype);
 });
// inventory dropdown.............................
this.businessblock.Inventorydropdown()
.subscribe((resp: any) => {
    this.inventory=resp.ReturnValue;
     console.log(this.inventory);
 });

//  Ratecode Dropdown.............................
this.businessblock.Ratecodedropdown()
.subscribe((resp: any) => {
    this.ratecode=resp.ReturnValue;
     console.log(this.ratecode);
 });
// Reservation type dropdown......................
 this.businessblock.Resetypedropdown()
.subscribe((resp: any) => {
    this.restype=resp.ReturnValue;
     console.log(this.restype);
 });
//  blocktype dropdown...............................
this.businessblock.BlockTypedropdown()
.subscribe((resp: any) => {
    this.blocktype=resp.ReturnValue;
     console.log(this.blocktype);
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
    this.businessblock.CreateBusinessBlock(block)
.subscribe((resp: any) => {
    this.createblock=resp.ReturnCode;
    this.blockids = resp.Blockid;
    this.block_code = resp.blockcode;
    this.block_name = resp.Blockname;
     console.log(this.createblock);
 });
 if(this.createblock=="RIS"){
    this.blocksuccess="Block Created Successfully"
    console.log("outputblock",this.blocksuccess)
 }
 else{
     this.blocksuccess="something"
 }
  }
}
