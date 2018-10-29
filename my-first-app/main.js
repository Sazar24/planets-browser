(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-page{\r\n    width: 80%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    border-width: 3px;\r\n    border-color: lightgray;\r\n    border-style: ridge;\r\n    background: whitesmoke;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-page\">\r\n  <app-header></app-header>\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import {MatButtonModule} from '@angular/material/button';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'hello-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _planets_planets_browser_planets_browser_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./planets/planets-browser/planets-browser.component */ "./src/app/planets/planets-browser/planets-browser.component.ts");
/* harmony import */ var _material_ui_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material-ui/material.module */ "./src/app/material-ui/material.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _planets_planet_details_planet_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./planets/planet-details/planet-details.component */ "./src/app/planets/planet-details/planet-details.component.ts");
/* harmony import */ var _planets_definition_definition_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./planets/definition/definition.component */ "./src/app/planets/definition/definition.component.ts");
/* harmony import */ var _author_author_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./author/author.component */ "./src/app/author/author.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"],
                _planets_planets_browser_planets_browser_component__WEBPACK_IMPORTED_MODULE_6__["PlanetsBrowserComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _planets_planet_details_planet_details_component__WEBPACK_IMPORTED_MODULE_10__["PlanetDetailsComponent"],
                _planets_definition_definition_component__WEBPACK_IMPORTED_MODULE_11__["DefinitionComponent"],
                _author_author_component__WEBPACK_IMPORTED_MODULE_12__["AuthorComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: 'welcome', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"] },
                    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                    { path: 'planets', component: _planets_planets_browser_planets_browser_component__WEBPACK_IMPORTED_MODULE_6__["PlanetsBrowserComponent"] },
                    { path: 'definition', component: _planets_definition_definition_component__WEBPACK_IMPORTED_MODULE_11__["DefinitionComponent"] },
                    { path: 'planets/:id', component: _planets_planet_details_planet_details_component__WEBPACK_IMPORTED_MODULE_10__["PlanetDetailsComponent"] },
                    { path: 'author', component: _author_author_component__WEBPACK_IMPORTED_MODULE_12__["AuthorComponent"] },
                    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
                ]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                _material_ui_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            // providers: [], // angular 5. 
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/author/author.component.css":
/*!*********************************************!*\
  !*** ./src/app/author/author.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/author/author.component.html":
/*!**********************************************!*\
  !*** ./src/app/author/author.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-title>\r\n    Who am I?\r\n  </mat-card-title>\r\n\r\n  <mat-card-subtitle>\r\n    Just a modest front-end developer. Besides that I'm awesome and super cool :)\r\n  </mat-card-subtitle>\r\n\r\n  <mat-card-content>\r\n    <p style=\"margin-top: 40px\">\r\n      I am\r\n      <span style=\"text-decoration: line-through; font-style: italic; color: gray;\">JavaScript</span>\r\n      TypeScript developer.</p>\r\n\r\n    <p>This is one of my firsts apps made in Angular. Usually I code in React. Coded - past tense. I`m starting to like Angular...\r\n      :) </p>\r\n\r\n    <p style=\"margin-top: 40px\"> More about me can be found at this page:</p>\r\n    <p>\r\n      <a href=\"https://github.com/Sazar24/curriculum-vitae/blob/master/CV.md\">CV-online-version</a>\r\n    </p>\r\n  </mat-card-content>\r\n\r\n  <p style=\"margin: 70px 0px 20px 40px\">\r\n    <span style=\"font-style: italic; font-size: 16px;\">\r\n      Cezary Budrewicz \r\n    </span>\r\n  </p>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/author/author.component.ts":
/*!********************************************!*\
  !*** ./src/app/author/author.component.ts ***!
  \********************************************/
