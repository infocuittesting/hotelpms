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

  constructor(private blocksearch:BusinessBlockSearchService,private route:Router,public session:SessionStorageService) { }

  ngOnInit() {
     this. blocksearch.bsearchtable()
    .subscribe((resp: any) => {
      this.tableschanges=resp.ReturnValue;
    });
    
  }
  selectindex=null;
  selectMembersEdit(details,index){
  this.selectindex=index;
  this.session.store("id",details.block_id.toString());
  
}
}
