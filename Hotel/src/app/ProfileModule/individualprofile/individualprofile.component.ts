
import { Component,OnInit } from '@angular/core';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { IndividualService } from "./individual.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-individualprofile',
  templateUrl: './individualprofile.component.html',
  styleUrls: ['./individualprofile.component.css'],
  providers:[IndividualService]
})
export class IndividualprofileComponent implements OnInit{
public country=[];
public statelist=[];
public viplist=[];
public nationality=[];
public currency=[];
public itl=[];
public lit=[];
public tl=[];
public comm1=[];
public comm2=[];
public comm3=[];
public listtype=[];


  constructor(private IndividualService:IndividualService,private route:Router) { }
public user={};
  individual = {};
  individual1 = {};
  user33={};
  user34={};
  submit(inputt):void {
    console.log(inputt);
      this.IndividualService.postandgetdata (inputt)
      .subscribe(( user333:any)=> {
        this.user33 = user333;
        this.individual=user333.Return;
    //   console.log("user33  "+ user333);   
      //  alert("user33  "+ user333);    
      },
                 //     error => this.errorMessage = <any>error
                     // function(response) { console.log("Success Response" + response)}
                      );  
                      this.route.navigate(['individualprofile/']);
     }



    //  update(inputt):void {
    //   console.log(inputt);
    //     this.IndividualService.updateIndividualProfile (inputt)
    //     .subscribe(( user334:any)=> {
    //       this.user34 = user334;
    //       this.individual1=user334.Return;
    //   //   console.log("user33  "+ user333);   
    //     //  alert("user33  "+ user333);    
    //     },
    //                //     error => this.errorMessage = <any>error
    //                    // function(response) { console.log("Success Response" + response)}
    //                     );  
    //                     this.route.navigate(['individualprofile/']);
    //    }

     servicestatus=[];

   
     
   updateIndividualProfile(){
    let inputparms={
     "PF_Firstname":"aravindh",
        "PF_Mobileno":"34545",
        "PF_Individual_Address":"Oxon Hill, MD, USA",
        "PF_Home_Address":"Oxon Hill, MD, USA",	
        "PF_City":"newyork",	
        "PF_Postalcode":"621334",	
        "PF_Individual_Country":"america",	
        "PF_Individual_State":"hawaii"
      
        

   }
  this.IndividualService.updateIndividualProfile(inputparms)
  .subscribe((resp: any) => {
   this.servicestatus=resp.ServiceStatus;
 });

}

ngOnInit()
{
  this.IndividualService.countrydropdown()
  .subscribe((resp: any) => {
   this.country=resp.ReturnValue;
 });

 this.IndividualService.statedropdown()
  .subscribe((resp: any) => {
   this.statelist=resp.ReturnValue;
 });

 this.IndividualService.vipdropdown()
 .subscribe((resp: any) => {
  this.viplist=resp.ReturnValue;
});

this.IndividualService.nationalitydropdown()
 .subscribe((resp: any) => {
  this.nationality=resp.ReturnValue;
});

this.IndividualService.currencydropdown()
 .subscribe((resp: any) => {
  this.currency=resp.ReturnValue;
});

this.IndividualService.citydropdown()
 .subscribe((resp: any) => {
  this.itl=resp.ReturnValue;
});

this.IndividualService.titledropdown()
 .subscribe((resp: any) => {
  this.lit=resp.ReturnValue;
});

this.IndividualService.languagedropdown()
 .subscribe((resp: any) => {
  this.tl=resp.ReturnValue;
});

this.IndividualService.communication1dropdown()
 .subscribe((resp: any) => {
  this.comm1=resp.ReturnValue;
});


this.IndividualService.communication1dropdown()
 .subscribe((resp: any) => {
  this.comm2=resp.ReturnValue;
});


this.IndividualService.communication1dropdown()
 .subscribe((resp: any) => {
  this.comm3=resp.ReturnValue;
});

this.IndividualService.pftypedropdown()
  .subscribe((resp: any) => {
   this.listtype=resp.ReturnValue;
 });



}

cleardata(){
  this.user = '';
  }
}
