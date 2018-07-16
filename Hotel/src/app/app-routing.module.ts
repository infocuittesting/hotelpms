import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainscreenComponent } from './mainscreen/mainscreen.component';

//reservation
import { ReservationComponent } from './ReservationModule/reservation/reservation.component';
import { ReservationoptionComponent } from './ReservationModule/reservationoption/reservationoption.component';
import { AdvancedsearchComponent } from './ReservationModule/advancedsearch/advancedsearch.component';
import { SearchandeditreservationComponent } from './ReservationModule/searchandeditreservation/searchandeditreservation.component';

//roommanagement
import { HousekeepingComponent } from './RoomManagementModule/housekeeping/housekeeping.component';
import { QueueroomComponent } from './RoomManagementModule/queueroom/queueroom.component';
import { RoomdiscrepanciesComponent } from './RoomManagementModule/roomdiscrepancies/roomdiscrepancies.component';
import { RoomconditionComponent } from './RoomManagementModule/roomcondition/roomcondition.component';
import { FacilityforecastComponent } from './RoomManagementModule/facilityforecast/facilityforecast.component';
import { RoomhistoryComponent } from './RoomManagementModule/roomhistory/roomhistory.component';
import { GuestservicestatusComponent } from './RoomManagementModule/guestservicestatus/guestservicestatus.component';
import { OutoforderserviceComponent } from './RoomManagementModule/outoforderservice/outoforderservice.component';
import { RoommaintainComponent } from './RoomManagementModule/roommaintain/roommaintain.component';




//profile
import { ModalBasicComponent } from './ProfileModule/modal-basic/modal-basic.component';
import { IndividualprofileComponent } from './ProfileModule/individualprofile/individualprofile.component';
import { ProfileComponent } from './ProfileModule/profile/profile.component';
import { ProfilesearchComponent } from './ProfileModule/profilesearch/profilesearch.component';

//frontdesk
import { ArrivalComponent } from './FrontDeskModule/arrival/arrival.component';
import { CheckinComponent } from './FrontDeskModule/checkin/checkin.component';
import { TracesComponent } from './FrontDeskModule/traces/traces.component';
import { RoomassignmentComponent } from './FrontDeskModule/roomassignment/roomassignment.component';
import { ManagingqueueComponent } from './FrontDeskModule/managingqueue/managingqueue.component';

//Cashering
import { BillingComponent } from './CasheringModule/billing/billing.component';
import { CasheringinhouseguestComponent } from './CasheringModule/casheringinhouseguest/casheringinhouseguest.component';


//RevenueManagement
import { RevenuemanagementComponent } from './RevenueManagementModule/revenuemanagement/revenuemanagement.component';


const routes: Routes = [ { path:'individualprofile', component:IndividualprofileComponent},
{ path:'reservation', component: ReservationComponent },
{ path:'modal-basic', component: ModalBasicComponent },
{ path:'reservationoption', component: ReservationoptionComponent },
{ path:'mains', component: MainscreenComponent },

{ path:'',component:MainscreenComponent},
{path:'advancedsearch',component:AdvancedsearchComponent},

{ path:'profile', component: ProfileComponent },
{ path:'psearch', component: ProfilesearchComponent },
{ path:'searchedit', component: SearchandeditreservationComponent },
{ path:'housekeeping', component: HousekeepingComponent },
{ path:'queueroom', component: QueueroomComponent },
{ path:'roomdisc', component: RoomdiscrepanciesComponent },
{ path:'roomcondn', component: RoomconditionComponent },
{ path:'facility', component: FacilityforecastComponent },
{ path:'roomhistory', component: RoomhistoryComponent },
{ path:'gss', component: GuestservicestatusComponent },
{ path:'oos', component:OutoforderserviceComponent },
{ path:'roomcondn', component: RoomconditionComponent },


{ path:'arrival', component:ArrivalComponent },
{ path:'roomassignment', component: RoomassignmentComponent },
{ path:'checkin', component: CheckinComponent },
{ path:'managingqueue', component: ManagingqueueComponent },
{ path:'trace', component: TracesComponent },

//cashering
{ path:'inhousecashering', component: CasheringinhouseguestComponent },
{ path:'billing', component: BillingComponent },

//revenuemanagement
{ path:'revenue', component:RevenuemanagementComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ],
 
})
export class AppRoutingModule { }
export const routingComponents = [IndividualprofileComponent,ReservationComponent,ModalBasicComponent,ReservationoptionComponent,MainscreenComponent,
  ProfileComponent,ProfilesearchComponent,SearchandeditreservationComponent,HousekeepingComponent,QueueroomComponent,RoomdiscrepanciesComponent,RoomconditionComponent
,FacilityforecastComponent,RoomhistoryComponent,ArrivalComponent,CheckinComponent,TracesComponent,ManagingqueueComponent,RoomassignmentComponent,AdvancedsearchComponent,
GuestservicestatusComponent,OutoforderserviceComponent,RoommaintainComponent,BillingComponent,CasheringinhouseguestComponent,RevenuemanagementComponent]