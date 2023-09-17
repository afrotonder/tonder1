import { Component, Pipe, PipeTransform} from '@angular/core';
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

  myHobbiesList: Array<any>;

  constructor() {

    this.stackParagraph = ``

    this.otherParagraph = ``

    this.myHobbiesList = [
      { 
        name: "", 
        icon: "", 
        title: 'Favorite movies', 
        description: "Heres a list of movies I've watched over 6 times each.", 
        url: '../../assets/images/movies.png',
        isImage: true,
        isVideo: false
       },
       { 
        name: "", 
        icon: "", 
        title: 'Jumping Rope', 
        description: "Jumping rope keeps me disciplined, energized & mega pumped.", 
        url: 'https://youtube.com/embed/opPiQW70hXM?feature=share',
        isImage: false,
        isVideo: true
       },
       { 
        name: "", 
        icon: "", 
        title: 'Video Games', 
        description: "Throughout the years I discovered I loved finding and documenting glitches in videos games. Here's an example!", 
        url: 'https://www.youtube.com/embed/kg_zZMPwOb0?si=aqOtfJIjnU1szyrl',
        isImage: false,
        isVideo: false

       },
    ]

    this.skillList = [{ 'name': 'User focused UX/UI Design', 'icon': 'prism-outline' },
    { 'name': 'Hybrid Mobile App Development', 'icon': 'phone-portrait-outline' },
    { 'name': 'Database Creation/Maintanence', 'icon': 'server-outline' },
    { 'name': 'Script Automation', 'icon': 'code-slash-outline' },
    { 'name': 'PWA Deployments', 'icon': 'cloud-done-outline' },
    { 'name': 'Data Analysis via Reports', 'icon': 'analytics-outline' },
    { 'name': 'UX/UI Design', 'icon': 'pizza-outline' },
    ]

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
      { name: "ThirdWeb SDK", icon: "construct-outline" },
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
      { src: "https://opensea.io/collection/karmakameleons",
        icon: "",
        title: 'Karma Kameleons Genesis',
        url: '../../assets/images/karma.gif'
      },
      { src: "https://wagmiballznft.web.app/",
        icon: "",
        title: 'WagmiballzNFT',
        url: '../../assets/images/wagmiballz.gif',
      },
      { src: "https://cyberjiba.io",
        icon: "",
        title: 'CyberJibaNFT CyberPava Graffiti',
        url: '../../assets/images/cyberpava.jpg'
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
