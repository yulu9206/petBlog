webpackJsonp([1],{

/***/ "../../../../../../node_modules/angular2-cookie/core.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-cookie - Implementation of Angular 1.x $cookies service to Angular 2
 * @version v1.2.6
 * @link https://github.com/salemdar/angular2-cookie#readme
 * @license MIT
 */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var services_1 = __webpack_require__("../../../../../../node_modules/angular2-cookie/services.js");
__export(__webpack_require__("../../../../../../node_modules/angular2-cookie/services.js"));
exports.ANGULAR2_COOKIE_PROVIDERS = [
    { provide: services_1.CookieOptions, useClass: services_1.BaseCookieOptions },
    { provide: services_1.CookieService, useFactory: cookieServiceFactory, deps: [services_1.CookieOptions] }
];
function cookieServiceFactory(options) {
    return new services_1.CookieService(options);
}
exports.cookieServiceFactory = cookieServiceFactory;



/***/ }),

/***/ "../../../../../../node_modules/angular2-cookie/services.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-cookie - Implementation of Angular 1.x $cookies service to Angular 2
 * @version v1.2.6
 * @link https://github.com/salemdar/angular2-cookie#readme
 * @license MIT
 */

var base_cookie_options_1 = __webpack_require__("../../../../../../node_modules/angular2-cookie/services/base-cookie-options.js");
exports.BaseCookieOptions = base_cookie_options_1.BaseCookieOptions;
exports.CookieOptions = base_cookie_options_1.CookieOptions;
var cookies_service_1 = __webpack_require__("../../../../../../node_modules/angular2-cookie/services/cookies.service.js");
exports.CookieService = cookies_service_1.CookieService;



/***/ }),

/***/ "../../../../../../node_modules/angular2-cookie/services/base-cookie-options.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-cookie - Implementation of Angular 1.x $cookies service to Angular 2
 * @version v1.2.6
 * @link https://github.com/salemdar/angular2-cookie#readme
 * @license MIT
 */

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
/** @private */
var CookieOptions = (function () {
    function CookieOptions(_a) {
        var _b = _a === void 0 ? {} : _a, path = _b.path, domain = _b.domain, expires = _b.expires, secure = _b.secure;
        this.path = this.isPresent(path) ? path : null;
        this.domain = this.isPresent(domain) ? domain : null;
        this.expires = this.isPresent(expires) ? expires : null;
        this.secure = this.isPresent(secure) ? secure : false;
    }
    CookieOptions.prototype.merge = function (options) {
        return new CookieOptions({
            path: this.isPresent(options) && this.isPresent(options.path) ? options.path : this.path,
            domain: this.isPresent(options) && this.isPresent(options.domain) ? options.domain :
                this.domain,
            expires: this.isPresent(options) && this.isPresent(options.expires) ? options.expires :
                this.expires,
            secure: this.isPresent(options) && this.isPresent(options.secure) ? options.secure :
                this.secure,
        });
    };
    CookieOptions.prototype.isPresent = function (obj) {
        return obj !== undefined && obj !== null;
    };
    return CookieOptions;
}());
exports.CookieOptions = CookieOptions;
/** @private */
var BaseCookieOptions = (function (_super) {
    __extends(BaseCookieOptions, _super);
    function BaseCookieOptions(baseHref) {
        _super.call(this, { path: baseHref || '/' });
        this.baseHref = baseHref;
    }
    BaseCookieOptions = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Optional()),
        __param(0, core_1.Inject(common_1.APP_BASE_HREF)), 
        __metadata('design:paramtypes', [String])
    ], BaseCookieOptions);
    return BaseCookieOptions;
}(CookieOptions));
exports.BaseCookieOptions = BaseCookieOptions;



/***/ }),

