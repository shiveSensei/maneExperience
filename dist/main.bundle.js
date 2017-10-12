webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\r\n    <li><a routerLink=\"\">Home</a></li>\r\n    <li><a routerLink=\"/user\">Users</a></li>\r\n    <li><a routerLink=\"/event\">Events</a></li>\r\n</ul>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_user_user_component__ = __webpack_require__("../../../../../src/app/components/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_event_event_component__ = __webpack_require__("../../../../../src/app/components/event/event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_7__components_user_user_component__["a" /* UserComponent */] },
    { path: 'event', component: __WEBPACK_IMPORTED_MODULE_8__components_event_event_component__["a" /* EventComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_event_event_component__["a" /* EventComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__data_service__["a" /* DataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/event/event.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/event/event.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n  <link rel=\"stylesheet\" href=\"https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css\">\r\n  <script src=\"https://code.jquery.com/jquery-1.11.3.min.js\"></script>\r\n  <script src=\"https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js\"></script>\r\n  <style>\r\n    table {\r\n        font-family: arial, sans-serif;\r\n        border-collapse: collapse;\r\n        width: 100%;\r\n    }\r\n\r\n    td, th {\r\n        border: 1px solid #dddddd;\r\n        text-align: left;\r\n        padding: 8px;\r\n    }\r\n\r\n    tr:nth-child(even) {\r\n        background-color: #dddddd;\r\n    }\r\n  </style>\r\n</head>\r\n<body>\r\n    <br>\r\n    <font size=\"6\">Events</font>\r\n    <br>\r\n  <table>\r\n    <tr>\r\n      <th>Title</th>\r\n      <th>Description</th>\r\n      <th>Track</th>\r\n      <th>Location</th>  \r\n      <th>Date</th>\r\n      <th>Time</th>\r\n      <th></th>\r\n    </tr>\r\n    <tr *ngFor=\"let event of events\">\r\n      <td>{{ event.title }}</td>\r\n      <td>{{ event.description }}</td>\r\n      <td>{{ event.track }}</td>\r\n      <td>{{ event.location }}</td>\r\n      <td>{{ event.date }}</td>\r\n      <td>{{ event.time }}</td>   \r\n      <td>\r\n        <div>\r\n          <a href=\"#editEventPopup\" data-rel=\"popup\" class=\"ui-btn ui-btn-inline ui-corner-all ui-icon-check ui-btn-icon-left\">Edit</a>\r\n          <div data-role=\"popup\" id=\"editEventPopup\" class=\"ui-content\" style=\"min-width:250px;\">\r\n            <form method=\"post\" action=\"/action_page_post.php\">\r\n              <div>\r\n                <h3>Edit Event</h3>\r\n                <label for=\"title\" class=\"ui-hidden-accessible\">Title:</label>\r\n                <input type=\"text\" name=\"title\" id=\"usrnm\" placeholder=\"Title\" [(ngModel)]=\"title\">\r\n                <label for=\"description\" class=\"ui-hidden-accessible\">Description:</label>\r\n                <input type=\"text\" name=\"description\" id=\"usrnm\" placeholder=\"Description\" [(ngModel)]=\"description\">\r\n      \r\n                <label for=\"title\" class=\"ui-hidden-accessible\">Location:</label>\r\n                <input type=\"text\" name=\"location\" id=\"usrnm\" placeholder=\"Location\" [(ngModel)]=\"location\">\r\n                <label for=\"title\" class=\"ui-hidden-accessible\">Date:</label>\r\n                <input type=\"date\" name=\"date\" id=\"usrnm\" placeholder=\"Date\" [(ngModel)]=\"date\">\r\n                <label for=\"datetime\" class=\"ui-hidden-accessible\">Time:</label>\r\n                <input type=\"text\" name=\"time\" id=\"usrnm\" placeholder=\"Time\" [(ngModel)]=\"time\">\r\n                  <form>\r\n                    <select name=\"track\" [(ngModel)]=\"track\">\r\n                      <option value=\"Track\" disabled selected>Track</option>\r\n                      <option value=\"Resident\">Resident</option>\r\n                      <option value=\"Commuter\">Commuter</option>\r\n                      <option value=\"Both\">Both</option>\r\n                    </select>\r\n                  </form>\r\n                <input type=\"submit\" data-inline=\"true\" value=\"Submit\" (click)=\"updateEvent()\" onclick=\"location.reload()\">\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n        <!--<a href=\"\" (click)=\"\">Edit </a>| -->\r\n        <a href=\"\" (click)=\"deleteEvent(Event)\">Delete </a>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n<br><br>\r\n<div>\r\n  <a href=\"#createEventPopup\" data-rel=\"popup\" class=\"\">Create Event</a>\r\n  <div data-role=\"popup\" id=\"createEventPopup\" class=\"ui-content\" style=\"min-width:250px;\">\r\n    <form method=\"post\" action=\"/action_page_post.php\">\r\n      <div>\r\n        <h3>Edit Event</h3>\r\n        <label for=\"title\" class=\"ui-hidden-accessible\">Title:</label>\r\n        <input type=\"text\" name=\"title\" id=\"usrnm\" placeholder=\"Title\" [(ngModel)]=\"title\">\r\n        <label for=\"description\" class=\"ui-hidden-accessible\">Description:</label>\r\n        <input type=\"text\" name=\"description\" id=\"usrnm\" placeholder=\"Description\" [(ngModel)]=\"description\">\r\n\r\n        <label for=\"title\" class=\"ui-hidden-accessible\">Location:</label>\r\n        <input type=\"text\" name=\"location\" id=\"usrnm\" placeholder=\"Location\" [(ngModel)]=\"location\">\r\n        <label for=\"title\" class=\"ui-hidden-accessible\">Date:</label>\r\n        <input type=\"date\" name=\"date\" id=\"usrnm\" placeholder=\"Date\" [(ngModel)]=\"date\">\r\n        <label for=\"datetime\" class=\"ui-hidden-accessible\">Time:</label>\r\n        <input type=\"text\" name=\"time\" id=\"usrnm\" placeholder=\"Time\" [(ngModel)]=\"time\">\r\n          <form>\r\n            <select name=\"track\" [(ngModel)]=\"track\">\r\n              <option value=\"Track\" disabled selected>Track</option>\r\n              <option value=\"Resident\">Resident</option>\r\n              <option value=\"Commuter\">Commuter</option>\r\n              <option value=\"Both\">Both</option>\r\n            </select>\r\n          </form>\r\n        <input type=\"submit\" data-inline=\"true\" value=\"Submit\" (click)=\"createEvent()\" onclick=\"location.reload()\">\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n</body>\r\n</html>"

/***/ }),

/***/ "../../../../../src/app/components/event/event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventComponent = (function () {
    function EventComponent(_dataService) {
        var _this = this;
        this._dataService = _dataService;
        this._dataService.getEvents()
            .subscribe(function (res) { return _this.events = res; });
    }
    EventComponent.prototype.ngOnInit = function () {
    };
    EventComponent.prototype.createUser = function () {
        this.message = {
            title: this.title,
            track: this.track,
            description: this.description,
            location: this.location,
            date: this.date,
            time: this.time
        };
        this._dataService.addEvent(this.message).subscribe();
    };
    EventComponent.prototype.updateEvent = function (event) {
        if (this.title != '') {
            event.title = this.title;
        }
        if (this.description != '') {
            event.description = this.description;
        }
        if (this.location != '') {
            event.location = this.location;
        }
        if (this.time != '') {
            event.time = this.time;
        }
        event.track = this.track;
        event.date = this.date;
        this._dataService.updateEvent(event).subscribe();
    };
    /*getUser() {
      this.message =
      this._dataService.getUser().subscribe();
    }*/
    EventComponent.prototype.deleteUser = function (event) {
        this._dataService.deleteEvent(event).subscribe();
    };
    return EventComponent;
}());
EventComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-event',
        template: __webpack_require__("../../../../../src/app/components/event/event.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/event/event.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], EventComponent);

var _a;
//# sourceMappingURL=event.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n  <link rel=\"stylesheet\" href=\"https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css\">\r\n  <script src=\"https://code.jquery.com/jquery-1.11.3.min.js\"></script>\r\n  <script src=\"https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js\"></script>\r\n  <style>\r\n    table {\r\n        font-family: arial, sans-serif;\r\n        border-collapse: collapse;\r\n        width: 100%;\r\n    }\r\n    td, th {\r\n        border: 1px solid #dddddd;\r\n        text-align: left;\r\n        padding: 8px;\r\n    }\r\n    tr:nth-child(even) {\r\n        background-color: #dddddd;\r\n    }\r\n  </style>\r\n</head>\r\n<body>\r\n  <br>\r\n  <font size=\"6\">Users</font>\r\n  <br>\r\n  <table>\r\n    <tr>\r\n      <th>Name</th>\r\n      <th>W Number</th>\r\n      <th>Admin</th>\r\n      <th>Date</th>\r\n      <th></th>\r\n    </tr>\r\n    <tr *ngFor=\"let user of users\">\r\n      <td>{{ user.name }}</td>\r\n      <td>{{ 'W' + user.wnum }}</td>\r\n      <td>{{ user.isAdmin }}</td>\r\n      <td>{{ user.date }}</td>\r\n      <td> \r\n        <div>\r\n            <a href=\"#editPopup\" data-rel=\"popup\" class=\"\">Edit</a>\r\n              <div data-role=\"popup\" id=\"editPopup\" class=\"ui-content\" style=\"min-width:250px;\">\r\n                <form>\r\n                  <div>\r\n                    <h3>Edit User</h3>\r\n                    <label for=\"name\" class=\"ui-hidden-accessible\">Username:</label>\r\n                    <input type=\"text\" name=\"user\" id=\"usrnm\" placeholder=\"Name\" [(ngModel)]=\"name\">\r\n                    <label for=\"password\" class=\"ui-hidden-accessible\">Password:</label>\r\n                    <input type=\"password\" name=\"passw\" id=\"pswd\" placeholder=\"Password\" [(ngModel)]=\"password\">\r\n                    <label for=\"wnum\" class=\"ui-hidden-accessible\">W number</label>\r\n                    <input type=\"text\" name=\"wnum\" id=\"wnumbr\" placeholder=\"W Number\" [(ngModel)]=\"wnum\">\r\n                    <label for=\"log\">Admin</label>\r\n                    <input type=\"checkbox\" name=\"admin\" id=\"log\" value=\"1\" data-mini=\"true\" [(ngModel)]=\"isAdmin\">\r\n                    <input type=\"submit\" data-inline=\"true\" value=\"Submit\" (click)=\"updateUser()\" onclick=\"location.reload()\">\r\n                  </div>\r\n                </form>\r\n              </div>\r\n          </div>\r\n        <!--<a href=\"\" (click)=\"updateUser(user)\">Edit </a> | -->\r\n        <a href=\"\" (click)=\"deleteUser(user)\">Delete </a>\r\n      </td>\r\n    </tr>\r\n  </table><br>\r\n  <div style=\"text-align:center;\">\r\n    <a href=\"#createPopup\" data-rel=\"popup\" class=\"\">Create User</a>\r\n      <div data-role=\"popup\" id=\"createPopup\" class=\"ui-content\" style=\"min-width:250px;\">\r\n        <form>\r\n          <div>\r\n            <h3>Create User</h3>\r\n            <label for=\"name\" class=\"ui-hidden-accessible\">Username:</label>\r\n            <input type=\"text\" name=\"user\" id=\"usrnm\" placeholder=\"Name\" [(ngModel)]=\"name\">\r\n            <label for=\"password\" class=\"ui-hidden-accessible\">Password:</label>\r\n            <input type=\"password\" name=\"passw\" id=\"pswd\" placeholder=\"Password\" [(ngModel)]=\"password\">\r\n            <label for=\"wnum\" class=\"ui-hidden-accessible\">W number</label>\r\n            <input type=\"text\" name=\"user\" id=\"usrnm\" placeholder=\"W Number\" [(ngModel)]=\"wnum\">\r\n            <label for=\"log\">Admin</label>\r\n            <input type=\"checkbox\" name=\"admin\" id=\"log\" value=\"1\" data-mini=\"true\" [(ngModel)]=\"isAdmin\">\r\n            <input type=\"submit\" data-inline=\"true\" value=\"Submit\" (click)=\"createUser()\" onclick=\"location.reload()\">\r\n          </div>\r\n        </form>\r\n      </div>\r\n  </div>\r\n<br><br>\r\n<!--<font size=5>Create/Edit User</font>\r\n<form (submit)=\"createUser()\">\r\n    <label>Name:</label><br>\r\n    <input name=\"name\" type=\"text\" [(ngModel)]=\"name\"><br>\r\n    <label>W-Number:</label><br>\r\n    <input name=\"wnum\" type=\"text\" [(ngModel)]=\"wnum\"><br>\r\n    <label>Password:</label><br>\r\n    <input name=\"password\" type=\"password\" [(ngModel)]=\"password\"><br>\r\n    <label>Admin:</label><br>\r\n    <input name=\"isAdmin\" type=\"radio\" value=\"true\" [(ngModel)]=\"isAdmin\">Yes<br>\r\n    <input name=\"isAdmin\" type=\"radio\" value=\"false\" [(ngModel)]=\"isAdmin\">No<br>\r\n    <input type=\"submit\" value=\"Submit\" onclick=\"doStuff()\" onclick=\"location.reload()\" >\r\n</form>-->\r\n\r\n</body>\r\n</html>\r\n\r\n<!-- Test Code -->\r\n<!--\r\n<ul>\r\n  <li *ngFor=\"let user of users\"> {{ user.name + '  W#' + user.wnum}} \r\n      <a href=\"\" (click)=\"updateUser(user)\">Edit</a>|\r\n      <a href=\"\" (click)=\"deleteUser(user)\">Delete</a>\r\n  </li>\r\n</ul>-->"

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = (function () {
    function UserComponent(_dataService) {
        var _this = this;
        this._dataService = _dataService;
        this._dataService.getUsers()
            .subscribe(function (res) { return _this.users = res; });
    }
    UserComponent.prototype.ngOnInit = function () {
        this.isAdmin = false;
    };
    UserComponent.prototype.createUser = function () {
        this.message = {
            name: this.name,
            wnum: this.wnum,
            password: this.password,
            isAdmin: this.isAdmin
        };
        this._dataService.addUser(this.message).subscribe();
    };
    UserComponent.prototype.updateUser = function (user) {
        if (this.name != '') {
            user.name = this.name;
        }
        if (this.wnum != '') {
            user.wnum = this.wnum;
        }
        if (this.password != '') {
            user.password = this.password;
        }
        user.isAdmin = this.isAdmin;
        this._dataService.updateUser(user).subscribe();
    };
    UserComponent.prototype.getUser = function () {
        this.message =
            this._dataService.getUser().subscribe();
    };
    UserComponent.prototype.deleteUser = function (user) {
        console.log(user.name);
        this._dataService.deleteUser(user).subscribe();
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/components/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], UserComponent);

var _a;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    //------------- Login Authentication
    DataService.prototype.verifyLogin = function (username, password) {
        var _this = this;
        return this.http.post("/api/users/authenticate", username, password)
            .map(function (result) { return _this.result = result.json(); });
    };
    //------------- User CRUD calls
    DataService.prototype.getUsers = function () {
        var _this = this;
        return this.http.get("/api/users/getAll")
            .map(function (result) { return _this.result = result.json(); });
    };
    DataService.prototype.getUser = function () {
        var _this = this;
        return this.http.get("/api/users/getUser")
            .map(function (result) { return _this.result = result.json(); });
    };
    DataService.prototype.addUser = function (newUser) {
        return this.http.post("/api/users/addUser", newUser)
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.updateUser = function (user) {
        return this.http.put("/api/users/updateUser", user)
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.deleteUser = function (user) {
        return this.http.post("/api/users/deleteUser", user)
            .map(function (res) { return res.json(); });
    };
    //------------- Event CRUD calls
    DataService.prototype.getEvents = function () {
        var _this = this;
        return this.http.get("/api/events/getAll")
            .map(function (result) { return _this.result = result.json().data; });
    };
    DataService.prototype.getEvent = function () {
        var _this = this;
        return this.http.get("/api/events") //no function for this operation
            .map(function (result) { return _this.result = result.json().data; });
    };
    DataService.prototype.addEvent = function (newUser) {
        return this.http.post("/api/events/addEvent", newUser)
            .map(function (res) { return res.json().data; });
    };
    DataService.prototype.updateEvent = function (user) {
        return this.http.put("/api/events/updateEvent", event)
            .map(function (res) { return res.json().data; });
    };
    DataService.prototype.deleteEvent = function (event) {
        return this.http.post("/api/events/removeEvent", event)
            .map(function (res) { return res.json().data; });
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map