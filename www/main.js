(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 3696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/angular */ 1480);




const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 9483)).then(m => m.TabsPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules }), swiper_angular__WEBPACK_IMPORTED_MODULE_3__.SwiperModule
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.CUSTOM_ELEMENTS_SCHEMA]
    })
], AppRoutingModule);



/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_orosa_Documents_afrotonder2_0_tonder1_tonder1_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 5158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let AppComponent = class AppComponent {
    constructor() {
    }
    ngAfterViewInit() {
        this.init();
    }
    init() {
        // ---------- SET AVATAR DATA ----------
        const uname = "Omar Rosado Ramirez";
        const sm_uname = "O. Rosado Ramirez";
        const handle = "afrotonder";
        const title = "Software Developer";
        const slogan = "Full-time problem solver";
        const job1 = "TuChequera.com";
        const job2 = "APS Health";
        document.getElementById("uname").innerText = uname;
        document.getElementById("title").innerText = title;
        document
            .getElementById("avatar")
            .setAttribute("src", "https://scontent-sju1-1.xx.fbcdn.net/v/t1.6435-9/50887190_2300320363577374_8314854031319105536_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=KXuF4cUjkogAX_LyrPc&_nc_ht=scontent-sju1-1.xx&oh=65d5f58e208e64cf46733a421320b3a5&oe=61DBC289");
        // TODO: change this to something better
        document.getElementById("meet").innerHTML = `
                                              <ul class="jobList">
                                                <li> <b style="color: white;"> > </b> Full Stack Developer
                                                  @<a class='job' href="https://tuchequera.com" target="_blank">${job1}</a>
                                                </li>
                                                <li> <b style="color: white;"> > </b> Business Intelligence Analyst
                                                  @<a href="https://apshealth.com/" taget="_blank">${job2}</a>
                                                </li>
                                              </ul>`;
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
            {
                name: "twt",
                url: "https://twitter.com/afrotonder",
                title: "afrotonder@Twitter",
                alt: "Twitter Icon",
                source: "https://icons-for-free.com/iconfiles/png/512/identity+logo+new+twitter+icon-1320161424699291885.png"
            }
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
        // --------------- set footer data --------------- //
        const footer = "afrotonder © ";
        let year = new Date().getFullYear();
        document.getElementsByClassName("footer-text")[0].innerHTML =
            footer + year.toString();
        // --------------- set footer data --------------- //
    }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _C_Users_orosa_Documents_afrotonder2_0_tonder1_tonder1_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewEncapsulation.None,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3696);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 2050);







let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 4509:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 2577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4509);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		3477,
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		7196,
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		8081,
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		5017,
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		9721,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		9216,
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		6612,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		2694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		2938,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		1379,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		7552,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		7218,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		4398,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		4134,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		6836,
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		6397,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		3296,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		2413,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		9411,
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		9133,
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		9003,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6065,
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		6991,
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		2947,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		5919,
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		3109,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		9459,
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		301,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3799,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		2140,
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		6197,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		1975,
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		8387,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		8659,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		6404,
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		5253,
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		2619,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		2871,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		7668,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		5342,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		174,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		6185,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		7337,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4833,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9468,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5705,
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		7463,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 5158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app >\r\n  <div class=\"mainSide\">\r\n\r\n      <main id=\"body\">\r\n\r\n        <div id=\"main\" style=\"width: 100%; height: 100%;\">\r\n\r\n            <header style=\"text-align: center; flex-direction: column;\">\r\n\r\n              <img id=\"avatar\" />\r\n\r\n              <p id=\"uname\"> </p>\r\n\r\n              <p id=\"title\"> </p>\r\n\r\n            </header>\r\n\r\n        </div>\r\n\r\n        <article id=\"description\">\r\n\r\n\r\n\r\n          <br/>\r\n\r\n\r\n          <p class=\"workContainer\">Currently working as a:</p>\r\n\r\n          <div id=\"meet\"> </div>\r\n\r\n          <br/>\r\n\r\n\r\n          <!-- <p id=\"feats\" > ⚡ My main stack </p> -->\r\n\r\n          <div class=\"tools-container\">\r\n              <!-- <section id=\"tools\"></section> -->\r\n          </div>\r\n\r\n        </article>\r\n\r\n\r\n        <div\r\n        class=\"footer\"\r\n      >\r\n      <p id=\"mobile-hmu\" class=\"workContainer\">Contact me: </p>\r\n        <div id=\"social-icons\">\r\n        </div>\r\n\r\n        <div class=\"footer-text-container\">\r\n          <p class=\"footer-text\" ></p>\r\n        </div>\r\n      </div>\r\n      </main>\r\n\r\n  </div>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n");