/***/ "../../../../../../node_modules/angular2-cookie/services/cookies.service.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-cookie - Implementation of Angular 1.x $cookies service to Angular 2
 * @version v1.2.6
 * @link https://github.com/salemdar/angular2-cookie#readme
 * @license MIT
 */

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var base_cookie_options_1 = __webpack_require__("../../../../../../node_modules/angular2-cookie/services/base-cookie-options.js");
var CookieService = (function () {
    function CookieService(_defaultOptions) {
        this._defaultOptions = _defaultOptions;
    }
    Object.defineProperty(CookieService.prototype, "cookieString", {
        get: function () {
            return document.cookie || '';
        },
        set: function (val) {
            document.cookie = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @name CookieService#get
     *
     * @description
     * Returns the value of given cookie key.
     *
     * @param {string} key Id to use for lookup.
     * @returns {string} Raw cookie value.
     */
    CookieService.prototype.get = function (key) {
        return this._cookieReader()[key];
    };
    /**
     * @name CookieService#getObject
     *
     * @description
     * Returns the deserialized value of given cookie key.
     *
     * @param {string} key Id to use for lookup.
     * @returns {Object} Deserialized cookie value.
     */
    CookieService.prototype.getObject = function (key) {
        var value = this.get(key);
        return value ? JSON.parse(value) : value;
    };
    /**
     * @name CookieService#getAll
     *
     * @description
     * Returns a key value object with all the cookies.
     *
     * @returns {Object} All cookies
     */
    CookieService.prototype.getAll = function () {
        return this._cookieReader();
    };
    /**
     * @name CookieService#put
     *
     * @description
     * Sets a value for given cookie key.
     *
     * @param {string} key Id for the `value`.
     * @param {string} value Raw value to be stored.
     * @param {CookieOptionsArgs} options (Optional) Options object.
     */
    CookieService.prototype.put = function (key, value, options) {
        this._cookieWriter()(key, value, options);
    };
    /**
     * @name CookieService#putObject
     *
     * @description
     * Serializes and sets a value for given cookie key.
     *
     * @param {string} key Id for the `value`.
     * @param {Object} value Value to be stored.
     * @param {CookieOptionsArgs} options (Optional) Options object.
     */
    CookieService.prototype.putObject = function (key, value, options) {
        this.put(key, JSON.stringify(value), options);
    };
    /**
     * @name CookieService#remove
     *
     * @description
     * Remove given cookie.
     *
     * @param {string} key Id of the key-value pair to delete.
     * @param {CookieOptionsArgs} options (Optional) Options object.
     */
    CookieService.prototype.remove = function (key, options) {
        this._cookieWriter()(key, undefined, options);
    };
    /**
     * @name CookieService#removeAll
     *
     * @description
     * Remove all cookies.
     */
    CookieService.prototype.removeAll = function () {
        var _this = this;
        var cookies = this.getAll();
        Object.keys(cookies).forEach(function (key) {
            _this.remove(key);
        });
    };
    CookieService.prototype._cookieReader = function () {
        var lastCookies = {};
        var lastCookieString = '';
        var that = this;
        var cookieArray, cookie, i, index, name;
        var currentCookieString = this.cookieString;
        if (currentCookieString !== lastCookieString) {
            lastCookieString = currentCookieString;
            cookieArray = lastCookieString.split('; ');
            lastCookies = {};
            for (i = 0; i < cookieArray.length; i++) {
                cookie = cookieArray[i];
                index = cookie.indexOf('=');
                if (index > 0) {
                    name = that._safeDecodeURIComponent(cookie.substring(0, index));
                    // the first value that is seen for a cookie is the most
                    // specific one.  values for the same cookie name that
                    // follow are for less specific paths.
                    if (this.isBlank(lastCookies[name])) {
                        lastCookies[name] = that._safeDecodeURIComponent(cookie.substring(index + 1));
                    }
                }
            }
        }
        return lastCookies;
    };
    CookieService.prototype._cookieWriter = function () {
        var that = this;
        return function (name, value, options) {
            that.cookieString = that._buildCookieString(name, value, options);
        };
    };
    CookieService.prototype._safeDecodeURIComponent = function (str) {
        try {
            return decodeURIComponent(str);
        }
        catch (e) {
            return str;
        }
    };
    CookieService.prototype._buildCookieString = function (name, value, options) {
        var cookiePath = '/';
        var path, expires;
        var defaultOpts = this._defaultOptions || new base_cookie_options_1.CookieOptions({ path: cookiePath });
        var opts = this._mergeOptions(defaultOpts, options);
        expires = opts.expires;
        if (this.isBlank(value)) {
            expires = 'Thu, 01 Jan 1970 00:00:00 GMT';
            value = '';
        }
        if (this.isString(expires)) {
            expires = new Date(expires);
        }
        var str = encodeURIComponent(name) + '=' + encodeURIComponent(value);
        str += opts.path ? ';path=' + opts.path : '';
        str += opts.domain ? ';domain=' + opts.domain : '';
        str += expires ? ';expires=' + expires.toUTCString() : '';
        str += opts.secure ? ';secure' : '';
        // per http://www.ietf.org/rfc/rfc2109.txt browser must allow at minimum:
        // - 300 cookies
        // - 20 cookies per unique domain
        // - 4096 bytes per cookie
        var cookieLength = str.length + 1;
        if (cookieLength > 4096) {
            console.log("Cookie '" + name + "' possibly not set or overflowed because it was too \n      large (" + cookieLength + " > 4096 bytes)!");
        }
        return str;
    };
    CookieService.prototype._mergeOptions = function (defaultOpts, providedOpts) {
        var newOpts = defaultOpts;
        if (this.isPresent(providedOpts)) {
            return newOpts.merge(new base_cookie_options_1.CookieOptions(providedOpts));
        }
        return newOpts;
    };
    CookieService.prototype.isBlank = function (obj) {
        return obj === undefined || obj === null;
    };
    CookieService.prototype.isPresent = function (obj) {
        return obj !== undefined && obj !== null;
    };
    CookieService.prototype.isString = function (obj) {
        return typeof obj === 'string';
    };
    CookieService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Optional()), 
        __metadata('design:paramtypes', [base_cookie_options_1.CookieOptions])
    ], CookieService);
    return CookieService;
}());
exports.CookieService = CookieService;



