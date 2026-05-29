import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
  
})
export class TopMenuComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  openMenu() {
  const menu = document.querySelector('ion-menu');
  menu?.open();
}

closeMenu() {
   const menu = document.querySelector('ion-menu');
  menu?.close();
}

}
