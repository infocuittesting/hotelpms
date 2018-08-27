import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {PackagesService} from './packages.service';
import { SessionStorageService } from "ngx-webstorage";

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css'],
  providers:[PackagesService]
})
export class PackagesComponent implements OnInit {
  public pack=[];
  public sort=[];
  public delpack;
  constructor(private PackagesService:PackagesService,private route:Router,public session:SessionStorageService ) { this.pack=this.sort;}
  

  onSelect(val){
    console.log(val);
    this.pack = this.sort.filter(x => x.package_code == val)
  }
  clean(){
    this.PackagesService.Packages()
    .subscribe((resp: any) => {
     this.pack=resp.Return_values;
     this.sort=resp.Return_values;
    });
  }
  ngOnInit() {
    this.PackagesService.Packages()
    .subscribe((resp: any) => {
     this.pack=resp.Return_values;
     this.sort=resp.Return_values;
   });
  }
  id;
  selectindex=null;
  selectMembersEdit(details,index){
  this.selectindex=index;
  this.id=details.package_code_id;
this.session.store("id",details.package_code_id);
  }
  delete(){
    let body={
      "package_code_id":this.id
    }
    this.PackagesService. delePack(body)
    .subscribe((resp: any) => {
     this.delpack=resp.ReturnCode;
    if(this.delpack=="RDS"){
      this.delpack="The Package is Deleted"
    }
   });
  }
}
