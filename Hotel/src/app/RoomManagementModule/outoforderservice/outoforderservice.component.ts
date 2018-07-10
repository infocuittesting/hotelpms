import { Component, OnInit } from '@angular/core';
import { OutoforderService } from './outoforder.service';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { SessionStorageService } from "ngx-webstorage";

@Component({
  selector: 'app-outoforderservice',
  templateUrl: './outoforderservice.component.html',
  styleUrls: ['./outoforderservice.component.css'],
  providers:[ OutoforderService]
})
export class OutoforderserviceComponent implements OnInit {

  public order =[

    {
      "rm_room": 100,
      "rm_status": "out of order",
      "rm_from_date": "2018-03-30",
      "rm_through_date": "2018-04-02",
      "rm_return_as": "dirty",
      "rm_reason": "ren",
      "rm_description": "renovation"
  },
  {
      "rm_room": 100,
      "rm_status": "out of order",
      "rm_from_date": "2018-01-04",
      "rm_through_date": "2018-10-04",
      "rm_return_as": "dirty",
      "rm_reason": "a/c",
      "rm_description": "renovation"
  },
  {
      "rm_room": 101,
      "rm_status": "out of service",
      "rm_from_date": "2018-01-04",
      "rm_through_date": "2018-10-04",
      "rm_return_as": "dirty",
      "rm_reason": "a/c",
      "rm_description": "renovation"
  },
  {
      "rm_room": 100,
      "rm_status": "out of order",
      "rm_from_date": "2018-01-04",
      "rm_through_date": "2018-10-04",
      "rm_return_as": "dirty",
      "rm_reason": "a/c",
      "rm_description": "renovation"
  },
  {
      "rm_room": 100,
      "rm_status": "out of order",
      "rm_from_date": "2018-01-04",
      "rm_through_date": "2018-10-04",
      "rm_return_as": "dirty",
      "rm_reason": "a/c",
      "rm_description": "renovation"
  },
  {
      "rm_room": 100,
      "rm_status": "out of order",
      "rm_from_date": "2018-01-04",
      "rm_through_date": "2018-10-04",
      "rm_return_as": "dirty",
      "rm_reason": "a/c",
      "rm_description": "renovation"
  },
  {
      "rm_room": 101,
      "rm_status": "out of order",
      "rm_from_date": "2018-05-24",
      "rm_through_date": "2018-05-25",
      "rm_return_as": "Dirty",
      "rm_reason": "AC",
      "rm_description": "renovation"
  }



  ];

  onSelect6(val){
    console.log(val);
    this.order = this.orderData.filter(x => x.rm_room == val)
  }

  orderData=[];
  roomnumber=[];
  roomclass=[];
  orderlist=[];
  ordertolist=[];
  reasonlist=[];
  servicelist=[];
  user334={};
  list=[];
  constructor(private roomService: OutoforderService,private route:Router,public session:SessionStorageService) {
    this.order = this.orderData;
   }

oos2=[];
oos3=[];
   roomcard=[];
   roomcard1=[];
  user={};
  user2={};
  user34={};
  user35={};
 
  user33={};
  // submit(inputt):void {
  //   console.log(inputt);
  //     this.roomService.postandgetdata (inputt)
  //     .subscribe( user333 => {
  //       this.user33 = user333;
  //   //   console.log("user33  "+ user333);   
  //     //  alert("user33  "+ user333);    
  //     },
  //                //     error => this.errorMessage = <any>error
  //                    // function(response) { console.log("Success Response" + response)}
  //                     );  
  //                     // this.route.navigate(['orderservice/']);
  //    }


  submit(inputt):void {
    // console.log('sruthi',inputt,'kanu');
     this.roomService.postandgetdata(inputt)
     .subscribe(( user333:any)=> {
       this.user33 = user333;
       this.roomcard=user333.Return;

       if(user333.Return == "Record Inserted Successfully"){
        console.log("checking return value is success or not")
        this.roomService.outofOrder()
        .subscribe((resp: any) => {
        this.order = resp.ReturnValue;
    });
      }
      //  window.location.reload();
     },
      );  
       }


       update(inputt):void {
        // console.log('sruthi',inputt,'kanu');
         this.roomService.updateroomoutoforder(inputt)
         .subscribe(( user334:any)=> {
           this.user34 = user334;
           this.roomcard1=user334.Return;

           if(user334.Return == "Record Updated Successfully"){
            console.log("checking return value is success or not")
            this.roomService.outofOrder()
            .subscribe((resp: any) => {
            this.order = resp.ReturnValue;
        });
          }
          //  window.location.reload();
         },
          );  
           }

           delete(inputt):void {
            // console.log('sruthi',inputt,'kanu');
             this.roomService.deleteoutoforder(inputt)
             .subscribe(( user335:any)=> {
               this.user35 = user335;
               this.oos3=user335.Return;
              //  window.location.reload();
              if(user335.Return == "Record Deleted Successfully"){
                console.log("checking return value is success or not")
                this.roomService.outofOrder()
                .subscribe((resp: any) => {
                this.order = resp.ReturnValue;
            });
              }
             },
              );  
               }
    

  ngOnInit() {

    // let inputparms={
    //   "For_Date":"",
    //   "RM_Room":"",
    //   "Room_Class":"std",
    //   "RS":
    //   {
    //   "oo":"",
    //   "os":"" 
    //   }
    //   }
      
      
   this.roomService.outofOrder()
   .subscribe((resp: any) => {
    this.order=resp.ReturnValue;
 
 });

 this.roomService.orderlisting1()
 .subscribe((resp: any) => {
  this.orderlist=resp.ReturnValue;

});

 this.roomService.orderlisting2()
 .subscribe((resp: any) => {
  this.ordertolist=resp.ReturnValue;

});


this.roomService.servicelisting()
.subscribe((resp: any) => {
 this.servicelist=resp.ReturnValue;

});

this.roomService.reasonlisting()
.subscribe((resp: any) => {
 this.reasonlist=resp.ReturnValue;

});
 this.roomService.outofOrder()
 .subscribe((resp: any) => {
  this.orderData=resp.ReturnValue;

});

 this.roomService.roomnumberdropdown()
    .subscribe((resp: any) => {
     this.roomnumber=resp.ReturnValue;
   });

   this.roomService.roomclassdropdown()
   .subscribe((resp: any) => {
    this.roomclass=resp.ReturnValue;
  });
  }

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
     this.copy =JSON.parse(JSON.stringify(this.order))
      }
    this.order=[];
    console.log("this.filtercheckboxList   ----"+this.filtercheckboxList);
    for(var j=0;j<this.copy.length;j++){
      if(this.filtercheckboxList.includes(this.copy[j].rm_status)){
        this.order.push(this.copy[j]);
      }
    }
  }else{
    this.order=this.copy; 
  }
  }

  
  selectindex=null;
  public deleteDataDetails:any;
  selectOrdersEdit(details,index){
  this.selectindex=index;
  this.deleteDataDetails=details;
  this.session.store("id1",details.rm_room.toString());
  
  }

}