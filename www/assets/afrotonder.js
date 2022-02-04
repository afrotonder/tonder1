// ---------- SET AVATAR DATA ----------
const uname = "Omar Rosado Ramírez";
const sm_uname = "O. Rosado Ramírez";
const handle = "afrotonder";
const slogan = "Full-time problem solver";
const job1 = "TuChequera.com";
const job2 = "APS Health";

document.getElementById("uname").innerText = uname + "!";
document
  .getElementById("avatar")
  .setAttribute(
    "src",
    "https://scontent-sju1-1.xx.fbcdn.net/v/t1.6435-9/50887190_2300320363577374_8314854031319105536_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=KXuF4cUjkogAX_LyrPc&_nc_ht=scontent-sju1-1.xx&oh=65d5f58e208e64cf46733a421320b3a5&oe=61DBC289"
  );

  console.log('JP:A');

document.getElementById("meet").innerHTML = `🍕 I'm currently working as a:
                                              <ul class="jobList">
                                                <li class="job">Full Stack Developer @<a href="https://tuchequera.com" target="_blank">${job1}</a> </li>
                                                <li class="job">Business Intelligence Analyst @<a href="https://apshealth.com/" taget="_blank">${job2}</a> </li>
                                              </ul>`

                                               ;
// ---------- END SET AVATAR DATA ----------

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
    name: "chess",
    url: "https://www.chess.com/member/afrotonder",
    title: "afrotonder@Chess.com",
    alt: "Chess.com Icon",
    source: "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpmeXx6V.png"
  },
  {
    name: "os",
    url: "https://opensea.io/afrotonder",
    title: "afrotonder@OpenSea.io",
    alt: "OpenSea Icon",
    source: "https://opensea.io/static/images/logos/opensea.svg"
  },
  {
    name: "twt",
    url: "https://twitter.com/afrotonder",
    title: "afrotonder@Twitter",
    alt: "Twitter Icon",
    source: "https://icons-for-free.com/iconfiles/png/512/identity+logo+new+twitter+icon-1320161424699291885.png"
  }
];

let tools = [
  { name: "JS (ES6+)", source: "./images/js-icon.png"},
  { name: "HTML", source: "./images/html-icon.png"},
  { name: "CSS/SCSS", source: "./images/css-icon.png" },
  { name: "Angular", source: "./images/angular-icon.png" },
  // { name: "Ionic", source: "./images/ionic.jpg" },
  // { name: "iOS", source: xcode_icon },
  { name: "Ionic", source: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ionic-512.png" },
  // { name: "Android", source: android_icon },
  // { name: "Capacitor", source: "./images/capacitor-icon.png" },
  { name: "Capacitor", source: "https://seeklogo.com/images/C/capacitor-logo-DF3634DD70-seeklogo.com.png" },
];

// set/ renderfooter
for (let img of imgs) {
  let elem = document.createElement("a");

  elem.setAttribute("href", img.url);
  elem.setAttribute("target", "_blank");
  elem.setAttribute("class", "toolIcon");

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

// set/render tools
for (let tool of tools) {

  let elem = document.createElement("div");

  elem.setAttribute("class", "tool-icons");
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



// --------------- set footer data --------------- //
const footer = "afrotonder © ";
let year = new Date().getFullYear();

document.getElementsByClassName("footer-text")[0].innerHTML =
  footer + year.toString();
// --------------- set footer data --------------- //