/***/ }),

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

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__show_show_component__ = __webpack_require__("../../../../../src/app/show/show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_new_component__ = __webpack_require__("../../../../../src/app/new/new.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'new', component: __WEBPACK_IMPORTED_MODULE_5__new_new_component__["a" /* NewComponent */] },
    // { path: 'edit/:id', component: EditComponent},
    { path: 'show/:id', component: __WEBPACK_IMPORTED_MODULE_4__show_show_component__["a" /* ShowComponent */] },
    { path: '**', redirectTo: '' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=/Users/yulu9206/GoogleDrive/dojo/DojoAssignments/MEAN/MEAN/MEANproject/public/src/app-routing.module.js.map

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

module.exports = "\n<router-outlet></router-outlet>\n\n<!--<app-login></app-login>-->\n<!--(userEmitter)=\"dataFromLogin($event)\"-->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__ = __webpack_require__("../../../../../../node_modules/angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__);
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
    function AppComponent(_httpService, _cookieService) {
        this._httpService = _httpService;
        this._cookieService = _cookieService;
        // user = this._cookieService.getObject('user');
        this.loggedIn = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        if (this._cookieService.getObject('user')) {
            this.loggedIn = true;
        }
        // console.log('who is logged in now?',this.user)
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=/Users/yulu9206/GoogleDrive/dojo/DojoAssignments/MEAN/MEAN/MEANproject/public/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__new_new_component__ = __webpack_require__("../../../../../src/app/new/new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__show_show_component__ = __webpack_require__("../../../../../src/app/show/show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__edit_edit_component__ = __webpack_require__("../../../../../src/app/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../../../node_modules/angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__countPipe__ = __webpack_require__("../../../../../src/app/countPipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__new_new_component__["a" /* NewComponent */],
            __WEBPACK_IMPORTED_MODULE_10__show_show_component__["a" /* ShowComponent */],
            __WEBPACK_IMPORTED_MODULE_11__edit_edit_component__["a" /* EditComponent */],
            __WEBPACK_IMPORTED_MODULE_13__countPipe__["a" /* Count */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_12_angular2_cookie_services_cookies_service__["CookieService"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=/Users/yulu9206/GoogleDrive/dojo/DojoAssignments/MEAN/MEAN/MEANproject/public/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/countPipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Count; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Count = (function () {
    function Count() {
    }
    Count.prototype.transform = function (arr) {
        return arr.length;
    };
    return Count;
}());
Count = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'count' })
], Count);

//# sourceMappingURL=/Users/yulu9206/GoogleDrive/dojo/DojoAssignments/MEAN/MEAN/MEANproject/public/src/countPipe.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n    <a routerLink=\"/new\">Creat a New Poll</a>\n    <a routerLink=\"/\">Logout</a>\n</div>\n\n<div class=\"container\">\n  \n  <h2>Current Polls:</h2>\n  <br>\n  <input value=\"Search\">\n  <br>\n  <br>\n  <div *ngIf = 'errors'>\n    <p>{{errors}}</p>\n  </div>\n  <div *ngIf='topics'>\n    <table class=\"table table-striped\">\n      <thead>\n        <th>Name</th>\n        <th>Survey Question</th>\n        <th>Date Posted</th>\n        <th>Actions</th>\n      </thead>\n      <tbody>\n      <tr *ngFor = 'let topic of topics'>\n        <td>{{topic.authorName}}</td>\n        <td><a [routerLink]=\"['/show', topic._id]\">{{topic.topic}}</a> </td>\n        <td>{{topic.createdAt|date:'longDate'}}</td>\n        <td>\n          <div *ngIf=\"topic._author == user._id\">\n            <a (click) = 'delete(topic._id)'>Delete</a>\n          </div>\n        </td>\n      </tr>\n    </tbody>\n    </table>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__("../../../../../../node_modules/angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
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
    function DashboardComponent(_httpService, _router, _cookieService) {
        this._httpService = _httpService;
        this._router = _router;
        this._cookieService = _cookieService;
        this.user = {};
        this.topics = null;
        this.errors = null;
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
    DashboardComponent.prototype.delete = function (id) {
        var _this = this;
        this._httpService.deleteTopic(id)
            .then(function (data) {
            console.log("data from deleting", data);
            if (data.message == "Success") {
                _this.getTopics();
            }
        })
            .catch(function (err) {
            console.log("error from deleting", err);
        });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.user = this._cookieService.getObject('user');
        if (!this.user) {
            this._router.navigate(['/']);
            console.log('no dashboard without login!');
        }
        console.log(this.user, 'is visiting dashboard');
        this.getTopics();
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/yulu9206/GoogleDrive/dojo/DojoAssignments/MEAN/MEAN/MEANproject/public/src/dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n    <a routerLink=\"/dashboard\">Dashboard</a>\n    <a routerLink=\"/\">Logout</a>\n</div>\n  <h3>Edit Component</h3>\n  <div *ngIf='errors'>\n    <p>{{errors}}</p>\n  </div>\n  <div *ngIf='edittopic'>\n   <form (submit)='updateTopic()'>\n    <div class=\"form-group\">\n      <label for=\"topic\">Topic:</label>\n      <input type=\"text\" name=\"topic\" [(ngModel)]='edittopic.topic' class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"desc\">Description:</label>\n      <input type=\"text\" name=\"desc\"  [(ngModel)]='edittopic.desc' class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"catg\">Gategory</label>\n      <select name=\"catg\"  [(ngModel)]='edittopic.catg' class=\"form-control\">\n        <option value=\"volvo\">Volvo</option>\n        <option value=\"saab\">Saab</option>\n        <option value=\"mercedes\">Mercedes</option>\n        <option value=\"audi\">Audi</option>\n      </select>    \n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Edit topic!</button>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditComponent = (function () {
    function EditComponent(_route, _httpService) {
        this._route = _route;
        this._httpService = _httpService;
        this.sub = null;
        this.editTopicPrm = null;
        this.edittopic = null;
        this.errors = null;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (param) {
            _this.editTopicPrm = param;
        });
        this.getOneTopic();
    };
    EditComponent.prototype.getOneTopic = function () {
        var _this = this;
        this._httpService.getOneTopic(this.editTopicPrm.id)
            .then(function (data) {
            console.log("Got data about one edit Topic", data);
            if (data.message == "Success") {
                _this.edittopic = data.topic;
            }
            else {
                _this.errors = data.error.message;
            }
        })
            .catch(function (err) {
            console.log("Got an error getting edit topic", err);
        });
    };
    EditComponent.prototype.updateTopic = function () {
        console.log("changed our Topic", this.edittopic);
        this._httpService.updateTopic(this.editTopicPrm.id, this.edittopic)
            .then(function (data) {
            console.log("Got back from updating", data);
        })
            .catch(function (err) {
            console.log("Got an error while updating", err);
        });
    };
    EditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return EditComponent;
}());
EditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit',
        template: __webpack_require__("../../../../../src/app/edit/edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/edit/edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _b || Object])
], EditComponent);