/*! exports provided: AuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorComponent", function() { return AuthorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthorComponent = /** @class */ (function () {
    function AuthorComponent() {
    }
    AuthorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-author',
            template: __webpack_require__(/*! ./author.component.html */ "./src/app/author/author.component.html"),
            styles: [__webpack_require__(/*! ./author.component.css */ "./src/app/author/author.component.css")]
        })
    ], AuthorComponent);
    return AuthorComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n    padding: 15px 10px;\r\n    text-align: center;\r\n    font-style: italic;\r\n    font-size: 24px;\r\n    background-color: rgb(218, 218, 218);\r\n    color: black;\r\n}\r\n\r\n.toolbar-menu{\r\n    background: silver;\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n  Planets Browser app\r\n</div>\r\n<mat-toolbar>\r\n  <!-- <mat-toolbar-row class=\"header\">\r\n  Planets Browser app\r\n  </mat-toolbar-row> -->\r\n  <mat-toolbar-row class=\"toolbar-menu\">\r\n    <button mat-button [routerLink]=\"['welcome']\">Start</button>\r\n    <button mat-button [routerLink]=\"['planets']\">Planets List</button>\r\n    <button mat-button [routerLink]=\"['definition']\">What is a planet</button>\r\n    <button mat-button [routerLink]=\"['author']\">About Author</button>\r\n  </mat-toolbar-row>\r\n  <!-- <button mat-button [routerLink]=\"['welcome']\">Menu</button>\r\n  <a [routerLink]=\"['welcome']\">welcome-test-router</a> -->\r\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/material-ui/material.module.ts":
/*!************************************************!*\
  !*** ./src/app/material-ui/material.module.ts ***!
  \************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var materials = [
    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"]
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: materials.slice(),
            exports: materials.slice(),
            declarations: []
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/planets/definition/definition.component.css":
/*!*************************************************************!*\
  !*** ./src/app/planets/definition/definition.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/planets/definition/definition.component.html":
/*!**************************************************************!*\
  !*** ./src/app/planets/definition/definition.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-title>\r\n    What is a Planet?\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n    <p> This seemingly simple question doesn't have a simple answer.</p>\r\n    <p> Everyone knows that Earth, Mars and Jupiter are planets. At least, they are for now. Both Pluto and Ceres were once considered\r\n      planets until new discoveries triggered scientific debate about how to best describe them - a vigorous debate that\r\n      continues to this day. </p>\r\n    <p>The most recent definition of a planet was adopted by the International Astronomical Union in 2006.</p>\r\n    <p> It says a planet must do three things: </p>\r\n    <ul>\r\n      <p>\r\n        <li> It must orbit a star (in our cosmic neighborhood, the Sun). </li>\r\n      </p>\r\n      <p>\r\n        <li> It must be big enough to have enough gravity to force it into a spherical shape. </li>\r\n      </p>\r\n      <p>\r\n        <li> It must be big enough that its gravity cleared away any other objects of a similar size near its orbit around the Sun. </li>\r\n      </p>\r\n    </ul>\r\n  </mat-card-content>\r\n\r\n  <mat-card-footer>\r\n    <h6>\r\n      source:\r\n      <a href=\"https://solarsystem.nasa.gov/planets/overview/\">\r\n        https://solarsystem.nasa.gov/planets/overview/\r\n      </a>\r\n    </h6>\r\n  </mat-card-footer>\r\n\r\n</mat-card>"

/***/ }),

/***/ "./src/app/planets/definition/definition.component.ts":
/*!************************************************************!*\
  !*** ./src/app/planets/definition/definition.component.ts ***!
  \************************************************************/
/*! exports provided: DefinitionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinitionComponent", function() { return DefinitionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DefinitionComponent = /** @class */ (function () {
    function DefinitionComponent() {
    }
    DefinitionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-definition',
            template: __webpack_require__(/*! ./definition.component.html */ "./src/app/planets/definition/definition.component.html"),
            styles: [__webpack_require__(/*! ./definition.component.css */ "./src/app/planets/definition/definition.component.css")]
        })
    ], DefinitionComponent);
    return DefinitionComponent;
}());



/***/ }),

