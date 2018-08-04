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
  public tableschanges={};
  public roomtype=[];
  blockopt=true;
  blc = true;
  newblockbut=false;
  constructor(private blocksearch:BusinessBlockSearchService,private route:Router,public session:SessionStorageService) { }

  ngOnInit() {
     this. blocksearch.bsearchtable()
    .subscribe((resp: any) => {
      this.tableschanges=resp.ReturnValue;
    });
   
    
    this.blocksearch.blockstatus()
    .subscribe((resp: any) => {
    this.roomtype=resp.ReturnValue;
    // console.log(this.roomtype);
    });

  }

  


public reinstate;
public Blockid;
public blockname;
selectindex=null;

  selectMembersEdit(details,index){

    
    this.selectindex=index;
    this.Blockid=details.block_id;
    this.blockname=details.block_name;
    if(this.Blockid==details.block_id){
      this.blockopt=false;
      this.blc=false;
      this.newblockbut=true;
    }
    else{
      this.blockopt=true;
      this.blc=true;
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




  this.session.store("blockid",details.block_id.toString());
this.session.store("blockname",details.block_name.toString());
}
}
