import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal.service';
import { ProfilesearchService } from '../profilesearch/profilesearch.service';

import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { Router } from "@angular/router";
import { AppService } from "../../app.service";
import { SessionStorageService } from "ngx-webstorage";

@Component({
  selector: 'app-modal-basic',
  templateUrl: './modal-basic.component.html',
  styleUrls: ['./modal-basic.component.css'],
  providers:[ModalService]
})
export class ModalBasicComponent implements OnInit {

  public tables =[];

  public negotes =[];
  public nego:any =[];
  public negotes1 =[];

  public notes =[];

  public credit =[];

  public prefer =[];
  public prefer1 =[];
  public prefer2 =[];

  public rate = [];
  public note1 = [];
  public future =  [];
  public history = [];

  public preference1 = [];
  public preference2 = [];
 creditcard = {};
 del ={};

  
  constructor(private pppService:ModalService,private route:Router
    ,public session:SessionStorageService ) { 
this.negotes = this.negotes1;
this.prefer = this.prefer1;
this.prefer = this.prefer2;
this.negotes = this.nego;


}

private month:any;
private year:any;
onMonthChange(month:any){
  this.month = month.toString();
}
onYearChange(year:any){
  this.year = year.toString();
}
private creditcard_expiry:any;
getcreditexpiry(){
    this.creditcard_expiry = this.month+"/"+this.year;
    console.log(this.creditcard_expiry);
}

    user2:any = {};
    user21 = {};
    profile1 =[];
    profile2 =[];
    user1 ={};
    user3 ={};
    user5 ={};
    mbc={};
    cu1:any ={};
  card = {};
  profilenego ={};
  profilenegotes ={};
  profilenotes ={};
  profileprefer ={};
  profileprefer1 ={};
  user33={};
  user34={};
  user35={};
  user36={};
  user37={};
  user38={};
  user40={};
  user24={};
  updatecard={};
  delcard={};
  delcard1={};
  delcard2={};
  delcard3={};
  delcard4={};
  delcard6={};
  delcard7={};
  user25={};
  futurereservation={};
  updatenotes={};
  nup:any={};
  noup:any={};
  user13={};
  ratecode = {};
  someData1 = [];
  user14 = {};
  user15 = {};
  user16 = {};
  // profile2 ={};
  user7 ={};
  user39:any ={};
  clist ={};
  

  ngtypeselection;
  pgtypeselection;
  prtypeselection;

  onSelect(val){
    console.log(val);
    this.negotes = this.negotes1.filter(x => x.pf_rate_code == val)
  }
  

  onSelectpop(val){
    console.log(val);
    this.negotes = this.negotes1.filter(x => x.pf_rate_code == val)
  }

  onSelect1(val){
    console.log(val);
    this.prefer = this.prefer1.filter(x => x.pf_guest_preference == val)
  }

  onSelect2(val){
    console.log(val);
    this.prefer = this.prefer2.filter(x => x.pf_preference_group == val)
  }
//   selectedDevice = 'Master';
//   onChange(newValue) {
//     console.log(newValue);
//     this.selectedDevice = newValue;
// }

  
  submit(inputt):void {
    this.creditcard_expiry = this.month+"/"+this.year;
    console.log(this.creditcard_expiry);
    console.log('sruthi',inputt,'kanu');
    inputt.PF_Expiration_Date = this.creditcard_expiry;
      this.pppService.insertCreditcard (inputt)
      .subscribe(( user333:any)=> {
        this.user33 = user333;
        this.card=user333.Return;
      },
       );  
        }


        update(inputt) {
          this.creditcard_expiry = this.month+"/"+this.year;
          console.log(this.creditcard_expiry);
          console.log(inputt);
          inputt.PF_Expiration_Date = this.creditcard_expiry;
            this.pppService.updateCredit(inputt)
            .subscribe(( user339:any)=> {
              this.user38 = user339;
              this.card=user339.Return;
            },
             );  
              }

     

     negoinsert(inputt):void {

      console.log(inputt);
        this.pppService.insertNegotiated (inputt)
        .subscribe(( user334:any)=> {
          this.user34 = user334;
          this.profilenego=user334.Return;
        },
        );  
                       
       }

       negoupdate(inputt):void {

        console.log(inputt);
          this.pppService.updateNegotiated(inputt)
          .subscribe(( user134:any)=> {
            this.user24 = user134;
            this.profilenegotes=user134.Return;
          },
          );  
                         
         }


