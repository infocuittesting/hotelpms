import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppService } from "./app.service";
import { BsDatepickerModule} from "ngx-bootstrap/datepicker";
import { Ng2Webstorage } from "ngx-webstorage";

import { AppCommonpage } from "./app.commonpage";

import { IndividualprofileComponent } from './ProfileModule/individualprofile/individualprofile.component';
import { ReservationComponent } from './ReservationModule/reservation/reservation.component';
import { AppRoutingModule, routingComponents } from './/app-routing.module';
import { IndividualService } from './ProfileModule/individualprofile/individual.service';
import { ReservationService } from './ReservationModule/reservation/reservation.service';
import { ModalBasicComponent } from './ProfileModule/modal-basic/modal-basic.component';
import { ReservationoptionComponent } from './ReservationModule/reservationoption/reservationoption.component';
import { MainscreenComponent } from './mainscreen/mainscreen.component';
import { ProfileComponent } from './ProfileModule/profile/profile.component';

import { ProfileService } from './ProfileModule/profile/profile.service';
import { ModalService } from './ProfileModule/modal-basic/modal.service';
import { ProfilesearchComponent } from './ProfileModule/profilesearch/profilesearch.component';
import { SearchandeditreservationComponent } from './ReservationModule/searchandeditreservation/searchandeditreservation.component';
import { HousekeepingComponent } from './RoomManagementModule/housekeeping/housekeeping.component';
import { QueueroomComponent } from './RoomManagementModule/queueroom/queueroom.component';
import { RoomdiscrepanciesComponent } from './RoomManagementModule/roomdiscrepancies/roomdiscrepancies.component';
import { RoomconditionComponent } from './RoomManagementModule/roomcondition/roomcondition.component';
import { FacilityforecastComponent } from './RoomManagementModule/facilityforecast/facilityforecast.component';
import { RoomhistoryComponent } from './RoomManagementModule/roomhistory/roomhistory.component';
import { ArrivalComponent } from './FrontDeskModule/arrival/arrival.component';
import { CheckinComponent } from './FrontDeskModule/checkin/checkin.component';
import { TracesComponent } from './FrontDeskModule/traces/traces.component';
import { RoomassignmentComponent } from './FrontDeskModule/roomassignment/roomassignment.component';
import { ManagingqueueComponent } from './FrontDeskModule/managingqueue/managingqueue.component';
import {TracesService} from './FrontDeskModule/traces/traces.service';
import { AdvancedsearchComponent } from './ReservationModule/advancedsearch/advancedsearch.component';
import { FilterdataPipe } from './filterdata.pipe';
import { DateFormatPipe } from './date-format.pipe';
import { MonthpickerComponent } from './monthpicker/monthpicker.component';
import { YearpickerComponent } from './yearpicker/yearpicker.component';
import { MonthComponent } from './month/month.component';

//RoomManagement
import { GuestservicestatusComponent } from './RoomManagementModule/guestservicestatus/guestservicestatus.component';
import { OutoforderserviceComponent } from './RoomManagementModule/outoforderservice/outoforderservice.component';
import { RoommaintainComponent } from './RoomManagementModule/roommaintain/roommaintain.component';

//Cashering
import { BillingComponent } from './CasheringModule/billing/billing.component';
import { CasheringinhouseguestComponent } from './CasheringModule/casheringinhouseguest/casheringinhouseguest.component';
import { ContextmenuModule } from 'ng2-contextmenu';
import { RevenuemanagementComponent } from './RevenueManagementModule/revenuemanagement/revenuemanagement.component';

//BusinessBlockModule
import { BusinessBlockOptionsComponent } from './BusinessBlockModule/business-block-options/business-block-options.component';
import { BusinessBlockSearchComponent } from './BusinessBlockModule/business-block-search/business-block-search.component';
import { RominglistComponent } from './BusinessBlockModule/rominglist/rominglist.component';
import { BusinessCreateBlockComponent } from './BusinessBlockModule/business-create-block/business-create-block.component';
import { InquriprocessComponent } from './BusinessBlockModule/inquriprocess/inquriprocess.component';
<<<<<<< HEAD
// import { MomentModule } from 'angular2-moment';
=======

>>>>>>> a842c3dc4273afa2176e78dbc3244ade0bee23c4




@NgModule({
  declarations: [
    AppComponent,
   
    AppCommonpage,
   routingComponents,
   AdvancedsearchComponent,
   FilterdataPipe,
   DateFormatPipe,
   MonthpickerComponent,
   YearpickerComponent,
   MonthComponent,
   GuestservicestatusComponent,
   OutoforderserviceComponent,
   RoommaintainComponent,
   BillingComponent,
   CasheringinhouseguestComponent,
   RevenuemanagementComponent,
   BusinessBlockOptionsComponent,
   BusinessBlockSearchComponent,
   RominglistComponent,
   BusinessCreateBlockComponent,
   InquriprocessComponent,

   
   
  ],
  imports: [
  
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    HttpModule,
    ReactiveFormsModule,
    Ng2Webstorage,
    AppRoutingModule,
    ContextmenuModule

  ],
  providers: [AppService,IndividualService,ReservationService,ProfileService,ModalService,TracesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
