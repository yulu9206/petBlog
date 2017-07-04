webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

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

module.exports = "\n\n<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Pets Blog</a>\n    </div>\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a href=\"/\">Home</a></li>\n        <li class=\"active\"><a href=\"/blogs\">Blogs</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"active\"><a href=\"/profile\" *ngIf=\"_authService.isAuthenticated()\">Profile</a></li>\n        <li class=\"active\"><a href=\"#\" (click)=\"_authService.login()\" *ngIf=\"!_authService.isAuthenticated()\">Login</a></li>\n        <li class=\"active\"><a href=\"#\" (click)=\"_authService.logout()\" *ngIf=\"_authService.isAuthenticated()\">Logout</a></li>\n      </ul>\n    </div><!--/.nav-collapse -->\n  </div>\n</nav>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n\n    <!-- Bootstrap core JavaScript\n    ================================================== -->\n    <!-- Placed at the end of the document so the pages load faster -->\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\n    <script>window.jQuery || document.write('<script src=\"../../assets/js/vendor/jquery.min.js\"><\\/script>')</script>\n    <script src=\"../../dist/js/bootstrap.min.js\"></script>\n    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->\n    <script src=\"../../assets/js/ie10-viewport-bug-workaround.js\"></script>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent(_authService) {
        this._authService = _authService;
        _authService.handleAuthentication();
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_show_show_component__ = __webpack_require__("../../../../../src/app/components/show/show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_new_new_component__ = __webpack_require__("../../../../../src/app/components/new/new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_auth_guard__ = __webpack_require__("../../../../../src/app/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_search_search_component__ = __webpack_require__("../../../../../src/app/components/search/search.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















// import { AUTH_PROVIDERS} from 'angular2-jwt';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_show_show_component__["a" /* ShowComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_new_new_component__["a" /* NewComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_search_search_component__["a" /* SearchComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_10__auth_auth_guard__["a" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_12__http_service__["a" /* HttpService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_guard__ = __webpack_require__("../../../../../src/app/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_show_show_component__ = __webpack_require__("../../../../../src/app/components/show/show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_new_new_component__ = __webpack_require__("../../../../../src/app/components/new/new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_search_search_component__ = __webpack_require__("../../../../../src/app/components/search/search.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_3__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_auth_guard__["a" /* AuthGuardService */]] },
    { path: 'new', component: __WEBPACK_IMPORTED_MODULE_7__components_new_new_component__["a" /* NewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_auth_guard__["a" /* AuthGuardService */]] },
    { path: 'blogs', component: __WEBPACK_IMPORTED_MODULE_5__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_auth_guard__["a" /* AuthGuardService */]] },
    // { path: 'edit/:id', component: EditComponent},
    { path: 'show/:id', component: __WEBPACK_IMPORTED_MODULE_6__components_show_show_component__["a" /* ShowComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_8__components_search_search_component__["a" /* SearchComponent */] },
    { path: '**', redirectTo: '' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(_authService, router) {
        this._authService = _authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this._authService.isAuthenticated()) {
            this.router.navigate(['']);
            console.log('auth guard blocked');
            return false;
        }
        console.log('auth guard passed');
        return true;
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuardService);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js__ = __webpack_require__("../../../../auth0-js/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_auth0_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import {tokenNotExpired} from 'angular2-jwt';
// import {Auth0Lock} from 'auth0-lock';
// declare var Auth0Lock: any;
var AuthService = (function () {
    function AuthService(router) {
        //   this.lock.on("isAuthenticated", function(authResult) {
        // // Use the token in authResult to getUserInfo() and save it to localStorage
        //     this.lock.getUserInfo(authResult.accessToken, function(error, profile) {
        //       if (error) {
        //         console.log(error);
        //         return;
        //       }
        this.router = router;
        this.auth0 = new __WEBPACK_IMPORTED_MODULE_3_auth0_js__["WebAuth"]({
            clientID: 'e6og807SOE0XxmIUaMt0sJeE7T2waobR',
            domain: 'yulu9206.auth0.com',
            responseType: 'token id_token',
            audience: 'https://yulu9206.auth0.com/userinfo',
            redirectUri: 'http://localhost:8000',
            scope: 'openid profile',
        });
        //       localStorage.setItem('accessToken', authResult.accessToken);
        //       localStorage.setItem('profile', JSON.stringify(profile));
        //     });
        //   });
        // }  
        // public login(): void {
        //   this.lock.show();
        // }
        // public isAuthenticated(){
        //   return tokenNotExpired();
        // }
        // public logout(): void {
        //   // Remove tokens and expiry time from localStorage
        //   localStorage.removeItem('profile');
        //   localStorage.removeItem('id_token');
        //   // localStorage.removeItem('expires_at');
        //   // Go back to the home route
        //   this.router.navigate(['/']);
    }
    AuthService.prototype.login = function () {
        this.auth0.authorize();
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this.setSession(authResult);
                _this.router.navigate(['/home']);
            }
            else if (err) {
                _this.router.navigate(['/home']);
                console.log(err);
            }
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        this.router.navigate(['/']);
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // access token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    };
    AuthService.prototype.getProfile = function (cb) {
        var accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            throw new Error('Access token must exist to fetch profile');
        }
        var self = this;
        this.auth0.client.userInfo(accessToken, function (err, profile) {
            if (profile) {
                self.userProfile = profile;
            }
            cb(err, profile);
        });
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AuthService);

var _a;
// handleAuthentication - looks for an authentication result in the URL hash and processes it with the parseHash method from auth0.js
// setSession - sets the user's access_token, id_token, and a time at which the access_token will expire
// logout - removes the user's tokens from browser storage
// isAuthenticated - checks whether the expiry time for the access_token has passed 
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--<div class=\"well\">\n    <div class=\"media\">\n        <a class=\"pull-left\" href=\"#\">\n            <img class=\"media-object\" src=\"http://www.tutorialspoint.com//scripts/img/logo-footer.png\">\n        </a>\n        <div class=\"media-body\">\n            <h4 class=\"media-heading\">Receta 1</h4>\n            <p class=\"text-right\">By Sairamkrishna</p>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis dolor, in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. Aliquam in felis sit amet augue.</p>\n            <ul class=\"list-inline list-unstyled\">\n                <li><span><i class=\"glyphicon glyphicon-calendar\"></i> 2 days, 8 hours </span></li>\n                <li>|</li>\n                <span><i class=\"glyphicon glyphicon-comment\"></i> 2 comments</span>\n                <li>|</li>\n                <li>\n                    <span class=\"glyphicon glyphicon-star\"></span>\n                    <span class=\"glyphicon glyphicon-star\"></span>\n                    <span class=\"glyphicon glyphicon-star\"></span>\n                    <span class=\"glyphicon glyphicon-star\"></span>\n                    <span class=\"glyphicon glyphicon-star-empty\"></span>\n                </li>\n                <li>|</li>\n                <li>\n                     Use Font Awesome http://fortawesome.github.io/Font-Awesome/ -->\n                    <!--<span><i class=\"fa fa-facebook-square\"></i></span>\n                    <span><i class=\"fa fa-twitter-square\"></i></span>\n                    <span><i class=\"fa fa-google-plus-square\"></i></span>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>-->\n<div class=\"well\" *ngFor=\"let topic of topics\">\n    <div class=\"media\">\n        <h4 class=\"media-heading\">{{topic.topic}}</h4>\n        <p class=\"text-right\">{{topic.authorName}}</p>\n        <ul class=\"list-inline list-unstyled\">\n            <li><span><i class=\"glyphicon glyphicon-calendar\"></i>{{topic.createdAt|date:'longDate'}}</span></li>\n            <li>|</li>\n            <span><i class=\"glyphicon glyphicon-comment\"></i> 0 comments</span>\n            <li>|</li>\n            <li>\n                <span class=\"glyphicon glyphicon-star\"></span>\n                <span class=\"glyphicon glyphicon-star\"></span>\n                <span class=\"glyphicon glyphicon-star\"></span>\n                <span class=\"glyphicon glyphicon-star\"></span>\n                <span class=\"glyphicon glyphicon-star-empty\"></span>\n            </li>\n            <li>|</li>\n            <li>\n                <!-- Use Font Awesome http://fortawesome.github.io/Font-Awesome/ -->\n                <span><i class=\"fa fa-facebook-square\"></i></span>\n                <span><i class=\"fa fa-twitter-square\"></i></span>\n                <span><i class=\"fa fa-google-plus-square\"></i></span>\n            </li>\n        </ul>        \n    </div>\n</div>\n<form role = \"form\"  #topicForm=\"ngForm\" (submit)=\"onSubmit(topicForm)\">\n   <div class = \"form-group\">\n      <label for = \"post\">Post about pets here:</label>\n      <textarea class = \"form-control\" rows = \"3\" #topic=\"ngModel\" name=\"topic\" [(ngModel)]='newtopic.topic'></textarea>\n   </div>\n   <button type = \"submit\" class = \"btn btn-primary\">Post</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(_httpService, _router, _authService) {
        this._httpService = _httpService;
        this._router = _router;
        this._authService = _authService;
        this.topics = null;
        this.errors = null;
        this.profile = null;
        this.newtopic = { topic: '', authorName: '' };
    }
    DashboardComponent.prototype.getTopics = function () {
        var _this = this;
        this._httpService.getTopics()
            .then(function (data) {
            console.log("Getting topics", data);
            if (data.message == "Success") {
                _this.topics = data.topics;
            }
            else {
                _this.errors = "There was a problem fetching topics";
            }
        })
            .catch(function (err) {
            console.log("Got an error by doing getTopics", err);
        });
    };
    DashboardComponent.prototype.onSubmit = function (form) {
        if (!form.valid) {
            return;
        }
        this.createTopic();
    };
    DashboardComponent.prototype.createTopic = function () {
        var _this = this;
        this.newtopic.authorName = this.profile.nickname;
        console.log('new compo is trying to send', this.newtopic);
        this._httpService.createTopic(this.newtopic)
            .then(function (data) {
            console.log("After creating a topic!", data);
            _this.newtopic = { topic: '', authorName: '' };
        })
            .catch(function (err) {
            console.log("Something went wrong with the creation!", err);
        });
    };
    // delete(id){
    //   this._httpService.deleteTopic(id)
    //   .then((data)=>{
    //     console.log("data from deleting", data);
    //     if(data.message == "Success"){
    //       this.getTopics();
    //     }
    //   })
    //   .catch((err)=> {
    //     console.log("error from deleting", err);
    //   })
    // }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getTopics();
        console.log('userProfile is', this._authService.userProfile);
        if (this._authService.userProfile) {
            this.profile = this._authService.userProfile;
        }
        else {
            this._authService.getProfile(function (err, profile) {
                _this.profile = profile;
                console.log('profile is', _this.profile);
            });
        }
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

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

module.exports = "\n<section class=\"jumbotron text-center\">\n    <div class=\"container\">\n        <h1 class=\"jumbotron-heading\">Pets Available for Adoption</h1>\n        <p class=\"lead text-muted\">Data supported by Petfinder API</p>\n        <a href=\"/search\" class=\"btn btn-primary\">Find a Pet to Adopt</a>\n    </div>\n</section>\n<!--<div style=\"background: url('girl.jpg') no-repeat left center; background-size: cover;\">HI</div>-->\n<!--<div class=\"item\" >\n  <div class=\"container\">\n    <div class=\"carousel-caption\">\n      <h1>Another example headline.</h1>\n      <p class=\"lead\">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget.</p>\n      <a class=\"btn btn-large btn-primary\" href=\"#\">Learn more</a>\n    </div>\n  </div>\n</div>-->\n\n<div class=\"album text-muted\">\n    <div class=\"container\">\n    <div class=\"row\">\n        <div class=\"card\" *ngFor=\"let pet of pets\" style=\"display:inline-block; margin:10px 30px\">\n            <img src=\"{{pet.media.photos[1].pn}}\" alt=\"Card image cap\" [routerLink]=\"['/show', pet.id]\">\n            <p class=\"card-text\">{{pet.name}}</p>\n        </div>\n    </div>\n    </div>\n</div>\n\n\n<!-- Bootstrap core JavaScript\n================================================== -->\n<!-- Placed at the end of the document so the pages load faster -->\n<script src=\"https://code.jquery.com/jquery-3.1.1.slim.min.js\" integrity=\"sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n\" crossorigin=\"anonymous\"></script>\n<script>window.jQuery || document.write('<script src=\"../../assets/js/vendor/jquery.min.js\"><\\/script>')</script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js\" integrity=\"sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb\" crossorigin=\"anonymous\"></script>\n<script src=\"../../assets/js/vendor/holder.min.js\"></script>\n<script>\n    $(function () {\n    Holder.addTheme(\"thumb\", { background: \"#55595c\", foreground: \"#eceeef\", text: \"Thumbnail\" });\n    });\n</script>\n<script src=\"../../dist/js/bootstrap.min.js\"></script>\n<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->\n<script src=\"../../assets/js/ie10-viewport-bug-workaround.js\"></script>\n{{pets|json}}\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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
    function HomeComponent(_authService, _httpService) {
        this._authService = _authService;
        this._httpService = _httpService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._httpService.getPets()
            .then(function (data) {
            console.log("Getting pets", data);
            _this.pets = data.pets;
        })
            .catch(function (err) {
            console.log("Got an error by doing getpets", err);
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/new/new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/new/new.component.html":
/***/ (function(module, exports) {

module.exports = "<!--{{profile|json}}-->\n<form role = \"form\"  #topicForm=\"ngForm\" (submit)=\"onSubmit(topicForm)\">\n   <div class = \"form-group\">\n      <label for = \"post\">Post about pets here:</label>\n      <textarea class = \"form-control\" rows = \"3\" #topic=\"ngModel\" name=\"topic\" [(ngModel)]='newtopic.topic'></textarea>\n   </div>\n   <button type = \"submit\" class = \"btn btn-primary\">Post</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/new/new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewComponent = (function () {
    function NewComponent(_httpService, _router, _authService) {
        this._httpService = _httpService;
        this._router = _router;
        this._authService = _authService;
        this.profile = null;
        this.errors = null;
        this.newtopic = { topic: '', authorName: '' };
    }
    NewComponent.prototype.onSubmit = function (form) {
        if (!form.valid) {
            return;
        }
        this.createTopic();
    };
    NewComponent.prototype.createTopic = function () {
        var _this = this;
        this.newtopic.authorName = this.profile.nickname;
        console.log('new compo is trying to send', this.newtopic);
        this._httpService.createTopic(this.newtopic)
            .then(function (data) {
            console.log("After creating a topic!", data);
            _this.newtopic = { topic: '', authorName: '' };
        })
            .catch(function (err) {
            console.log("Something went wrong with the creation!", err);
        });
    };
    NewComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('userProfile is', this._authService.userProfile);
        if (this._authService.userProfile) {
            this.profile = this._authService.userProfile;
        }
        else {
            this._authService.getProfile(function (err, profile) {
                _this.profile = profile;
                console.log('profile is', _this.profile);
            });
        }
    };
    return NewComponent;
}());
NewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-new',
        template: __webpack_require__("../../../../../src/app/components/new/new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/new/new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], NewComponent);

var _a, _b, _c;
//# sourceMappingURL=new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>User Profile</h3>\n<div class=\"panel panel-default profile-area\">\n  <div class=\"panel-heading\">\n    <h3>Profile</h3>\n  </div>\n  <div class=\"panel-body\">\n    <img src=\"{{profile?.picture}}\" class=\"avatar\" alt=\"avatar\">\n    <div>\n      <label><i class=\"glyphicon glyphicon-user\"></i> Nickname</label>\n      <h3 class=\"nickname\">{{ profile?.nickname }}</h3>\n    </div>\n    <pre class=\"full-profile\">{{ profile | json }}</pre>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent(_authService) {
        this._authService = _authService;
        // if (this._authService.userProfile) {
        //   this.profile = this._authService.userProfile;
        // } else {
        //   this._authService.getProfile((err, profile) => {
        //     this.profile = profile;
        //   });
        // }
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('userProfile is', this._authService.userProfile);
        if (this._authService.userProfile) {
            this.profile = this._authService.userProfile;
        }
        else {
            this._authService.getProfile(function (err, profile) {
                _this.profile = profile;
                console.log('profile is', _this.profile);
            });
        }
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], ProfileComponent);

var _a;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<form id=\"frm-find-a-pet\" class=\"frm-find-a-pet clear js-sanitize js-antiClickjack-petSearchForm\" action=\"https://www.petfinder.com/pet-search\" method=\"get\" autocomplete=\"off\">\n    <div class=\"petSearch\">\n        <fieldset>\n            <ul class=\"petSearch-filter\">\n                <li class=\"petSearch-filter-param\">\n                    <label for=\"location\">Location(zipcode)</label>\n                    <div class=\"input-wrap input-wrap_fill m-input-wrap_medium\">\n                        <div class=\"styled-text-input\">\n                            <input type=\"text\" id=\"location\" class=\"loc-input-field fap-field\" name=\"location\" placeholder=\"Ex: Atlanta, GA or 30303\" required=\"required\" title=\"Location is required.\">\n                        </div>\n                    </div>\n                    <div id=\"requiredPopup\">Please fill out this field.</div>\n                </li>\n                <li class=\"petSearch-filter-param\">\n                    <label for=\"fap-type\">Type</label>\n                    <div class=\"input-wrap input-wrap_fill m-input-wrap_medium\">\n                        <div class=\"styled-select\">\n                            <select id=\"fap-type\" name=\"animal\" class=\"fap-type pet-types fap-field\">\n                                <option value=\"\" class=\"any\">Any</option>\n                                <option value=\"dog\" class=\"pet dog\">Dog</option>\n                                <option value=\"cat\" class=\"pet cat\">Cat</option>\n                                <option value=\"rabbit\" class=\"pet rabbit\">Rabbit</option>\n                                <option value=\"smallFurry\" class=\"pet small-furry\">Small &amp; Furry</option>\n                                <option value=\"horse\" class=\"pet horse\">Horse</option>\n                                <option value=\"bird\" class=\"pet birds\">Bird</option>\n                                <option value=\"scalesFinsOther\" class=\"pet reptile\">Scales, Fins &amp; Others</option>\n                                <option value=\"barnyard\" class=\"pet barnyard\">Barnyard</option>\n                            </select>\n                        </div>\n                    </div>\n                </li>\n                <!--<li class=\"petSearch-filter-param\">\n                    <label for=\"fap-breed-id\">Breed (<a href=\"/breeds/\">See All</a>)</label>\n                    <div class=\"input-wrap input-wrap_fill m-input-wrap_medium\">\n                        <div class=\"styled-text-input\">\n                            \n                        <input id=\"fap-breed-id\" class=\"fap-field\" type=\"text\" name=\"breed\" placeholder=\"Please select Type first\" autocomplete=\"off\"></div>\n                    </div>\n                </li>-->\n                <li class=\"petSearch-filter-param\" id=\"fap-top-age\">\n                    <span class=\"label-cbox\">Age</span>\n                    <div class=\"styled-age-gender-wrap input-wrap input-wrap_fill m-input-wrap_small\">\n                        <div class=\"styled-age-gender js-keyboardFocus\">\n                            <div class=\"styled-age-gender-button\"></div>\n                            <!--<div class=\"selected-value\">Any Age</div>-->\n                            <label class=\"cbox\"><input type=\"checkbox\" class=\"fap-field\" name=\"age\" value=\"baby\"> Baby</label><br>\n                            <label class=\"cbox\"><input type=\"checkbox\" class=\"fap-field\" name=\"age\" value=\"young\"> Young</label><br>\n                            <label class=\"cbox\"><input type=\"checkbox\" class=\"fap-field\" name=\"age\" value=\"adult\"> Adult</label><br>\n                            <label class=\"cbox\"><input type=\"checkbox\" class=\"fap-field\" name=\"age\" value=\"senior\"> Senior</label>\n                        </div>\n                    </div>\n                </li>\n                <li class=\"petSearch-filter-param\" id=\"fap-top-gender\">\n                    <span class=\"label-cbox\">Gender</span>\n                    <div class=\"styled-age-gender-wrap input-wrap input-wrap_fill m-input-wrap_small\">\n                        <div class=\"styled-age-gender js-keyboardFocus\">\n                            <div class=\"styled-age-gender-button\"></div>\n                            <!--<div class=\"selected-value\">Any</div>-->\n                            <label class=\"cbox\"><input type=\"checkbox\" class=\"fap-field\" name=\"gender\" value=\"male\"> Male</label><br>\n                            <label class=\"cbox\"><input type=\"checkbox\" class=\"fap-field\" name=\"gender\" value=\"female\"> Female</label><br>\n                            <label class=\"cbox\"><input type=\"checkbox\" class=\"fap-field\" name=\"gender\" value=\"unknown\"> Unknown</label>\n                        </div>\n                    </div>\n                </li>\n                <li class=\"petSearch-filter-param petSearch-filter-param_offset\">\n                      <input type=\"hidden\" name=\"distance\" value=\"25\">\n                  <button type=\"submit\" onclick=\"purinaTrackEvent('','pet search','submit search criteria')\" id=\"find-pets-btn\" class=\"petSearch-filter-param-btn js-sanitize-submit\">Find Pets</button>\n            </li>\n            </ul>\n        </fieldset>\n\n            </div>\n</form>\n<a href=\"https://www.petfinder.com/\">petfinder</a>"

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-search',
        template: __webpack_require__("../../../../../src/app/components/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SearchComponent);

//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/show/show.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/show/show.component.html":
/***/ (function(module, exports) {

module.exports = "<!--{{showPet|json}}-->\n<div class=\"aquaBorder\">\n<h3>{{showPet.name}}</h3>\n\n<table class=\"table table-striped\">\n  <thead>\n    <th>Id</th>\n    <th>Sex</th>\n    <th>Age</th>\n    <th>Size</th>\n    <th>ShelterId</th>\n    <th>Address</th>\n  </thead>\n  <tbody>\n  <tr>\n    <td>{{showPet.id}}</td>\n    <td>{{showPet.sex}}</td>      \n    <td>{{showPet.age}}</td>\n    <td>{{showPet.size}}</td>\n    <td>{{showPet.shelterId}}</td>\n    <td>{{showPet.contact.address1}}, {{showPet.contact.city}}, {{showPet.contact.state}}, {{showPet.contact.zip}}</td>\n  </tr>\n</tbody>\n</table>\n<div>\n<img src=\"{{showPet.media.photos[1].pn}}\" alt=\"Card image cap\" style=\"display:inline-block; vertical-align:top; margin: 20px\">\n<p style=\"display:inline-block; width:400px; margin: 20px\">{{showPet.description}}</p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/show/show.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShowComponent = (function () {
    function ShowComponent(_route, _httpService) {
        this._route = _route;
        this._httpService = _httpService;
        this.sub = null;
        this.showTopicPrm = null;
        this.showPet = null;
        this.optionCounts = [];
        this.errors = null;
    }
    ShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (param) {
            _this.showTopicPrm = param;
        });
        this.getOneTopic();
    };
    ShowComponent.prototype.getOneTopic = function () {
        var _this = this;
        console.log('getting this pet', this.showTopicPrm.id);
        this._httpService.getOneTopic(this.showTopicPrm.id)
            .then(function (data) {
            _this.showPet = data.pets;
            console.log("Got data about one showpet", _this.showPet);
        })
            .catch(function (err) {
            console.log("Got an error getting show Topic", err);
        });
    };
    ShowComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return ShowComponent;
}());
ShowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-show',
        template: __webpack_require__("../../../../../src/app/components/show/show.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/show/show.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _b || Object])
], ShowComponent);

