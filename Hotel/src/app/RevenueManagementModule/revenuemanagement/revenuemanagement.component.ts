import { Component, OnInit  } from '@angular/core';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule, NgForm,FormBuilder } from '@angular/forms';
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
  public revenueroom=[];
  public negotiatecode:any=[];
  public rateheader:any={};
  

  ncode=[ { Rate_code: 'CORP', Begin_sell_date: '16-07-2018',End_sell_date:'19-07-2018',ID:'1'},
  { Rate_code: 'EXTRA', Begin_sell_date: '16-07-2018',End_sell_date:'19-07-2018',ID:'2'},
  { Rate_code: 'HIGH', Begin_sell_date: '16-07-2018',End_sell_date:'19-07-2018',ID:'4'},
  { Rate_code: 'LOW', Begin_sell_date: '26-07-2018',End_sell_date:'99-07-2018',ID:'3'},
  { Rate_code: 'LOW', Begin_sell_date: '16-07-2018',End_sell_date:'19-07-2018',ID:'3'},
  { Rate_code: 'CORP', Begin_sell_date: '16-07-2018',End_sell_date:'19-07-2018',ID:'1'},
  { Rate_code: 'EXTRA', Begin_sell_date: '17-07-2018',End_sell_date:'29-07-2018',ID:'2'},
];

  constructor(private RevenuemanagementService:RevenuemanagementService,private route:Router,private fb: FormBuilder) {
    this.negotiatecode = this.ncode;
   }

   user={};
   rateheaderins(input:any){

   if(input.discoun == true)
   {
    input.discoun="discount";
    console.log(input.discoun)
   }else
   if(input.Negotiated == true){
    input.Negotiated="Negotiated";
     console.log(input.Negotiated)
   }
   this.RevenuemanagementService.saverateheader(input)
   .subscribe((resp: any) => {
    this.room=resp.ReturnValue;
  });
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

  this.RevenuemanagementService.revenuepackages()
   .subscribe((resp: any) => {
    this.revenueroom=resp.Return;
  });
   
  }
  
  onSelect(val){
    // val = val.toLowerCase();
    // val = val.toLowerCase();
    console.log(val);
    if(val=="0")
    {
      this.ncode=this.negotiatecode;
    }
    else{
       this.ncode = this.negotiatecode.filter(x => x.ID == val)
        }
    }

toggletab(tabval){
  console.log(tabval);

}
public roomtype;
stylesan(details){
  this.roomtype=details.type;
}
public type="";
Packagescr(detailscode){
  this.type +=(detailscode.package_code+',');
  console.log(this.type)
}

public listtype="";
Attributepackselect(packsel){
  this.listtype=packsel.type;
  console.log(this.listtype)
}

public roomtype1="";
Attributeroomselect(roomsel){

  this.roomtype1=roomsel.type;
  console.log(this.roomtype1)

}

}
