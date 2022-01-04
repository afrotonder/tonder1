import { Component } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  stackParagraph: string ;
  otherParagraph: string ;
  skillList: Array<any>;
  toolList: Array<any>;
  otherTools: Array<any>;
  miscList: Array<any>;
  filmList: Array<any>;

  constructor() {

    this.stackParagraph = ``

    this.otherParagraph = ``


    this.skillList = [{'name': 'User focused UX/UI Design', 'icon': 'prism-outline'},
                      {'name': 'Hybrid Mobile App Development', 'icon': 'phone-portrait-outline'},
                      {'name': 'Database Creation/Maintanence', 'icon': 'server-outline'},
                      {'name': 'Script Automation', 'icon': 'code-slash-outline'},
                      {'name': 'PWA Deployments', 'icon': 'cloud-done-outline'},
                      {'name': 'Data Analysis via Reports', 'icon': 'analytics-outline'},
                      {'name': 'UX/UI Design', 'icon': 'pizza-outline'},
                      ]



    // this.toolList = [
    //   { name: "JS (ES6+)", source: "../assets/images/js-icon.png"},
    //   { name: "HTML", source: "../assets/images/html-icon.png"},
    //   { name: "CSS/SCSS", source: "../assets/images/css-icon.png" },
    //   { name: "Angular", source: "../assets/images/angular-icon.png" },
    //   // { name: "Ionic", source: "../assets/images/ionic.jpg" },
    //   // { name: "iOS", source: xcode_icon },
    //   { name: "Ionic", source: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ionic-512.png" },
    //   // { name: "Android", source: android_icon },
    //   // { name: "Capacitor", source: "./images/capacitor-icon.png" },
    //   { name: "Capacitor", source: "https://seeklogo.com/images/C/capacitor-logo-DF3634DD70-seeklogo.com.png" },
    // ];

    this.toolList = [
      { name: "JS (ES6+)", icon: "logo-javascript", desc: ''},
      { name: "HTML", icon: "logo-html5"},
      { name: "CSS/SCSS", icon: "logo-css3" },
      { name: "Angular", icon: "logo-angular" },
      { name: "Ionic", icon: "logo-ionic" },
      { name: "Capacitor", icon: "logo-capacitor" },
    ];


    this.otherTools = [
      { name: "iOS", icon: "logo-apple-appstore", desc: ''},
      { name: "Android", icon: "logo-android"},
      { name: "Linux", icon: "logo-tux"},
    ];

    this.filmList = [
      { name: "", icon: "", title: 'The Texas Chainsaw Massacre (1974)', url: 'https://i.pinimg.com/originals/d3/7c/b1/d37cb1bb6eaca43dfe4dff026fac8a3d.jpg'},
      { name: "", icon: "", title: 'Grandmas Boy (2006)', url: 'https://m.media-amazon.com/images/I/51tuHl2opSL._AC_.jpg',},
      { name: "", icon: "", title: 'As Above, So Below (2014)', url: 'https://m.media-amazon.com/images/M/MV5BMTQzNzg0NDI2MF5BMl5BanBnXkFtZTgwMzgxNzY2MTE@._V1_FMjpg_UX1000_.jpg'},
    ];



  }

  ngAfterViewInit()	{
    // this.setTools()
  }

  setTools() {
    for (let tool of this.toolList) {

      let elem = document.createElement("div");

      elem.setAttribute("class", "tool-icons");
      elem.setAttribute("style", "width:50px;");

      // elem.setAttribute("target", "_blank");

      elem.innerHTML =
        `<img src=` +
        tool.source +
        `  title=` +
        tool.name +
        ` alt=` +
        tool.name +
        `/>`;

      document.getElementById("tools").appendChild(elem);
    }
  }

}
