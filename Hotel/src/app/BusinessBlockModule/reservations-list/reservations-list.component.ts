import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from "ngx-webstorage";
import { Router } from "@angular/router";
import {ReservationListService} from './reservation-list.service';
// import { ReservationsListComponent } from './BusinessBlockModule/reservations-list/reservations-list.component';
@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservations-list.component.html',
  styleUrls: ['./reservations-list.component.css'],
  providers:[ReservationListService],
 
})
export class ReservationsListComponent implements OnInit {

  constructor(private reservationlist: ReservationListService,public session:SessionStorageService,private route:Router) { }

  ngOnInit() {
    console.log("Query going to reservation button")
      this.reservationlist.QueryPaymasterReservation()
      .subscribe((resp: any) => {
          this.querypay=resp.ReturnValue;
           console.log("queryss to the table",this.querypay);
          
       });
  }
    
public querypay=[];

    ReservationsListComponent()
    {
        
}
}
