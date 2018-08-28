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
import { FoliohistoryComponent } from './CasheringModule/foliohistory/foliohistory.component';
import { CasheringinhouseguestComponent } from './CasheringModule/casheringinhouseguest/casheringinhouseguest.component';


//RevenueManagement
import { RevenuemanagementComponent } from './RevenueManagementModule/revenuemanagement/revenuemanagement.component';
import {RevenueRateCodeComponent} from './RevenueManagementModule/revenue-rate-code/revenue-rate-code.component';
import { EditRevenueManagementComponent } from './RevenueManagementModule/edit-revenue-management/edit-revenue-management.component';


//BusinessBlockModule
import { BusinessBlockOptionsComponent } from './BusinessBlockModule/business-block-options/business-block-options.component';
import { BusinessBlockSearchComponent } from './BusinessBlockModule/business-block-search/business-block-search.component';
import { RominglistComponent } from './BusinessBlockModule/rominglist/rominglist.component';
import { BusinessCreateBlockComponent } from './BusinessBlockModule/business-create-block/business-create-block.component';
import { InquriprocessComponent } from './BusinessBlockModule/inquriprocess/inquriprocess.component'
import { BusinessBlockGridCurrentComponent } from './BusinessBlockModule/business-block-grid-current/business-block-grid-current.component';
import { ReservationsListComponent } from './BusinessBlockModule/reservations-list/reservations-list.component';
import { GroupOptionsComponent } from './BusinessBlockModule/group-options/group-options.component';
import { BlockRangeSettingComponent } from './BusinessBlockModule/block-range-setting/block-range-setting.component';
import { EditBusinessBlockComponent } from './BusinessBlockModule/edit-business-block/edit-business-block.component';
import { QueryReservationListComponent} from './BusinessBlockModule/query-reservation-list/query-reservation-list.component'

//Packages Module
import { PackagesComponent } from './PackagesModule/packages/packages.component'; 
import { PackagesnewComponent } from './PackagesModule/packagesnew/packagesnew.component'; 


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
{ path:'roommaintenance',component:RoommaintainComponent},

{ path:'arrival', component:ArrivalComponent },
{ path:'roomassignment', component: RoomassignmentComponent },
{ path:'checkin', component: CheckinComponent },
{ path:'managingqueue', component: ManagingqueueComponent },
{ path:'trace', component: TracesComponent },

//cashering
{ path:'inhousecashering', component: CasheringinhouseguestComponent },
{ path:'billing', component: BillingComponent },
{ path:'foliohis', component: FoliohistoryComponent },

//revenuemanagement
{ path:'revenue', component:RevenuemanagementComponent},
{ path:'revenueratecode', component:RevenueRateCodeComponent},
{ path:'ratetier', component:EditRevenueManagementComponent},

//BusinessBLockSearch
{path:'business',component:BusinessBlockSearchComponent},
{path:'inquiri',component:InquriprocessComponent},
{path:'bcreate',component:BusinessCreateBlockComponent},
{path:"options",component:BusinessBlockOptionsComponent},
{path:"rominglist",component:RominglistComponent},
{path:"grid",component:BusinessBlockGridCurrentComponent},
{path:"reservationlist",component:ReservationsListComponent},
{path:"grouplist",component:GroupOptionsComponent},
{path:"blockrange",component:BlockRangeSettingComponent},
{path:"editblock",component:EditBusinessBlockComponent},
{path:"queryreservation",component:QueryReservationListComponent},
//packages Module
{path:"packages",component:PackagesComponent},
{path:"packagecodenew",component:PackagesnewComponent},
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
GuestservicestatusComponent,OutoforderserviceComponent,RoommaintainComponent,BillingComponent,CasheringinhouseguestComponent,RevenuemanagementComponent,
BusinessBlockSearchComponent,InquriprocessComponent,BusinessCreateBlockComponent,BusinessBlockOptionsComponent,RominglistComponent,BusinessBlockGridCurrentComponent,ReservationsListComponent,GroupOptionsComponent,BlockRangeSettingComponent,RevenueRateCodeComponent,EditRevenueManagementComponent,PackagesComponent,PackagesnewComponent,FoliohistoryComponent]