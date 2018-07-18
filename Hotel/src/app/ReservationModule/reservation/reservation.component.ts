
import { Component, OnInit  } from '@angular/core';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import {Http} from "@angular/http";
import { ReservationService } from "./reservation.service";
import { Router } from "@angular/router";
import { SessionStorageService } from "ngx-webstorage";

import { Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
  providers:[ReservationService]
})
export class ReservationComponent implements OnInit {

  public PF_Firstname= this.session.retrieve("pf_fname");
  public Pf_lastname = this.session.retrieve("pf_lastname");
  public Pf_language = this.session.retrieve("pf_language");
  public PF_Mobileno = this.session.retrieve("pf_mobileno");
  public Pf_title = this.session.retrieve("pf_title");
  public Pf_country = this.session.retrieve("pf_individual_country");
  public Pf_vip = this.session.retrieve("pf_individual_vip");

  public tableschanges =[];
  public language =[];
  public country=[];
  public restype=[];
  public source=[];
  public origin=[];
  public roomtype=[];
  public payment =[];
  public getc =[];
  public marketpro =[];
  
  public user1;
  constructor(private ReservationService:ReservationService,private route:Router,public session:SessionStorageService) { }
  clearsession(){
    this.session.clear();
  }
   
  user:any={};
  //date difference 
  arriveDepartureDateFun(arrDate,depDate){
    if(arrDate!=null && depDate!=null){
  const daydiff = moment(arrDate).diff(moment(depDate), "days");
  this.user.RES_Nights=Math.abs(daydiff);
    }
  }

 public usera;
 public confim;
  user33={};
  submit(inputt):void {
  // console.log(inputt);
      this.ReservationService.postandgetdata (inputt)
      .subscribe( (resp:any) => {
        
        this.user33 = resp;
          this.confim=resp.ConfirmationNumber;
          this.usera=resp.ReturnCode;
          if(this.usera == "RIS"){
            this.usera = "Reservation is Created for "+this.PF_Firstname;
            this.confim= "The Confirmation Number is:"+this.confim;

          }

          this.user=" ";
          this.PF_Firstname="";
          this.Pf_lastname="";
          this.Pf_language="";
          this.PF_Mobileno="";
          this.Pf_title="";
          this.Pf_country="";
          this.Pf_vip="";

      });  
                      this.route.navigate(['reservation/']);
     }
 
  submitwait(inputt):void {
  // console.log(inputt);
      this.ReservationService.getwaitdata (inputt)
      .subscribe( (resp:any) => {
          this.user1=resp.ReturnCode;
          if(this.user1 == "RIS"){
            this.user1 = "Reservation Waitlist is Created for "+this.PF_Firstname;
          }
          this.user="";
          this.PF_Firstname="";
          this.Pf_lastname="";
          this.Pf_language="";
          this.PF_Mobileno="";
          this.Pf_title="";
          this.Pf_country="";
          this.Pf_vip="";
          
      });  
     }


     ngOnInit() {
    
      console.log(this.Pf_language);
      this.ReservationService.getratecode()
      .subscribe((resp: any) => {
        this.tableschanges=resp.ReturnValue;
      });
       
      this.ReservationService.getrestype()
      .subscribe((resp: any) => {
        this.restype=resp.ReturnValue;
      }); 
      
      this.ReservationService.getsource()
      .subscribe((resp: any) => {
        this.source=resp.ReturnValue;
      });

      this.ReservationService.getorigin()
      .subscribe((resp: any) => {
        this.origin=resp.ReturnValue;
      });      

      this.ReservationService.getroomtype()
      .subscribe((resp: any) => {
        this.roomtype=resp.ReturnValue;
      }); 
      
      this.ReservationService.getpayment()
      .subscribe((resp: any) => {
        this.payment=resp.ReturnValue;
      });
      
      this.ReservationService.getcurrencydata()
      .subscribe((resp: any) => {
        this.getc=resp.ReturnValue;
      }); 

      this.ReservationService.getmarket()
      .subscribe((resp: any) => {
        this.marketpro=resp.ReturnValue;
      });                   
    }  
}

