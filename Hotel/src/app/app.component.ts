
import { Component,OnDestroy } from '@angular/core';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import {Http} from "@angular/http";
import { AppService } from "./app.service";
import { Router} from "@angular/router";
// import {HotkeyModule} from 'angular2-hotkeys';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';
//import { IndividualprofileComponent } from './individualprofile/individualprofile.component';



@Component({
  selector: 'my-apps',
  templateUrl:'./app.component.html',
styleUrls: ['./app.component.css'],
  providers:[AppService]
})
export class AppComponent implements OnDestroy{
  title = 'Highlight Table Row on Hover';
  hotkeyCtrlLeft: Hotkey | Hotkey[];
  hotkeyCtrlRight: Hotkey | Hotkey[];
  hotkeyCtrlalt : Hotkey | Hotkey[];
  hotkeyCtrl : Hotkey | Hotkey[];
  hotkeyfunction3 : Hotkey | Hotkey[];
  
  constructor(private AppService:AppService,private route:Router,public hotkeyservice:HotkeysService) {
    this.hotkeyCtrlLeft = hotkeyservice.add(new Hotkey('ctrl+left', this.ctrlLeftPressed));
    console.log("success to call the function")
    this.hotkeyCtrlLeft = hotkeyservice.add(new Hotkey('ctrl+right', this.ctrlRightPressed));
    this.hotkeyCtrlRight = hotkeyservice.add(new Hotkey('ctrl+alt', this.ctrlAltPressed));
    this.hotkeyCtrl = hotkeyservice.add(new Hotkey('ctrl+l', this.ctrloPressed));
    this.hotkeyfunction3 = hotkeyservice.add(new Hotkey('f3', this.f3Pressed));

   }

   ctrlLeftPressed = (event: KeyboardEvent, combo: string): boolean => {
    this.title = 'ctrl+left pressed';
    this.route.navigate(['reservation/']);
    console.log("control left is worked")
    return true;
    
  }

  ctrlRightPressed = (event: KeyboardEvent, combo: string): boolean => {
    this.title = 'ctrl+right pressed';
    console.log("control right is worked")
    return true;
  }

  ctrlAltPressed = (event: KeyboardEvent, combo: string): boolean => {
    this.title = 'ctrl+alt pressed';
    console.log("control alt is worked")
    return true;
  }

  ctrloPressed = (event: KeyboardEvent, combo: string): boolean => {
    this.title = 'ctrl+l pressed';
    console.log("control daisy is worked")
    return true;
  }

  f3Pressed = (event: KeyboardEvent, combo: string): boolean => {
    this.title = 'f3 pressed';
    this.route.navigate(['housekeeping/']);
    console.log("control housekeeping search is worked")
    return true;
  }

  ngOnDestroy() {
    this.hotkeyservice.remove(this.hotkeyCtrlLeft);
    this.hotkeyservice.remove(this.hotkeyCtrlRight);
    this.hotkeyservice.remove(this.hotkeyCtrlalt);
    this.hotkeyservice.remove(this.hotkeyCtrl);
    this.hotkeyservice.remove(this.hotkeyfunction3);
  }


}
