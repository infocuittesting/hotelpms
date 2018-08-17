import { Component, OnInit, Input  } from '@angular/core';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule, NgForm,FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";
import {EditRevenueManagementService} from './edit-revenue-management.service';
import { SessionStorageService } from "ngx-webstorage";


@Component({
  selector: 'app-edit-revenue-management',
  templateUrl: './edit-revenue-management.component.html',
  styleUrls: ['./edit-revenue-management.component.css'],
  providers:[EditRevenueManagementService]
})
export class EditRevenueManagementComponent implements OnInit {

  public arryses=[];
  public ratecat=[];
  public prc=[];
  public price=[];
  public shop=[];
  public src=[];
  public money=[];
  public room:any;
  public savehead:any;
  public sucalert:any;
  public successratevar:any;
  public failalert:any;
  public newnegovar:any;
  public ratedetvar:any;
  
  
  public revenueroom=[];
  public negotiatecode:any=[];
  public rateheader:any={};
  public funct=[];
  public databindvalues=[];

 
  public ncode=[ 
  //   { Rate_code: 'CORP', Begin_sell_date: '16-07-2018',End_sell_date:'19-07-2018',ID:'1'},
  // { Rate_code: 'EXTRA', Begin_sell_date: '16-07-2018',End_sell_date:'19-07-2018',ID:'2'},
  // { Rate_code: 'HIGH', Begin_sell_date: '16-07-2018',End_sell_date:'19-07-2018',ID:'4'},
  // { Rate_code: 'LOW', Begin_sell_date: '26-07-2018',End_sell_date:'99-07-2018',ID:'3'},
  // { Rate_code: 'LOW', Begin_sell_date: '16-07-2018',End_sell_date:'19-07-2018',ID:'3'},
  // { Rate_code: 'CORP', Begin_sell_date: '16-07-2018',End_sell_date:'19-07-2018',ID:'1'},
  // { Rate_code: 'EXTRA', Begin_sell_date: '17-07-2018',End_sell_date:'29-07-2018',ID:'2'},
];

  constructor(private EditRevenuemanagement:EditRevenueManagementService,public session:SessionStorageService,private route:Router,private fb: FormBuilder) {
    this.negotiatecode = this.ncode;
   
   }

   funcat(roomtypelist){
    console.log("roomdetailsssssssssssssss",roomtypelist);
    this.funct=roomtypelist.rate_class;
    console.log("function catttttttttttttt",this.funct);
    }
    public currentTab:any=1;
    tabname(args){
      this.currentTab = args;
      console.log(this.currentTab);
    }


   user={};
   cat_id:any;
   rateheadalert:any;
   public cond;
  

ratedetalert:any;

ratedetins(ratecodedrop,seasoncod,strtdt,enddate,onead,twoad,threead,fourad,extraad,onech,twoch,extrach,mondy,tuesdy,wednesdy,thursdy,fridy,saturdy,sundy,tab){
  this.cond = this.session.retrieve("ratecodenav");
  if(mondy== true)
  {
    mondy="1";
  //  console.log("one")
  }else{
    mondy="0";
  //  console.log("zero")

  }
  if(tuesdy== true)
  {
    tuesdy="1";
  //  console.log("one")
  }else{
    tuesdy="0";
  //  console.log("zero")

  }
  if(wednesdy== true)
  {
    wednesdy="1";
  //  console.log("one")
  }else{
    wednesdy="0";
  //  console.log("zero")

  }
  if(thursdy== true)
  {
    thursdy="1";
  //  console.log("one")
  }else{
    thursdy="0";
  //  console.log("zero")

  }
  if(fridy== true)
  {
    fridy="1";
  //  console.log("one")
  }else{
    fridy="0";
  //  console.log("zero")

  }
  if(saturdy== true)
  {
    saturdy="1";
  //  console.log("one")
  }else{
    saturdy="0";
  //  console.log("zero")

  }
  if(sundy== true)
  {
    sundy="1";
  //  console.log("one")
  }else{
    sundy="0";
  //  console.log("zero")

  }
  console.log("insert rate detailssssssssssssssss",seasoncod,strtdt,enddate,onead,twoad,threead,fourad,extraad,onech,twoch,extrach,mondy,tuesdy,wednesdy,thursdy,fridy,saturdy,sundy,this.rmid2);
  if(this.cond == "New"){
  this.EditRevenuemanagement.ratedetins(ratecodedrop,seasoncod,strtdt,enddate,onead,twoad,threead,fourad,extraad,onech,twoch,extrach,mondy,tuesdy,wednesdy,thursdy,fridy,saturdy,sundy,this.rmid2,this.currentTab)
  .subscribe((resp: any) => {
   this.ratedetvar=resp.ReturnCode;
   if(this.ratedetvar=='RIS')
    {
    this.ratedetalert="ratedetails created successfully";
    }
    else
    {
    this.ratedetalert="can't able to create ratedetails";
    }
  });
}
else{
    this.EditRevenuemanagement.updateratedetail(this.ratedetail,seasoncod,strtdt,enddate,onead,twoad,threead,fourad,extraad,onech,twoch,extrach,this.rmid2,this.rmid3,mondy,tuesdy,wednesdy,thursdy,fridy,saturdy,sundy,this.currentTab)
    .subscribe((resp: any) => {
     this.ratedetvar=resp.ReturnCode;
    
     if(this.ratedetvar=='RUS')
      {
      this.ratedetalert="ratedetails updated successfully";
      }
      else
      {
      this.ratedetalert="can't able to create ratedetails";
      }
    });
  }
}


public ratedettabl=[];
public roomtyp=[];
public roomidd=[];
public rateheadbind=[];
public ratedetbind=[];

