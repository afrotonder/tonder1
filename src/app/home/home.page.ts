import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  animations: [
    trigger('slideUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HomePage implements OnInit {
  animate: boolean;

  constructor() {

        this.animate = false;

   }

  ngOnInit() {
  }

   ionViewDidEnter() {
    this.animate = false;
    setTimeout(() => (this.animate = true));
  }

}
