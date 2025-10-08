import { Component, ViewEncapsulation } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class AppComponent {

  uname: string;
  lastNames: string;
   sm_uname: string;
   handle: string;
   title: string;
   titles: Array<any>;
   slogan: string;
   job1: string;
   job2: string;
   job3: string
   footer: string;
   contactIcons: Array<any>;
   jobList: Array<any>;
   highlightProjects: Array<any>;

  constructor() {

    this.uname = "Omar";
    this.lastNames = "Rosado Ramírez"
    this.sm_uname = "O. Rosado Ramírez";
    this.handle = "'afrotonder'";
    this.title = ""
    this.slogan = "Full-time problem solver";
    this.job1 = "TuChequera.com";
    this.job2 = "APS Health";
    this.footer = `afrotonder © ${new Date().getFullYear().toString()}`;

    this.titles = [
      "🧑🏾‍💻Full Stack Developer 📱Mobile Developer",
      "📿Angular Evangelist 🪙Web3 Consultant",
    ]

    this.jobList = [
       {
        title: "⚡ Software Developer",
        employer: "APS Health",
        url: "https://apshealth.com/"
      },
      {
        title: "⚡ Full Stack Developer",
        employer: "TuChequera.com",
        url: "https://tuchequera.com/"
      },
     
      // {
      //   title: "Web3 Consultant",
      //   employer: "Alebrijes, Alebrijes!",
      //   url: "alebrijes-alebrijes.com"
      // },
    ]


    this.highlightProjects = [
      {
        title: "TuChequera Móvil",
        url: "",
        urls: [
               "https://apps.apple.com/do/app/tuchequera-m%C3%B3vil/id1141118902?l=en-GB",
               "https://play.google.com/store/apps/details?id=com.ycspr.tuchequera&hl=es_PR&pli=1"
              ],
      },
       {
        title: "Manantial Blanco Marketplace",
        url: "https://marketplace.manantialblanco.com/home",
        urls: [],
      },
      // {
      //   title: "WavBlock",
      //   url: "https://marketplace.manantialblanco.com/home",
      //   urls: [],
      // },
    ]

    this.contactIcons = [
      {
        name: "lin",
        url: "https://www.linkedin.com/in/afrotonder/",
        title: "afrotonder@LinkedIn",
        alt: "LinkedIn Icon",
        source: "../assets/images/in-icon.png"
      },
      {
        name: "gmail",
        url: "mailto:o.rosado18@gmail.com",
        title: "o.rosado18@gmail.com",
        alt: "Gmail Icon",
        source: "../assets/images/gmail.png"
      },
      {
        name: "github",
        url: "https://github.com/afrotonder",
        title: "afrotonder@GitHub",
        alt: "Github Octocat Logo",
        source: "../assets/images/github.png"
      },
    

      {
        name: "Medium",
        url: "https://medium.com/@afrotonder",
        title: "afrotonder@Medium",
        alt: "Medium Icon",
        source: "../assets/images/medium.png"
      },

      {
        name: "linktree",
        url: "https://linktr.ee/afrotonder",
        title: "afrotonder@LinkTree",
        alt: "LinkTree Icon",
        source: "../assets/images/linktree.png" 
      },
      // {
      //   name: "chess",
      //   url: "https://www.chess.com/member/afrotonder",
      //   title: "afrotonder@Chess.com",
      //   alt: "Chess.com Icon",
      //   source: "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpmeXx6V.png"
      // },
      // {
      //   name: "os",
      //   url: "https://opensea.io/afrotonder",
      //   title: "afrotonder@OpenSea.io",
      //   alt: "OpenSea Icon",
      //   source: "https://opensea.io/static/images/logos/opensea.svg"
      // },
      // {
      //   name: "twt",
      //   url: "https://twitter.com/afrotonder",
      //   title: "afrotonder@Twitter",
      //   alt: "Twitter Icon",
      //   source: "https://icons-for-free.com/iconfiles/png/512/identity+logo+new+twitter+icon-1320161424699291885.png"
      // },
      
    ];

  }

}




