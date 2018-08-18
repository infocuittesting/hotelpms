import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SessionStorageService } from "ngx-webstorage";
import {BusinessBlockGridService} from "./business-block-grid.service";

@Component({
  selector: 'app-business-block-grid-current',
  templateUrl: './business-block-grid-current.component.html',
  styleUrls: ['./business-block-grid-current.component.css'],
  providers:[BusinessBlockGridService]
})
export class BusinessBlockGridCurrentComponent implements OnInit {
  public start = this.session.retrieve("starts");
  public end = this.session.retrieve("ends");
  public nights = this.session.retrieve("nght");
  public roomtype=[];
  public range:any=[];
  public gridvalues=[];
  public rmtype=[];
  public rmcount=[];
  public rmblid;
  constructor(public blockservicegrid:BusinessBlockGridService,private route:Router,public session:SessionStorageService) { }

  ngOnInit() {
    // console.log(this.start,this.end,this.nights);
    this.blockservicegrid.roomtype()
.subscribe((resp: any) => {
this.roomtype=resp.ReturnValue;
console.log(this.roomtype)

});
// current grid.........................................
this.blockservicegrid.querygridvalue()
.subscribe((resp: any) => {
this.gridvalues=resp.ReturnValue;
console.log("ajith working fine",this.gridvalues)

});

  }
 selectindex=null;
    selectMembersEdit(details,index){
      this.selectindex=index; 
  }

  public insertgrid:any=[];
  public jio=[];
  
