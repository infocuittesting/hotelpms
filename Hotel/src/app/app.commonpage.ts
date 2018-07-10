
import { Component } from '@angular/core';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import {Http} from "@angular/http";
import { AppService } from "./app.service";
import { ModalService } from './ProfileModule/modal-basic/modal.service';
@Component({
  selector: 'my',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ModalService]
})
export class AppCommonpage {

 
  constructor(private ModalService:ModalService) { }
// user=[];
 
//   user33={};
//   submit(inputt):void {
//     console.log(inputt);
//       this.AppService.postandgetdata (inputt.username,inputt.password)
//       .subscribe( user333 => {
//         this.user33 = user333;
//     //   console.log("user33  "+ user333);   
//       //  alert("user33  "+ user333);    
//       },
//                  //     error => this.errorMessage = <any>error
//                      // function(response) { console.log("Success Response" + response)}
//                       );  
      
//      }


    

 
}
