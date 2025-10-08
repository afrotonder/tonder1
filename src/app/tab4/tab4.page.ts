import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  repoData: Array<any>;

  constructor() { 

    this.repoData = [
      {
        title: "My Developer Portfolio",
        url: "https://github.com/afrotonder/tonder1",
        img: "",
        desc: ``,
        stack: [

        ]
      },
      {
        title: "",
        url: "",
        img: "",
        desc: ``,
         stack: [
          
        ]
      },
      {
        title: "",
        url: "",
        img: "",
        desc: ``,
         stack: [
          
        ]
      }, 
      {
        title: "",
        url: "",
        img: "",
        desc: ``,
         stack: [
          
        ]
      }, 
      {
        title: "",
        url: "",
        img: "",
        desc: ``,
         stack: [
          
        ]
      },
    ]

  }

  ngOnInit() {
  }

}
