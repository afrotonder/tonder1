import { Component, Pipe, PipeTransform } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
   animations: [
    trigger('slideUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})

export class Tab1Page {
  animate: boolean;
  stackParagraph: string;
  otherParagraph: string;
  skillList: Array<any>;
  skillList2: Array<any>;
  toolList: Array<any>;
  otherTools: Array<any>;
  miscList: Array<any>;
  filmList: Array<any>;
  artList: Array<any>;
  meadiaToolList: Array<any>;
  otherDevTools: Array<any>;

  offerDescription: Array<string>;

  constructor() {

    this.animate = false;

    this.stackParagraph = ``

    this.otherParagraph = ``

    this.offerDescription = [
      `Hello! My name is Omar Rosado Ramirez, also known as Afrotonder or Afro, and I am a Senior Frontend Developer with a specialty in Angular-Ionic-Capacitor projects, focusing on building
       scalable hybrid applications that run both on the web & mobile devices. I also specialize in UI & brand design, creating a tight correlation between user functions and brand designs
       that perfectly captures a brands message and reflects it bespokely in product utility.`,
      `Currently, I'm a software developer at APS Health, where I'm tasked with maintaining a frontend/backend PHP application & and a mobile facing React Native application.
       I also work as a full stack developer for TuChequera, a local Puerto Rican accounting firm with a webapp & mobile app of the same name. In this role I focus on maintaining
       the TuChequera Movil android & iOS application as well as its backend API.`,
      `If I'm not working, you can probably catch me sim racing on Gran Turismo 7, watching horror movies or anime with my wife & cats, or creating content for my YouTube channels.`
    ]

    this.skillList = [
      { 'name': 'User focused UX/UI Design', 'icon': 'prism-outline' },
      { 'name': 'Hybrid Mobile App Development', 'icon': 'phone-portrait-outline' },
      { 'name': 'Brand Design', 'icon': 'sparkles-outline' },
      { 'name': 'Native App Store Deployments', 'icon': 'apps-outline' },
      { 'name': 'PWA Deployments', 'icon': 'cloud-done-outline' },

    ]

    this.skillList2 = [
      { 'name': 'Optimal Tooling Strategies', 'icon': 'hammer-outline' },
      { 'name': 'SEO Management', 'icon': 'bar-chart-outline' },
      { 'name': 'Database Creation/Maintanence', 'icon': 'server-outline' },
      { 'name': 'Script Automation', 'icon': 'code-slash-outline' },

    ]

    this.toolList = [
      { name: "JS/TypeScript", icon: "logo-javascript", desc: '' },
      { name: "HTML", icon: "logo-html5" },
      { name: "CSS/SCSS", icon: "logo-css3" },
      { name: "Angular", icon: "logo-angular" },
      { name: "Ionic", icon: "logo-ionic" },
      { name: "Capacitor", icon: "logo-capacitor" },
      { name: "VS Code", icon: "code-slash-outline" }

    ];

    this.otherDevTools = [
      { name: "iOS", icon: "logo-apple-appstore", desc: '' },
      { name: "Android", icon: "logo-android" },
      { name: "Linux", icon: "logo-tux" },
      { name: "ThirdWeb SDK", icon: "construct-outline" },
      { name: "Firebase", icon: "logo-firebase" },
      { name: "Coudflare", icon: "cloud-outline" },
      { name: "React", icon: "logo-react" },
      { name: "Node", icon: "logo-nodejs" },
      { name: "Git", icon: "logo-github" },


    ];

    this.otherTools = [
      { name: "Google Cloud SDK", icon: "logo-google" },
      { name: "VMWare Workstation", icon: "laptop-outline" },
      { name: "Azure DevOps", icon: "stats-chart-outline" },
      { name: "HashLips Image Generator", icon: "images-outline" },
      { name: "SEMRush", icon: "stats-chart-outline" },

    ];

    this.meadiaToolList = [
      { name: "GIMP Image Editor", icon: "image-outline" },
      { name: "WonderShare Filmora", icon: "videocam-outline" },
      { name: "Canva", icon: "color-palette-outline" },
      { name: "InkScape", icon: "color-fill-outline" },

    ]; 

    this.filmList = [
      { name: "", icon: "", title: 'The Texas Chainsaw Massacre (1974)', url: '../../assets/images/tcm.jpg' },
      { name: "", icon: "", title: 'Grandmas Boy (2006)', url: '../../assets/images/grandmasBoy.jpg', },
      // { name: "", icon: "", title: 'As Above, So Below (2014)', url: 'https://m.media-amazon.com/images/M/MV5BMTQzNzg0NDI2MF5BMl5BanBnXkFtZTgwMzgxNzY2MTE@._V1_FMjpg_UX1000_.jpg' },
      { name: "", icon: "", title: 'Hackers (1995)', url: '../../assets/images/hackers.jpg' },

    ];

    this.artList = [
      {
        src: "https://opensea.io/collection/karmakameleons",
        icon: "",
        title: 'Karma Kameleons Genesis',
        url: '../../assets/images/karma.gif'
      },
      {
        src: "https://wagmiballznft.web.app/",
        icon: "",
        title: 'WagmiballzNFT',
        url: '../../assets/images/wagmiballz.gif',
      },
      {
        src: "https://cyberjiba.io",
        icon: "",
        title: 'CyberJibaNFT CyberPava Graffiti',
        url: '../../assets/images/cyberpava.jpg'
      },
    ];

  }

  ionViewDidEnter() {
    this.animate = false;
    setTimeout(() => (this.animate = true));
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
