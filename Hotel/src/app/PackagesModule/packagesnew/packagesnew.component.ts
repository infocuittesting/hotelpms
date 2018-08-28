import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {PackagesnewService} from './packagesnew.service';

@Component({
  selector: 'app-packagesnew',
  templateUrl: './packagesnew.component.html',
  styleUrls: ['./packagesnew.component.css'],
  providers:[PackagesnewService]
})
export class PackagesnewComponent implements OnInit {
   public val:any=[];
   public pack;
   public packdetails;
   public user:any=[];
   public foredropdown;
   public transactiondropdown;
   public currdropdown;
   public rhythmdropdown;
   public calculatedropdown;
   public Seasoncodedropdown;
   public iteminventorydropdown;
   public iventryname;
   public item_inventory_selected_id;
   public Alternatedropdown;
   public Altername;
   public Alternates;
   sell_separate;
   post_next_day;
   packtable;
  constructor(private PackagesnewService:PackagesnewService) { }

//checkbox
newFunction()
{
  if(this.sell_separate==true){
    this.sell_separate= 1;
  }else{
    this.sell_separate= 0;
  }
}

//checkbox
newFun()
{
  if(this.post_next_day==true){
    this.post_next_day= 1;
  }else{
    this.post_next_day= 0;
  }
}
  // table select item inventary
   selected=[];
   selected_id = [];
   selected_name=[];
   idx: any;
  exist(item) {
    this.selected.indexOf(item) > -1;
  }
  toggleSelection(item) {
    this.idx = this.selected.indexOf(item);
    // this.room_type += item.type
    console.log("string", item.item_name)
    if (this.idx > -1) {
      this.selected.splice(this.idx, 1);
      this.selected_id.splice(this.idx, 1);
      this.selected_name.splice(this.idx, 1);

    }
    else {
      this.selected.push(item);
      this.selected_id.push(item.item_inventory_id);
      this.selected_name.push(item.item_name);

    }
    this.iventryname = this.selected_name.toString();
    this.item_inventory_selected_id = this.selected_id.toString();

  }

  // table select item Alternative
  selected1=[];
  selected_id1= [];
  selected_name1=[];
  idx1: any;
 exist1(item) {
   this.selected1.indexOf(item) > -1;
 }
 toggleSelection1(item) {
   this.idx1 = this.selected1.indexOf(item);
   // this.room_type += item.type
   console.log("string", item.package_code)
   if (this.idx1 > -1) {
     this.selected1.splice(this.idx1, 1);
     this.selected_id1.splice(this.idx1, 1);
     this.selected_name1.splice(this.idx1, 1);

   }
   else {
     this.selected1.push(item);
     this.selected_id1.push(item.package_code_id);
     this.selected_name1.push(item.package_code);

   }
   this.Alternates = this.selected_id1.toString();
   this.Altername = this.selected_name1.toString();
  

 }

  ngOnInit() {
    this.PackagesnewService.Forecastgroupdropdown()
    .subscribe((resp: any) => {
     this.foredropdown=resp.Return_values;
   });
   this.PackagesnewService.Transactiondropdown()
   .subscribe((resp: any) => {
    this.transactiondropdown=resp.Return_values;
  });
  this.PackagesnewService.currencydropdown()
  .subscribe((resp: any) => {
   this.currdropdown=resp.ReturnValue;
 });

 this.PackagesnewService.rhythmdropdown()
 .subscribe((resp: any) => {
  this.rhythmdropdown=resp.Return_values;
});
this.PackagesnewService.Calculaterule()
.subscribe((resp: any) => {
 this.calculatedropdown=resp.Return_values;
});
this.PackagesnewService.Seasoncode()
.subscribe((resp: any) => {
 this.Seasoncodedropdown=resp.Return;
});

this.PackagesnewService.Iteminventory()
.subscribe((resp: any) => {
 this.iteminventorydropdown=resp.Return_values;
});

this.PackagesnewService.Alternate()
.subscribe((resp: any) => {
 this.Alternatedropdown=resp.Return_values;
});

this.PackagesnewService.packagedetails()
.subscribe((resp: any) => {
 this.packtable=resp.Package_details;
});
  }



  //insert packages header
submit(inputt, post_next_day, sell_separate, attributes_id){
  this.PackagesnewService.Packages(inputt,post_next_day,sell_separate,attributes_id,this.Alternates,this.item_inventory_selected_id)
.subscribe((resp: any) => {
 this.pack=resp.ReturnCode;
 if(this.pack=="RIS"){
   this. pack="The Package Header is Created"
 }


});
}

  //insert packages details
  packsub(inputt){
    this.PackagesnewService.Packdetails(inputt)
  .subscribe((resp: any) => {
   this.packdetails=resp.ReturnCode;
   if(this.packdetails=="RIS"){
     this.packdetails="The Package Detail is Created"
   }
  
  
  });
  }
  
}
