import { Component, OnInit } from '@angular/core';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule, NgForm,FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";
import{ RevenueRateCodeService } from "./revenue-rate-code.service";

@Component({
  selector: 'app-revenue-rate-code',
  templateUrl: './revenue-rate-code.component.html',
  styleUrls: ['./revenue-rate-code.component.css'],
  providers:[ RevenueRateCodeService ]
})
export class RevenueRateCodeComponent implements OnInit {

  constructor(private RevenueRateCodeService:RevenueRateCodeService,private route:Router,private fb: FormBuilder) { }

  public mainratecode=[];
  public ratcode=[];
  public ratecategory=[];


  ngOnInit() {
    this.RevenueRateCodeService.selratecode()
    .subscribe((resp: any) => {
     this.mainratecode=resp.Rate_header;
     console.log("maintable",this.mainratecode)
   });

   this.RevenueRateCodeService.ratecodedropdown()
    .subscribe((resp: any) => {
     this.ratcode=resp.Return;
     console.log("ratecode",this.ratcode)
   });

   this.RevenueRateCodeService.ratecategorydropdown()
    .subscribe((resp: any) => {
     this.ratecategory=resp.Return;
     console.log("ratecategory",this.ratecategory)
   });
  }


  // delete ratecode
  delvar:any;
  delalert:any;
  delratecode(){
    console.log(this.ratecdid);
    this.RevenueRateCodeService.deleteratecode(this.ratecdid)
    .subscribe((resp: any) => {
     this.delvar=resp.ReturnCode;
     console.log("delete return values",this.delvar)

     if(this.delvar=='RDS')
     {
     this.delalert="Ratecode deleted successfully";
     }
   else
     {
     this.delalert="can't able to delete negotiated";
     } 
    //  refresh
     this.RevenueRateCodeService.selratecode()
     .subscribe((resp: any) => {
      this.mainratecode=resp.Rate_header;
      console.log("maintable",this.mainratecode)
    });

   });

  }


  selectindex=null
  okbutn=true;
  edbutn=true;
  delbutn=true;
  ratecdid=[];
  //select values from table on click
  selectMembers(details,index){
    this.okbutn=false;
    this.edbutn=false;
    this.delbutn=false;
    this.selectindex=index; 
    console.log("detailsssssssssssssssssssss",details);
    this.ratecdid=details.ratecode_id;     
   console.log("ratecodeeeeeeeeeeeeeeeeeeeeeeeeee",details.ratecode_id,this.ratecdid)
  }

}