  ngOnInit() {
    console.log(this.ncode);
    this.EditRevenuemanagement.ratecategorydropdown()
    .subscribe((resp: any) => {
     this.ratecat=resp.Return;
   });

   this.EditRevenuemanagement.ratecodedropdown()
    .subscribe((resp: any) => {
     this.price=resp.Return;
     this.prc=resp.Return;
   });

   this.EditRevenuemanagement.marketdropdown()
    .subscribe((resp: any) => {
     this.shop=resp.Return;
   });

   this.EditRevenuemanagement.sourcedropdown()
    .subscribe((resp: any) => {
     this.src=resp.Return;
   });

   this.EditRevenuemanagement.currencydropdown()
    .subscribe((resp: any) => {
     this.money=resp.Return;
   });

   this.EditRevenuemanagement.roomtypesdropdown()
   .subscribe((resp: any) => {
    this.room=resp.ReturnValue;
  });

  this.EditRevenuemanagement.revenuepackages()
   .subscribe((resp: any) => {
    this.revenueroom=resp.Return;
  });

 
  this.EditRevenuemanagement.seasoncode()
  .subscribe((resp: any) => {
   this.arryses=resp.Return;
 });

this.EditRevenuemanagement.getallvalues()
 .subscribe((resp: any) => {
  this.ratedettabl=resp.Rate_details;
  this.roomtyp=resp.room_types;
  console.log(this.roomtyp);
  
});
   
this.EditRevenuemanagement.allvalues()
.subscribe((resp: any) => {
 this.rateheadbind=resp.Rate_header;
 this.ratedetbind=resp.Rate_details;
 console.log("return values",this.rateheadbind, this.ratedetbind)
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
       this.ncode = this.negotiatecode.filter(x => x.ratecode_id == val)
        }
    }


ratecodeid=[];
selectindex=null;
edbut=true;
delbut=true;
//select values from table on click
    selectMembers(details,index){
      this.edbut=false;
      this.delbut=false;
      this.selectindex=index;      
      this.ratecodeid=details.negotiated_code_id;
      console.log("ratecode id for delete",this.ratecodeid);
    }

//ratedetails table selection
ratedetail:any={};
ratedetidvar=[];
selectindexx=null
    selectMembers1(detailss,indexx){     
      this.selectindexx=indexx; 
      this.ratedetail.ratedetailid =detailss.rate_details_id;
      this.ratedetail.roomsid = detailss.rooms_id;
      this.ratedetail.packageid = detailss.packages_id;
      this.ratedetail.ratedaysid = detailss.rate_days_id;
      this.ratedetail.ratetierid=detailss.rate_tier_id;
      
      // this.session.store("ratedaysid",detailss.rate_days_id);  
      // this.session.store("roomsid",detailss.rooms_id);  
      // this.session.store("packagesid",detailss.packages_id);  
      //this.session.store("ratetierid",detailss.rate_tier_id);  

      console.log("ratecodeiddddddddddddddd",detailss.rate_days_id,detailss.rooms_id,detailss.packages_id,detailss.rate_days_id);

    }

    // delete rate details
    delratdet:any;
    delratalert:any;
    ratdetfun(){
      
      this.EditRevenuemanagement.deleteratedet(this.ratedetidvar)
      .subscribe((resp: any) => {
      this.delratdet=resp.ReturnCode;
      console.log(this.delratdet); 
       if(this.delratdet=='RDS')
        {
        this.delratalert="RateDetails deleted successfully";
        }
      else
        {
        this.delratalert="can't able to delete negotiated";
        } 

     });      

     this.EditRevenuemanagement.getallvalues()
     .subscribe((resp: any) => {
      this.ratedettabl=resp.Rate_details; 
      this.roomtyp=resp.room_types;   
    });
    }

// toggletab(tabval){
//   console.log(tabval);

// }

//selecting values from multiple checkboxes in roomtype(ratedetails)
selected2=[];
selected_id2=[];
selected_type2=[];
idx2:any;
public rmid2:any;
public rmtype2:any;
exist2(item){
 this.selected2.indexOf(item)>-1;
}


toggleSelection2(item){
 this.idx2=this.selected2.indexOf(item);
 // this.room_type += item.type
 console.log("string",item.type)
 if(this.idx2>-1){
   this.selected2.splice(this.idx2,1);
   this.selected_id2.splice(this.idx2,1);
   this.selected_type2.splice(this.idx2,1);

 }
 else{
   this.selected2.push(item);
   this.selected_id2.push(item.id);
  this.selected_type2.push(item.type);

 }
 this.rmtype2=this.selected_type2.toString();
this.rmid2=this.selected_id2;
console.log("selected id",this.rmid2);
console.log("selected type",this.rmtype2.toString());

}
selected3=[];
selected_id3=[];
selected_type3=[];
idx3:any;
public rmid3:any;
public rmtype3:any;
exist3(item){
 this.selected2.indexOf(item)>-1;
}


toggleSelection3(item){
 this.idx3=this.selected3.indexOf(item);
 // this.room_type += item.type
 console.log("string",item.type)
 if(this.idx3>-1){
   this.selected3.splice(this.idx3,1);
   this.selected_id3.splice(this.idx3,1);
   this.selected_type3.splice(this.idx3,1);

 }
 else{
   this.selected3.push(item);
   this.selected_id3.push(item.id);
  this.selected_type3.push(item.type);

 }
 this.rmtype3=this.selected_type3.toString();
this.rmid3=this.selected_id3;
console.log("selected id",this.rmid3);
console.log("selected type",this.rmtype3.toString());

}
}

// rate tier  update function 