/***/ }),

/***/ 836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = ":root {\n  --bg: #4d4646;\n  --mainColor: #7fcd91;\n  --linkColor: #f5eaea;\n  --lightLinkColor: lightgreen;\n  --lightText: white;\n}\n\nheader {\n  color: white;\n  margin: -1em 0 0 -1em;\n  display: flex;\n  justify-content: space-between;\n}\n\n.workContainer {\n  color: #7fcd91;\n  font-size: 18px !important;\n  margin-top: 16%;\n  font-weight: lighter;\n}\n\n.mainSide {\n  width: 30%;\n  background: #000000;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #434343, #000000);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  background-size: 100% 100%;\n  height: 100%;\n  padding-left: 3%;\n  padding-right: 1%;\n}\n\na:link {\n  color: #f5eaea;\n}\n\n#meet a:visited {\n  color: lightgreen;\n}\n\n#body.theme {\n  display: flex;\n  justify-content: flex-end;\n  width: 80%;\n  font-size: 14px;\n}\n\n#body {\n  letter-spacing: 1px;\n  margin-left: auto;\n  margin-right: auto;\n  color: #7fcd91;\n  font-family: \"Share Tech\", \"Arial Narrow\", Arial, sans-serif;\n  width: 100%;\n  overflow-x: hidden;\n  position: relative;\n  text-align: left;\n}\n\nul {\n  padding: 0;\n}\n\n#uname {\n  color: #7fcd91;\n  font-size: 21px !important;\n  margin-top: -25px;\n  font-weight: bold;\n}\n\n#title {\n  color: white;\n  font-size: 18px !important;\n  margin-top: -15px;\n  font-weight: lighter;\n}\n\n#avatar {\n  margin: 4em auto 3em auto;\n  border-radius: 50%;\n  width: 13em;\n  position: relative;\n  top: 50%;\n  border: 3px solid lightgreen;\n}\n\n.dark {\n  font-weight: bold;\n}\n\n.header-text {\n  /* // check why this doesnt use flex. it probs fucks up */\n  margin-top: 105px;\n  font-size: 30px;\n  width: 15em;\n  color: #7fcd91;\n  text-align: center;\n  margin-left: 5%;\n  margin-right: 5%;\n}\n\n#greet {\n  color: #7fcd91;\n  margin-top: -10px;\n}\n\n.greetings {\n  color: #7fcd91;\n  text-align: center;\n  /* margin-top: -10px; */\n}\n\n#social-icons {\n  display: flex;\n  justify-content: flex-start;\n  height: 3em;\n}\n\n#social-icons img {\n  width: 50% !important;\n}\n\n#social-icons img:hover {\n  animation: shake 0.1s;\n  animation-iteration-count: 1s;\n}\n\n.tool-icons {\n  margin-left: 1%;\n  margin-right: 1%;\n}\n\n.tool-icons img {\n  width: 30px;\n  height: 30px;\n}\n\n.jobList {\n  margin: auto;\n  list-style: circle !important;\n}\n\n#feats {\n  margin-top: 1%;\n}\n\n.footer-text-container {\n  display: flex;\n  justify-content: center;\n  margin-top: 27%;\n}\n\n@media only screen and (max-width: 600px) {\n  /* //       .bats:hover {\n    //         background-image: url('assets/bat-effect.jpg');\n    //         background-repeat:no-repeat;\n    //         background-size: 100% 70px ;\n    //         margin: 0;\n    // // display:flex ;\n    // // justify-content: center;\n    //       } */\n  #body {\n    overflow-x: hidden;\n    position: relative;\n  }\n\n  #feats {\n    margin-top: 0;\n  }\n\n  .fa {\n    margin-top: 7px;\n  }\n\n  .header-text {\n    display: none;\n  }\n\n  .header-text.ht1 {\n    display: none;\n  }\n\n  .mobile-header-text {\n    display: flex;\n    font-size: 22px;\n    color: #7fcd91;\n    margin-left: auto;\n    margin-right: auto;\n    width: 100%;\n    justify-content: center;\n    margin-bottom: -12%;\n  }\n\n  #avatar {\n    margin: 2em auto 2em auto;\n    border-radius: 50%;\n    width: 10em;\n    position: relative;\n    top: 50%;\n  }\n\n  #description {\n    display: flex !important;\n    justify-content: space-evenly;\n    text-align: left;\n  }\n\n  #uname {\n    color: white;\n    /* font-style: italic; */\n    font-size: 32px !important;\n    text-align: center;\n    margin-top: 1px;\n  }\n\n  #meet {\n    margin-top: -10%;\n  }\n\n  #feats {\n    overflow: hidden;\n    /* Hide s crollbars */\n  }\n\n  #social-icons {\n    display: flex;\n    justify-content: flex-start;\n    background-color: #4d4646;\n    margin-left: -1em;\n  }\n\n  #social-icons img:hover {\n    animation: shake 0.1s;\n    animation-iteration-count: 1s;\n  }\n\n  .tools-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n\n  .tool-icons {\n    display: flex;\n    justify-content: flex-start;\n    height: 3em;\n    background-color: #4d4646;\n    width: 36px !important;\n  }\n\n  .tool-icons img {\n    height: 10%;\n    border-radius: 5px;\n    margin: 0 5px 0 5px;\n    width: 25% !important;\n  }\n\n  #mobile-hmu {\n    display: flex;\n    font-size: 13px;\n    text-align: center;\n    width: 99%;\n  }\n\n  .footer-text-container {\n    display: flex;\n    justify-content: center;\n    margin-top: 30%;\n  }\n\n  .footer-text {\n    font-size: 10px;\n    color: white;\n  }\n}\n\n/* END OF MEDIA QUERY */\n\n#footer {\n  width: 100%;\n  bottom: 0;\n  text-align: center;\n  font-size: 8px;\n}\n\n.footer {\n  bottom: 0;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  margin-top: 16%;\n}\n\n/* // --------------- KEYFRAMES --------------- */\n\n@keyframes shake {\n  0% {\n    transform: translate(1px, 1px) rotate(0deg);\n  }\n  10% {\n    transform: translate(-1px, -2px) rotate(-3deg);\n  }\n  20% {\n    transform: translate(-3px, 0px) rotate(3deg);\n  }\n  30% {\n    transform: translate(3px, 2px) rotate(0deg);\n  }\n  40% {\n    transform: translate(1px, -1px) rotate(3deg);\n  }\n}\n\n/* // --------------- END KEYFRAMES --------------- */\n\n:root {\n  font-family: \"ShareTech-Regular\" !important;\n}\n\nion-router-outlet {\n  width: 70%;\n  margin-left: auto;\n}\n\nion-tabs ion-router-outlet {\n  display: contents !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxhc3NldHNcXGFmcm90b25kZXIuc2NzcyIsImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRFFBO0VBRUUsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDTkY7O0FEU0E7RUFFRSxjQWhCVTtFQWlCViwwQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQ1BGOztBRFVBO0VBQ0UsVUFBQTtFQVdBLG1CQUFBO0VBQXNCLDhCQUFBO0VBQzRDLCtCQUFBO0VBQ2xFLHVEQUFBO0VBQXlELHFFQUFBO0VBUXpELDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNyQkY7O0FEd0JBO0VBQ0UsY0FqRFU7QUM0Qlo7O0FEeUJFO0VBQ0UsaUJBckRhO0FDK0JqQjs7QUQwQkE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ3ZCRjs7QUR5QkE7RUFDRSxtQkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQXhFVTtFQXlFViw0REFBQTtFQUlBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUMzQkY7O0FEOEJBO0VBRUUsVUFBQTtBQzVCRjs7QUQrQkE7RUFDRSxjQXpGVTtFQTBGViwwQkFBQTtFQUNBLGlCQUFBO0VBRUEsaUJBQUE7QUM3QkY7O0FEZ0NBO0VBQ0UsWUE3RlU7RUE4RlYsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDN0JGOztBRGdDQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsNEJBQUE7QUM3QkY7O0FEZ0NBO0VBQ0UsaUJBQUE7QUM3QkY7O0FEZ0NBO0VBQ0UseURBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0F6SFU7RUEwSFYsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUM3QkY7O0FEZ0NBO0VBQ0UsY0FoSVU7RUFrSVYsaUJBQUE7QUM5QkY7O0FEaUNBO0VBQ0UsY0F0SVU7RUF1SVYsa0JBQUE7RUFDQSx1QkFBQTtBQzlCRjs7QURpQ0E7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FDOUJGOztBRGtDQTtFQUVFLHFCQUFBO0FDaENGOztBRG1DQTtFQUNFLHFCQUFBO0VBQ0EsNkJBQUE7QUNoQ0Y7O0FEbUNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDaENGOztBRG1DQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDaENGOztBRG1DQTtFQUVFLFlBQUE7RUFFQSw2QkFBQTtBQ2xDRjs7QURxQ0E7RUFDRSxjQUFBO0FDbENGOztBRG9DQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNqQ0Y7O0FEd0NBO0VBQ0U7Ozs7Ozs7Z0JBQUE7RUFRQTtJQUNFLGtCQUFBO0lBQ0Esa0JBQUE7RUNyQ0Y7O0VEdUNBO0lBQ0UsYUFBQTtFQ3BDRjs7RUR1Q0E7SUFDRSxlQUFBO0VDcENGOztFRHVDQTtJQUNFLGFBQUE7RUNwQ0Y7O0VEdUNBO0lBQ0UsYUFBQTtFQ3BDRjs7RUR1Q0E7SUFDRSxhQUFBO0lBQ0EsZUFBQTtJQUNBLGNBMU5RO0lBMk5SLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFQ3BDRjs7RUQ4Q0E7SUFDRSx5QkFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtFQzNDRjs7RUQ4Q0E7SUFDRSx3QkFBQTtJQUNBLDZCQUFBO0lBRUEsZ0JBQUE7RUM1Q0Y7O0VEOENBO0lBQ0UsWUFwUFE7SUFxUFIsd0JBQUE7SUFDQSwwQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtFQzNDRjs7RUQ4Q0E7SUFDRSxnQkFBQTtFQzNDRjs7RUQ4Q0E7SUFDRSxnQkFBQTtJQUFrQixxQkFBQTtFQzFDcEI7O0VENkNBO0lBQ0UsYUFBQTtJQUNBLDJCQUFBO0lBRUEseUJBMVFDO0lBMlFELGlCQUFBO0VDM0NGOztFRGlEQTtJQUNFLHFCQUFBO0lBQ0EsNkJBQUE7RUM5Q0Y7O0VEMERBO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsOEJBQUE7RUN2REY7O0VEMERBO0lBQ0UsYUFBQTtJQUNBLDJCQUFBO0lBQ0EsV0FBQTtJQUNBLHlCQXpTQztJQTBTRCxzQkFBQTtFQ3ZERjs7RUR5REE7SUFDRSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLHFCQUFBO0VDdERGOztFRHlEQTtJQUNFLGFBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0VDdERGOztFRHlEQTtJQUNFLGFBQUE7SUFDQSx1QkFBQTtJQUNBLGVBQUE7RUN0REY7O0VEeURBO0lBQ0UsZUFBQTtJQUNBLFlBL1RRO0VDeVFWO0FBQ0Y7O0FEd0RBLHVCQUFBOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFFQSxrQkFBQTtFQUNBLGNBQUE7QUN4REY7O0FEMkRBO0VBQ0UsU0FBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ3pERjs7QUQyREEsaURBQUE7O0FBQ0E7RUFDRTtJQUNFLDJDQUFBO0VDeERGO0VEMERBO0lBQ0UsOENBQUE7RUN4REY7RUQwREE7SUFDRSw0Q0FBQTtFQ3hERjtFRDBEQTtJQUNFLDJDQUFBO0VDeERGO0VEMERBO0lBQ0UsNENBQUE7RUN4REY7QUFDRjs7QUQwREEscURBQUE7O0FDaFhBO0VBRUUsMkNBQUE7QUF3VEY7O0FBcFRBO0VBRUUsVUFBQTtFQUNBLGlCQUFBO0FBc1RGOztBQS9TRTtFQUNFLDRCQUFBO0FBa1RKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcclxuICAtLWJnOiAjNGQ0NjQ2O1xyXG4gIC0tbWFpbkNvbG9yOiAjN2ZjZDkxO1xyXG4gIC0tbGlua0NvbG9yOiAjZjVlYWVhO1xyXG4gIC0tbGlnaHRMaW5rQ29sb3I6IGxpZ2h0Z3JlZW47XHJcbiAgLS1saWdodFRleHQ6IHdoaXRlO1xyXG59XHJcblxyXG4kbWFpbkNvbG9yOiAjN2ZjZDkxO1xyXG4kYmc6ICM0ZDQ2NDY7XHJcbiRsaW5rQ29sb3I6ICNmNWVhZWE7XHJcbiRsaWdodExpbmtDb2xvcjogbGlnaHRncmVlbjtcclxuJGxpZ2h0VGV4dDogd2hpdGU7XHJcblxyXG5oZWFkZXIge1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICRiZyA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogLTFlbSAwIDAgLTFlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLndvcmtDb250YWluZXIge1xyXG4gIC8vIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuICBjb2xvcjogJG1haW5Db2xvcjtcclxuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAxNiU7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbn1cclxuXHJcbi5tYWluU2lkZSB7XHJcbiAgd2lkdGg6IDMwJTtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkYmc7XHJcbiAgLy8gYmFja2dyb3VuZDogbm8tcmVwZWF0IHVybChodHRwczovL3d3dy50ZWFodWIuaW8vcGhvdG9zL2Z1bGwvMC03NDMzX2JlYWNoLXNpZGUtYmVhY2gtd2FsbHBhcGVyLWZ1bGwtc2NyZWVuLmpwZykgO1xyXG4gIC8vIGJhY2tncm91bmQ6IG5vLXJlcGVhdCB1cmwoLi4vYXNzZXRzL2ltYWdlcy9iZy1mYWRlZC5qcGcpIDtcclxuXHJcbiAgLy8gZ3JhZGUgZ3JheVxyXG4gIC8vIGJhY2tncm91bmQ6ICNiZGMzYzc7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgLy8gYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyYzNlNTAsICNiZGMzYzcpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cclxuICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyYzNlNTAsICNiZGMzYzcpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcblxyXG4gIC8vIGRlZXAgc3BhY2VcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwOyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNDM0MzQzLCAjMDAwMDAwKTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNDM0MzQzLCAjMDAwMDAwKTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xyXG5cclxuICAvLyBtaWRuaWdodCBjaXR5XHJcbiAgLy8gYmFja2dyb3VuZDogIzIzMjUyNjsgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cclxuICAvLyBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzQxNDM0NSwgIzIzMjUyNik7ICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xyXG4gIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzQxNDM0NSwgIzIzMjUyNik7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cclxuXHJcblxyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nLWxlZnQ6IDMlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDElO1xyXG59XHJcblxyXG5hOmxpbmsge1xyXG4gIGNvbG9yOiAkbGlua0NvbG9yO1xyXG59XHJcblxyXG4jbWVldCB7XHJcbiAgYTp2aXNpdGVkIHtcclxuICAgIGNvbG9yOiAkbGlnaHRMaW5rQ29sb3I7XHJcbiAgfVxyXG59XHJcblxyXG4jYm9keS50aGVtZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbiNib2R5IHtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG5cclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgLy8gZGlzcGxheTogbm9uZTtcclxuICBjb2xvcjogJG1haW5Db2xvcjtcclxuICBmb250LWZhbWlseTogXCJTaGFyZSBUZWNoXCIsIFwiQXJpYWwgTmFycm93XCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG5cclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkYmcgO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbnVsIHtcclxuICAvLyBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuI3VuYW1lIHtcclxuICBjb2xvcjogJG1haW5Db2xvcjtcclxuICBmb250LXNpemU6IDIxcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAtMjVweDtcclxuXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiN0aXRsZSB7XHJcbiAgY29sb3I6ICRsaWdodFRleHQ7XHJcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbn1cclxuXHJcbiNhdmF0YXIge1xyXG4gIG1hcmdpbjogNGVtIGF1dG8gM2VtIGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiAxM2VtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDUwJTtcclxuICBib3JkZXI6IDNweCBzb2xpZCAkbGlnaHRMaW5rQ29sb3I7XHJcbn1cclxuXHJcbi5kYXJrIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmhlYWRlci10ZXh0IHtcclxuICAvKiAvLyBjaGVjayB3aHkgdGhpcyBkb2VzbnQgdXNlIGZsZXguIGl0IHByb2JzIGZ1Y2tzIHVwICovXHJcbiAgbWFyZ2luLXRvcDogMTA1cHg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHdpZHRoOiAxNWVtO1xyXG4gIGNvbG9yOiAkbWFpbkNvbG9yO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcclxufVxyXG5cclxuI2dyZWV0IHtcclxuICBjb2xvcjogJG1haW5Db2xvcjtcclxuICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbn1cclxuXHJcbi5ncmVldGluZ3Mge1xyXG4gIGNvbG9yOiAkbWFpbkNvbG9yO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvKiBtYXJnaW4tdG9wOiAtMTBweDsgKi9cclxufVxyXG5cclxuI3NvY2lhbC1pY29ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IC8vIHNwYWNlLWV2ZW5seTtcclxuICBoZWlnaHQ6IDNlbTtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkYmcgO1xyXG59XHJcblxyXG4jc29jaWFsLWljb25zIGltZyB7XHJcbiAgLy8gaGVpZ2h0OiAyZW07XHJcbiAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jc29jaWFsLWljb25zIGltZzpob3ZlciB7XHJcbiAgYW5pbWF0aW9uOiBzaGFrZSAwLjFzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDFzO1xyXG59XHJcblxyXG4udG9vbC1pY29ucyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gIG1hcmdpbi1yaWdodDogMSU7XHJcbn1cclxuXHJcbi50b29sLWljb25zIGltZyB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uam9iTGlzdCB7XHJcbiAgLy8gd2lkdGg6IDI1JTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgLy8gbWFyZ2luLXRvcDogMjVweDtcclxuICBsaXN0LXN0eWxlOiBjaXJjbGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuI2ZlYXRzIHtcclxuICBtYXJnaW4tdG9wOiAxJTtcclxufVxyXG4uZm9vdGVyLXRleHQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDI3JTtcclxufVxyXG5cclxuLy8gI21lZXQge1xyXG4vLyAgIC8vIG1hcmdpbi10b3A6ICU7XHJcbi8vIH1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAvKiAvLyAgICAgICAuYmF0czpob3ZlciB7XHJcbiAgICAvLyAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnYXNzZXRzL2JhdC1lZmZlY3QuanBnJyk7XHJcbiAgICAvLyAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcclxuICAgIC8vICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDcwcHggO1xyXG4gICAgLy8gICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAvLyAvLyBkaXNwbGF5OmZsZXggO1xyXG4gICAgLy8gLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAvLyAgICAgICB9ICovXHJcbiAgI2JvZHkge1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAjZmVhdHMge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcblxyXG4gIC5mYSB7XHJcbiAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyLXRleHQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5oZWFkZXItdGV4dC5odDEge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5tb2JpbGUtaGVhZGVyLXRleHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAkbWFpbkNvbG9yO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTEyJTtcclxuICB9XHJcblxyXG4gIC8vIC5qb2JMaXN0IHtcclxuICAvLyAgIHdpZHRoOmF1dG87XHJcbiAgLy8gICAgIG1hcmdpbjogYXV0bztcclxuICAvLyAgICAgLy8gbWFyZ2luLXRvcDogMTBweDtcclxuICAvLyAgICAgbGlzdC1zdHlsZTogY2lyY2xlICFpbXBvcnRhbnQ7XHJcblxyXG4gIC8vIH1cclxuICAjYXZhdGFyIHtcclxuICAgIG1hcmdpbjogMmVtIGF1dG8gMmVtIGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMTBlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gIH1cclxuXHJcbiAgI2Rlc2NyaXB0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgLy8gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gICN1bmFtZSB7XHJcbiAgICBjb2xvcjogJGxpZ2h0VGV4dDtcclxuICAgIC8qIGZvbnQtc3R5bGU6IGl0YWxpYzsgKi9cclxuICAgIGZvbnQtc2l6ZTogMzJweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gIH1cclxuXHJcbiAgI21lZXQge1xyXG4gICAgbWFyZ2luLXRvcDogLTEwJTtcclxuICB9XHJcblxyXG4gICNmZWF0cyB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAvKiBIaWRlIHMgY3JvbGxiYXJzICovXHJcbiAgfVxyXG5cclxuICAjc29jaWFsLWljb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAvLyBoZWlnaHQ6IDJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZztcclxuICAgIG1hcmdpbi1sZWZ0OiAtMWVtO1xyXG4gIH1cclxuICAvLyAjc29jaWFsLWljb25zIGltZyB7XHJcbiAgLy8gICAvLyBoZWlnaHQ6IDJlbTtcclxuICAvLyB9XHJcblxyXG4gICNzb2NpYWwtaWNvbnMgaW1nOmhvdmVyIHtcclxuICAgIGFuaW1hdGlvbjogc2hha2UgMC4xcztcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDFzO1xyXG4gIH1cclxuICAvLyAjdG9vbHMge1xyXG4gIC8vICAgd2lkdGg6IDEwMCU7XHJcbiAgLy8gICBoZWlnaHQ6IGF1dG87XHJcbiAgLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAvLyAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAvLyAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAvLyAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG4gIC8vIH1cclxuXHJcbiAgLnRvb2xzLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcblxyXG4gIC50b29sLWljb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZztcclxuICAgIHdpZHRoOiAzNnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC50b29sLWljb25zIGltZyB7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogMCA1cHggMCA1cHg7XHJcbiAgICB3aWR0aDogMjUlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAjbW9iaWxlLWhtdSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDk5JTtcclxuICB9XHJcblxyXG4gIC5mb290ZXItdGV4dC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMzAlO1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlci10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGNvbG9yOiAkbGlnaHRUZXh0O1xyXG4gIH1cclxufVxyXG4vKiBFTkQgT0YgTUVESUEgUVVFUlkgKi9cclxuXHJcbiNmb290ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvdHRvbTogMDtcclxuICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogOHB4O1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICBib3R0b206IDA7XHJcbiAgLy8gcG9zaXRpb246IGZpeGVkO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAxNiU7XHJcbn1cclxuLyogLy8gLS0tLS0tLS0tLS0tLS0tIEtFWUZSQU1FUyAtLS0tLS0tLS0tLS0tLS0gKi9cclxuQGtleWZyYW1lcyBzaGFrZSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAxcHgpIHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIC0ycHgpIHJvdGF0ZSgtM2RlZyk7XHJcbiAgfVxyXG4gIDIwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3B4LCAwcHgpIHJvdGF0ZSgzZGVnKTtcclxuICB9XHJcbiAgMzAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCwgMnB4KSByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIC0xcHgpIHJvdGF0ZSgzZGVnKTtcclxuICB9XHJcbn1cclxuLyogLy8gLS0tLS0tLS0tLS0tLS0tIEVORCBLRVlGUkFNRVMgLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4vLyAgQGZvbnQtZmFjZSB7XHJcbi8vICAgZm9udC1mYW1pbHk6IFJleC1Cb2xkO1xyXG4vLyAgIHNyYzpcclxuXHJcbi8vICAgICB1cmwoXCIuLi9hc3NldHMvaW1hZ2VzL1wiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxuLy8gfVxyXG4iLCI6cm9vdCB7XG4gIC0tYmc6ICM0ZDQ2NDY7XG4gIC0tbWFpbkNvbG9yOiAjN2ZjZDkxO1xuICAtLWxpbmtDb2xvcjogI2Y1ZWFlYTtcbiAgLS1saWdodExpbmtDb2xvcjogbGlnaHRncmVlbjtcbiAgLS1saWdodFRleHQ6IHdoaXRlO1xufVxuXG5oZWFkZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogLTFlbSAwIDAgLTFlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ud29ya0NvbnRhaW5lciB7XG4gIGNvbG9yOiAjN2ZjZDkxO1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTYlO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cblxuLm1haW5TaWRlIHtcbiAgd2lkdGg6IDMwJTtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzQzNDM0MywgIzAwMDAwMCk7XG4gIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzQzNDM0MywgIzAwMDAwMCk7XG4gIC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAzJTtcbiAgcGFkZGluZy1yaWdodDogMSU7XG59XG5cbmE6bGluayB7XG4gIGNvbG9yOiAjZjVlYWVhO1xufVxuXG4jbWVldCBhOnZpc2l0ZWQge1xuICBjb2xvcjogbGlnaHRncmVlbjtcbn1cblxuI2JvZHkudGhlbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB3aWR0aDogODAlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbiNib2R5IHtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgY29sb3I6ICM3ZmNkOTE7XG4gIGZvbnQtZmFtaWx5OiBcIlNoYXJlIFRlY2hcIiwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxudWwge1xuICBwYWRkaW5nOiAwO1xufVxuXG4jdW5hbWUge1xuICBjb2xvcjogIzdmY2Q5MTtcbiAgZm9udC1zaXplOiAyMXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IC0yNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI3RpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG4jYXZhdGFyIHtcbiAgbWFyZ2luOiA0ZW0gYXV0byAzZW0gYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTNlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTtcbiAgYm9yZGVyOiAzcHggc29saWQgbGlnaHRncmVlbjtcbn1cblxuLmRhcmsge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmhlYWRlci10ZXh0IHtcbiAgLyogLy8gY2hlY2sgd2h5IHRoaXMgZG9lc250IHVzZSBmbGV4LiBpdCBwcm9icyBmdWNrcyB1cCAqL1xuICBtYXJnaW4tdG9wOiAxMDVweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB3aWR0aDogMTVlbTtcbiAgY29sb3I6ICM3ZmNkOTE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxuXG4jZ3JlZXQge1xuICBjb2xvcjogIzdmY2Q5MTtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG5cbi5ncmVldGluZ3Mge1xuICBjb2xvcjogIzdmY2Q5MTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvKiBtYXJnaW4tdG9wOiAtMTBweDsgKi9cbn1cblxuI3NvY2lhbC1pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgaGVpZ2h0OiAzZW07XG59XG5cbiNzb2NpYWwtaWNvbnMgaW1nIHtcbiAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xufVxuXG4jc29jaWFsLWljb25zIGltZzpob3ZlciB7XG4gIGFuaW1hdGlvbjogc2hha2UgMC4xcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMXM7XG59XG5cbi50b29sLWljb25zIHtcbiAgbWFyZ2luLWxlZnQ6IDElO1xuICBtYXJnaW4tcmlnaHQ6IDElO1xufVxuXG4udG9vbC1pY29ucyBpbWcge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uam9iTGlzdCB7XG4gIG1hcmdpbjogYXV0bztcbiAgbGlzdC1zdHlsZTogY2lyY2xlICFpbXBvcnRhbnQ7XG59XG5cbiNmZWF0cyB7XG4gIG1hcmdpbi10b3A6IDElO1xufVxuXG4uZm9vdGVyLXRleHQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDI3JTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAvKiAvLyAgICAgICAuYmF0czpob3ZlciB7XG4gICAgLy8gICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2Fzc2V0cy9iYXQtZWZmZWN0LmpwZycpO1xuICAgIC8vICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xuICAgIC8vICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDcwcHggO1xuICAgIC8vICAgICAgICAgbWFyZ2luOiAwO1xuICAgIC8vIC8vIGRpc3BsYXk6ZmxleCA7XG4gICAgLy8gLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLy8gICAgICAgfSAqL1xuICAjYm9keSB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gICNmZWF0cyB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuXG4gIC5mYSB7XG4gICAgbWFyZ2luLXRvcDogN3B4O1xuICB9XG5cbiAgLmhlYWRlci10ZXh0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmhlYWRlci10ZXh0Lmh0MSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5tb2JpbGUtaGVhZGVyLXRleHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGNvbG9yOiAjN2ZjZDkxO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTIlO1xuICB9XG5cbiAgI2F2YXRhciB7XG4gICAgbWFyZ2luOiAyZW0gYXV0byAyZW0gYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDEwZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNTAlO1xuICB9XG5cbiAgI2Rlc2NyaXB0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gICN1bmFtZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC8qIGZvbnQtc3R5bGU6IGl0YWxpYzsgKi9cbiAgICBmb250LXNpemU6IDMycHggIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMXB4O1xuICB9XG5cbiAgI21lZXQge1xuICAgIG1hcmdpbi10b3A6IC0xMCU7XG4gIH1cblxuICAjZmVhdHMge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLyogSGlkZSBzIGNyb2xsYmFycyAqL1xuICB9XG5cbiAgI3NvY2lhbC1pY29ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRkNDY0NjtcbiAgICBtYXJnaW4tbGVmdDogLTFlbTtcbiAgfVxuXG4gICNzb2NpYWwtaWNvbnMgaW1nOmhvdmVyIHtcbiAgICBhbmltYXRpb246IHNoYWtlIDAuMXM7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMXM7XG4gIH1cblxuICAudG9vbHMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLnRvb2wtaWNvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGhlaWdodDogM2VtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZDQ2NDY7XG4gICAgd2lkdGg6IDM2cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC50b29sLWljb25zIGltZyB7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbjogMCA1cHggMCA1cHg7XG4gICAgd2lkdGg6IDI1JSAhaW1wb3J0YW50O1xuICB9XG5cbiAgI21vYmlsZS1obXUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogOTklO1xuICB9XG5cbiAgLmZvb3Rlci10ZXh0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gIH1cblxuICAuZm9vdGVyLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cbi8qIEVORCBPRiBNRURJQSBRVUVSWSAqL1xuI2Zvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA4cHg7XG59XG5cbi5mb290ZXIge1xuICBib3R0b206IDA7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxNiU7XG59XG5cbi8qIC8vIC0tLS0tLS0tLS0tLS0tLSBLRVlGUkFNRVMgLS0tLS0tLS0tLS0tLS0tICovXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgMXB4KSByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMnB4KSByb3RhdGUoLTNkZWcpO1xuICB9XG4gIDIwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMHB4KSByb3RhdGUoM2RlZyk7XG4gIH1cbiAgMzAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzcHgsIDJweCkgcm90YXRlKDBkZWcpO1xuICB9XG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAtMXB4KSByb3RhdGUoM2RlZyk7XG4gIH1cbn1cbi8qIC8vIC0tLS0tLS0tLS0tLS0tLSBFTkQgS0VZRlJBTUVTIC0tLS0tLS0tLS0tLS0tLSAqL1xuOnJvb3Qge1xuICBmb250LWZhbWlseTogXCJTaGFyZVRlY2gtUmVndWxhclwiICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1yb3V0ZXItb3V0bGV0IHtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbmlvbi10YWJzIGlvbi1yb3V0ZXItb3V0bGV0IHtcbiAgZGlzcGxheTogY29udGVudHMgIWltcG9ydGFudDtcbn0iXX0= */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map