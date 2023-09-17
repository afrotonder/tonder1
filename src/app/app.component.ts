import { Component, ViewEncapsulation } from '@angular/core';
import { initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment.prod';
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
   slogan: string;
   job1: string;
   job2: string;
   footer: string;

  constructor() {

    this.uname = "Omar";
    this.lastNames = "Rosado Ramírez"
    this.sm_uname = "O. Rosado Ramírez";
    this.handle = "'afrotonder'";
    this.title = "Full Stack Developer ⚡ Mobile Developer"
    this.slogan = "Full-time problem solver";
    this.job1 = "TuChequera.com";
    this.job2 = "APS Health";
    this.footer = `afrotonder © ${new Date().getFullYear().toString()}`;
    ;

  }

  ngAfterViewInit()	{
    this.init()
  }

  init() {
    // ---------- SET AVATAR DATA ----------
const sm_uname = "O. Rosado Ramírez";
const handle = "afrotonder";
const slogan = "Full-time problem solver";
const job1 = "TuChequera.com";
const job2 = "APS Health";
// const job3 = "Free" ;
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1Bi9Dd9pSPyqeolk7AJhQAQD1tEvTGaA",
  authDomain: "tonder1-bd704.firebaseapp.com",
  projectId: "tonder1-bd704",
  storageBucket: "tonder1-bd704.appspot.com",
  messagingSenderId: "346941604927",
  appId: environment.kawaki
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// ---------- ICON DATA----------
let imgs = [
  {
    name: "lin",
    url: "https://www.linkedin.com/in/afrotonder/",
    title: "afrotonder@LinkedIn",
    alt: "LinkedIn Icon",
    source: "https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo-512x512.png"
  },
  // {
  //   name: "grm",
  //   url: "https://angular-g2qjyv.stackblitz.io/",
  //   title: "TheGripRepo",
  //   alt: "Rob Zombies Halloween 2018 Pumpkin Icon",
  //   source:  "https://trickortreatstudios.com/media/catalog/product/cache/1da4909b8e3ea5eea17a9fb4c6e4a516/h/a/halloween2018-enamelpin_1.png"
  // },
  {
    name: "github",
    url: "https://github.com/afrotonder",
    title: "afrotonder@GitHub",
    alt: "Github Octocat Logo",
    source: "https://github.githubassets.com/images/modules/logos_page/Octocat.png"
  },
  {
    name: "linktree",
    url: "https://linktr.ee/afrotonder",
    title: "afrotonder@LinkTree",
    alt: "LinkTree Icon",
    source: "../assets/images/linktree.png" 
  },
  {
    name: "gmail",
    url: "mailto:o.rosado18@gmail.com",
    title: "o.rosado18@gmail.com",
    alt: "Gmail Icon",
    source: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Gmail_Icon_%282013-2020%29.svg/2048px-Gmail_Icon_%282013-2020%29.svg.png"
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



// set/ renderfooter
for (let img of imgs) {
  let elem = document.createElement("a");

  elem.setAttribute("href", img.url);
  elem.setAttribute("target", "_blank");
  elem.setAttribute("class", "toolIcon");
  elem.setAttribute("style", "width:50px;");

  elem.innerHTML =
    `<img src=` +
    img.source +
    `  title=` +
    img.title +
    ` alt=` +
    img.alt +
    `/>`;

  document.getElementById("social-icons").appendChild(elem);
}

  }
}




