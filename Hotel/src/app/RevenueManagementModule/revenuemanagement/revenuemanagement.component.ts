import { Component, OnInit } from '@angular/core';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { Router } from "@angular/router";


import{ RevenuemanagementService } from "./revenuemanagement.service"
@Component({
  selector: 'app-revenuemanagement',
  templateUrl: './revenuemanagement.component.html',
  styleUrls: ['./revenuemanagement.component.css'],
  providers:[ RevenuemanagementService ]
})
export class RevenuemanagementComponent implements OnInit {


  public ratecat=[];
  public price=[];
  public shop=[];
  public src=[];
  public money=[];
  public room=[];
  public negotiatecode:any=[];
 

  ncode=[ { Rate_code: 'CORP', Begin_sell_date: '16-07-2018',End_sell_date:'19-07-2018'},
  { Rate_code: 'HONEY', Begin_sell_date: '16-07-2018',End_sell_date:'19-07-2018'},
  { Rate_code: 'RACK', Begin_sell_date: '16-07-2018',End_sell_date:'19-07-2018'},
  { Rate_code: 'MICROS', Begin_sell_date: '16-07-2018',End_sell_date:'19-07-2018'},
  { Rate_code: 'CORP', Begin_sell_date: '16-07-2018',End_sell_date:'19-07-2018'},
  { Rate_code: 'RACK', Begin_sell_date: '16-07-2018',End_sell_date:'19-07-2018'},
];

  constructor(private RevenuemanagementService:RevenuemanagementService,private route:Router) {
    this.negotiatecode = this.ncode;
   }

  ngOnInit() {
    console.log(this.ncode);
    this.RevenuemanagementService.ratecategorydropdown()
    .subscribe((resp: any) => {
     this.ratecat=resp.Return;
   });

   this.RevenuemanagementService.ratecodedropdown()
    .subscribe((resp: any) => {
     this.price=resp.Return;
   });

   this.RevenuemanagementService.marketdropdown()
    .subscribe((resp: any) => {
     this.shop=resp.Return;
   });

   this.RevenuemanagementService.sourcedropdown()
    .subscribe((resp: any) => {
     this.src=resp.Return;
   });

   this.RevenuemanagementService.currencydropdown()
    .subscribe((resp: any) => {
     this.money=resp.Return;
   });

   this.RevenuemanagementService.roomtypesdropdown()
   .subscribe((resp: any) => {
    this.room=resp.ReturnValue;
  });

   
  }
  onSelect(val){
    // val = val.toLowerCase();
    // val = val.toLowerCase();
    console.log(val);
    this.ncode = this.negotiatecode.filter(x => x.Rate_code == val)
  }


}
