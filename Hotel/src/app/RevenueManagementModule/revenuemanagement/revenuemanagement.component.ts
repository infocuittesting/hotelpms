import { Component, OnInit, Input  } from '@angular/core';
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
 
  public ncode=[ 
  //   { Rate_code: 'CORP', Begin_sell_date: '16-07-2018',End_sell_date:'19-07-2018',ID:'1'},
  // { Rate_code: 'EXTRA', Begin_sell_date: '16-07-2018',End_sell_date:'19-07-2018',ID:'2'},
  // { Rate_code: 'HIGH', Begin_sell_date: '16-07-2018',End_sell_date:'19-07-2018',ID:'4'},
  // { Rate_code: 'LOW', Begin_sell_date: '26-07-2018',End_sell_date:'99-07-2018',ID:'3'},
  // { Rate_code: 'LOW', Begin_sell_date: '16-07-2018',End_sell_date:'19-07-2018',ID:'3'},
  // { Rate_code: 'CORP', Begin_sell_date: '16-07-2018',End_sell_date:'19-07-2018',ID:'1'},
  // { Rate_code: 'EXTRA', Begin_sell_date: '17-07-2018',End_sell_date:'29-07-2018',ID:'2'},
];

  constructor(private RevenuemanagementService:RevenuemanagementService,private route:Router,private fb: FormBuilder) {
    this.negotiatecode = this.ncode;
   }

   funcat(roomtypelist){
    console.log("roomdetailsssssssssssssss",roomtypelist);
    this.funct=roomtypelist.rate_class;
    console.log("function catttttttttttttt",this.funct);
    }


   user={};
   cat_id:any;
   rateheadalert:any;
   rateheaderins(ratecode,input:any){
    
    if(input.discount == true)
    {
     input.discount="1";
     console.log("one")
    }else{
     input.discount="0";
     console.log("zero")
 
    }
    if(input.Negotiated == true)
    {
     input.Negotiated="1";
     console.log("one")
    }else{
     input.Negotiated="0";
     console.log("zero")
 
    }
    if(input.Rate == true)
    {
     input.Rate="1";
     console.log("one")
    }else{
     input.Rate="0";
     console.log("zero")
    }
    if(input.Membership == true)
    {
     input.Membership="1";
     console.log("one")
    }else{
     input.Membership="0";
     console.log("zero")
    }
    if(input.Day == true)
    {
     input.Day="1";
     console.log("one")
    }else{
     input.Day="0";
     console.log("zero")
    }
    if(input.Complimentary == true)
    {
     input.Complimentary="1";
     console.log("one")
    }else{
     input.Complimentary="0";
     console.log("zero")
    }
    if(input.House == true)
    {
     input.House="1";
     console.log("one")
    }else{
     input.House="0";
     console.log("zero")
    }
    if(input.Suppress == true)
    {
     input.Suppress="1";
     console.log("one")
    }else{
     input.Suppress="0";
     console.log("zero")
    }
    
    if(input.Type == true)
    {
     input.Type="1";
     console.log("one")
    }else{
     input.Type="0";
     console.log("zero")
    }
    if(input.Package == true)
    {
     input.Package="1";
     console.log("one")
    }else{
     input.Package="0";
     console.log("zero")
    }

   this.RevenuemanagementService.saverateheader(ratecode,this.cat_id,this.rmid,this.rmid1,input)
   .subscribe((resp: any) => {
    this.savehead=resp.ReturnValue;
    if(this.savehead=='RIS')
     {
       this.rateheadalert="rateheader created successfully";
     }
     else 
     {
       this.rateheadalert="sorry,currently can't able to update";
     }

  });
 console.log(this.savehead);
}

newnego(input)
{
  console.log("from html",input);
  this.RevenuemanagementService.insertnewnego(input)
    .subscribe((resp: any) => {
     this.newnegovar=resp.ReturnCode;
     console.log("newnegotiated outputttttttttt",typeof(this.newnegovar),this.newnegovar);

     console.log("sucalert and fail",this.sucalert,this.failalert);
     if(this.newnegovar=='RIS')
     {
       this.sucalert="negotiated created successfully";
     }
     else 
     {
       this.sucalert="sorry,currently can't able to create negotiated rate";
     }
     this.RevenuemanagementService.NegotiatedRate()
    .subscribe((resp: any) => {
     this.ncode=resp.Return;
   });
   });
 
 
}