var _a, _b;
//# sourceMappingURL=/Users/yulu9206/GoogleDrive/dojo/DojoAssignments/MEAN/MEAN/MEANproject/public/src/edit.component.js.map

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
    HttpService.prototype.getOneUser = function (name) {
        console.log('service is getting this user', name);
        return this._http.get('/users/' + name).map(function (data) { return data.json(); }).toPromise();
    };
    HttpService.prototype.newUser = function (user) {
        console.log('service sending new user', user);
        return this._http.post('/new_user', user).map(function (data) { return data.json(); }).toPromise();
    };
    HttpService.prototype.getTopics = function () {
        return this._http.get('/topics').map(function (data) { return data.json(); }).toPromise();
    };
    HttpService.prototype.createTopic = function (topic) {
        console.log('service sending new topic', topic);
        return this._http.post('/topics', topic).map(function (data) { return data.json(); }).toPromise();
    };
    HttpService.prototype.createOption = function (option) {
        console.log('service sending new option', option);
        return this._http.post('/options', option).map(function (data) { return data.json(); }).toPromise();
    };
    HttpService.prototype.getOneTopic = function (id) {
        return this._http.get('/topics/' + id).map(function (data) { return data.json(); }).toPromise();
    };
    HttpService.prototype.getOneOption = function (option) {
        console.log('service sending new option', option);
        return this._http.get('/options/' + option).map(function (data) { return data.json(); }).toPromise();
    };
    HttpService.prototype.updateTopic = function (id, topic) {
        return this._http.put('/topics/' + id, topic).map(function (data) { return data.json(); }).toPromise();
    };
    HttpService.prototype.updateOption = function (name, option) {
        return this._http.put('/options/' + name, option).map(function (data) { return data.json(); }).toPromise();
    };
    HttpService.prototype.deleteTopic = function (id) {
        return this._http.delete('/topics/' + id).map(function (data) { return data.json(); }).toPromise();
    };
    return HttpService;
}());
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HttpService);