  rangegrids(input:any){
    input.grid_startdate = this.start;
    input.grid_enddate = this.end;
    input.totalrooms = input.Occupency1+input.Occupency2+input.Occupency3+input.Occupency4;
    input.addrates = input.Rate1+input.Rate2+input.Rate3+input.Rate4;

    if(input.sunday == true)
    {
     input.sunday =1;
    }else{
     input.sunday =0;
    }

    if(input.monday == true)
    {
     input.monday =1;
    }else{
     input.monday =0;
    }

    if(input.tuesday == true)
    {
     input.tuesday =1;
    }else{
     input.tuesday =0;
    }

    if(input.wednesday == true)
    {
     input.wednesday =1;
    }else{
     input.wednesday =0;
    }

    if(input.thursday == true)
    {
     input.thursday =1;
    }else{
     input.thursday =0;
    }

    if(input.friday == true)
    {
     input.friday =1;
    }else{
     input.friday =0;
    }

    if(input.saturday == true)
    {
     input.saturday =1;
    }else{
     input.saturday =0;
    }

let body={

"block_id":this.session.retrieve("blockid"),
"roomtype_id":input.roomtype.id.toString(),
"roomtype":input.roomtype.type.toString(),
"occupancy_one":input.Occupency1.toString(),
"occupancy_two":input.Occupency2.toString(),
"occupancy_three":input.Occupency3.toString(),
"occupancy_four":input.Occupency4.toString(),
"total_rooms":input.totalrooms.toString(),
"rate_one":input.Rate1.toString(),
"rate_two":input.Rate2.toString(),
"rate_three":input.Rate3.toString(),
"rate_four":input.Rate4.toString(),
"add_rate":input.addrates.toString(),
"sunday":input.sunday,
"monday":input.monday,
"tuesday":input.tuesday,
"wednesday":input.wednesday,
"thursday":input.thursday,
"friday":input.friday,
"saturday":input.saturday,
"grid_startdate":input.grid_startdate,
"grid_enddate":input.grid_enddate,
"available_rooms":input.totalrooms.toString()
}


this.insertgrid.push(body);
console.log("worked",this.insertgrid);
// console.log(JSON.stringify(this.insertgrid));
// this.blockservicegrid.insertGrid(this.insertgrid)
// .subscribe( (resp:any) =>{
  
  input.Occupency1 = "";
  input.Occupency2 = "";
  input.Occupency3= "";
  input.Occupency4 = "";
  input.totalrooms = "";
  input.Rate1 = "";
  input.Rate2 = "";
  input.Rate3 = "";
  input.Rate4 = "";
  input.addrates = "";
//   this.gridvalue=resp.ReturnValue;
//   console.log("return valure of range screen",this.gridvalue);
// });
}

saveshow=[];
savebutton(){
  console.log("inside insertgrid value",this.insertgrid);

// session storage

  


  this.blockservicegrid.insertGrid(this.insertgrid)
  .subscribe( (resp:any) =>{
  
   this.gridvalues=resp.ReturnValue;
  //  this.session.store("rmcount",resp.total_rooms);
  //  this.session.store("rmtype",resp.type);
  //  this.session.store("rmblid",resp.block_id);
  //  console.log("sesson values come",resp.total_rooms,resp.type,resp.block_id)
  // // this.rmtype = gridvalue.type;

  console.log("return valure of range screen",this.gridvalues);
  // this.gridvalues = this.session.retrieve("gridvalues")
  
});

}


// Edit flow to insert the roomtype value
// insertrange(input:any){
//   console.log("come to the service")
//   // input.grid_startdate = this.start;
//   // input.grid_enddate = this.end;
//   input.totalrooms = input.Occupency1+input.Occupency2+input.Occupency3+input.Occupency4;
//   input.addrates = input.Rate1+input.Rate2+input.Rate3+input.Rate4;

//   if(input.sunday == true)
//   {
//    input.sunday =1;
//   }else{
//    input.sunday =0;
//   }

//   if(input.monday == true)
//   {
//    input.monday =1;
//   }else{
//    input.monday =0;
//   }

//   if(input.tuesday == true)
//   {
//    input.tuesday =1;
//   }else{
//    input.tuesday =0;
//   }

//   if(input.wednesday == true)
//   {
//    input.wednesday =1;
//   }else{
//    input.wednesday =0;
//   }

//   if(input.thursday == true)
//   {
//    input.thursday =1;
//   }else{
//    input.thursday =0;
//   }

//   if(input.friday == true)
//   {
//    input.friday =1;
//   }else{
//    input.friday =0;
//   }

//   if(input.saturday == true)
//   {
//    input.saturday =1;
//   }else{
//    input.saturday =0;
//   }

// let body={

// "block_id":this.session.retrieve("blockid"),
// "roomtype_id":input.roomtype.id.toString(),
// "roomtype":input.roomtype.type.toString(),
// "occupancy_one":input.Occupency1.toString(),
// "occupancy_two":input.Occupency2.toString(),
// "occupancy_three":input.Occupency3.toString(),
// "occupancy_four":input.Occupency4.toString(),
// "total_rooms":input.totalrooms.toString(),
// "rate_one":input.Rate1.toString(),
// "rate_two":input.Rate2.toString(),
// "rate_three":input.Rate3.toString(),
// "rate_four":input.Rate4.toString(),
// "add_rate":input.addrates.toString(),
// "sunday":input.sunday,
// "monday":input.monday,
// "tuesday":input.tuesday,
// "wednesday":input.wednesday,
// "thursday":input.thursday,
// "friday":input.friday,
// "saturday":input.saturday,
// "grid_startdate":input.grid_startdate,
// "grid_enddate":input.grid_enddate,
// "available_rooms":input.totalrooms.toString()
// }


// this.insertgrid.push(body);
// console.log("worked",this.insertgrid);
// // console.log(JSON.stringify(this.insertgrid));
// // this.blockservicegrid.insertGrid(this.insertgrid)
// // .subscribe( (resp:any) =>{

// input.Occupency1 = "";
// input.Occupency2 = "";
// input.Occupency3= "";
// input.Occupency4 = "";
// input.totalrooms = "";
// input.Rate1 = "";
// input.Rate2 = "";
// input.Rate3 = "";
// input.Rate4 = "";
// input.addrates = "";
// //   this.gridvalue=resp.ReturnValue;
// //   console.log("return valure of range screen",this.gridvalue);
// // });
// }


// roomtypedetails(){
// console.log("inside insertgrid value",this.insertgrid);

// // session storage




// this.blockservicegrid.insertGrid(this.insertgrid)
// .subscribe( (resp:any) =>{

//  this.gridvalues=resp.ReturnValue;
// //  this.session.store("rmcount",resp.total_rooms);
// //  this.session.store("rmtype",resp.type);
// //  this.session.store("rmblid",resp.block_id);
// //  console.log("sesson values come",resp.total_rooms,resp.type,resp.block_id)
// // // this.rmtype = gridvalue.type;

// console.log("return valure of range screen",this.gridvalues);
// // this.gridvalues = this.session.retrieve("gridvalues")

// });

// }



}
