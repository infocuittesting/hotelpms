import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from "ngx-webstorage";
import { Router } from "@angular/router";
// import { ContextMenuService } from 'angular2-contextmenu/src/contextMenu.service';
// import { ContextMenuComponent } from 'angular2-contextmenu/src/contextMenu.component';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  player;

  public items = [
    { Date: '16-04-2018', Code: 4121,Description:'parking',Amount:500 },
    { Date: '16-04-2018', Code: 4121,Description:'parking',Amount:500 },
    { Date: '16-04-2018', Code: 4121,Description:'parking',Amount:500 },
    { Date: '16-04-2018', Code: 4121,Description:'parking',Amount:500 },
  ];
  // public menuOptions = [
  //   {
  //     html: () => 'Buy',
  //     click: (item, $event) => {
  //       this.player.gold -= item.cost;
  //     },
  //   },
  //   {
  //     html: (): string => 'Sell',
  //     click: (item, $event): void => {
  //       this.player.gold += item.cost;
  //     },
  //     enabled: (item): boolean => {
  //       return item.name.match(/Iron/) == null;
  //     }
  //   },
  //   {
  //     html: () => 'Alert Cost',
  //     click: (item) => {
  //       alert(item.cost);
  //     },
  //   },
  //   {
  //     html: () => 'Alert Player Gold',
  //     click: (item) => {
  //       alert(this.player.gold);
  //     },
  //   }
  // ];

   constructor( public session:SessionStorageService,private route:Router) { }
  // public onContextMenu($event: Event, item: any): void {
  //   this.contextMenuService.show.next({
  //     actions: this.menuOptions,
  //     event: $event,
  //     item: item,
  //   });
  //   $event.preventDefault();
  // }
  ngOnInit() {
}

selectindex=null;
selectMembersEdit(details,index){
this.selectindex=index;
this.session.store("id",details.Date);


}

}