       notesinsert(inputt):void {

        console.log(inputt);
          this.pppService.insertNotes(inputt)
          .subscribe(( user335:any)=> {
            this.user35 = user335;
            this.profilenotes=user335.Return;
          },
          );  
                         
         }

         notesupdate(inputt):void {

          console.log(inputt);
            this.pppService.updateNotes(inputt)
            .subscribe(( user235:any)=> {
              this.user25 = user235;
              this.updatenotes=user235.Return;
            },
            );  
                           
           }

         preferinsert(inputt):void {

          console.log(inputt);
            this.pppService.insertPrefer(inputt)
            .subscribe((user336:any)=> {
              this.user36 = user336;
              this.profileprefer=user336.Return;
            },
            );  
                           
           }


           preferupdate(inputt){

            console.log(inputt);
              this.pppService.updatePrefer(inputt)
              .subscribe((user339:any)=> {
                this.user39 = user339;
                this.profileprefer1=user339.Return;
              },
              );  
                             
             }

     flagsId:string;
changeClick(flag){
  if(flag=='CHANGE'){
    this.flagId=flag;
  }
  let paramss={
    "pf_id":this.session.retrieve("id"),
  
 }
 
  this.pppService.getTables(paramss)
  .subscribe((resp: any) => {
    this.tables=resp.ReturnValue;
   
    console.log(this.tables);
 
});
}

flagsnegotesId:string;
negotesClick(flag){
  if(flag=='NEGOTES'){
    this.flagId=flag;
  }
  let paramss={
    "pf_id":this.session.retrieve("id"),
  
 }
 
  this.pppService.getNegotiated(paramss)
  .subscribe((resp: any) => {
    this.negotes=resp.ReturnValue;
   console.log(this.negotes);
 
});
}





flagfutureId:string;
futureClick(flag){
  if(flag=='FUTURE'){
    this.flagId=flag;
  }
  let paramss={
    "pf_id":this.session.retrieve("id"),
  
 }
 
  this.pppService.getFuture(paramss)
  .subscribe((resp: any) => {
    this.future=resp.ReturnValue;
    console.log(this.future);
 
});
}


flagshistoryId:string;
historyClick(flag){
  if(flag=='HISTORY'){
    this.flagId=flag;
  }
  let paramss={
    "pf_id":this.session.retrieve("id"),
  
 }
 
  this.pppService.getHistory(paramss)
  .subscribe((resp: any) => {
    this.history=resp.ReturnValue;
    console.log(this.future);
 
});
}


flagpreferencesId:string;
preferenceClick(flag){
  if(flag=='PREFER'){
    this.flagId=flag;
  }
  let paramss={
    "pf_id":this.session.retrieve("id"),
   
 }
 
  this.pppService.getPreferences(paramss)
  .subscribe((resp: any) => {
    this.prefer=resp.ReturnValue;
  console.log(this.prefer);
 
});
}


flagnotesId:string;
notesClick(flag){
  if(flag=='NOTES'){
    this.flagId=flag;
  }
  let paramss={
    "pf_id":this.session.retrieve("id"),
    
 }
 
  this.pppService.getNotes(paramss)
  .subscribe((resp: any) => {
    this.notes=resp.ReturnValue;
   console.log(this.credit);
 
});
}


flagsdelId:string;
deletecreditClick(){
 let params={
   "cc_id":this.deleteDataDetails.cc_id.toString(),
    "pf_id":this.deleteDataDetails.pf_id,

  }
 
  this.pppService.deleteCredit(params)
.subscribe(( user313:any)=> {
  this.user13 = user313;
  this.delcard=user313.Return;

  let paramss={
    "pf_id":this.session.retrieve("id"),
 }
 
  this.pppService.getCreditcard(paramss)
  .subscribe((resp: any) => {
    this.credit=resp.ReturnValue;
    console.log("creditcard details");
     console.log(this.credit);
 
})
});
}



flagsnegoId:string;
deletenegotesClick(){
 let params={
   "negotiate_id":this.deleteDataDetails2.negotiate_id.toString(),
    "pf_id":this.deleteDataDetails2.pf_id,

  }
 
  this.pppService.negotesDelete(params)
.subscribe(( user314:any)=> {
  this.user14 = user314;
  this.delcard1=user314.Return;

  let paramss={
    "pf_id":this.session.retrieve("id"),
 }
 
  this.pppService.getNegotiated(paramss)
  .subscribe((resp: any) => {
    this.negotes=resp.ReturnValue;
    console.log("creditcard details");
     console.log(this.negotes);
 
})
});
}

flagsnotesId:string;
deletenotesClick(){
 let params={
   "notes_id":this.deleteDataDetails1.notes_id.toString(),
    "pf_id":this.deleteDataDetails1.pf_id,

  }
 
  this.pppService.notesDelete(params)
.subscribe(( user315:any)=> {
  this.user15 = user315;
  this.delcard2=user315.Return;

  let paramss={
    "pf_id":this.session.retrieve("id"),
 }
 
  this.pppService.getNotes(paramss)
  .subscribe((resp: any) => {
    this.notes=resp.ReturnValue;
    console.log("creditcard details");
     console.log(this.notes);
 
})
});
}




flagspreferId:string;
deletepreferClick(){
 let params={
   "preference_id":this.deleteDataDetails4.preference_id.toString(),
    "pf_id":this.deleteDataDetails4.pf_id,
}
 
  this.pppService.preferDelete(params)
.subscribe(( user415:any)=> {
  this.user21 = user415;
  this.delcard7=user415.Return;

  let paramss={
    "pf_id":this.session.retrieve("id"),
 }
 
  this.pppService.getPreferences(paramss)
  .subscribe((resp: any) => {
    this.prefer=resp.ReturnValue;
    console.log("creditcard details");
     console.log(this.prefer);
 
})
});
}



