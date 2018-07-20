import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Route } from "@angular/router";
import { SessionStorageService } from "ngx-webstorage";
import { CasheringinhouseguestService} from './casheringinhouseguest.service';

@Component({
  selector: 'app-casheringinhouseguest',
  templateUrl: './casheringinhouseguest.component.html',
  styleUrls: ['./casheringinhouseguest.component.css'],
  providers:[ CasheringinhouseguestService],
  
})
export class CasheringinhouseguestComponent implements OnInit {

  public checkout:any={};
  list:any = [
    {
      id: 1,
      label: 'one'
    },
    {
      id: 2,
      label: 'two'
    },
    {
      id: 3,
      label: 'three'
    },
    {
      id: 4,
      label: 'four'
    },
  ];

  public items = [
    { Room: '101', Name: 'Anderson',Alt_name:'',Arrival:'20-05-2018',Departure:'21-05-2018',Balance:500,Status:'CHECKED IN',Company:'Metro Design' },
    { Room: '102', Name: 'Bala',Alt_name:'',Arrival:'20-05-2018',Departure:'21-05-2018',Balance:500,Status:'CHECKED IN',Company:'Metro Design'},
    { Room: '103', Name: 'Jeevitha',Alt_name:'',Arrival:'20-05-2018',Departure:'21-05-2018',Balance:500,Status:'CHECKED IN',Company:'Metro Design'},
    {  Room: '104', Name: 'Priya',Alt_name:'',Arrival:'20-05-2018',Departure:'21-05-2018',Balance:500,Status:'CHECKED IN',Company:'Metro Design' },
    {  Room: '105', Name: 'peter',Alt_name:'',Arrival:'20-05-2018',Departure:'21-05-2018',Balance:500,Status:'CHECKED IN',Company:'Metro Design' },
    {  Room: '106', Name: 'prince',Alt_name:'',Arrival:'20-05-2018',Departure:'21-05-2018',Balance:500,Status:'CHECKED IN',Company:'Metro Design' },
   
    {  Room: '16-04-2018', Name: 'Anderson',Alt_name:'',Arrival:'20-05-2018',Departure:'21-05-2018',Balance:500,Status:'CHECKED IN',Company:'Metro Design' },
  ];
  constructor(private cashinservice: CasheringinhouseguestService, public session:SessionStorageService,private route:Router) { }
public money=[];

  ngOnInit() {

    this.cashinservice.currencydropdown()
    .subscribe((resp: any) => {

     this.money=resp.Return;
     console.log(this.money);
   });



  }
  showdiv="9000";
  selectoption(flag){
    console.log(flag);
    this.showdiv=flag;
  }

  selectindex=null;
selectMembersEdit(details,index){
this.selectindex=index;
this.session.store("id",details.Room);
this.session.store("name",details.Name);

}

  private month:any;
private year:any;
onMonthChange(month:any){
  this.month = month.toString();
}
onYearChange(year:any){
  this.year = year.toString();
}
private creditcard_expiry:any;
getcreditexpiry(){
    this.creditcard_expiry = this.month+"/"+this.year;
    console.log(this.creditcard_expiry);
}

checkoutpost(arg1){
console.log(arg1);
}

}