var _a, _b;
//# sourceMappingURL=show.component.js.map

/***/ }),

/***/ "../../../../../src/app/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getPets = function () {
        console.log('service is getting this pets');
        return this._http.get('/pets').map(function (data) { return data.json(); }).toPromise();
    };
    // getOneUser(name){
    //   console.log('service is getting this user', name)
    //   return this._http.get('/users/'+name).map((data)=>data.json()).toPromise();
    // }
    // newUser(user){
    //   console.log('service sending new user', user);
    //   return this._http.post('/new_user', user).map(data => data.json()).toPromise();
    // }
    HttpService.prototype.getTopics = function () {
        return this._http.get('/topics').map(function (data) { return data.json(); }).toPromise();
    };
    HttpService.prototype.createTopic = function (topic) {
        console.log('service sending new topic', topic);
        return this._http.post('/topics', topic).map(function (data) { return data.json(); }).toPromise();
    };
    // createOption(option){
    //   console.log('service sending new option', option);
    //   return this._http.post('/options', option).map((data)=>data.json()).toPromise();
    // }
    HttpService.prototype.getOneTopic = function (id) {
        console.log('service is getting the pet', id);
        return this._http.get('/pet/' + id).map(function (data) { return data.json(); }).toPromise();
    };
    return HttpService;
}());
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HttpService);

var _a;
//# sourceMappingURL=http.service.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map