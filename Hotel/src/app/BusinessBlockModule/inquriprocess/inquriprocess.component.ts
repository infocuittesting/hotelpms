import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { InquriprocessserviceService} from './inquriprocessservice.service'


@Component({
  selector: 'app-inquriprocess',
  templateUrl: './inquriprocess.component.html',
  styleUrls: ['./inquriprocess.component.css'],
  providers:[InquriprocessserviceService]
})
export class InquriprocessComponent implements OnInit {

  constructor(private inquiry:InquriprocessserviceService) { }

public roomtype=[];
  user:any={};
  //date difference 
  arriveDepartureDateFun(arrDate,depDate){
    if(arrDate!=null && depDate!=null){
  const daydiff = moment(arrDate).diff(moment(depDate), "days");
  this.user.RES_Nights=Math.abs(daydiff);
    }
  }

  ngOnInit() {
    // RoomtypeDroupDown
    this.inquiry.roomtypedroupdown()
.subscribe((resp: any) => {
this.roomtype=resp.ReturnValue;

});

this.inquiry.roomtypedroupdown1()
.subscribe((resp: any) => {
this.roomtype=resp.ReturnValue;
console.log(this.roomtype);
});

this.inquiry.roomtypedroupdown2()
.subscribe((resp: any) => {
this.roomtype=resp.ReturnValue;
console.log(this.roomtype);
});
  }


  
}