/***/ "./src/app/planets/planet-details/planet-details.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/planets/planet-details/planet-details.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".planet-details-view{\r\n    background-image: url('https://www.b17.ru/foto/uploaded/upl_1484968602_29263.jpg');\r\n    background-size: 50% ;\r\n    background-position: right center;\r\n    background-repeat: no-repeat;\r\n    border-radius: 25px;\r\n\r\n    font-size: 16px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/planets/planet-details/planet-details.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/planets/planet-details/planet-details.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{planet ? null : \"...Attempt to connect to the server... Or maybe there is no planet with that number...?\"}}\r\n<mat-card *ngIf='planet' class=\"planet-details-view\">\r\n\r\n  <button (click)='onBack()' color='primary' mat-raised-button style=\"float:right\">\r\n    << Back\r\n  </button>\r\n  <mat-card-title>{{planet.name}}</mat-card-title>\r\n  <mat-card-content>\r\n    <mat-list>\r\n      <mat-list-item> Rotation period: {{planet.rotation_period}} </mat-list-item>\r\n      <mat-list-item> Orbital period: {{planet.orbital_period}} </mat-list-item>\r\n      <mat-list-item> Diameter: {{planet.diameter}} </mat-list-item>\r\n      <mat-list-item> Climate: {{planet.climate}} </mat-list-item>\r\n      <mat-list-item> Gravity: {{planet.gravity}} </mat-list-item>\r\n      <mat-list-item> Terrain: {{planet.terrain}} </mat-list-item>\r\n      <mat-list-item> Surface water: {{planet.surface_water}} </mat-list-item>\r\n      <mat-list-item> Population: {{planet.population}} </mat-list-item>\r\n    </mat-list>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/planets/planet-details/planet-details.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/planets/planet-details/planet-details.component.ts ***!
  \********************************************************************/
/*! exports provided: PlanetDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetDetailsComponent", function() { return PlanetDetailsComponent; });
/* harmony import */ var _services_planets_manager_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/planets-manager.service */ "./src/app/planets/services/planets-manager.service.ts");
/* harmony import */ var _services_planets_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/planets-api.service */ "./src/app/planets/services/planets-api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlanetDetailsComponent = /** @class */ (function () {
    // planet: IPlanet = new IPlanet();
    function PlanetDetailsComponent(route, router, planetsManager, planetsApiService) {
        this.route = route;
        this.router = router;
        this.planetsManager = planetsManager;
        this.planetsApiService = planetsApiService;
    }
    PlanetDetailsComponent.prototype.ngOnInit = function () {
        this.planetId = +this.route.snapshot.paramMap.get('id');
        this.getPlanetData();
    };
    PlanetDetailsComponent.prototype.getPlanetData = function () {
        var _this = this;
        if (this.planetsManager.allPlanets.length) {
            this.planet = this.planetsManager.allPlanets[this.planetId];
        }
        else {
            var planet$ = this.planetsApiService.getPlanetById(this.planetId).subscribe(function (item) {
                _this.planet = item;
            });
        }
    };
    PlanetDetailsComponent.prototype.onBack = function () {
        this.router.navigate(['/planets']);
    };
    PlanetDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-planet-details',
            template: __webpack_require__(/*! ./planet-details.component.html */ "./src/app/planets/planet-details/planet-details.component.html"),
            styles: [__webpack_require__(/*! ./planet-details.component.css */ "./src/app/planets/planet-details/planet-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_planets_manager_service__WEBPACK_IMPORTED_MODULE_0__["PlanetsManagerService"],
            _services_planets_api_service__WEBPACK_IMPORTED_MODULE_1__["PlanetsApiService"]])
    ], PlanetDetailsComponent);
    return PlanetDetailsComponent;
}());



/***/ }),

/***/ "./src/app/planets/planets-browser/planets-browser.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/planets/planets-browser/planets-browser.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filter-input {\r\n    min-width: 150px;\r\n    /* max-width: 550px; */\r\n    /* max-width: 30%; */\r\n    max-width:50%;\r\n  }\r\n  \r\n  table , th, td{\r\n    border-bottom: 1px solid gray;\r\n  }\r\n  \r\n  table {\r\n  width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/planets/planets-browser/planets-browser.component.html":
/*!************************************************************************!*\
  !*** ./src/app/planets/planets-browser/planets-browser.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding: 15px\">\r\n\r\n  <mat-card>\r\n    <p style=\"color:red; border-bottom: 1 dashed red\">\r\n      {{planetsOnServerAmmount? null : \"Attempting connect to the server...\"}}\r\n    </p>\r\n    <p>\r\n      There is {{planetsOnServerAmmount ? planetsOnServerAmmount : \"[...calculating...]\"}} planets in data-base.\r\n    </p>\r\n    <p>\r\n      Pick one from the list to see its details. You can also filter them out by name.\r\n    </p>\r\n    <p>\r\n      <mat-progress-bar mode=\"determinate\" [value]='progressBarValue'></mat-progress-bar>\r\n    </p>\r\n  </mat-card>\r\n\r\n  <mat-divider></mat-divider>\r\n  <mat-card>\r\n    <mat-form-field class=\"filter-input\">\r\n      <input matInput placeholder=\"planet name\" value=\"\" [(ngModel)]=\"filterInputValue\">\r\n    </mat-form-field>\r\n\r\n    <table *ngIf='allPlanets.length' mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n      <ng-container matColumnDef=\"nr\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>nr</th>\r\n        <td mat-cell *matCellDef=\"let row\">\r\n          <!-- <a [routerLink]=\"['planets', row.appId]\"> {{row.appId}}</a> -->\r\n          <a [routerLink]=\"[row.appId]\"> {{row.appId}}</a>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"name\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> name </th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"population\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> population </th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.population}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"climate\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> climate </th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.climate}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"gravity\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> gravity </th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.gravity}} </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </tr>\r\n    </table>\r\n\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/planets/planets-browser/planets-browser.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/planets/planets-browser/planets-browser.component.ts ***!
  \**********************************************************************/
