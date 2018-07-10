import { Component, OnInit, Input } from '@angular/core';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import {Http} from "@angular/http";
import { NgClass } from "@angular/common";
import { SearchandeditreservationService} from './searchandeditreservation.service';
import { Router } from "@angular/router";
import { SessionStorageService } from "ngx-webstorage";


@Component({
  selector: 'app-searchandeditreservation',
  templateUrl: './searchandeditreservation.component.html',
  styleUrls: ['./searchandeditreservation.component.css'],
  providers:[SearchandeditreservationService]
})
export class SearchandeditreservationComponent implements OnInit {

  public searchandedit =[];

  constructor(private pService:SearchandeditreservationService,private route:Router,public session:SessionStorageService) { }
   
  ngOnInit() {
  
 
      
    
  this.pService.searchedit()
  .subscribe((resp: any) => {
   this.searchandedit=resp.ReturnValue;
 });

}

//res cancel
cans={};
user3={};

subcancel(inputt):void {
    this.pService.cancel(inputt)
    .subscribe( (resp:any )=> {
      this.user3=resp.cancellationNumber; 
    },
    );  
   }


reinstates={};
reinreturn={};
subrein():void {
  let body={
    "res_id":this.session.retrieve("id"),
    "res_unique_id":this.session.retrieve("uniq")
  };

   //reinstate
    this.pService.Reinstate(body)
    .subscribe( (resp:any)=> {
      console.log(resp);
      this.reinstates=resp.ConfirmationNumber;
      this.reinreturn=resp.Return;
    },
    );  
   }
   //Accept Waitlist
   AcceptState={};
   Acceptreturn={};
   subaccp(){
     let body={
       "Res_id":this.session.retrieve("id"),
       "pf_id":this.session.retrieve("id1"),
       "Res_unique_id":this.session.retrieve("uniq"),
     };
       this.pService.AcceptWaitlist(body)
       .subscribe((acceptwaitlist:any)=> {
         this.AcceptState=acceptwaitlist.ConfirmationNumber;
         this.Acceptreturn=acceptwaitlist.Return;
       },
       );  
      }
// between dates arrival
filterDatefrmList(startDate,endDate){
  if(startDate!=null && endDate!=null){
    let selectedMembers = this.searchandedit.filter(
      m => new Date(m.res_arrival) >= new Date(startDate) && new Date(m.res_arrival) <= new Date(endDate)
      );
        console.log(selectedMembers);
        this.searchandedit = selectedMembers;
  }else {
    this.searchandedit = this.searchandedit;
  }
  
}

selectindex=null;
selectMembersEdit(details,index){
this.selectindex=index;
this.session.store("id",details.res_id.toString());
this.session.store("id1",details.pf_id.toString());
this.session.store("name",details.pf_firstname);
this.session.store("arrival",details.res_arrival);
this.session.store("departure",details.res_depature);
this.session.store("nights",details.res_nights);
this.session.store("status",details.res_guest_status);
this.session.store("Room",details.res_room);
this.session.store("Adults",details.res_adults);
this.session.store("child",details.res_child);
this.session.store("RoomType",details.res_room_type);
this.session.store("restype",details.res_res_type);
this.session.store("rate",details.res_rate);
this.session.store("conf",details.res_confnumber);
this.session.store("uniq",details.res_unique_id.toString());
this.session.store("market",details.res_market);
this.session.store("Ratecode",details.res_rate_code);
this.session.store("source",details.res_source);
this.session.store("percentage",details.res_disc_perc);
this.session.store("Discreasons",details.res_disc_reason);
this.session.store("DiscAmount",details.res_disc_amount);
this.session.store("Currency",details.res_currency);
}
}
