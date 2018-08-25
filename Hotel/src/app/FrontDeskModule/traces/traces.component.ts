import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {TracesService} from './traces.service';
@Component({
  selector: 'app-traces',
  templateUrl: './traces.component.html',
  styleUrls: ['./traces.component.css'],
  providers:[TracesService]
})
export class TracesComponent implements OnInit {

  constructor(private TracesService:TracesService) { }
public gettrace;
checkboxValue;
checkValue;

  ngOnInit() {
    this.TracesService.Trace()
    .subscribe((resp: any) => {
     this.gettrace=resp.ReturnValue;
   });
  }
  newFunction()
  {
    if(this.checkboxValue==true){
      this.checkboxValue= "resolved";
    }
  }
  fuc(){
    if(this.checkValue==true)
    {
      this.checkValue="unresolved"
    }
  }
}
