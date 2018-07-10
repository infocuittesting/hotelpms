import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HousekeepingService } from './housekeeping.service';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import * as jsPDF from 'jspdf';
import { SessionStorageService } from "ngx-webstorage";



@Component({
  selector: 'app-housekeeping',
  templateUrl: './housekeeping.component.html',
  styleUrls: ['./housekeeping.component.css'],
  providers: [HousekeepingService]
})
export class HousekeepingComponent implements OnInit {

  @ViewChild('myModal') content:ElementRef;


  public  downloadPDF(){

    let doc = new jsPDF();

    let specialElementHandlers = {
      '#editor':function(element, renderer){
        return true;
      }
    };

    let content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML,15,15,{
      'width':190,
      'elementHandlers': specialElementHandlers
    });

    doc.save('test.pdf');
  }

house = [


    //  { rm_room: "101", rm_room_type: "kngn", rm_room_status: "clean", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },
    //  { rm_room: "101", rm_room_type: "kngn", rm_room_status: "clean", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },
    //  { rm_room: "101", rm_room_type: "kngn", rm_room_status: "clean", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },
    //  { rm_room: "101", rm_room_type: "kngn", rm_room_status: "clean", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },


    //  { rm_room: "102", rm_room_type: "kngs", rm_room_status: "dirty", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },
    //  { rm_room: "102", rm_room_type: "kngs", rm_room_status: "dirty", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },
    //  { rm_room: "102", rm_room_type: "kngs", rm_room_status: "dirty", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },
    //  { rm_room: "102", rm_room_type: "kngs", rm_room_status: "dirty", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },
    //  { rm_room: "102", rm_room_type: "kngs", rm_room_status: "dirty", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },

    //  { rm_room: "103", rm_room_type: "kngn", rm_room_status: "pick up", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },
    //  { rm_room: "103", rm_room_type: "kngn", rm_room_status: "pick up", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },
    //  { rm_room: "103", rm_room_type: "kngn", rm_room_status: "pick up", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },


    //  { rm_room: "104", rm_room_type: "kngn", rm_room_status: "inspected", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },
    //  { rm_room: "104", rm_room_type: "kngn", rm_room_status: "inspected", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },
    //  { rm_room: "104", rm_room_type: "kngn", rm_room_status: "inspected", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },
    //  { rm_room: "104", rm_room_type: "kngn", rm_room_status: "inspected", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },
    //  { rm_room: "104", rm_room_type: "kngn", rm_room_status: "inspected", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },
    //  { rm_room: "104", rm_room_type: "kngn", rm_room_status: "inspected", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },
    //  { rm_room: "104", rm_room_type: "kngn", rm_room_status: "inspected", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },



    //  { rm_room: "105", rm_room_type: "kngn", rm_room_status: "out of order", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },
    //  { rm_room: "105", rm_room_type: "kngn", rm_room_status: "out of order", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },
    //  { rm_room: "105", rm_room_type: "kngn", rm_room_status: "out of order", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },


    //  { rm_room: "106", rm_room_type: "kngn", rm_room_status: "out of service", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },
    // { rm_room: "106", rm_room_type: "kngn", rm_room_status: "out of service", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },
    //  { rm_room: "106", rm_room_type: "kngn", rm_room_status: "out of service", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },


  ];



fromroom=[];
toroom=[];
roomlist=[];
roomlist1=[];
user23={};
user24={};
user={};


  constructor(private roomService: HousekeepingService, private route: Router,public session:SessionStorageService) { }

  ngOnInit() {


    this.roomService.gethousekeepingdata()
      .subscribe((resp: any) => {
        this.house = resp.ReturnValue;

      });

      this.roomService.roomdropdown1()
      .subscribe((resp: any) => {
       this.fromroom=resp.ReturnValue;
     });

     this.roomService.roomdropdown2()
     .subscribe((resp: any) => {
      this.toroom=resp.ReturnValue;
    });
  }

  //seelct and clear all