var _a;
//# sourceMappingURL=/Users/yulu9206/GoogleDrive/dojo/DojoAssignments/MEAN/MEAN/MEANproject/public/src/http.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>Hello!</h3>\n  <h3>Please enter your name to join and share ideas</h3>\n  <div class=\"alert alert-danger\" *ngIf=\"name.errors && (name.touched || loginForm.submitted ) \">\n    <p *ngIf=\"name.errors.required\">Name must not be blank! </p>\n    <p *ngIf=\"name.errors.minlength \">Name must be longer than 4 characters </p>\n  </div>\n  <form #loginForm=\"ngForm\" (submit)=\"onSubmit(loginForm)\">\n    <div class=\"form-group\">\n      <input type=\"text\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"user.name\" required minlength=\"4\">\n      <input type=\"submit\" name=\"\" value=\"Enter\" class=\"btn btn-primary\">\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__ = __webpack_require__("../../../../../../node_modules/angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(_httpService, _router, _cookieService) {
        this._httpService = _httpService;
        this._router = _router;
        this._cookieService = _cookieService;
        this.user = {
            name: '',
        };
        this.gotUser = null;
        this.errors = null;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this._cookieService.removeAll();
    };
    LoginComponent.prototype.getOneUser = function () {
        var _this = this;
        console.log('trying to get user');
        this._httpService.getOneUser(this.user.name)
            .then(function (data) {
            _this.gotUser = data.user;
            console.log("gotuser is", _this.gotUser);
            if (_this.gotUser == null) {
                console.log("gotuser is null, creating new user");
                _this.creatNewUser();
            }
            _this._cookieService.putObject('user', _this.gotUser);
            console.log('user in the cookie is', _this.gotUser);
            _this._router.navigate(['/dashboard']);
        })
            .catch(function (err) {
            console.log("Got an error getting the user", err);
        });
    };
    LoginComponent.prototype.creatNewUser = function () {
        var _this = this;
        this._httpService.newUser(this.user)
            .then(function (data) {
            console.log('login compo sent user', data);
            _this.gotUser = data.user;
            console.log('now gotuser is ', _this.gotUser);
            _this._cookieService.putObject('user', _this.gotUser);
            console.log('user in the cookie is', _this.gotUser);
            _this._router.navigate(['/dashboard']);
        })
            .catch(function (err) {
            console.log('login como has error in sending data', err);
        });
    };
    LoginComponent.prototype.onSubmit = function (form) {
        if (!form.valid) {
            return;
        }
        this.getOneUser();
        // this._router.navigate(['/dashboard']);
        // console.log('gotuser is ', this.gotUser);  
        // if (this.gotUser == null){
        //   this.creatNewUser();
        //   this.getOneUser();
        // } 
        // this._cookieService.putObject('user', this.gotUser);
        // console.log('user in the cookie is',this.gotUser );
        // form.resetForm();    
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/yulu9206/GoogleDrive/dojo/DojoAssignments/MEAN/MEAN/MEANproject/public/src/login.component.js.map

/***/ }),