/*! exports provided: PlanetsBrowserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetsBrowserComponent", function() { return PlanetsBrowserComponent; });
/* harmony import */ var _services_planets_manager_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/planets-manager.service */ "./src/app/planets/services/planets-manager.service.ts");
/* harmony import */ var _services_planets_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/planets-api.service */ "./src/app/planets/services/planets-api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlanetsBrowserComponent = /** @class */ (function () {
    function PlanetsBrowserComponent(planetsApiService, planetsManager) {
        this.planetsApiService = planetsApiService;
        this.planetsManager = planetsManager;
        this.allPlanets = [];
        this.displayedColumns = ['nr', 'name', 'population', 'climate', 'gravity'];
        this.progressBarValue = 0;
        this._filterInputValue = '';
    }
    Object.defineProperty(PlanetsBrowserComponent.prototype, "filterInputValue", {
        get: function () {
            return this._filterInputValue;
        },
        set: function (inputValue) {
            var _this = this;
            this._filterInputValue = inputValue;
            var filtredData = this.allPlanets.filter(function (item) { return item.name.toLowerCase().includes(_this._filterInputValue); });
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](filtredData);
        },
        enumerable: true,
        configurable: true
    });
    PlanetsBrowserComponent.prototype.ngOnInit = function () {
        this.allPlanets = this.planetsManager.allPlanets;
        this.planetsOnServerAmmount = this.planetsManager.planetsOnServerAmmount;
        if (this.allPlanets.length) {
            this.updateTableData(this.allPlanets);
        }
        else {
            this.planetsManager.getAllPlanets();
            this.subscribeToIncomingData();
        }
    };
    PlanetsBrowserComponent.prototype.subscribeToIncomingData = function () {
        var _this = this;
        var planetsData$ = this.planetsManager.planetsDataPackage$.subscribe(function (item) {
            _this.updateTableData(item);
            planetsData$.unsubscribe();
        });
        var planetsAmmount$ = this.planetsManager.fetchingProgress$.subscribe(function (data) {
            _this.planetsOnServerAmmount = data.planetsTotalAmmount;
            _this.progressBarValue = data.planetsFetched * 100 / data.planetsTotalAmmount;
        });
    };
    PlanetsBrowserComponent.prototype.updateTableData = function (allPlanetsData) {
        this.allPlanets = allPlanetsData;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.allPlanets);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], PlanetsBrowserComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], PlanetsBrowserComponent.prototype, "sort", void 0);
    PlanetsBrowserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'planets-browser',
            template: __webpack_require__(/*! ./planets-browser.component.html */ "./src/app/planets/planets-browser/planets-browser.component.html"),
            styles: [__webpack_require__(/*! ./planets-browser.component.css */ "./src/app/planets/planets-browser/planets-browser.component.css")]
        }),
        __metadata("design:paramtypes", [_services_planets_api_service__WEBPACK_IMPORTED_MODULE_1__["PlanetsApiService"], _services_planets_manager_service__WEBPACK_IMPORTED_MODULE_0__["PlanetsManagerService"]])
    ], PlanetsBrowserComponent);
    return PlanetsBrowserComponent;
}());

// pagination made by example from: https://material.angular.io/components/table/examples


