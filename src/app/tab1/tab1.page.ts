import { Component } from '@angular/core';
// import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
// SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  stackParagraph: string;
  otherParagraph: string;
  skillList: Array<any>;
  toolList: Array<any>;
  otherTools: Array<any>;
  miscList: Array<any>;
  filmList: Array<any>;
  artList: Array<any>;

  constructor() {

    this.stackParagraph = ``

    this.otherParagraph = ``


    this.skillList = [{ 'name': 'User focused UX/UI Design', 'icon': 'prism-outline' },
    { 'name': 'Hybrid Mobile App Development', 'icon': 'phone-portrait-outline' },
    { 'name': 'Database Creation/Maintanence', 'icon': 'server-outline' },
    { 'name': 'Script Automation', 'icon': 'code-slash-outline' },
    { 'name': 'PWA Deployments', 'icon': 'cloud-done-outline' },
    { 'name': 'Data Analysis via Reports', 'icon': 'analytics-outline' },
    { 'name': 'UX/UI Design', 'icon': 'pizza-outline' },
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
      { name: "JS (ES6+)", icon: "logo-javascript", desc: '' },
      { name: "HTML", icon: "logo-html5" },
      { name: "CSS/SCSS", icon: "logo-css3" },
      { name: "Angular", icon: "logo-angular" },
      { name: "Ionic", icon: "logo-ionic" },
      { name: "Capacitor", icon: "logo-capacitor" }

    ];


    this.otherTools = [
      { name: "iOS", icon: "logo-apple-appstore", desc: '' },
      { name: "Android", icon: "logo-android" },
      { name: "Linux", icon: "logo-tux" },
      { name: "Moralis Web3 SDK", icon: "construct-outline" },
      { name: "Factoria.app", icon: "chevron-up-outline" },
      { name: "Firebase", icon: "logo-firebase" },
      { name: "GIMP", icon: "image-outline" },

      
    ];

    this.filmList = [
      { name: "", icon: "", title: 'The Texas Chainsaw Massacre (1974)', url: '../../assets/images/tcm.jpg' },
      { name: "", icon: "", title: 'Grandmas Boy (2006)', url: '../../assets/images/grandmasBoy.jpg', },
      // { name: "", icon: "", title: 'As Above, So Below (2014)', url: 'https://m.media-amazon.com/images/M/MV5BMTQzNzg0NDI2MF5BMl5BanBnXkFtZTgwMzgxNzY2MTE@._V1_FMjpg_UX1000_.jpg' },
      { name: "", icon: "", title: 'Hackers (1995)', url: '../../assets/images/hackers.jpg' },

    ];

    this.artList = [
      { src: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/89115994634030338325585499613716342618534582736938746437257675386745633374209",
        icon: "",
        title: 'Charlie #58',
        url: 'https://lh3.googleusercontent.com/rvrXEEwSNTl2DM9ny6Xu4yPDa_vv5ZjFyVKB3fl7L4c-EJPvAX8NSXuMgugOwKwsW3JfuAFkWxe9KvYLd2r9QPbb5cboIdiHq9VSwQ=s0'
      },
      { src: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/89115994634030338325585499613716342618534582736938746437257675427427563601921",
        icon: "",
        title: 'Charlie #95',
        url: 'https://lh3.googleusercontent.com/LQX1m_MUAxx-oLCeW5g9KyzK6omRCzwaytdMMas7bn6e2387aZ-AX_mXHCvzUmgrZGx37F71LGz325WhejfRG3zDyiKCv_Zsy2v5=s0',
      },
      { src: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/89115994634030338325585499613716342618534582736938746437257675397740749651969",
        icon: "",
        title: 'Charlie #68',
        url: 'https://lh3.googleusercontent.com/C2INFCaJ6zjvvOEeKvSEGnBtCVT2e57RRSij3IEaUHkqmsXhezgZCybInJ0RII7OVgUWHqJMTFlWatDTidE-7K7ODCGRL9dXgh0h=s0'
      },
    ];

  }

  ngAfterViewInit() {
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
