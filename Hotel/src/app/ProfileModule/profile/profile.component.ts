import { Component,OnInit } from '@angular/core';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { ProfileService } from "./profile.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[ProfileService]
})
export class ProfileComponent implements OnInit {

  public country1=[];
  public state1=[];
  public currency=[];
  public comm1=[];
  public comm2=[];
  public comm3=[];
  public type=[];
  public cury=[];
  public itl=[];


  constructor(private ProfileService:ProfileService,private route:Router) { }
public user={};
 
  user33={};
  public profile;
  submit(inputt):void {
    console.log(inputt);
      this.ProfileService.postandgetdata (inputt)
      .subscribe(( user333:any)=> {
        this.user33 = user333;
        this.profile=user333.ReturnCode;
        if(this.profile=="RIS"){
          this.profile="The Company Profile is Created";
        }
      
    //   console.log("user33  "+ user333);   
      //  alert("user33  "+ user333);    
      },
                 //     error => this.errorMessage = <any>error
                     // function(response) { console.log("Success Response" + response)}
                      );  
                      this.route.navigate(['profile/']);
     }


     servicestatus=[];
     deleteCompanyProfile(){
        let inputparms={
  
   
       }
      this.ProfileService.deleteCompanyProfile(inputparms)
      .subscribe((resp: any) => {
       this.servicestatus=resp.ServiceStatus;
     });
   }
   
   updateCompanyProfile(){
    let inputparms={


   }
  this.ProfileService.updateCompanyProfile(inputparms)
  .subscribe((resp: any) => {
   this.servicestatus=resp.ServiceStatus;
 });
}


ngOnInit()
{

  this.ProfileService.countrydropdown()
  .subscribe((resp: any) => {
   this.country1=resp.ReturnValue;
 });

 this.ProfileService.statedropdown()
 .subscribe((resp: any) => {
  this.state1=resp.ReturnValue;
});

this.ProfileService.currencydropdown()
 .subscribe((resp: any) => {
  this.currency=resp.ReturnValue;
});


this.ProfileService.communication1dropdown()
 .subscribe((resp: any) => {
  this.comm1=resp.ReturnValue;
});


this.ProfileService.communication1dropdown()
 .subscribe((resp: any) => {
  this.comm2=resp.ReturnValue;
});

this.ProfileService.postaldropdown()
 .subscribe((resp: any) => {
  this.cury=resp.ReturnValue;
});

this.ProfileService.citydropdown()
 .subscribe((resp: any) => {
  this.itl=resp.ReturnValue;
});
this.ProfileService.communication1dropdown()
 .subscribe((resp: any) => {
  this.comm3=resp.ReturnValue;
});

this.ProfileService.profile()
 .subscribe((resp: any) => {
  this.type=resp.ReturnValue;
});


}

}
