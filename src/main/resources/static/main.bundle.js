webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datacatalog_datacatalog_component__ = __webpack_require__("../../../../../src/app/datacatalog/datacatalog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datacatalog_add_datacatalog_add_component__ = __webpack_require__("../../../../../src/app/datacatalog-add/datacatalog-add.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/datacatalog', pathMatch: 'full' },
    { path: 'datacatalog', component: __WEBPACK_IMPORTED_MODULE_2__datacatalog_datacatalog_component__["a" /* DatacatalogComponent */] },
    { path: 'datacatalog/add', component: __WEBPACK_IMPORTED_MODULE_3__datacatalog_add_datacatalog_add_component__["a" /* DatacatalogAddComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datacatalog_datacatalog_component__ = __webpack_require__("../../../../../src/app/datacatalog/datacatalog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__datacatalog_add_datacatalog_add_component__ = __webpack_require__("../../../../../src/app/datacatalog-add/datacatalog-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__datacatalog_datacatalog_component__["a" /* DatacatalogComponent */],
                __WEBPACK_IMPORTED_MODULE_7__datacatalog_add_datacatalog_add_component__["a" /* DatacatalogAddComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.dataUrl = '/data';
    }
    DataService.prototype.getAll = function () {
        return this.http.get('http://localhost:9995/api/data');
    };
    DataService.prototype.saveOne = function (data) {
        return this.http.post('http://localhost:9995/api/data', data, httpOptions);
    };
    DataService.prototype.search = function (text) {
        return this.http.get('http://localhost:9995/api/search?text=' + text, httpOptions);
    };
    DataService.prototype.getFacetedSearch = function () {
        return this.http.get('http://localhost:9995/api/options');
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/datacatalog-add/datacatalog-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <form [(ngModel)]=\"data\">\n    <div class=\"form-group\">\n      <label>Name</label>\n      <input name=\"name\" type=\"text\"/><br/>\n    </div>\n    <div class=\"form-group\">\n      <label>Description</label>\n      <input name=\"freeText\" type=\"text\"/><br/>\n    </div>\n    <div class=\"form-group\" *ngFor=\"let element of elements\">\n      <label>{{element.title}}</label>\n      <select name=\"dataType\">\n        <option [value]=\"t\" *ngFor=\"let t of element.subElements\">{{t.value}}</option>\n      </select><br/>\n    </div>\n    <div class=\"form-group\">\n      <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n      <button class=\"btn\">Cancel</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/datacatalog-add/datacatalog-add.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/datacatalog-add/datacatalog-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatacatalogAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DatacatalogAddComponent = /** @class */ (function () {
    function DatacatalogAddComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.elements = [];
    }
    DatacatalogAddComponent.prototype.ngOnInit = function () {
        this.dataService.getFacetedSearch().subscribe(this.processFacetedSearchElements.bind(this));
    };
    DatacatalogAddComponent.prototype.processFacetedSearchElements = function (data) {
        var self = this;
        data.forEach(function (dataElement) {
            var notFound = true;
            self.elements.forEach(function (el) {
                if (el.title === dataElement.type) {
                    if (el.subElements.indexOf(dataElement) < 0) {
                        el.subElements.push(dataElement);
                    }
                    notFound = false;
                }
            });
            if (notFound) {
                self.elements.push({ title: dataElement.type, subElements: [dataElement] });
            }
        });
    };
    DatacatalogAddComponent.prototype.save = function () {
        var _this = this;
        this.dataService.saveOne(this.data).subscribe(function (response) {
            return _this.router.navigateByUrl('/');
        });
    };
    DatacatalogAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-datacatalog-add',
            template: __webpack_require__("../../../../../src/app/datacatalog-add/datacatalog-add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/datacatalog-add/datacatalog-add.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], DatacatalogAddComponent);
    return DatacatalogAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/datacatalog/datacatalog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n      <div class=\"col-md-12 menu\">\n        <div class=\"menutitle\">Facet Search</div>\n        <div *ngFor=\"let element of elements\">\n          <label>{{element.title}}</label>\n          <div *ngFor=\"let sub of element.subElements\">\n            <input type=\"checkbox\" [(ngModel)]=\"sub.checked\" (ngModelChange)=\"facetedSearch(element, sub)\"/>&nbsp;<span>{{sub.value}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <ul class=\"col-md-5 offset-md-1 datasources\">\n      <p>Number of datasources: {{getData().length}}</p>\n        <div *ngFor=\"let d of getData()\">\n          <li>{{d.name}}</li>\n          <span>{{d.freeText}}</span>\n          <div>\n            <div class=\"location\" *ngFor=\"let location of d.meta['location']\">\n              <i class=\"fa fa-map-marker\"></i>&nbsp;<span>{{location}}</span>\n            </div>\n          </div>\n        </div>\n    </ul>\n    <div class=\"col-md-4 form-group search-bar\">\n      <input class=\"rounded\" [(ngModel)]=\"searchTerm\" type=\"text\"/>\n      <i *ngIf=\"searchTerm && searchTerm !== ''\" class=\"fa fa-times\" (click)=\"delete()\"></i>\n      <button class=\"btn btn-primary\" (click)=\"search()\"><i class=\"fa fa-search\"></i></button>\n      <button class=\"btn\" routerLink=\"/datacatalog/add\">Add datasource</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/datacatalog/datacatalog.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu {\n  border: 2px solid #000095;\n  border-radius: 25px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n.menu label {\n  font-size: larger;\n}\n.menu li {\n  list-style: none;\n}\n.menu .menutitle {\n  color: #000095;\n  display: inline-block;\n  background: white none repeat scroll 0 0;\n  float: left;\n  margin-top: -30px;\n  margin-left: 10px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.datasources {\n  list-style: none;\n}\n.datasources > div {\n  border: 2px solid #000095;\n  border-radius: 25px;\n  padding: 15px;\n  margin-bottom: 10px;\n}\n.datasources > div li {\n  border-bottom: 1px dashed grey;\n  font-size: larger;\n}\n.datasources .location {\n  display: inline-block;\n}\n.datasources .location:not(:first-child) {\n  margin-left: 5px;\n}\n.search-bar .fa-times {\n  margin-left: -25px;\n  margin-right: 8px;\n}\n.row {\n  margin-left: 15px;\n  margin-right: 15px;\n}\n.row:first-child {\n  margin: 35px 15px 15px 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/datacatalog/datacatalog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatacatalogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DatacatalogComponent = /** @class */ (function () {
    function DatacatalogComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.data = [];
        this.elements = [];
    }
    DatacatalogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getAll().subscribe(function (data) { return _this.data = data; });
        this.dataService.getFacetedSearch().subscribe(this.processFacetedSearchElements.bind(this));
    };
    DatacatalogComponent.prototype.processFacetedSearchElements = function (data) {
        var self = this;
        data.forEach(function (dataElement) {
            var notFound = true;
            self.elements.forEach(function (el) {
                if (el.title === dataElement.type) {
                    if (el.subElements.indexOf(dataElement) < 0) {
                        el.subElements.push(dataElement);
                    }
                    notFound = false;
                }
            });
            if (notFound) {
                self.elements.push({ title: dataElement.type, subElements: [dataElement] });
            }
        });
    };
    DatacatalogComponent.prototype.getData = function () {
        if (typeof this.facetedData !== 'undefined') {
            return this.facetedData;
        }
        return this.data;
    };
    DatacatalogComponent.prototype.search = function () {
        var _this = this;
        this.dataService.search(this.searchTerm).subscribe(function (data) { return _this.data = data; });
    };
    DatacatalogComponent.prototype.facetedSearch = function (element, subElement) {
        this.facetedData = this.data.filter(function (d) { return d.meta[element.title.toLowerCase()] &&
            d.meta[element.title.toLowerCase()].indexOf(subElement.value) >= 0; });
        var facetedSearchEnabled = this.elements.some(function (e) {
            return e.subElements.some(function (sub) {
                if (sub.checked) {
                    return true;
                }
            });
        });
        if (!facetedSearchEnabled) {
            delete this.facetedData;
        }
    };
    DatacatalogComponent.prototype.delete = function () {
        var _this = this;
        delete this.searchTerm;
        this.dataService.getAll().subscribe(function (data) { return _this.data = data; });
    };
    DatacatalogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-datacatalog',
            template: __webpack_require__("../../../../../src/app/datacatalog/datacatalog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/datacatalog/datacatalog.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], DatacatalogComponent);
    return DatacatalogComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map