/***/ "../../../../../src/app/new/new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new/new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n    <a routerLink=\"/dashboard\">Cancel</a>\n    <a routerLink=\"/\">Logout</a>\n</div>\n<div class=\"container\">\n  <h3>Put the question and options here:</h3>\n  <div *ngIf='errors'>\n    <p>{{errors}}</p>\n  </div>\n   <form #topicForm=\"ngForm\" (submit)=\"onSubmit(topicForm)\">\n\n    <div class=\"form-group\">\n      <label for=\"topic\">Question:</label>\n      <input type=\"text\" name=\"topic\" #topic=\"ngModel\" [(ngModel)]='newtopic.topic' class=\"form-control\" required minlength=\"8\">\n    </div>\n    <div class=\"alert alert-danger\" *ngIf=\"topic.errors && (topic.touched || topicForm.submitted ) \">\n      <p *ngIf=\"topic.errors.required\">No empty entries! </p>\n      <p *ngIf=\"topic.errors.minlength \">Question must be longer than 8 characters! </p>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"desc\">Option 1:</label>\n      <input type=\"text\" name=\"option1\"  #option1=\"ngModel\" [(ngModel)]='newtopic.option1' class=\"form-control\" required minlength=\"3\">\n    </div>\n    <div class=\"alert alert-danger\" *ngIf=\"option1.errors && (option1.touched || topicForm.submitted ) \">\n      <p *ngIf=\"option1.errors.required\">No empty entries! </p>\n      <p *ngIf=\"option1.errors.minlength \">Option must be longer than 3 characters! </p>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"desc\">Option 2:</label>\n      <input type=\"text\" name=\"option2\"  #option2=\"ngModel\" [(ngModel)]='newtopic.option2' class=\"form-control\" required minlength=\"3\">\n    </div>\n    <div class=\"alert alert-danger\" *ngIf=\"option2.errors && (option2.touched || topicForm.submitted ) \">\n      <p *ngIf=\"option2.errors.required\">No empty entries! </p>\n      <p *ngIf=\"option2.errors.minlength \">Option must be longer than 3 characters! </p>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"desc\">Option 3:</label>\n      <input type=\"text\" name=\"option3\"  #option3=\"ngModel\" [(ngModel)]='newtopic.option3' class=\"form-control\" required minlength=\"3\">\n    </div>\n    <div class=\"alert alert-danger\" *ngIf=\"option3.errors && (option3.touched || topicForm.submitted ) \">\n      <p *ngIf=\"option3.errors.required\">No empty entries! </p>\n      <p *ngIf=\"option3.errors.minlength \">Option must be longer than 3 characters! </p>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"desc\">Option 4:</label>\n      <input type=\"text\" name=\"option4\"  #option4=\"ngModel\" [(ngModel)]='newtopic.option4' class=\"form-control\" required minlength=\"3\">\n    </div>\n    <div class=\"alert alert-danger\" *ngIf=\"option4.errors && (option4.touched || topicForm.submitted ) \">\n      <p *ngIf=\"option4.errors.required\">No empty entries! </p>\n      <p *ngIf=\"option4.errors.minlength \">Option must be longer than 3 characters! </p>\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-primary\">Create Poll</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/new/new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topic__ = __webpack_require__("../../../../../src/app/topic.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__option__ = __webpack_require__("../../../../../src/app/option.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_core__ = __webpack_require__("../../../../../../node_modules/angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_cookie_core__);
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
    function NewComponent(_httpService, _router, _cookieService) {
        this._httpService = _httpService;
        this._router = _router;
        this._cookieService = _cookieService;
        this.user = null;
        this.errors = null;
        this.newtopic = new __WEBPACK_IMPORTED_MODULE_2__topic__["a" /* Topic */]();
    }
    NewComponent.prototype.onSubmit = function (form) {
        if (!form.valid) {
            return;
        }
        this.createTopic();
    };
    NewComponent.prototype.createTopic = function () {
        var _this = this;
        this.newtopic._author = this.user._id;
        this.newtopic.authorName = this.user.name;
        console.log('new compo is trying to send', this.newtopic);
        this._httpService.createTopic(this.newtopic)
            .then(function (data) {
            console.log("After creating a topic!", data);
            if (data.message == "Success") {
                _this.errors = null;
                _this.createOption(_this.newtopic.option1);
                _this.createOption(_this.newtopic.option2);
                _this.createOption(_this.newtopic.option3);
                _this.createOption(_this.newtopic.option4);
                _this._router.navigate(['/dashboard']);
            }
            else {
                _this.errors = "Could not create your topic, please try again.";
            }
            _this.newtopic = new __WEBPACK_IMPORTED_MODULE_2__topic__["a" /* Topic */]();
        })
            .catch(function (err) {
            console.log("Something went wrong with the creation!", err);
        });
    };
    NewComponent.prototype.createOption = function (option) {
        var _this = this;
        var newoption = new __WEBPACK_IMPORTED_MODULE_3__option__["a" /* Option */]();
        newoption._author = this.user._id;
        newoption.authorName = this.user.name;
        newoption.option = option;
        console.log('new compo is trying to send', newoption);
        this._httpService.createOption(newoption)
            .then(function (data) {
            console.log("After creating a option!", data);
            if (data.message == "Success") {
                _this.errors = null;
            }
            else {
                _this.errors = "Could not create your option, please try again.";
            }
        })
            .catch(function (err) {
            console.log("Something went wrong with the creation!", err);
        });
    };
    NewComponent.prototype.ngOnInit = function () {
        this.user = this._cookieService.getObject('user');
        if (!this.user) {
            this._router.navigate(['/']);
            console.log('no new topic without login!');
        }
        console.log(this.user, 'is visiting dashboard');
    };
    return NewComponent;
}());
NewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-new',
        template: __webpack_require__("../../../../../src/app/new/new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new/new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_core__["CookieService"]) === "function" && _c || Object])
], NewComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/yulu9206/GoogleDrive/dojo/DojoAssignments/MEAN/MEAN/MEANproject/public/src/new.component.js.map