/***/ }),

/***/ "./src/app/planets/services/planets-api.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/planets/services/planets-api.service.ts ***!
  \*********************************************************/
/*! exports provided: PlanetsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetsApiService", function() { return PlanetsApiService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlanetsApiService = /** @class */ (function () {
    function PlanetsApiService(http) {
        this.http = http;
        this.requestURL = 'https://swapi.co/api/planets';
    }
    PlanetsApiService.prototype.getNextPlanets = function (url) {
        return this.http.get(url);
    };
    PlanetsApiService.prototype.getPlanetById = function (id) {
        var url = this.requestURL + ("/" + id);
        return this.http.get(url);
    };
    PlanetsApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], PlanetsApiService);
    return PlanetsApiService;
}());

;


/***/ }),

/***/ "./src/app/planets/services/planets-manager.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/planets/services/planets-manager.service.ts ***!
  \*************************************************************/
/*! exports provided: PlanetsManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetsManagerService", function() { return PlanetsManagerService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _planets_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./planets-api.service */ "./src/app/planets/services/planets-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlanetsManagerService = /** @class */ (function () {
    function PlanetsManagerService(planetsApiService) {
        this.planetsApiService = planetsApiService;
        this.allPlanets = [];
        this.planetsDataPackage$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.fetchingProgress$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    PlanetsManagerService.prototype.addIdPropertyForEachInArray = function (array) {
        array.forEach(function (item, index) {
            item.appId = index + 1;
        });
    };
    PlanetsManagerService.prototype.getAllPlanets = function () {
        if (this.allPlanets.length === this.planetsOnServerAmmount)
            return;
        var initialUrl = this.planetsApiService.requestURL;
        this.downloadNextPlanets(initialUrl);
    };
    PlanetsManagerService.prototype.downloadNextPlanets = function (url) {
        var _this = this;
        var subscription = this.planetsApiService.getNextPlanets(url).subscribe(function (incomingData) {
            (_a = _this.allPlanets).push.apply(_a, incomingData.results);
            _this.setProgressData(incomingData.count, _this.allPlanets.length);
            url = incomingData.next;
            var _a;
        }, function () { return console.log("error while fetching data from server..."); }, function () {
            if (url)
                _this.downloadNextPlanets(url);
            else {
                subscription.unsubscribe();
                _this.informSubscribers();
            }
        });
    };
    ;
    PlanetsManagerService.prototype.setProgressData = function (ammount, planetsFetched) {
        var planetsTotalAmmount = +ammount;
        this.planetsOnServerAmmount = planetsTotalAmmount;
        this.fetchingProgress$.next({ planetsTotalAmmount: planetsTotalAmmount, planetsFetched: planetsFetched });
    };
    PlanetsManagerService.prototype.informSubscribers = function () {
        this.addIdPropertyForEachInArray(this.allPlanets);
        this.planetsDataPackage$.next(this.allPlanets);
    };
    PlanetsManagerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_planets_api_service__WEBPACK_IMPORTED_MODULE_2__["PlanetsApiService"]])
    ], PlanetsManagerService);
    return PlanetsManagerService;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-title>\r\n    Welcome\r\n  </mat-card-title>\r\n  <mat-card-subtitle>\r\n    On this simple planets-browser page.\r\n  </mat-card-subtitle>\r\n  <mat-card-content>\r\n    <p>\r\n      There is only 8 planets in our Solar System\r\n      <span style=\"opacity: 0.5;\">(till 2006 it used to be 9 xD )</span>.\r\n    </p>\r\n    <p>\r\n      So in order to expand content of this site, its showing other planets...\r\n    </p>\r\n    <p>\r\n      ...Star-Wars Universe`s planets, to be exact :)\r\n    </p>\r\n    <mat-divider></mat-divider>\r\n    <p style=\"margin-top: 50px\">\r\n      One last thing... </p>\r\n    <p>\r\n      Kind of obvious, but still should be said explictly, as this is kind of skill-presentation page.\r\n    </p>\r\n    <p>\r\n      You can always navigate through navigation bar above, or through changing url. Your choice :)\r\n    </p>\r\n    <mat-divider></mat-divider>\r\n    <p style=\"margin-top: 60px\">\r\n      Enjoy browsing :)\r\n    </p>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\proj\planets-browser\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map