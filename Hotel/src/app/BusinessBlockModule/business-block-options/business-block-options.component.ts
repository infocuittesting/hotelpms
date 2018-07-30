import { Component, OnInit } from '@angular/core';
// import {DatePicker} from './datepicker';
import {BusinessBlockOptionsService} from './business-block-options.service'
// import { MomentModule } from 'angular2-moment';


@Component({
  selector: 'app-business-block-options',
  templateUrl: './business-block-options.component.html',
  styleUrls: ['./business-block-options.component.css'],
  providers:[BusinessBlockOptionsService]

})
export class BusinessBlockOptionsComponent implements OnInit {
 public notes={};
 public cancel={};
 public return:any =[];
 public cancelmessage:any=[];
 public tableschanges;
 public roomtype=[];
 public reason=[];
  constructor(private blockservice:BusinessBlockOptionsService) { }
 insertnotes(args){
   console.log(args);
   this.blockservice.insertbusinessblock(args)
   .subscribe((resp: any) => {
    this.return=resp.ReturnCode;
    if(this.return == "RIS"){
      console.log("service working fine");
    }
    else{
      console.log("service failure");
    }
  });
  
 }
 function(input){
  console.log(input);
  this.blockservice.cancel(input)
  .subscribe((resp:any)=>{
  this.cancelmessage=resp.ReturnCode;
  if(this.cancelmessage == "RIS"){
    console.log("service working fine");
  }
  else{
    console.log("service failure");
  }
});
}

// CancelGroup(args){
//   console.log(args);
//   this.blockservice.insertbusinessblock(args)
//   .subscribe((resp: any) => {
//    this.return=resp.ReturnCode;
//    if(this.return == "RIS"){
//      console.log("service working fine");
//    }
//    else{
//      console.log("service failure");
//    }
//  });
 
// }
  ngOnInit() {
    this.blockservice.getchaTables1()
    .subscribe((resp: any) => {
      this.tableschanges=resp.ReturnValue;
    });
    // notetype droup down
    this.blockservice.notetype()
.subscribe((resp: any) => {
this.roomtype=resp.ReturnValue;

});

this.blockservice.reason()
.subscribe((resp: any) => {
this.reason=resp.ReturnValue;

});

  
}
}
