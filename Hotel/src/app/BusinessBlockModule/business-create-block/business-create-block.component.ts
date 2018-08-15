
import { Component, OnInit, Input } from '@angular/core';
import { SessionStorageService } from "ngx-webstorage";
import { Router } from "@angular/router";
import { BusinessCreateBlockService } from './business-create-block.service'
import { ReservationsListComponent } from '../reservations-list/reservations-list.component';

@Component({
  selector: 'app-business-create-block',
  templateUrl: './business-create-block.component.html',
  styleUrls: ['./business-create-block.component.css'],
  providers:[BusinessCreateBlockService]
})
export class BusinessCreateBlockComponent implements OnInit {
    public acc_com;
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
public blockids:any=" ";
public block_name:any=" ";
public block_code:any=" ";
public paymasters:any;
public querypay:any;
public queryroomrevenue;
public payblockid;
public navtag:any;
public start;
public end;
public night;


// ................................................
  ngOnInit() {
    // this.session.clear("gridvalues");
    this.session.store("navigate","Block");
   
    this.acc_com =this.session.retrieve("pf_accounts");
console.log("come to block",this.acc_com);
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
// public gridvalues:any = [];
//   selectgrid_data(){
//     this.businessblock.select_grid_data()
//     .subscribe((resp: any) => {
//     this.gridvalues=resp.ReturnValue;
//     this.session.store("gridvalues",this.gridvalues)
//     console.log(this.gridvalues)
//     });
//   }


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

    this.start=block.startdate;
    this.end=block.enddate;
    this.night=block.nights;
    
    this.businessblock.CreateBusinessBlock(block)
   
.subscribe((resp: any) => {
    this.createblock=resp.ReturnCode;
    this.blockids = resp.Blockid;
    this.block_code = resp.blockcode;
    this.block_name = resp.Blockname;
     console.log(this.createblock);
     this.session.store("blids",this.blockids.toString());
    this.session.store("starts",this.start.toString());
    this.session.store("ends",this.end.toString());
    this.session.store("nght",this.night.toString());
    console.log("hooooooooo",this.blockids.toString(),this.start.toString(),this.end.toString(),this.night.toString())
   
     if(this.createblock=="RIS"){
        this.blocksuccess="Block Created Successfully"+" "+this.blockids.toString()
        console.log("outputblock",this.blocksuccess)
     }
     else{
         this.blocksuccess="something"
     }
 });
 
  }
  
// create paymaster for resv button.............................................
//   CreatePaymaster(){
//       console.log("going to reservation button",this.blockids,typeof(this.blockids));
//     // this.payblockid = this.blockids.toString();
//     // console.log("stringvalue",typeof(this.payblockid))
//   this.businessblock.PaymasterReservation(this.blockids)
//   .subscribe((resp: any) => {
//       this.paymasters=resp.ReturnCode;
//        console.log("paymasertresponse",this.paymasters);
//    });
// }

// Caluculate room revenue button......................................

// RoomrevenueButton(){
//     console.log("going to calculate room revenue")
//   this.businessblock.QueryRoomRevenue()
//   .subscribe((resp: any) => {
//       this.queryroomrevenue=resp.ReturnValue;
//        console.log(this.queryroomrevenue);
//    });

// }
// ReservationsListComponent(qrypay)
// {
//     console.log("Query going to reservation button")
//   this.businessblock.QueryPaymasterReservation(qrypay)
//   .subscribe((resp: any) => {
//       this.querypay=resp.ReturnValue;
//        console.log("queryss",this.querypay);
//    });
// // public arrivals = this.session.store("",)
// this.session.store("arrivals",this.querypay.res_arrival);
// this.session.store("depat",this.querypay.res_depature);
// this.session.store("nght",this.querypay.res_nights);
// this.session.store("rmtype",this.querypay.res_room_type);
// this.session.store("blcode",this.querypay.res_block_code);
// this.session.store("guestatus",this.querypay.res_guest_status);
// this.session.store("numrooms",this.querypay.res_number_of_rooms);


// }

// retrieve session values business blcok 
// public ids = this.session.retrieve("blockid");
// public blnames = this.session.retrieve("blockname");

// public acco = this.session.retrieve("pf_account");
// public stdate = this.session.retrieve("start_date");
// public endate = this.session.retrieve("end_date");
// public nght = this.session.retrieve("nights");
// public orign = this.session.retrieve("origindescription");
// public blstatus = this.session.retrieve("status");
// public markgr = this.session.retrieve("marketgroup_description");
// public bltype = this.session.retrieve("block_type");
// public ower = this.session.retrieve("owner");
// public sources = this.session.retrieve("sourcedescription");
// public blcode = this.session.retrieve("block_code");
// public resty = this.session.retrieve("restype_description");
// public rates = this.session.retrieve("rate_description");
// public pack = this.session.retrieve("packages");
// public cutoffdte = this.session.retrieve("cutoff_date");
// public cutdays= this.session.retrieve("cutoff_days");
// public flodate = this.session.retrieve("follow_date");
// public invcl = this.session.retrieve("inventory_control");
// public ptrrate = this.session.retrieve("print_rate")
// public suprate = this.session.retrieve("suppress_rate");
// public attdes = this.session.retrieve("attenders");
// public inboard = this.session.retrieve("info_board");
// public contract = this.session.retrieve("contract_no");
// public onsite = this.session.retrieve("onsite_name");
// public flwupdate = this.session.retrieve("followup_date");
// public payments = this.session.retrieve("payment_description");
// public cmmion = this.session.retrieve("commission");
// public rmlistdate = this.session.retrieve("rooming_list_duedate");
// public arrtime = this.session.retrieve("arrivaltime");
// public deptime = this.session.retrieve("depaturetime");
// public meetsp = this.session.retrieve("meeting_space");
// public sztype = this.session.retrieve("size_type");
// public attdess1 = this.session.retrieve("attendess");
// editblockheader(){
//     sessionStorage.clear();
// }

}