/***/ }),

/***/ "../../../../../src/app/option.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Option; });
var Option = (function () {
    function Option(option, authorName, _author, count) {
        if (option === void 0) { option = ""; }
        if (authorName === void 0) { authorName = ""; }
        if (_author === void 0) { _author = {}; }
        if (count === void 0) { count = 0; }
        this.option = option;
        this.authorName = authorName;
        this._author = _author;
        this.count = count;
    }
    return Option;
}());

//# sourceMappingURL=/Users/yulu9206/GoogleDrive/dojo/DojoAssignments/MEAN/MEAN/MEANproject/public/src/option.js.map

/***/ }),

/***/ "../../../../../src/app/show/show.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/show/show.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n    <a routerLink=\"/dashboard\">Go to Polls</a>\n</div>\n<div class=\"aquaBorder\">\n<h3>{{showTopic.topic}}</h3>\n<p>Click the vote button to choose one.</p>\n<div *ngIf = 'errors'>\n  <p>{{errors}}</p>\n</div>\n<div *ngIf='showTopic'>\n    <table class=\"table table-striped\">\n      <thead>\n        <th>Option</th>\n        <th>Current Count of Votes</th>\n        <th>Actions</th>\n      </thead>\n      <tbody>\n      <tr>\n        <td>{{showTopic.option1}}</td>\n        <td>{{optionCounts[0]}}</td>      \n        <td>\n            <a (click) = 'vote(showTopic.option1)'>Vote</a>\n        </td>\n      </tr>\n\n      <tr>\n        <td>{{showTopic.option2}}</td>\n        <td>{{optionCounts[1]}}</td>      \n        <td>\n            <a (click) = 'vote(showTopic.option2)'>Vote</a>\n        </td>\n      </tr>\n      <tr>\n        <td>{{showTopic.option3}}</td>\n        <td>{{optionCounts[2]}}</td>      \n        <td>\n            <a (click) = 'vote(showTopic.option3)'>Vote</a>\n        </td>\n      </tr>\n\n      <tr>\n        <td>{{showTopic.option4}}</td>\n        <td>{{optionCounts[3]}}</td>      \n        <td>\n            <a (click) = 'vote(showTopic.option4)'>Vote</a>\n        </td>\n      </tr>      \n    </tbody>\n    </table>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/show/show.component.ts":
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
        this.showTopic = null;
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
        console.log('getting topics');
        this._httpService.getOneTopic(this.showTopicPrm.id)
            .then(function (data) {
            console.log("Got data about one show Topic", data);
            if (data.message == "Success") {
                _this.showTopic = data.topic;
                _this.getOneOption(_this.showTopic.option1);
                _this.getOneOption(_this.showTopic.option2);
                _this.getOneOption(_this.showTopic.option3);
                _this.getOneOption(_this.showTopic.option4);
            }
            else {
                _this.errors = data.error.message;
            }
        })
            .catch(function (err) {
            console.log("Got an error getting show Topic", err);
        });
    };
    ShowComponent.prototype.getOneOption = function (option) {
        var _this = this;
        console.log('getting options');
        this._httpService.getOneOption(option)
            .then(function (data) {
            console.log("Got data about one show Option", data);
            if (data.message == "Success") {
                _this.optionCounts.push(data.option.count);
            }
            else {
                _this.errors = data.error.message;
            }
        })
            .catch(function (err) {
            console.log("Got an error getting show option", err);
        });
    };
    ShowComponent.prototype.vote = function (option) {
        var _this = this;
        console.log('voting options');
        this._httpService.getOneOption(option)
            .then(function (data) {
            console.log("Got data about one vote Option", data);
            if (data.message == "Success") {
                data.option.count += 1;
                console.log("now count is ", data.option.count);
                _this._httpService.updateOption(option, data.option);
                _this.optionCounts = [];
                _this.getOneTopic();
            }
            else {
                _this.errors = data.error.message;
            }
        })
            .catch(function (err) {
            console.log("Got an error getting show option", err);
        });
    };
    ShowComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return ShowComponent;
}());
ShowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-show',
        template: __webpack_require__("../../../../../src/app/show/show.component.html"),
        styles: [__webpack_require__("../../../../../src/app/show/show.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _b || Object])
], ShowComponent);

