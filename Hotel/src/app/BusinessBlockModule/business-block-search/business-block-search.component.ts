import { Component, OnInit } from '@angular/core';
import {BusinessBlockSearchService} from './business-block-search.service';
import { SessionStorageService } from "ngx-webstorage";
import { Router } from "@angular/router";


@Component({
  selector: 'app-business-block-search',
  templateUrl: './business-block-search.component.html',
  styleUrls: ['./business-block-search.component.css'],
  providers :[BusinessBlockSearchService]
})
export class BusinessBlockSearchComponent implements OnInit {
  public tableschanges;
  public roomtype=[];
  public statustype=[];
  blockopt=true;
  // public querylist=[];
  public someData=[];
  public mainratecode=[];
  
  public =[];
  blc = true;
  grop = true;
  newblockbut=false;
  public querylist=[];
  constructor(private blocksearch:BusinessBlockSearchService,private route:Router,public session:SessionStorageService) { }
  onSelcat(val){
    console.log(val);
    this.tableschanges = this.someData.filter(x => x.status == val)
  }


  ngOnInit() {
     this. blocksearch.bsearchtable()
    .subscribe((resp: any) => {
      this.tableschanges=resp.ReturnValue;
      this.someData=resp.ReturnValue;
    });

    
    this.blocksearch.blockstatus()
    .subscribe((resp: any) => {
    this.roomtype=resp.ReturnValue;
    // console.log(this.roomtype);
    });
    this.blocksearch.status()
    .subscribe((resp: any) => {
    this.roomtype=resp.ReturnValue;
    //  console.log(this.roomtype);
    });

  }
  // filter the from to to

  filterDatefrmList(startDate,endDate){
    if(startDate!=null && endDate!=null){
      let selectedMembers = this.tableschanges.filter(
        m => new Date(m.start_date) >= new Date(startDate) && new Date(m.start_date) <= new Date(endDate)
        );
          console.log(selectedMembers);
          this.tableschanges = selectedMembers;
    }else {
      this.tableschanges = this.tableschanges;
    }
    
  }

  

public status;
public reinstate;
public Blockid;
public blockname;
public startdate;
public enddate;
public nights;
selectindex=null;

  selectMembersEdit(details,index){

    
    this.selectindex=index;
    this.Blockid=details.block_id;
    this.blockname=details.block_name;
    this.startdate=details.start_date;
    this.enddate=details.end_date;
    this.nights=details.nights;
    if(this.Blockid==details.block_id){
      this.blockopt=false;
      this.blc=false;
      this.grop=false;
      this.newblockbut=true;
    }
    else{
      this.blockopt=true;
      this.blc=true;
      this.grop=true;
      this.newblockbut=false;
    }
    // if(this.Blockid==details.block_id){
    //   this.new=true;
    //   this.profile=true;
    //   this.option=false;
    // }else{
    //   this.new=false;
    //   this.profile=false;
    //   this.option=true;
    // }



// business block valuee...............................................
   this.session.store("blockid",details.block_id.toString());
  this.session.store("blockname",details.block_name.toString());
  this.session.store("startdate",details.start_date.toString());
  this.session.store("enddate",details.end_date.toString());
  this.session.store("nights",details.nights.toString());
  

//  this.session.store("pf_account",details.pf_account);
//  this.session.store("start_date",details.start_date);
//  this.session.store("end_date",details.end_date);
//  this.session.store("origindescription",details.origindescription);
//  this.session.store("status",details.status);
//  this.session.store("marketgroup_description",details.marketgroup_description);
//  this.session.store("block_type",details.block_type);
//  this.session.store("owner",details.owner);
//  this.session.store("sourcedescription",details.sourcedescription);
//  this.session.store("nights",details.nights);
//  this.session.store("block_code",details.block_code);
//  this.session.store("restype_description",details.restype_description);
//  this.session.store("rate_description",details.rate_description);
//  this.session.store("packages",details.packages);
//  this.session.store("cutoff_date",details.cutoff_date);
//  this.session.store("cutoff_days",details.cutoff_days);
//  this.session.store("follow_date",details.follow_date);
//  this.session.store("inventory_control",details.inventory_control);
//  this.session.store("print_rate",details.print_rate);
//  this.session.store("suppress_rate",details.suppress_rate);
//  this.session.store("attenders",details.attenders);
//  this.session.store("info_board",details.info_board);
//  this.session.store("contract_no",details.contract_no);
//  this.session.store("onsite_name",details.onsite_name);
//  this.session.store("followup_date",details.followup_date);
//  this.session.store("payment_description",details.payment_description);
//  this.session.store("commission",details.commission);
//  this.session.store("rooming_list_duedate",details.rooming_list_duedate);
//  this.session.store("arrivaltime",details.arrivaltime);
//  this.session.store("depaturetime",details.depaturetime);
//  this.session.store("meeting_space",details.meeting_space);
//  this.session.store("size_type",details.size_type);
//  this.session.store("attendess",details.attendess);
//  this.session.store("")

}
retrieveroominglist(){
  this.blocksearch.QueryRoomingList()
.subscribe((resp: any) => {
    this.querylist=resp.ReturnValue;
    console.log("working fine",this.querylist);

});
}
// public edlock_id;
// EDIT BUTTON Service
// editblockservice(blockedit){
//   this.edlock_id = blockedit.block_id;
  
// }
}



