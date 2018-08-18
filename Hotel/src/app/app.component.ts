
import { Component,OnDestroy } from '@angular/core';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import {Http} from "@angular/http";
import { AppService } from "./app.service";
import { Router} from "@angular/router";
// import {HotkeyModule} from 'angular2-hotkeys';

//import { IndividualprofileComponent } from './individualprofile/individualprofile.component';



@Component({
  selector: 'my-apps',
  templateUrl:'./app.component.html',
styleUrls: ['./app.component.css'],
  providers:[AppService]
})
export class AppComponent {
 

   }