var _a, _b;
//# sourceMappingURL=/Users/yulu9206/GoogleDrive/dojo/DojoAssignments/MEAN/MEAN/MEANproject/public/src/show.component.js.map

/***/ }),

/***/ "../../../../../src/app/topic.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Topic; });
var Topic = (function () {
    function Topic(topic, authorName, _author, option1, option2, option3, option4) {
        if (topic === void 0) { topic = ""; }
        if (authorName === void 0) { authorName = ""; }
        if (_author === void 0) { _author = {}; }
        if (option1 === void 0) { option1 = ""; }
        if (option2 === void 0) { option2 = ""; }
        if (option3 === void 0) { option3 = ""; }
        if (option4 === void 0) { option4 = ""; }
        this.topic = topic;
        this.authorName = authorName;
        this._author = _author;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.option4 = option4;
    }
    return Topic;
}());

//# sourceMappingURL=/Users/yulu9206/GoogleDrive/dojo/DojoAssignments/MEAN/MEAN/MEANproject/public/src/topic.js.map

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
//# sourceMappingURL=/Users/yulu9206/GoogleDrive/dojo/DojoAssignments/MEAN/MEAN/MEANproject/public/src/environment.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/yulu9206/GoogleDrive/dojo/DojoAssignments/MEAN/MEAN/MEANproject/public/src/main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map