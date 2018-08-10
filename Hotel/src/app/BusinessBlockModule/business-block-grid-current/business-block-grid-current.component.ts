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
  public start = this.session.retrieve("startdate");
  public end = this.session.retrieve("enddate");
  public nights = this.session.retrieve("nights");
  public roomtype=[];
  public range:any=[];

  constructor(public blockservicegrid:BusinessBlockGridService,private route:Router,public session:SessionStorageService) { }

  ngOnInit() {
    // console.log(this.start,this.end,this.nights);
    this.blockservicegrid.roomtype()
.subscribe((resp: any) => {
this.roomtype=resp.ReturnValue;
console.log(this.roomtype)

});



    }
 selectindex=null;
    selectMembersEdit(details,index){
      this.selectindex=index; 
  }

  public insertgrid:any=[];
  
  okbutton(input:any){
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
"block_id":this.session.retrieve('blockid'),
"roomtype_id":input.roomtype.toString(),
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
"grid_enddate":input.grid_enddate
}

this.insertgrid.push(body);
console.log(JSON.stringify(this.insertgrid));
this.blockservicegrid.insertGrid(this.insertgrid)
.subscribe( (resp:any) =>{

});
}
}
