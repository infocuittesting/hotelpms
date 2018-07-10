import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Route } from "@angular/router";

@Component({
  selector: 'app-casheringinhouseguest',
  templateUrl: './casheringinhouseguest.component.html',
  styleUrls: ['./casheringinhouseguest.component.css'],
  
})
export class CasheringinhouseguestComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }
  showdiv="9000";
  selectoption(flag){
    console.log(flag);
    this.showdiv=flag;
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

}
