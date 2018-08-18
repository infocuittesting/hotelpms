
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
  hotkeyf4: Hotkey | Hotkey[];
  hotkeyCtrlRight: Hotkey | Hotkey[];
  hotkeyCtrlalt : Hotkey | Hotkey[];
  hotkeyCtrl : Hotkey | Hotkey[];
  hotkeyctrlh : Hotkey | Hotkey[];
  hotkeycontrlaltd : Hotkey | Hotkey[];
  hotkeyshiftf6 : Hotkey | Hotkey[];
  
  
  constructor(private AppService:AppService,private route:Router,public hotkeyservice:HotkeysService) {
    this.hotkeyf4 = hotkeyservice.add(new Hotkey('f4', this.f4Pressed));
    console.log("success to call the function")
    this.hotkeyCtrlRight = hotkeyservice.add(new Hotkey('ctrl+right', this.ctrlRightPressed));
    this.hotkeyCtrlalt = hotkeyservice.add(new Hotkey('ctrl+alt', this.ctrlAltPressed));
    this.hotkeyCtrl = hotkeyservice.add(new Hotkey('ctrl+l', this.ctrloPressed));
    this.hotkeyctrlh = hotkeyservice.add(new Hotkey('ctrl+alt+h', this.ctrlhPressed));
    this.hotkeycontrlaltd = hotkeyservice.add(new Hotkey('ctrl+alt+d', this.ctrlaltdPressed));
    this.hotkeyshiftf6 = hotkeyservice.add(new Hotkey('shift+f6', this.shiftf6Pressed));

   }
// new reservation
   f4Pressed = (event: KeyboardEvent, combo: string): boolean => {
    this.title = 'f4 pressed';
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
// housekeeping search
ctrlhPressed = (event: KeyboardEvent, combo: string): boolean => {
    this.title = 'ctrl alt h pressed';
    this.route.navigate(['housekeeping/']);
    console.log("control housekeeping search is worked")
    return true;
  }
// dash board
  ctrlaltdPressed = (event: KeyboardEvent, combo: string): boolean => {
    this.title = 'ctrl alt d pressed';
    this.route.navigate(['mains/']);
    console.log("control dashboard  is worked")
    return true;
  }
// quick block
  shiftf6Pressed = (event: KeyboardEvent, combo: string): boolean => {
    this.title = 'shift f6 pressed';
    this.route.navigate(['bcreate/']);
    console.log("control quick block  is worked")
    return true;
  }

  ngOnDestroy() {
    this.hotkeyservice.remove(this.hotkeyf4);
    this.hotkeyservice.remove(this.hotkeyCtrlRight);
    this.hotkeyservice.remove(this.hotkeyCtrlalt);
    this.hotkeyservice.remove(this.hotkeyCtrl);
    this.hotkeyservice.remove(this.hotkeyctrlh);
    this.hotkeyservice.remove(this.hotkeycontrlaltd);
    this.hotkeyservice.remove(this.hotkeyshiftf6);
  }


}
