import { Component, OnInit } from '@angular/core';
import {RominglistService} from './rominglist.service';
import { Router } from "@angular/router";
import { SessionStorageService } from "ngx-webstorage";

@Component({
  selector: 'app-rominglist',
  templateUrl: './rominglist.component.html',
  styleUrls: ['./rominglist.component.css'],
  providers: [RominglistService]
})
export class RominglistComponent implements OnInit {
public searchandedit:any=[];
public searched=[];
  constructor(private pService:RominglistService) { }

  ngOnInit() {

  
  }
  private extractData(res: Response) {
    //alert('hai20')
    console.log('res========---===='+res);
    let body = res.json();
    //alert(JSON.stringify(body))
    console.log(JSON.stringify(body));
        return body;
        
    }
}