chkFlag=false;
checkselectClr=false;
selectandClearAll(flag){
 
 if(flag=='clr'){
   this.chkFlag=true;
   this.checkselectClr=false;
   this.filtercheckboxList=[];
 }else if(flag=='sel'){
   this.chkFlag=true;
   this.checkselectClr=true;
   this.filtercheckboxList=['clean','inspected','dirty','out of service','out of order','pick up'];
 }
 if(this.chkFlag==true){
   if(this.copy.length>0){
     this.house=this.copy;
   }
 }
}

  //filter data in table  using checkbox
  checkboxflg=[];
  count=0;
  copy=[];
  filtercheckboxList:any=[];
  filtercheckboxData(ngmodel, flag) {
    if (ngmodel == true) {
         this.filtercheckboxList.push(flag);
    }else{
      for(var i=0;i<this.filtercheckboxList.length;i++){
        if(flag==this.filtercheckboxList[i]){
          this.filtercheckboxList.splice(i,1);
          break;
        }
      }
    }
    //final list for table
    if(this.filtercheckboxList!=null && this.filtercheckboxList.length>0){
     
      if(this.count==0){
        this.count++;
     this.copy =JSON.parse(JSON.stringify(this.house))
      }
    this.house=[];
    console.log("this.filtercheckboxList   ----"+this.filtercheckboxList);
    for(var j=0;j<this.copy.length;j++){
      if(this.filtercheckboxList.includes(this.copy[j].rm_room_status)){
        this.house.push(this.copy[j]);
      }
    }
  }else{
    this.house=this.copy; 
  }
  }


  filtercheckboxData1(ngmodel, flag) {
    if (ngmodel == true) {
         this.filtercheckboxList.push(flag);
    }else{
      for(var i=0;i<this.filtercheckboxList.length;i++){
        if(flag==this.filtercheckboxList[i]){
          this.filtercheckboxList.splice(i,1);
          break;
        }
      }
    }
    //final list for table
    if(this.filtercheckboxList!=null && this.filtercheckboxList.length>0){
     
      if(this.count==0){
        this.count++;
     this.copy =JSON.parse(JSON.stringify(this.house))
      }
    this.house=[];
    console.log("this.filtercheckboxList   ----"+this.filtercheckboxList);
    for(var j=0;j<this.copy.length;j++){
      if(this.filtercheckboxList.includes(this.copy[j].rm_fo_status)){
        this.house.push(this.copy[j]);
      }
    }
  }else{
    this.house=this.copy; 
  }
  }


  public commonflag: string;

  public changeroomlist: string;

  public changeroom: number;
  sample(flag) {
    this.commonflag = flag;

  }  
    roomassign(){
    let body =
    {
      "Res_id": this.session.retrieve("rmid"),
      "Res_room": this.session.retrieve("hsid"),
      "Res_unique_id":this.session.retrieve("uniq")
    }
    console.log(body);
    this.roomService.roomassign(body)
    .subscribe(( user233:any)=> {

    },
     ); 

  }

  housekeepingstatus(inputt) {

    console.log(inputt);
    if (this.commonflag == 'roomlist') {
      // let inputparms = {
      //   'RM_Room_Status': 'input.RM_Room_Status',
      //   'RM_Room':'input.RM_Room'
      //   // 'Room_List': this.changeroomlist
      // }

      // this.roomService.getroomlist()
      //   .subscribe((resp: any) => {
      //     this.house = resp.ReturnValue;
      //   });

      this.roomService.getroomlist (inputt)
      .subscribe(( user233:any)=> {
        
        this.user23 = user233;
        this.roomlist=user233.Return;
        if(user233.Return == "Record Updated Successfully"){
          console.log("checking return value is success or not")
          this.roomService.gethousekeepingdata()
          .subscribe((resp: any) => {
          this.house = resp.ReturnValue;
      });
        }
    //  location.reload()  
      },
       );  
    }

    else if (this.commonflag == 'fromtoroom') {

      // let inputparms = {
      //   'RM_Room_Status': inputt.RM_Room_Status,
      //   'From_Room':'input.RM_Room'
      //   // 'Room_List': this.changeroom
      // }

      this.roomService.getlist (inputt)
      .subscribe(( user234:any)=> {
        this.user24 = user234;
        this.roomlist=user234.Return;
        if(user234.Return == "Record Updated Successfully"){
          console.log("checking return value is success or not")
          this.roomService.gethousekeepingdata()
          .subscribe((resp: any) => {
          this.house = resp.ReturnValue;
      });
        }
        
        //  location.reload()
      },
       ); 

    }
}
  selectindex=null;
  selectMembersEdit(details,index){
  this.selectindex=index;
  this.session.store("hsid",details.rm_room.toString());
  }



}