ratedetalert:any;
ratedetins(ratecode,seasoncod,strtdt,enddate,onead,twoad,threead,fourad,extraad,onech,twoch,extrach){

  
  this.RevenuemanagementService.insertratedetail(ratecode,seasoncod,strtdt,enddate,onead,twoad,threead,fourad,extraad,onech,twoch,extrach,this.rmid2,this.rmid3)
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

editvar:any;
negoeditalert:any;
// edit negotiated values
editnego(rateecode,beginn,endsell){
  this.RevenuemanagementService.editnego(rateecode,beginn,endsell,this.ratecodeid)
    .subscribe((resp: any) => {
     this.editvar=resp.ReturnCode;
     if(this.editvar=='RUS')
     {
     this.negoeditalert="negotiated updated successfully";
     }
     else
     {
     this.negoeditalert="can't able to update";
     }

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
     this.prc=resp.Return;
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

 
  this.RevenuemanagementService.seasoncode()
  .subscribe((resp: any) => {
   this.arryses=resp.Return;
 });

 this.RevenuemanagementService.NegotiatedRate()
 .subscribe((resp: any) => {
  this.ncode=resp.Return;
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

delret:any;  
negodelalert:any;
//delete negotiated values
    negodel(){
      console.log(this.ratecodeid)
      this.RevenuemanagementService.deletenego(this.ratecodeid)
      .subscribe((resp: any) => {
      this.delret=resp.ReturnCode;
      console.log(this.delret); 
       if(this.delret=='RDS')
        {
        this.negodelalert="negotiated deleted successfully";
        }
      else
        {
        this.negodelalert="can't able to delete negotiated";
        } 

      this.RevenuemanagementService.NegotiatedRate()
      .subscribe((resp: any) => {
      this.ncode=resp.Return;
      });
     });      

    
    }

// toggletab(tabval){
//   console.log(tabval);

// }

//selecting values from multiple checkboxes in roomtype(rateheader)
selected=[];
selected_id=[];
selected_type=[];
idx:any;
public rmid:any;
public rmtype:any;
exist(item){
 this.selected.indexOf(item)>-1;
}


toggleSelection(item){
 this.idx=this.selected.indexOf(item);
 // this.room_type += item.type
 console.log("string",item.type)
 if(this.idx>-1){
   this.selected.splice(this.idx,1);
   this.selected_id.splice(this.idx,1);
   this.selected_type.splice(this.idx,1);

 }
 else{
   this.selected.push(item);
   this.selected_id.push(item.id);
  this.selected_type.push(item.type);

 }
 this.rmtype=this.selected_type.toString();
this.rmid=this.selected_id;
console.log("selected id",this.rmid);
console.log("selected type",this.rmtype.toString());

}

//selecting values from multiple checkboxes in package(rateheader)
selected1=[];
selected_id1=[];
selected_code=[];
idx1:any;
public rmid1:any;
public rmcode:any;
exist1(item){
 this.selected1.indexOf(item)>-1;
}


toggleSelection1(item){
 this.idx1=this.selected1.indexOf(item);
 // this.room_type += item.type
 console.log("string",item.type)
 if(this.idx1>-1){
   this.selected1.splice(this.idx1,1);
   this.selected_id1.splice(this.idx1,1);
   this.selected_code.splice(this.idx1,1);

 }
 else{
   this.selected1.push(item);
   this.selected_id1.push(item.package_code_id);
  this.selected_code.push(item.package_code);

 }
 this.rmcode=this.selected_code.toString();
this.rmid1=this.selected_id1;
console.log("selected id",this.rmid1);
console.log("selected code",this.rmcode.toString());

}


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

//selecting values from multiple checkboxes in package(ratedetails)
selected3=[];
selected_id3=[];
selected_code3=[];
idx3:any;
public rmid3:any;
public rmcode3:any;
exist3(item){
 this.selected3.indexOf(item)>-1;
}


toggleSelection3(item){
 this.idx3=this.selected3.indexOf(item);
 // this.room_type += item.type
 console.log("string",item.type)
 if(this.idx3>-1){
   this.selected3.splice(this.idx3,1);
   this.selected_id3.splice(this.idx3,1);
   this.selected_code3.splice(this.idx3,1);

 }
 else{
   this.selected3.push(item);
   this.selected_id3.push(item.package_code_id);
  this.selected_code3.push(item.package_code);

 }
 this.rmcode3=this.selected_code3.toString();
this.rmid3=this.selected_id3;
console.log("selected id",this.rmid3);
console.log("selected code",this.rmcode3.toString());

}

}