  ngOnInit() 
 {
  
this.pppService.ratecodedropdown()
   .subscribe((resp: any) => {
     this.rate=resp.ReturnValue;
console.log("res");
  
});



this.pppService.notedropdown()
   .subscribe((resp: any) => {
     this.note1=resp.ReturnValue;
   console.log("res");
  
});



this.pppService.credicardtype()
   .subscribe((resp: any) => {
     this.creditcard=resp.ReturnValue;
   console.log("res");
  
});

this.pppService.credicardtype()
  .subscribe((resp: any) => {
   this.clist=resp.ReturnValue;
 });

this.pppService.preferencedropdown()
   .subscribe((resp: any) => {
     this.preference1=resp.ReturnValue;
  console.log("res");
  
});


this.pppService.preferencegroupdropdown()
   .subscribe((resp: any) => {
     this.preference2=resp.ReturnValue;
   console.log("res");
  
});
let paramss={
  "pf_id":this.session.retrieve("id"),
  
}

this.pppService.getNegotiated(paramss)
.subscribe((resp: any) => {
this.negotes1=resp.ReturnValue;
console.log("negotes1 service after insert"+this.negotes1)
});


this.pppService.Preferences(paramss)
.subscribe((resp: any) => {
this.prefer1=resp.ReturnValue;
});

this.pppService.Preferences(paramss)
.subscribe((resp: any) => {
this.prefer2=resp.ReturnValue;
});

}


  creditlist=[];
  servicestatus=[];


flagId:string;
creditClick(flag){
  if(flag=='CREDIT'){
    this.flagId=flag;
  }
  let paramss={
    "pf_id":this.session.retrieve("id"),
 }
 
  this.pppService.getCreditcard(paramss)
  .subscribe((resp: any) => {
    this.credit=resp.ReturnValue;
    console.log("creditcard details");
     console.log(this.credit);
 
});
}



flagdeletesId:string;
deletesClick(flag){
  if(flag=='DELETE'){
    this.flagId=flag;
  }
  let paramss={
    "pf_id":this.session.retrieve("id"),
 }
 
  this.pppService.deleterecordDelete(paramss)
  .subscribe((resp: any) => {
    this.profile1=resp.ReturnValue;
   this.profile2=resp.Return;
    // console.log("creditcard details");
    //  console.log(this.credit);
 
});
}




selectindex=null;
public deleteDataDetails:any;
selectMembersCredit(details,index){
this.selectindex=index;
this.deleteDataDetails=details;
this.session.store("id1",details.cc_id);
}


selectindex1=null;
public deleteDataDetails1:any;
selectMembersNotes(details,index){
this.selectindex=index;
this.deleteDataDetails1=details;
this.session.store("id2",details.notes_id);
}

selectindex2=null;
public deleteDataDetails2:any;
selectMembersNegotes(details,index){
this.selectindex=index;
this.deleteDataDetails2=details;
this.session.store("id3",details.negotiate_id);
}

selectindex3=null;
public deleteDataDetails4:any;
selectMembersPrefer(details,index){
this.selectindex=index;
this.deleteDataDetails4=details;
this.session.store("id4",details.preference_id);
}


  }
