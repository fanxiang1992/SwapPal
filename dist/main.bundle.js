webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>",
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_home_client_service__ = __webpack_require__("./src/app/services/home.client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_create_post_create_post_component__ = __webpack_require__("./src/app/components/create-post/create-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_review_review_component__ = __webpack_require__("./src/app/components/review/review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_post_list_post_list_component__ = __webpack_require__("./src/app/components/post-list/post-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__postfilter_pipe__ = __webpack_require__("./src/app/postfilter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_details_details_component__ = __webpack_require__("./src/app/components/details/details.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_create_post_create_post_component__["a" /* CreatePostComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_review_review_component__["a" /* ReviewComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_post_list_post_list_component__["a" /* PostListComponent */],
            __WEBPACK_IMPORTED_MODULE_20__postfilter_pipe__["a" /* PostfilterPipe */],
            __WEBPACK_IMPORTED_MODULE_21__components_details_details_component__["a" /* DetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_profile_profile_component__["a" /* ProfileComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* Routing */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_12__services_home_client_service__["a" /* HomeService */], __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_15__services_user_service_client__["a" /* UserService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_post_list_post_list_component__ = __webpack_require__("./src/app/components/post-list/post-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_details_details_component__ = __webpack_require__("./src/app/components/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_create_post_create_post_component__ = __webpack_require__("./src/app/components/create-post/create-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");








var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'post-list', component: __WEBPACK_IMPORTED_MODULE_4__components_post_list_post_list_component__["a" /* PostListComponent */] },
    { path: 'details', component: __WEBPACK_IMPORTED_MODULE_5__components_details_details_component__["a" /* DetailsComponent */] },
    { path: 'createPost', component: __WEBPACK_IMPORTED_MODULE_6__components_create_post_create_post_component__["a" /* CreatePostComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_7__components_profile_profile_component__["a" /* ProfileComponent */] }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "./src/app/components/create-post/create-post.component.css":
/***/ (function(module, exports) {

module.exports = ".upload-wrapper{\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.upload-container{\n  padding: 70px;\n  padding-top: 25px;\n  padding-left: 0px;\n  padding-bottom: 0px;\n}\n\n.upload-wrapper input[type = file]{\n  font-size: 100px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0;\n}\n\n.plusBtn{\n  border: 2px solid #337ab7;\n  color: #337ab7;\n  background-color: white;\n  padding: 20px;\n  border-radius: 8px;\n  font-size: 50px;\n  font-weight: bold;\n}\n\n.wishlist-checkbox{\n  -ms-transform: scale(2);\n  -moz-transform: scale(2);\n  -webkit-transform: scale(2);\n  -o-transform: scale(2);\n  padding: 10px;\n}\n\n.wishlist-label{\n  font-size: 15px;\n}\n\n.wishlist-bottom{\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n\n.item-style{\n  padding: 10px;\n}\n\n.item-checkbox{\n  margin-right: 5px;\n}\n\n.first-wishlist-text{\n  margin-right: 40px;\n}\n\n.card-body{\n  padding: 8px;\n}\n\n.remove-icon{\n  background-color: #d9534f;\n  height: 39px;\n  color: white;\n\n}\n\n.swappal-nav {\n  background-color: #337ab7;\n  color: white;\n\n  padding-top: 8px;\n}\n\n.swappal-nav a {\n  color: white;\n  font-family: Georgia;\n  font-weight: bold;\n\n}\n\n.navbar-form {\n  margin-bottom:0px;\n  font-size: 1px;\n  font-family: Georgia;\n}\n\n.create-post{\n  margin-top: 70px;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  background-color: #337ab7;\n}\n\ninput:focus + .slider {\n  -webkit-box-shadow: 0 0 1px #337ab7;\n          box-shadow: 0 0 1px #337ab7;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n.error-msg{\n  color: red;\n  margin-top: -12px;\n  margin-bottom: 10px;\n}\n\n.globalModalErr{\n  margin-left: 140px;\n  padding-bottom: 100px;\n}\n"

/***/ }),

/***/ "./src/app/components/create-post/create-post.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default swappal-nav\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/post-list']\">Swap Pal</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <div class=\"navbar-search\">\n      <form class=\"navbar-form navbar-left\">\n        <div class=\"input-group\">\n          <div class=\"input-group-btn search-panel\">\n            <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" style=\"height: 39px\">\n              <span id=\"search_concept\">{{initialTag}}</span> <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu\" role=\"menu\">\n              <li><a   style=\"color:black;\" (click)=\"changeInitial(firstTag)\">{{firstTag}}</a></li>\n              <li><a   style=\"color:black;\" (click)=\"changeInitial(secondTag)\">{{secondTag}}</a></li>\n            </ul>\n          </div>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\" aria-label=\"Search for...\" [(ngModel)]=\"searchText\" name=\"searchText\" style=\"width: 403px;z-index: 1;\">\n          <div class=\"form-group search-container\" style=\"z-index: 2;margin-left: 136px;\"><span class=\"icon-search\"></span></div>\n        </div>\n        <!--<div class=\"navbar-search\">-->\n          <!--<input type=\"text\" class=\"form-control\" placeholder=\"Search for...\" aria-label=\"Search for...\" [(ngModel)]=\"searchText\" name=\"searchText\">-->\n          <!--<div class=\"form-group search-container\"><span class=\"icon-search\"></span></div>-->\n        <!--</div>-->\n      </form>\n      </div>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a  data-toggle=\"modal\" data-target=\"#exampleModal\">Create Post</a></li>\n        <!--<li><a [routerLink]=\"['/profile']\"><span class=\"icon-user profile-icon\"></span></a></li>-->\n        <li  class=\"dropdown\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Hello, {{userService.user.name}} &nbsp;<span class=\"glyphicon glyphicon-chevron-down\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"dropdown-item\"><a [routerLink]=\"['/profile']\"  style=\"color:black;\"><span class=\"glyphicon glyphicon-user\"></span>&nbsp; Profile</a></li>\n            <li class=\"dropdown-item\"><a [routerLink]=\"['/login']\"  style=\"color:black;\"><span class=\"glyphicon glyphicon-log-out\"></span>&nbsp; Logout</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n\n<div class=\"container create-post\">\n  <form #createPostForm=\"ngForm\">\n    <span class=\"error-msg globalModalErr\" *ngIf=\"globalErrMsg\">{{globalErrMsg}}</span>\n  <div class=\"col-xs-12\">\n\n\n  <div class=\"col-xs-2\"></div>\n\n  <div class=\"col-xs-3\">\n    <span>Upload pictures</span>\n    <div class=\"upload-container\">\n      <div class=\"upload-wrapper\">\n        <button class=\"btn btn-primary plusBtn\"><span class=\"glyphicon glyphicon-plus\"></span></button>\n        <input type=\"file\" class=\"form-control\" name=\"post-picture\" (change)=\"captureUpload($event)\">\n      </div>\n    </div>\n    <div *ngFor=\"let filename of fileNameList.reverse();let l=index;\">\n      <i>{{filename}}</i><span *ngIf=\"l==0\">&nbsp; added</span>\n    </div>\n    <div class=\"error-msg\" *ngIf=\"imageErrMsg\" style=\"margin-top: 10px;\">\n      {{imageErrMsg}}\n    </div>\n  </div>\n\n  <div class=\"col-xs-5\">\n    <div>\n      <span>What do you have?</span>\n      <input type=\"text\"\n             required\n             (ngModel)=\"title\"\n             #title=\"ngModel\"\n             id=\"title\"\n             name=\"title\"\n             class=\"form-control\"\n             placeholder=\"What do you have for swapping?\">\n      <div class=\"error-msg\" *ngIf=\"!title?.valid && title?.touched\">\n        Please enter an item\n      </div>\n    </div>\n    <div>\n      <span>Description</span>\n      <textarea rows=\"3\"\n                required\n                (ngModel)=\"description\"\n                #description=\"ngModel\"\n                id=\"description\"\n                name=\"description\"\n                class=\"form-control\"\n                placeholder=\"Add a description of the swap item\"></textarea>\n      <div class=\"error-msg\" *ngIf=\"!description?.valid && description?.touched\">\n        Please enter a description\n      </div>\n    </div>\n    <div>\n      <span>Would you like to swap on-campus? &nbsp;&nbsp;</span>\n      <label class=\"switch\">\n        <input type=\"checkbox\" checked (ngModel)=\"location\"\n               #location=\"ngModel\" (change)=\"locationChange($event.target.checked)\">\n        <span class=\"slider round\" style=\"height: 34px; margin-top: 0px;\"></span>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"col-xs-2\"></div>\n  </div>\n\n  <div class=\"col-xs-12\">\n    <div class=\"col-xs-1\"></div>\n    <div class=\"col-xs-6\">\n\n      <div class=\"form-check wishlist-bottom\">\n        <input class=\"form-check-input wishlist-checkbox\"\n               type=\"checkbox\"\n               id=\"wishlist\"\n               [(ngModel)]=\"isChecked\" [ngModelOptions]=\"{standalone: true}\">\n        <label class=\"form-check-label wishlist-label\" for=\"wishlist\">\n          &nbsp;Import wishlist from your profile\n        </label>\n      </div>\n      <div>\n\n        <div *ngIf=\"isChecked\">\n          <div *ngIf=\"wishlist?.length>0\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <div>\n\n              <span class=\"item-style\" *ngFor=\"let item of wishlist;let i=index;\">\n                  <span>\n                    <input class=\"form-check-input item-checkbox wishlistCheckBoxs\"\n                               type=\"checkbox\"\n                               id=\"wishlist{{i}}\">{{item.title}}</span>\n              </span>\n              </div>\n            </div>\n          </div>\n        </div>\n        </div>\n            <div *ngFor=\"let newItemAdd of addMoreList;let k=index;\">\n              <div class=\"input-group mb-3\">\n                <input type=\"text\"\n                       class=\"form-control\"\n                       placeholder=\"Enter item name\">\n\n                <div class=\"input-group-append\">\n                  <button class=\"btn btn-outline-secondary remove-icon\" type=\"button\" (click)=\"removeWishlistItem(k)\">\n                    <span class=\"glyphicon glyphicon-remove\"></span>\n                  </button>\n                </div>\n              </div>\n            </div>\n\n          <a><button type=\"button\" class=\"btn\" (click)=\"addWishlistItem()\"><u>Add More</u></button></a>\n        <!--</div>-->\n\n    </div>\n  </div>\n</div>\n  <div class=\"col-xs-10\">\n    <div>\n      <div  class=\"pull-right\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"postInfo(createPostForm)\">Post</button>\n      </div>\n    </div>\n  </div>\n<div class=\"col-xs-2\"></div>\n  </form>\n</div>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div>Are you sure you want to leave?</div>\n        <div>You will lose the changes you made</div>\n      </div>\n      <div class=\"modal-footer\">\n\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" [routerLink]=\"['/post-list']\">Leave</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Stay</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/create-post/create-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__("./node_modules/firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreatePostComponent = (function () {
    function CreatePostComponent(router, userService, db) {
        this.router = router;
        this.userService = userService;
        this.db = db;
        this.newList = [];
        this.addMoreList = [];
        this.fileNameList = [];
        this.postList = [];
        this.imageFiles = [];
        this.selectedWishlist = [];
        this.yourPostList = [];
        this.yourPostList = this.userService.user.postList || [];
        this.wishlist = this.userService.user.wishlist || [];
    }
    CreatePostComponent.prototype.ngOnInit = function () {
        this.isChecked = false;
        this.postList = this.userService.getPostList();
        console.log('this is the wishlist', this.wishlist);
        // this.newList.push('newItem');
        this.addMoreList.push('newItem');
        this.initialTag = 'What you want?';
        this.firstTag = 'What you want?';
        this.secondTag = 'Others wish-list';
        this.location = true;
        this.imageCounter = 0;
    };
    CreatePostComponent.prototype.captureUpload = function (event) {
        var file = event.target.files[0];
        this.fileNameList.push(file.name);
        //file.name = file.name.replace(/\s/g, "_");
        this.imageFiles.push(file);
        this.imageErrMsg = "";
        this.imageFile = file;
    };
    CreatePostComponent.prototype.locationChange = function (flag) {
        console.log("flag", flag);
        this.location = flag;
    };
    CreatePostComponent.prototype.addWishlistItem = function () {
        this.addMoreList.push('newItem');
    };
    CreatePostComponent.prototype.removeWishlistItem = function (k) {
        this.addMoreList.splice(k, 1);
    };
    CreatePostComponent.prototype.postInfo = function (createPostForm) {
        var x = document.getElementsByClassName('wishlistCheckBoxs');
        for (var i = 0; i < x.length; i++) {
            if (x[i].checked) {
                this.selectedWishlist.push(this.wishlist[i].title);
            }
        }
        console.log(this.selectedWishlist);
        if (this.fileNameList.length === 0) {
            this.imageErrMsg = "Please add pictures of the item";
        }
        if (!createPostForm.valid) {
            this.globalErrMsg = "Please enter the required fields";
        }
        if (this.fileNameList.length !== 0 && createPostForm.valid) {
            var imageUrl_1 = [];
            console.log('createPostForm values----', createPostForm.value.title, createPostForm.value.description, createPostForm.value.location);
            this.imageFiles.forEach(function (image) {
                var imageName = image.name.replace(/\s/g, "_");
                var storageRef = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["storage"]().ref('/images/' + imageName);
                storageRef.put(image).then(function (img) {
                    var storageRef1 = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["storage"]().ref('/images/');
                    var imgRef = storageRef1.child(imageName);
                    imgRef.getDownloadURL().then(function (url) {
                        imageUrl_1.push(url);
                    });
                });
            });
            //
            // this.imageFiles.forEach(function (image) {
            //   let imageName = image.name.replace(/\s/g, "_");
            //
            // });
            console.log(imageUrl_1);
            var newPost = {
                title: createPostForm.value.title,
                description: createPostForm.value.description,
                location: (this.location ? 'On-Campus' : 'Off-Campus'),
                userName: this.userService.user.name,
                rate: this.userService.user.avgRate,
                postedFrom: "CreatePost",
                image: imageUrl_1,
                wishlist: this.selectedWishlist
            };
            this.postList.push(newPost);
            console.log('your posts', this.yourPostList);
            this.userService.user.postList.push(newPost);
            this.router.navigate(['profile']);
        }
    };
    CreatePostComponent.prototype.changeInitial = function (tagname) {
        this.initialTag = tagname;
    };
    return CreatePostComponent;
}());
CreatePostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-create-post',
        template: __webpack_require__("./src/app/components/create-post/create-post.component.html"),
        styles: [__webpack_require__("./src/app/components/create-post/create-post.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object])
], CreatePostComponent);

var _a, _b, _c;
//# sourceMappingURL=create-post.component.js.map

/***/ }),

/***/ "./src/app/components/details/details.component.css":
/***/ (function(module, exports) {

module.exports = "/* CSS used here will be applied after bootstrap.css */\n.carousel {\n  margin-top: 20px;\n}\n.item .thumb {\n  width: 25%;\n  cursor: pointer;\n  float: left;\n}\n.item .thumb img {\n  width: 100%;\n  margin: 2px;\n}\n.item img {\n  width: 100%;\n}\n.checked {\n  color: orange;\n}\n.topspace {\n  padding-top: 3%;\n}\n.swappal-nav {\n  background-color: #337ab7;\n  color: white;\n\n  padding-top: 8px;\n}\n.swappal-nav a {\n  color: white;\n  font-family: Georgia;\n  font-weight: bold;\n\n}\n.navbar-form {\n  margin-bottom:0px;\n  font-size: 1px;\n  font-family: Georgia;\n}\n\n\n\n"

/***/ }),

/***/ "./src/app/components/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default swappal-nav\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/post-list']\">Swap Pal</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <div class=\"navbar-search\">\n      <form class=\"navbar-form navbar-left\">\n        <div class=\"input-group\">\n          <div class=\"input-group-btn search-panel\">\n            <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" style=\"height: 39px\">\n              <span id=\"search_concept\">{{initialTag}}</span> <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu\" role=\"menu\">\n              <li><a   style=\"color:black;\" (click)=\"changeInitial(firstTag)\">{{firstTag}}</a></li>\n              <li><a   style=\"color:black;\" (click)=\"changeInitial(secondTag)\">{{secondTag}}</a></li>\n            </ul>\n          </div>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\" aria-label=\"Search for...\" [(ngModel)]=\"searchText\" name=\"searchText\"  style=\"width: 403px;z-index: 1;\">\n          <div class=\"form-group search-container\" style=\"z-index: 2;margin-left: 136px;\"><span class=\"icon-search\"></span></div>\n        </div>\n        <!--<div class=\"navbar-search\">-->\n          <!--<input type=\"text\" class=\"form-control\" placeholder=\"Search for...\" aria-label=\"Search for...\" [(ngModel)]=\"searchText\" name=\"searchText\">-->\n          <!--<div class=\"form-group search-container\"><span class=\"icon-search\"></span></div>-->\n        <!--</div>-->\n      </form>\n      </div>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a [routerLink]=\"['/createPost']\">Create Post</a></li>\n        <!--<li><a [routerLink]=\"['/profile']\"><span class=\"icon-user profile-icon\"></span></a></li>-->\n        <li  class=\"dropdown\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Hello, {{userService.user.name}} &nbsp;<span class=\"glyphicon glyphicon-chevron-down\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"dropdown-item\"><a [routerLink]=\"['/profile']\"  style=\"color:black;\"><span class=\"glyphicon glyphicon-user\"></span>&nbsp; Profile</a></li>\n            <li class=\"dropdown-item\"><a [routerLink]=\"['/login']\"  style=\"color:black;\"><span class=\"glyphicon glyphicon-log-out\"></span>&nbsp; Logout</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <b style=\"color: #337ab7; font-size: x-large; font-family: Georgia\">Blender For Swap</b>\n\n  </div>\n\n  <div class=\"row\">\n    <b style=\"color: #337ab7; font-size: large; font-family: Georgia\">Anna:\n      <span class=\"fa fa-star checked\"></span>\n      <span class=\"fa fa-star checked\"></span>\n      <span class=\"fa fa-star checked\"></span>\n      <span class=\"fa fa-star checked\"></span>\n      <span class=\"fa fa-star\"></span>\n\n    </b>\n\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-3\"></div>\n    <div class=\"col-sm-6\">\n      <div id=\"carousel\" class=\"carousel slide\" data-ride=\"carousel\">\n        <div class=\"carousel-inner\">\n          <div class=\"item active\">\n            <img src=\"https://images-na.ssl-images-amazon.com/images/I/61qm4kZvPaL._SL1000_.jpg\">\n          </div>\n          <div class=\"item\">\n            <img src=\"https://images-na.ssl-images-amazon.com/images/I/71FNDOV-JTL._SL1000_.jpg\">\n          </div>\n          <div class=\"item\">\n            <img src=\"https://images-na.ssl-images-amazon.com/images/I/71T0bsAmi7L._SL1000_.jpg\">\n          </div>\n\n          <div class=\"item\">\n            <img src=\"https://images-na.ssl-images-amazon.com/images/I/71136x3QKfL._SL1000_.jpg\">\n          </div>\n          <div class=\"item\">\n            <img src=\"https://images-na.ssl-images-amazon.com/images/I/71pu4JPyhuL._SL1000_.jpg\">\n          </div>\n          <div class=\"item\">\n            <img src=\"https://m.media-amazon.com/images/S/aplus-media/vc/b03afeb5-d8a4-49c5-83ca-2530649a379c._CR0,0,600,600_PT0_SX220__.jpg\">\n          </div>\n          <div class=\"item\">\n            <img src=\"https://images-na.ssl-images-amazon.com/images/I/81evLRZv+bL._SY88.jpg\">\n          </div>\n          <div class=\"item\">\n            <img src=\"https://images-na.ssl-images-amazon.com/images/I/41T3fErTI7L._SL1000_.jpg\">\n          </div>\n        </div>\n      </div>\n      <div class=\"clearfix\">\n        <div id=\"thumbcarousel\" class=\"carousel slide\" data-interval=\"false\">\n          <div class=\"carousel-inner\">\n            <div class=\"item active\">\n              <div data-target=\"#carousel\" data-slide-to=\"0\" class=\"thumb\"><img src=\"https://images-na.ssl-images-amazon.com/images/I/61qm4kZvPaL._SL1000_.jpg\"></div>\n              <div data-target=\"#carousel\" data-slide-to=\"1\" class=\"thumb\"><img src=\"https://images-na.ssl-images-amazon.com/images/I/71FNDOV-JTL._SL1000_.jpg\"></div>\n              <div data-target=\"#carousel\" data-slide-to=\"2\" class=\"thumb\"><img src=\"https://images-na.ssl-images-amazon.com/images/I/71T0bsAmi7L._SL1000_.jpg\"></div>\n              <div data-target=\"#carousel\" data-slide-to=\"3\" class=\"thumb\"><img src=\"https://images-na.ssl-images-amazon.com/images/I/71136x3QKfL._SL1000_.jpg\"></div>\n            </div><!-- /item -->\n            <div class=\"item\">\n              <div data-target=\"#carousel\" data-slide-to=\"4\" class=\"thumb\"><img src=\"https://images-na.ssl-images-amazon.com/images/I/71pu4JPyhuL._SL1000_.jpg\"></div>\n              <div data-target=\"#carousel\" data-slide-to=\"5\" class=\"thumb\"><img src=\"https://m.media-amazon.com/images/S/aplus-media/vc/b03afeb5-d8a4-49c5-83ca-2530649a379c._CR0,0,600,600_PT0_SX220__.jpg\"></div>\n              <div data-target=\"#carousel\" data-slide-to=\"6\" class=\"thumb\"><img src=\"https://images-na.ssl-images-amazon.com/images/I/81evLRZv+bL._SY88.jpg\"></div>\n              <div data-target=\"#carousel\" data-slide-to=\"7\" class=\"thumb\"><img src=\"https://images-na.ssl-images-amazon.com/images/I/41T3fErTI7L._SL1000_.jpg\"></div>\n            </div><!-- /item -->\n          </div><!-- /carousel-inner -->\n          <a class=\"left carousel-control\" href=\"#thumbcarousel\" role=\"button\" data-slide=\"prev\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n          <a class=\"right carousel-control\" href=\"#thumbcarousel\" role=\"button\" data-slide=\"next\">\n            <span class=\"glyphicon glyphicon-chevron-right\"></span>\n          </a>\n        </div> <!-- /thumbcarousel -->\n      </div><!-- /clearfix -->\n    </div> <!-- /col-sm-6 -->\n    <div class=\"col-sm-3\">\n\n    </div>\n\n\n\n    <div class=\"row\">\n\n\n    </div> <!-- /col-sm-6 -->\n  </div> <!-- /row -->\n\n  <div class=\"topspace\"></div>\n  <div class=\"panel panel-default\">\n    <div class=\"panel-body\">\n  <div class=\"row\">\n    <div class=\"col-sm-4\"><b style=\"color: #337ab7; font-size: large; font-family: Georgia\">Description</b></div>\n    <div class=\"col-sm-8\" style=\"font-family: Georgia\"><p>I bought this blender last year. It has five program settings —Smoothies, Hot Soups, Dips & Spreads, Frozen Desserts and Self-Cleaning.\n      It automatically adjust times and speeds for the container selected and stop the blender when done. You can find the specs of the blender <a href=\"https://www.amazon.com/Magic-Bullet-Blender-Small-Silver/dp/B012T634SM/ref=cm_cr_arp_d_product_top?ie=UTF8\">here</a>. </p>\n      <p>The images are from Amazon. </p>\n      <p>I used the blender 3-5 times ever since I bought it. It's practically almost new. </p></div>\n  </div>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-sm-4\"><b style=\"color: #337ab7; font-size: large; font-family: Georgia\">Wishlist</b></div>\n    <div class=\"col-sm-8\">\n      <ol style=\"font-family: Georgia\">\n        <li>Airbed</li>\n      </ol>\n    </div>\n  </div>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-sm-4\"><b style=\"color: #337ab7; font-size: large; font-family: Georgia\">Contact Info</b></div>\n    <div class=\"col-sm-8\" style=\"font-family: Georgia\">\n      <p>anna@husky.neu.edu</p>\n      <div class=\"alert alert-info\">\n        <strong>Remember!</strong>  An Invitation Code connects you with Anna to ensure a smooth transaction. Ask for the Invitation Code before doing any transaction.\n      </div>\n    </div>\n  </div>\n  </div>\n  </div>\n  <!--<table class=\"table table-borderless\">-->\n    <!--<tbody>-->\n    <!--<tr>-->\n      <!--<th scope=\"row\">Description</th>-->\n      <!--<td><p>I bought this blender last year. It has five program settings —Smoothies, Hot Soups, Dips & Spreads, Frozen Desserts and Self-Cleaning.-->\n        <!--It automatically adjust times and speeds for the container selected and stop the blender when done. You can find the specs of the blender <a href=\"https://www.amazon.com/Magic-Bullet-Blender-Small-Silver/dp/B012T634SM/ref=cm_cr_arp_d_product_top?ie=UTF8\">here</a>. </p>-->\n        <!--<p>The images are from Amazon. </p>-->\n        <!--<p>I used the blender 3-5 times ever since I bought it. It's practically almost new. </p></td>-->\n    <!--</tr>-->\n    <!--</tbody>-->\n  <!--</table>-->\n\n\n  <div class=\"row\"><!-- panel-footer -->\n    <div class=\"col-xs-6 text-left\">\n      <div class=\"previous\">\n        <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#exampleModal\">Report this Post</button>\n      </div>\n    </div>\n\n    <!-- Modal -->\n    <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"exampleModalLabel\">Report Post</h4>\n          </div>\n          <div class=\"modal-body\">\n            <label for=\"comment\">Reason:</label>\n            <textarea class=\"form-control\" rows=\"5\" id=\"comment\"></textarea>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n            <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" id=\"report\">Report</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  <div style=\"padding-bottom: 4%\"></div>\n\n</div> <!-- /container -->\n"

/***/ }),

/***/ "./src/app/components/details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailsComponent = (function () {
    function DetailsComponent(userService) {
        this.userService = userService;
        this.show = true;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        this.initialTag = 'What you want?';
        this.firstTag = 'What you want?';
        this.secondTag = 'Others wish-list';
    };
    DetailsComponent.prototype.changeInitial = function (tagname) {
        this.initialTag = tagname;
    };
    return DetailsComponent;
}());
DetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-details',
        template: __webpack_require__("./src/app/components/details/details.component.html"),
        styles: [__webpack_require__("./src/app/components/details/details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object])
], DetailsComponent);

var _a;
//# sourceMappingURL=details.component.js.map

/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".swappal-nav {\n  background-color: #337ab7;\n  color: white;\n\n  padding-top: 8px;\n}\n\n.swappal-nav a {\n  color: white;\n  font-family: Georgia;\n  font-weight: bold;\n\n}\n\n.navbar-form {\n  margin-bottom:0px;\n  font-size: 1px;\n  font-family: Georgia;\n}\n\nbody {\n  padding-top: 54px;\n}\n\n@media (min-width: 992px) {\n  body {\n    padding-top: 56px;\n  }\n}\n\n.board{\n  width: 75%;\n  margin: 60px auto;\n  height: 500px;\n  background: #fff;\n  /*box-shadow: 10px 10px #ccc,-10px 20px #ddd;*/\n}\n\n.board .nav-tabs {\n  position: relative;\n  /* border-bottom: 0; */\n  /* width: 80%; */\n  margin: 40px auto;\n  margin-bottom: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n\n}\n\n.board > div.board-inner{\n  background: #fafafa url(http://subtlepatterns.com/patterns/geometry2.png);\n  background-size: 30%;\n}\n\np.narrow{\n  width: 60%;\n  margin: 10px auto;\n}\n\n.liner{\n  height: 2px;\n  background: #ddd;\n  position: absolute;\n  width: 80%;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  top: 50%;\n  z-index: 1;\n}\n\n.nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {\n  color: #555555;\n  cursor: default;\n  /* background-color: #ffffff; */\n  border: 0;\n  border-bottom-color: transparent;\n}\n\nspan.round-tabs{\n  width: 70px;\n  height: 70px;\n  line-height: 70px;\n  display: inline-block;\n  border-radius: 100px;\n  background: white;\n  z-index: 2;\n  position: absolute;\n  left: 0;\n  text-align: center;\n  font-size: 25px;\n}\n\nspan.round-tabs.one{\n  color: rgb(34, 194, 34);border: 2px solid rgb(34, 194, 34);\n}\n\nli.active span.round-tabs.one{\n  background: #fff !important;\n  border: 2px solid #ddd;\n  color: rgb(34, 194, 34);\n}\n\nspan.round-tabs.two{\n  color: #febe29;border: 2px solid #febe29;\n}\n\nli.active span.round-tabs.two{\n  background: #fff !important;\n  border: 2px solid #ddd;\n  color: #febe29;\n}\n\nspan.round-tabs.three{\n  color: #3e5e9a;border: 2px solid #3e5e9a;\n}\n\nli.active span.round-tabs.three{\n  background: #fff !important;\n  border: 2px solid #ddd;\n  color: #3e5e9a;\n}\n\nspan.round-tabs.four{\n  color: #f1685e;border: 2px solid #f1685e;\n}\n\nli.active span.round-tabs.four{\n  background: #fff !important;\n  border: 2px solid #ddd;\n  color: #f1685e;\n}\n\nspan.round-tabs.five{\n  color: #999;border: 2px solid #999;\n}\n\nli.active span.round-tabs.five{\n  background: #fff !important;\n  border: 2px solid #ddd;\n  color: #999;\n}\n\n.nav-tabs > li.active > a span.round-tabs{\n  background: #fafafa;\n}\n\n.nav-tabs > li {\n  width: 20%;\n}\n\n/*li.active:before {\n    content: \" \";\n    position: absolute;\n    left: 45%;\n    opacity:0;\n    margin: 0 auto;\n    bottom: -2px;\n    border: 10px solid transparent;\n    border-bottom-color: #fff;\n    z-index: 1;\n    transition:0.2s ease-in-out;\n}*/\n\nli:after {\n  content: \" \";\n  position: absolute;\n  left: 45%;\n  opacity:0;\n  margin: 0 auto;\n  bottom: 0px;\n  border: 5px solid transparent;\n  border-bottom-color: #ddd;\n  -webkit-transition:0.1s ease-in-out;\n  transition:0.1s ease-in-out;\n\n}\n\nli.active:after {\n  content: \" \";\n  position: absolute;\n  left: 45%;\n  opacity:1;\n  margin: 0 auto;\n  bottom: 0px;\n  border: 10px solid transparent;\n  border-bottom-color: #ddd;\n\n}\n\n.nav-tabs > li a{\n  width: 70px;\n  height: 70px;\n  margin: 20px auto;\n  border-radius: 100%;\n  padding: 0;\n}\n\n.nav-tabs > li a:hover{\n  background: transparent;\n}\n\n.tab-content{\n}\n\n.tab-pane{\n  position: relative;\n  padding-top: 50px;\n}\n\n.tab-content .head{\n  font-family: Georgia;\n  font-size: 25px;\n  text-transform: uppercase;\n  padding-bottom: 10px;\n}\n\n.btn-outline-rounded{\n  padding: 10px 40px;\n  margin: 20px 0;\n  border: 2px solid transparent;\n  border-radius: 25px;\n}\n\n.btn.green{\n  background-color:#5cb85c;\n  /*border: 2px solid #5cb85c;*/\n  color: #ffffff;\n}\n\n@media( max-width : 585px ){\n\n  .board {\n    width: 90%;\n    height:auto !important;\n  }\n  span.round-tabs {\n    font-size:16px;\n    width: 50px;\n    height: 50px;\n    line-height: 50px;\n  }\n  .tab-content .head{\n    font-size:20px;\n  }\n  .nav-tabs > li a {\n    width: 50px;\n    height: 50px;\n    line-height:50px;\n  }\n\n  li.active:after {\n    content: \" \";\n    position: absolute;\n    left: 35%;\n  }\n\n  .btn-outline-rounded {\n    padding:12px 20px;\n  }\n}\n\n\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default swappal-nav\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/login']\">Swap Pal</a>\n    </div>\n  </div><!-- /.container-fluid -->\n</nav>\n<!-- Page Content -->\n<div class=\"container\">\n\n  <!-- Heading Row -->\n  <div class=\"row my-4\">\n    <div class=\"col-lg-8\">\n      <img class=\"img-fluid rounded\" src=\"https://cdn-images-1.medium.com/max/1000/1*kr-RhSv4SNYjRODjjF3UVw.jpeg\" alt=\"\">\n    </div>\n    <!-- /.col-lg-8 -->\n    <div class=\"col-lg-4\" style=\"font-family: Georgia; font-size: medium\">\n      <h1 style=\"font-family: Georgia; font-weight: bolder; color: #337ab7\">Swap Pal</h1>\n      <h4 style=\"font-family: Georgia; font-weight: bolder; font-style: italic\">Swap with trust</h4>\n      <p>Swap Pal is an online platform that enables members of the Northeastern Community to swap their unwanted/unused stuff for something they need.</p>\n      <p>Ready to find your Swap Pal?</p>\n      <a class=\"btn btn-primary btn-lg\" [routerLink]=\"['/login']\">Start Swapping!</a>\n    </div>\n    <!-- /.col-md-4 -->\n  </div>\n  <!-- /.row -->\n\n\n  <div class=\"page-header\">\n    <h3 style=\"font-family: Georgia; font-weight: bolder; color: #337ab7\">How It Works</h3>\n  </div>\n\n  <section style=\"background:#337ab7;font-family: Georgia; font-size: medium\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"board\">\n          <div class=\"board-inner\">\n            <ul class=\"nav nav-tabs\" id=\"myTab\">\n              <div class=\"liner\"></div>\n\n              <li class=\"active\">\n                <a href=\"#search\" data-toggle=\"tab\" title=\"Search/Create\">\n                     <span class=\"round-tabs one\">\n                          <i class=\"glyphicon glyphicon-search\"></i>\n                     </span>\n                </a>\n              </li>\n\n              <li><a href=\"#connect\" data-toggle=\"tab\" title=\"Connect\">\n                         <span class=\"round-tabs two\">\n                              <i class=\"glyphicon glyphicon-comment\"></i>\n                         </span>\n              </a></li>\n\n              <li><a href=\"#send\" data-toggle=\"tab\" title=\"Send Invitation Code\">\n                         <span class=\"round-tabs three\">\n                              <i class=\"glyphicon glyphicon-send\"></i>\n                         </span> </a>\n              </li>\n\n              <li><a href=\"#swap\" data-toggle=\"tab\" title=\"Swap\">\n                         <span class=\"round-tabs four\">\n                              <i class=\"glyphicon glyphicon-refresh\"></i>\n                         </span> </a>\n              </li>\n\n              <li><a href=\"#rate\" data-toggle=\"tab\" title=\"Rate your Pal\">\n                         <span class=\"round-tabs five\">\n                              <i class=\"glyphicon glyphicon-star-empty\"></i>\n                         </span> </a>\n              </li>\n\n            </ul></div>\n\n          <div class=\"tab-content\">\n            <div class=\"tab-pane fade in active\" id=\"search\">\n              <h3 class=\"head text-center\">Search/Create Posts</h3>\n              <p class=\"narrow text-center\">\n                Have/Want something to swap? Awesome! Search for what you want or what you are willing to trade. Else, create a post mentioning what you have and what you want.\n              </p>\n            </div>\n            <div class=\"tab-pane fade\" id=\"connect\">\n              <h3 class=\"head text-center\">Connect</h3>\n              <p class=\"narrow text-center\">\n                Found someone who has what you want or someone has found you? Great! Contact them. Discuss the logistics, exchange pics, etc.\n              </p>\n            </div>\n            <div class=\"tab-pane fade\" id=\"send\">\n              <div class=\"text-center\">\n                <i class=\"img-intro icon-checkmark-circle\"></i>\n              </div>\n              <h3 class=\"head text-center\">Send/Ask for Invitation Code</h3>\n              <p class=\"narrow text-justify\">\n                An Invitation Code helps ensure a smooth transaction with your Swap Pal by connecting you both in our system.\n              </p>\n              <p class=\"narrow text-justify\">If you are a post author, go to your Profile Page to send the Invitation Code to your Swap Pal.</p>\n              <p class=\"narrow text-justify\">If you are not the post author, ask them to send you the Invitation Code.</p>\n            </div>\n            <div class=\"tab-pane fade\" id=\"swap\">\n              <div class=\"text-center\">\n                <i class=\"img-intro icon-checkmark-circle\"></i>\n              </div>\n              <h3 class=\"head text-center\">Swap!</h3>\n              <p class=\"narrow text-center\">\n                Meet your Swap Pal at the agreed time and location. Swap your items and do a spot check for the item's condition.\n              </p>\n            </div>\n            <div class=\"tab-pane fade\" id=\"rate\">\n              <div class=\"text-center\">\n                <i class=\"img-intro icon-checkmark-circle\"></i>\n              </div>\n              <h3 class=\"head text-center\">Rate your Swap Pal</h3>\n              <p class=\"narrow text-center\">\n                Was your Swap Pal trustworthy? Did they deliver what they promised? Let us know by rating them. Your comments will be anonymous.\n              </p>\n            </div>\n            <div class=\"clearfix\"></div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </section>\n\n</div>\n<!-- /.container -->\n\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
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
        template: __webpack_require__("./src/app/components/home/home.component.html"),
        styles: [__webpack_require__("./src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".login-container{\n  margin-top: 150px;\n}\n.navbar-search {\n  margin-bottom: 0;\n  width: 25rem;\n  margin-left: 17rem;\n}\n.swappal-nav {\n  background-color: #337ab7;\n  color: white;\n\n  padding-top: 8px;\n}\n.swappal-nav a {\n  color: white;\n  font-family: Georgia;\n  font-weight: bold;\n\n}\n.navbar-form {\n  margin-bottom:0px;\n  font-size: 1px;\n  font-family: Georgia;\n}\n.error-msg{\n  color: red;\n  margin-top: -12px;\n  margin-bottom: 10px;\n}\n.globalModalErr{\n  margin-left: 10px;\n  margin-bottom: 0px;\n}\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default swappal-nav\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\">Swap Pal</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <!--<form class=\"navbar-form navbar-left\">-->\n        <!--<input type=\"text\" class=\"form-control navbar-search\" placeholder=\"Search for...\" aria-label=\"Search for...\" [(ngModel)]=\"searchText\" name=\"searchText\">-->\n        <!--<div class=\"form-group\"><span class=\"icon-search\"></span></div>-->\n      <!--</form>-->\n      <!--<ul class=\"nav navbar-nav navbar-right\">-->\n        <!--<li><a [routerLink]=\"['/createPost']\">Create Post</a></li>-->\n        <!--<li><a [routerLink]=\"['/profile']\"><span class=\"icon-user profile-icon\"></span></a></li>-->\n      <!--</ul>-->\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n\n\n<div class=\"container-fluid login-container\">\n  <div class=\"col-md-3\">\n  </div>\n  <div class=\"col-md-6 col-xs-12\">\n    <span class=\"error-msg\" *ngIf=\"globalErrorMsg\">{{globalErrorMsg}}</span>\n      <form #loginForm=\"ngForm\">\n        <div>\n          <label for=\"username\">\n            Username\n          </label>\n          <input type=\"email\"\n                 class=\"form-control\"\n                 required\n                 (ngModel)=\"username\"\n                 #username=\"ngModel\"\n                 id=\"username\"\n                 name=\"username\"\n                 placeholder=\"Enter your husky email\">\n          <div class=\"error-msg\" *ngIf=\"!username?.valid && username?.touched\">\n            Please enter your husky email\n          </div>\n        </div>\n        <div>\n          <label for=\"password\">\n            Password\n          </label>\n          <input type=\"password\"\n                 class=\"form-control\"\n                 required\n                 (ngModel)=\"password\"\n                 #password =\"ngModel\"\n                 id=\"password\"\n                 name=\"password\"\n                 placeholder=\"Enter your password\"\n                 (keyup.enter)=\"login(loginForm)\">\n          <div class=\"error-msg\" *ngIf=\"!password?.valid && password?.touched\">\n            Please enter your password\n          </div>\n        </div>\n        <div>\n          <div class=\"col-xs-3\"></div>\n          <div class=\"col-xs-6\" style=\"text-align: center\">\n          <a><button type=\"button\" data-toggle=\"modal\" data-target=\"#exampleModal\"><u>Forgot Password?</u></button></a>\n          <br/>\n            <br/>\n            <div class=\"col-xs-8\">\n              <button type=\"button\" class=\"btn btn-primary form-control\" (click)=\"login(loginForm)\">Login</button></div>\n            <div class=\"col-xs-4\" style=\"padding-left: 0px;\">\n              <a><button type=\"button\" [routerLink]=\"['/register']\" ><u>Not a User?</u></button></a></div>\n          </div>\n        </div>\n      </form>\n  </div>\n  <div class=\"col-md-3\">\n\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Password Reset</h5>\n      </div>\n      <span class=\"error-msg globalModalErr\" *ngIf=\"resetErrorMsg\">{{resetErrorMsg}}</span>\n      <form #resetPasswordForm=\"ngForm\">\n      <div class=\"modal-body\">\n        <label for=\"resetEmail\">\n          Email\n        </label>\n        <input type=\"email\"\n               class=\"form-control\"\n               required\n               (ngModel)=\"resetEmail\"\n               #resetEmail=\"ngModel\"\n               name=\"resetEmail\"\n               id=\"resetEmail\"\n               placeholder=\"Enter your email Id\">\n        <div class=\"error-msg\" *ngIf=\"!resetEmail?.valid && resetEmail?.touched\">\n          Please enter your email\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" id=\"resetModelClose\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"resetPassword(resetPasswordForm)\">Send Email</button>\n      </div>\n      </form>\n    </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("./node_modules/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = LoginComponent_1 = (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (loginForm) {
        var _this = this;
        console.log('register form', loginForm);
        if (!loginForm.valid) {
            this.globalErrorMsg = 'Please enter the required fields';
        }
        else {
            console.log('username', loginForm);
            this.userService.login(loginForm).then(function (res) {
                if (res == null) {
                    _this.globalErrorMsg = 'Incorrect username/password';
                }
                else {
                    _this.setupUser();
                    _this.router.navigate(['post-list']);
                }
            });
        }
    };
    LoginComponent.prototype.resetPassword = function (resetForm) {
        if (resetForm.valid) {
            this.emailEnteredFlag = 'An email has been sent with the reset password link';
            return __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().sendPasswordResetEmail(resetForm.value.resetEmail).then(function (success) {
                console.log('email sent');
                document.getElementById('resetModelClose').click();
            }).catch(function (error) {
                console.log('email not sent');
            });
        }
        else {
            this.resetErrorMsg = 'Please enter a valid email';
        }
    };
    LoginComponent.prototype.setupUser = function () {
        var currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser;
        if (currentUser) {
            console.log(currentUser);
            var userEmail = currentUser.email;
            if (userEmail == 'anna@husky.neu.edu') {
                this.userService.user = LoginComponent_1.anna;
            }
            else {
                this.userService.user = LoginComponent_1.edward;
            }
        }
        else {
            this.userService.user = { email: "", name: "" };
        }
    };
    return LoginComponent;
}());
LoginComponent.anna = {
    id: 1,
    email: "anna@husky.neu.edu",
    numberOfRate: 1,
    avgRate: 4,
    pendingRate: false,
    name: "Anna",
    postList: [
        {
            id: 1,
            title: "Blender for Swap",
            swapperEmail: ""
        },
        {
            id: 2,
            title: "Iphone 5",
            swapperEmail: ""
        }
    ],
    inTransactionPosts: [
        {
            id: 1,
            title: "EarPhone",
            swapper: "Jerry"
        }
    ],
    historyPosts: [
        {
            id: 4,
            title: "HCI book",
            date: "10-16-2018",
            swapper: "Jack"
        },
        {
            id: 5,
            title: "Head phone",
            date: "9-24-2018",
            swapper: "Bobby"
        }
    ],
    wishlist: [
        {
            id: 5,
            title: "Chair",
        },
        {
            id: 6,
            title: "Table",
        },
        {
            id: 3,
            title: "Lamp",
        }
    ]
};
LoginComponent.edward = {
    id: 2,
    email: "ed@husky.neu.edu",
    numberOfRate: 1,
    avgRate: 3,
    pendingRate: false,
    name: "Edward",
    postList: [
        {
            id: 1,
            title: "Awesome Matress",
            swapperEmail: ""
        }
    ],
    inTransactionPosts: [
        {
            id: 1,
            title: "EarPhone",
            swapper: "Jerry"
        }
    ],
    historyPosts: [],
    wishlist: []
};
LoginComponent = LoginComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("./src/app/components/login/login.component.html"),
        styles: [__webpack_require__("./src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object])
], LoginComponent);

var LoginComponent_1, _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/components/post-list/post-list.component.css":
/***/ (function(module, exports) {

module.exports = ".post-image {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width:100px;\n  height:100px;\n}\n\n.swappal-nav {\n  background-color: #337ab7;\n  color: white;\n\n  padding-top: 8px;\n}\n\n.swappal-nav a {\n  color: white;\n  font-family: Georgia;\n  font-weight: bold;\n\n}\n\n.navbar-form {\n  margin-bottom:0px;\n  font-size: 1px;\n  font-family: Georgia;\n}\n\n.checked {\n  color: orange;\n}\n"

/***/ }),

/***/ "./src/app/components/post-list/post-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default swappal-nav\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/post-list']\">Swap Pal</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <div class=\"navbar-search\">\n      <form class=\"navbar-form navbar-left\">\n        <div class=\"input-group\">\n          <div class=\"input-group-btn search-panel\">\n            <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" style=\"height: 39px\">\n              <span id=\"search_concept\">{{initialTag}}</span> <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu\" role=\"menu\">\n              <li><a   style=\"color:black;\" (click)=\"changeInitial(firstTag)\">{{firstTag}}</a></li>\n              <li><a   style=\"color:black;\" (click)=\"changeInitial(secondTag)\">{{secondTag}}</a></li>\n            </ul>\n          </div>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\" aria-label=\"Search for...\" [(ngModel)]=\"searchText\" name=\"searchText\" style=\"z-index: 1\">\n          <div class=\"form-group search-container\" style=\"z-index: 2;margin-left: 136px;\"><span class=\"icon-search\"></span></div>\n        </div>\n\n\n\n\n\n        <!--<div class=\"navbar-search\">-->\n          <!--<input type=\"text\" class=\"form-control\" placeholder=\"Search for...\" aria-label=\"Search for...\" [(ngModel)]=\"searchText\" name=\"searchText\">-->\n          <!--<div class=\"form-group search-container\"><span class=\"icon-search\"></span></div>-->\n        <!--</div>-->\n      </form>\n      </div>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a [routerLink]=\"['/createPost']\">Create Post</a></li>\n        <!--<li><a [routerLink]=\"['/profile']\"><span class=\"icon-user profile-icon\"></span></a></li>-->\n        <li  class=\"dropdown\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Hello, {{userService.user.name}} &nbsp;<span class=\"glyphicon glyphicon-chevron-down\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"dropdown-item\"><a [routerLink]=\"['/profile']\"  style=\"color:black;\"><span class=\"glyphicon glyphicon-user\"></span>&nbsp; Profile</a></li>\n            <li class=\"dropdown-item\"><a [routerLink]=\"['/login']\"  style=\"color:black;\"><span class=\"glyphicon glyphicon-log-out\"></span>&nbsp; Logout</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n\n<div class=\"container\">\n\n\n  <ul class=\"row post-list list-group\">\n    <div *ngIf=\"searchText  && titleShow\" style=\"clear: both;\">\n    <div *ngIf=\"(postList | postfilter:searchText:initialTag)?.length >= 0\">\n      <h3>Posts with <b><i>{{searchText}}</i></b> in wishlist</h3>\n    </div>\n    </div>\n\n    <br>\n    <li class=\"col-xs-12 list-group-item\" *ngFor=\"let post of postList | postfilter:searchText:initialTag\">\n      <div class=\"col-xs-2\">\n        <span *ngIf=\"post.postedFrom\">\n          <a [routerLink]=\"['/details']\"><img [src]=\"post.image\" class=\"img-thumbnail rounded post-image\"></a>\n        </span>\n        <span *ngIf=\"!post.postedFrom\">\n        <a [routerLink]=\"['/details']\"><img [src]=\"'assets/images/'+post.image\" class=\"img-thumbnail rounded post-image\"></a>\n        </span>\n      </div>\n      <div class=\"col-xs-10\">\n        <a [routerLink]=\"['/details']\"><h3>{{post.title}}</h3></a>\n        <h5>\n          <span>{{post.userName}} : </span>\n          <span *ngFor=\"let n of [1, 2, 3, 4, 5]\">\n            <span class=\"fa fa-star checked\" *ngIf=\"post.rate >= n\"></span>\n            <span class=\"fa fa-star checked\" *ngIf=\"post.rate < n && post.rate >= (n-0.5)\"></span>\n            <span class=\"fa fa-star\" *ngIf=\"post.rate < (n-0.5)\"></span>\n          </span>\n          <!-- <span class=\"icon-star-full\"></span> -->\n        </h5>\n      </div>\n    </li>\n\n\n  </ul>\n  <div *ngIf=\"(postList | postfilter:searchText:initialTag)?.length == 0\" style=\"clear: both;\">\n    <h3>No Results Found.</h3>\n    <h4>Why not <a [routerLink]=\"['/createPost']\">create your own post?</a></h4>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"reviewModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <!--         <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button> -->\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Review</h4>\n      </div>\n      <div class=\"modal-body\">\n        <h3>How was your experience with Anna?</h3>\n        <h3>Swap Item: Blender for Swap</h3>\n        <h2 class=\"star-group text-center\">\n          <span *ngFor=\"let n of [1, 2, 3, 4, 5]\" (click)=\"review($event, n)\" class=\"star-item\">\n            <!-- <span class=\"icon-star-empty\"></span> -->\n            <!-- <span class=\"icon-star-full\" *ngIf=\"currentRate >= n\"></span>\n            <span class=\"icon-star-half\" *ngIf=\"currentRate < n && currentRate >= (n-0.5)\"></span>\n            <span class=\"icon-star-empty empty-rate\" *ngIf=\"currentRate < (n-0.5)\"></span> -->\n            <span class=\"fa fa-star checked\" *ngIf=\"currentRate >= n\"></span>\n            <span class=\"fa fa-star\" *ngIf=\"currentRate <= (n-1)\"></span>\n          </span>\n        </h2>\n        <div class=\"form-group\">\n          <label>Leave Comment</label>\n          <textarea class=\"form-control\" rows=\"3\">\n          </textarea>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"completeTransaction()\">Submit</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<!--&lt;!&ndash; Button trigger modal &ndash;&gt;-->\n<!--<button type=\"button\" class=\"btn btn-primary btn-lg\" data-toggle=\"modal\" data-target=\"#reviewModal\">-->\n  <!--Review-->\n<!--</button>-->\n\n<!-- Modal -->\n\n"

/***/ }),

/***/ "./src/app/components/post-list/post-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostListComponent = (function () {
    function PostListComponent(userService) {
        this.userService = userService;
        this.postList = [];
        this.blender = {
            id: 6,
            title: "Blender for Swap",
            userName: "Anna",
            rate: 4,
            image: "blender.jpg",
            wishlist: ["iphone", "airbed"]
        };
        this.currentRate = 0;
    }
    PostListComponent.prototype.ngOnInit = function () {
        this.postList = this.userService.getPostList();
        if (this.userService.user && this.userService.user.email != "anna@husky.neu.edu") {
            this.postList.unshift(this.blender);
        }
        this.initialTag = 'What you want?';
        this.firstTag = 'What you want?';
        this.secondTag = 'Others wish-list';
        this.titleShow = false;
        if (this.userService.user.pendingRate) {
            // console.log(document.getElementById('reviewModal'));
            var dialog = document.getElementById('reviewModal');
            dialog.className += 'in';
            dialog.style.display = "block";
        }
    };
    PostListComponent.prototype.review = function (event, index) {
        // console.log('rating: ' + index);
        this.currentRate = index;
    };
    PostListComponent.prototype.completeTransaction = function () {
        __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */].anna.avgRate =
            (__WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */].anna.avgRate * __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */].anna.numberOfRate + this.currentRate) / (__WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */].anna.numberOfRate + 1);
        __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */].anna.numberOfRate++;
        // console.log(document.getElementById('reviewModal'));
        var dialog = document.getElementById('reviewModal');
        dialog.className += 'in';
        dialog.style.display = "none";
        this.userService.user.pendingRate = false;
    };
    PostListComponent.prototype.changeInitial = function (tagname) {
        console.log(tagname);
        if (tagname === 'Others wish-list') {
            this.titleShow = true;
        }
        else {
            this.titleShow = false;
        }
        this.initialTag = tagname;
    };
    return PostListComponent;
}());
PostListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-post-list',
        template: __webpack_require__("./src/app/components/post-list/post-list.component.html"),
        styles: [__webpack_require__("./src/app/components/post-list/post-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object])
], PostListComponent);

var _a;
//# sourceMappingURL=post-list.component.js.map

/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = "body{\n  padding-top: 68px;\n  padding-bottom: 50px;\n}\n.image-container {\n  position: relative;\n}\n.image {\n  opacity: 1;\n  display: block;\n  width: 100%;\n  height: auto;\n  -webkit-transition: .5s ease;\n  transition: .5s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.middle {\n  -webkit-transition: .5s ease;\n  transition: .5s ease;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n}\n.image-container:hover .image {\n  opacity: 0.3;\n}\n.image-container:hover .middle {\n  opacity: 1;\n}\n.post-image {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width:100px;\n  height:100px;\n}\n.swappal-nav {\n  background-color: #337ab7;\n  color: white;\n\n  padding-top: 8px;\n}\n.swappal-nav a {\n  color: white;\n  font-family: Georgia;\n  font-weight: bold;\n\n}\n.navbar-form {\n  margin-bottom:0px;\n  font-size: 1px;\n  font-family: Georgia;\n}\n.nav-color{\n  color: #337ab7;\n}\n.btn-color{\n  background-color: #337ab7;\n  color: white;\n}\n.profile-container{\n  margin-top:30px;\n}\n.checked {\n  color: orange;\n}\n.remove-icon{\n  background-color: #d9534f;\n  height: 39px;\n  color: white;\n\n}\n.icon-user:before {\n  content: \"\\e971\";\n}\n.icon-search:before {\n  content: \"\\e986\";\n}\n.icon-star-empty:before {\n  content: \"\\e9d7\";\n}\n.icon-star-half:before {\n  content: \"\\e9d8\";\n}\n.icon-star-full:before {\n  content: \"\\e9d9\";\n}\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default swappal-nav\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/post-list']\">Swap Pal</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <div class=\"navbar-search\">\n      <form class=\"navbar-form navbar-left\">\n        <div class=\"input-group\">\n          <div class=\"input-group-btn search-panel\">\n            <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" style=\"height: 39px\">\n              <span id=\"search_concept\">{{initialTag}}</span> <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu\" role=\"menu\">\n              <li><a   style=\"color:black;\" (click)=\"changeInitial(firstTag)\">{{firstTag}}</a></li>\n              <li><a   style=\"color:black;\" (click)=\"changeInitial(secondTag)\">{{secondTag}}</a></li>\n            </ul>\n          </div>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\" aria-label=\"Search for...\" [(ngModel)]=\"searchText\" name=\"searchText\"  style=\"width: 403px;z-index: 1;\">\n          <div class=\"form-group search-container\" style=\"z-index: 2;margin-left: 136px;\"><span class=\"icon-search\"></span></div>\n        </div>\n        <!--<div class=\"navbar-search\">-->\n          <!--<input type=\"text\" class=\"form-control\" placeholder=\"Search for...\" aria-label=\"Search for...\" [(ngModel)]=\"searchText\" name=\"searchText\">-->\n          <!--<div class=\"form-group search-container\"><span class=\"icon-search\"></span></div>-->\n        <!--</div>-->\n      </form>\n      </div>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a  [routerLink]=\"['/createPost']\">Create Post</a></li>\n        <!--<li><a [routerLink]=\"['/profile']\"><span class=\"icon-user profile-icon\"></span></a></li>-->\n        <li  class=\"dropdown\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Hello, {{userService.user.name}} &nbsp;<span class=\"glyphicon glyphicon-chevron-down\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"dropdown-item\"><a [routerLink]=\"['/profile']\"  style=\"color:black;\"><span class=\"glyphicon glyphicon-user\"></span>&nbsp; Profile</a></li>\n            <li class=\"dropdown-item\"><a [routerLink]=\"['/login']\"  style=\"color:black;\"><span class=\"glyphicon glyphicon-log-out\"></span>&nbsp; Logout</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n\n<div class=\"container-fluid profile-container\">\n  <div class=\"container\">\n\n        <div class=\"col-12\">\n                  <div class=\"row\">\n                    <div class=\"image-container col-sm-10 col-md-3 col-3\">\n                      <img src=\"http://smk.org.uk/wp-content/uploads/avatar.jpg\" id=\"imgProfile\" style=\"width: 150px; height: 150px\" class=\"img-thumbnail\" />\n                    </div>\n\n                    <div class=\"userData col-sm-10 col-md-8 col-8\">\n                      <h1 class=\"d-block\" style=\"font-size: 1.5rem; font-weight: bold\">Welcome Back!</h1>\n                      <h3 class=\"d-block\">{{userService.user.name}}</h3>\n                      <!--<h1 class=\"d-block\">-->\n                        <!--<span class=\"fa fa-star checked\"></span>-->\n                        <!--<span class=\"fa fa-star checked\"></span>-->\n                        <!--<span class=\"fa fa-star checked\"></span>-->\n                        <!--<span class=\"fa fa-star checked\"></span>-->\n                        <!--<span class=\"fa fa-star\"></span></h1>-->\n                      <h1 class=\"star-group d-block\">\n          <span *ngFor=\"let n of [1, 2, 3, 4, 5]\"  class=\"star-item\">\n            <!-- <span class=\"icon-star-empty\"></span> -->\n            <!-- <span class=\"icon-star-full\" *ngIf=\"currentRate >= n\"></span>\n            <span class=\"icon-star-half\" *ngIf=\"currentRate < n && currentRate >= (n-0.5)\"></span>\n            <span class=\"icon-star-empty empty-rate\" *ngIf=\"currentRate < (n-0.5)\"></span> -->\n            <span class=\"fa fa-star checked\" *ngIf=\"profileRate >= n\"></span>\n            <span class=\"fa fa-star\" *ngIf=\"profileRate < n\"></span>\n          </span>\n          <span>({{userService.user.numberOfRate}})</span>\n                      </h1>\n                    </div>\n\n                  </div>\n\n\n\n              <div class=\"col-12\">\n\n                <ul class=\"mb-4 nav nav-tabs  \" id=\"myTab\" role=\"tablist\">\n                  <li class=\"nav-item active\">\n                    <a class=\"nav-link nav-color\" id=\"posts-tab\" data-toggle=\"tab\" href=\"#posts\" role=\"tab\" aria-controls=\"posts\" aria-selected=\"true\" >Your Post</a>\n                  </li>\n                  <li class=\"nav-item \">\n                    <a class=\"nav-link nav-color\" id=\"inTransaction-tab\" data-toggle=\"tab\" href=\"#inTransaction\" role=\"tab\" aria-controls=\"inTransaction\" aria-selected=\"false\">In Transaction</a>\n                  </li>\n                  <li class=\"nav-item \">\n                    <a class=\"nav-link nav-color\" id=\"history-tab\" data-toggle=\"tab\" href=\"#history\" role=\"tab\" aria-controls=\"historyservice\" aria-selected=\"false\">History</a>\n                  </li>\n                  <li class=\"nav-item \">\n                    <a class=\"nav-link nav-color\" id=\"wishlist-tab\" data-toggle=\"tab\" href=\"#wishlist\" role=\"tab\" aria-controls=\"wishlistservice\" aria-selected=\"false\">Wish List</a>\n                  </li>\n                </ul>\n\n\n\n                <div id=\"myTabContent\" class=\"tab-content ml-1\">\n\n                  <div class=\"tab-pane active\" id=\"posts\" role=\"tabpanel\" aria-labelledby=\"posts-tab\">\n                    <ul class=\"row list-group\">\n                      <li class=\"col-xs-12 list-group-item\" *ngFor=\"let post of yourPostList;let i=index;\">\n                        <div class=\"col-sm-3 col-md-8 col-8\">\n                          <label style=\"font-weight:bold;\"><a [routerLink]=\"['/details']\" class=\"nav-color\">{{post.title}}</a></label>\n                        </div>\n                        <div class=\"col-md-2 col-2 \">\n                          <button type=\"button\" class=\"btn\" [routerLink]=\"['/createPost']\"><span class=\"glyphicon glyphicon-edit\"></span> Edit</button>\n                        </div>\n                        <div class=\"col-md-2 col-2 \">\n                          <button type=\"button\" class=\"btn\" data-toggle=\"modal\" (click)=\"updateIndex(i)\" data-target=\"#DeleteAlert\"><span class=\" glyphicon glyphicon-trash\"></span> Delete</button>\n                        </div>\n                        <hr />\n                        <div class=\"row\">\n                          <div class=\"col-sm-3 col-md-8 col-8\">\n                            <input type=\"email\" class=\"form-control\" placeholder=\"Enter Yours Swapper's Email to Start Transaction\" aria-label=\"Enter Yours Swapper's Email\" [(ngModel)]=\"post.swapperEmail\" name=\"invitationEmail\">\n                          </div>\n                          <div class=\"col-md-2 col-3 \">\n                            <button type=\"button\" class=\"btn btn-color\" (click)=\"sendInvitation(post)\" [disabled]=\"!post.swapperEmail\">Send Invitation</button>\n                          </div>\n                        </div>\n                      </li>\n                    </ul>\n                  </div>\n\n                  <div class=\"tab-pane \" id=\"inTransaction\" role=\"tabpanel\" aria-labelledby=\"inTransaction-tab\">\n                    <ul class=\"row list-group\">\n                      <li class=\"col-xs-12 list-group-item\" *ngFor=\"let post of inTransactionPosts;let i=index;\">\n                        <div class=\"col-sm-12 col-md-6 \">\n                          <label style=\"font-weight:bold;\"><a class=\"nav-color\" [routerLink]=\"['/details']\">{{post.title}}</a></label>\n                        </div>\n                        <div class=\"col-sm-4 col-md-2\">\n                          <label style=\"font-weight:bold;color: #337ab7\">Swapper: {{post.swapper}}</label>\n                        </div>\n                        <div class=\"col-sm-4 col-md-2\">\n                          <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\" (click)=\"cancelTransaction(i)\">Cancel</button>\n                        </div>\n                        <div class=\"col-sm-4 col-md-2\">\n                          <button type=\"button\" class=\"btn btn-color btn-lg btn-block\" data-toggle=\"modal\" data-target=\"#reviewModal\" (click)=\"updateIndex(i)\">Complete</button>\n                        </div>\n\n                      </li>\n                    </ul>\n                  </div>\n\n                  <div class=\"tab-pane\" id=\"history\" role=\"tabpanel\" aria-labelledby=\"history-tab\">\n                    <ul class=\"row list-group\">\n                      <li class=\"col-xs-12 list-group-item\" *ngFor=\"let post of historyPosts\">\n                        <div class=\"col-sm-3\">\n                          <label style=\"font-weight:bold;color: #337ab7\">{{post.title}}</label>\n                        </div>\n                        <div class=\"col-sm-6\">\n                          <label style=\"font-weight:bold;color: #337ab7\">Swapper: {{post.swapper}}</label>\n                        </div>\n                        <div class=\"col-sm-3 text-right\">\n                          <label style=\"font-weight:bold;color: #337ab7\">{{post.date}}</label>\n                        </div>\n                      </li>\n                    </ul>\n                  </div>\n\n\n                  <div class=\"tab-pane\" id=\"wishlist\" role=\"tabpanel\" aria-labelledby=\"wishlist-tab\">\n                    <ul class=\"row list-group\">\n                      <li class=\"col-xs-12 list-group-item\" *ngFor=\"let item of wishlist\">\n                        <div class=\"col-sm-6 col-md-6 col-6\">\n                          <div class=\"form-check form-check-inline\">\n                            <!--<input class=\"form-check-input\" type=\"checkbox\" id={{item.id}} value=\"option1\">-->\n                            <label class=\"form-check-label\" >{{item.title}}</label>\n                          </div>\n                        </div>\n                      </li>\n                    </ul>\n                      <div *ngFor=\"let it of newList;let k=index;\">\n                      <div class=\"input-group mb-3\">\n                        <input type=\"text\"\n                               class=\"form-control\"\n                               placeholder=\"Enter item name\">\n                        <div class=\"input-group-append\">\n                          <button class=\"btn btn-outline-secondary remove-icon\" type=\"button\" (click)=\"removeItem(k)\">\n                            <span class=\"glyphicon glyphicon-remove\"></span>\n                          </button>\n                        </div>\n                      </div>\n                    </div>\n                      <div class=\"col-xs-12\" >\n                        <div class=\"col-sm-6 col-md-6 col-6\">\n                          <div class=\"form-check form-check-inline nav-color\">\n                            <a class=\"nav-color\" (click)=\"addMore()\"><u>Add more</u></a>\n                          </div>\n                        </div>\n                      </div>\n                  </div>\n\n\n\n                </div>\n              </div>\n\n\n        </div>\n  </div>\n\n</div>\n\n\n<div class=\"modal fade\" id=\"reviewModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <!--         <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button> -->\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Review</h4>\n      </div>\n      <div class=\"modal-body\">\n        <h3>How was your experience with Edward?</h3>\n        <h2 class=\"star-group text-center\">\n          <span *ngFor=\"let n of [1, 2, 3, 4, 5]\" (click)=\"review($event, n)\" class=\"star-item\">\n            <!-- <span class=\"icon-star-empty\"></span> -->\n            <!-- <span class=\"icon-star-full\" *ngIf=\"currentRate >= n\"></span>\n            <span class=\"icon-star-half\" *ngIf=\"currentRate < n && currentRate >= (n-0.5)\"></span>\n            <span class=\"icon-star-empty empty-rate\" *ngIf=\"currentRate < (n-0.5)\"></span> -->\n            <span class=\"fa fa-star checked\" *ngIf=\"currentRate >= n\"></span>\n            <span class=\"fa fa-star\" *ngIf=\"currentRate <= (n-1)\"></span>\n          </span>\n        </h2>\n        <div class=\"form-group\">\n          <label>Leave Comment</label>\n          <textarea class=\"form-control\" rows=\"3\">\n          </textarea>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"completeTransaction(postIndex)\">Submit</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"DeleteAlert\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"DeleteAlertLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div>Are you sure you want to delete this post?</div>\n        <div>This post will be remove from your posts</div>\n      </div>\n      <div class=\"modal-footer\">\n\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"deletePost(postIndex)\">Delete</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
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
    function ProfileComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.profileRate = 5;
        this.numberOFRates = 1;
        this.newList = [];
        this.yourPostList = [];
        this.inTransactionPosts = [];
        this.historyPosts = [];
        this.wishlist = [];
        this.currentRate = 0;
        this.profileRate = this.userService.user.avgRate;
        this.numberOFRates = this.userService.user.numberOfRate;
        this.yourPostList = this.userService.user.postList || [];
        this.inTransactionPosts = this.userService.user.inTransactionPosts || [];
        this.historyPosts = this.userService.user.historyPosts || [];
        this.wishlist = this.userService.user.wishlist || [];
        console.log(this.userService.user);
    }
    ProfileComponent.prototype.deletePost = function (i) {
        this.yourPostList.splice(i, 1);
    };
    ProfileComponent.prototype.cancelTransaction = function (i) {
        var myPost = this.inTransactionPosts[i];
        this.inTransactionPosts.splice(i, 1);
        this.yourPostList.push({
            id: myPost.id,
            title: myPost.title,
            swapperEmail: ""
        });
    };
    ProfileComponent.prototype.completeTransaction = function (i) {
        var myPost = this.inTransactionPosts[i];
        this.inTransactionPosts.splice(i, 1);
        var myDate = new Date();
        if (myPost.swapper === 'ed') {
            __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */].edward.pendingRate = true;
        }
        __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */].edward.avgRate = (__WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */].edward.avgRate * __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */].edward.numberOfRate + this.currentRate) / (__WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */].edward.numberOfRate + 1);
        __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */].edward.numberOfRate++;
        this.historyPosts.push({
            id: myPost.id,
            title: myPost.title,
            swapper: myPost.swapper,
            date: (myDate.getMonth() + 1) + '-' + myDate.getDate() + '-' + myDate.getFullYear()
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.initialTag = 'What you want?';
        this.firstTag = 'What you want?';
        this.secondTag = 'Others wish-list';
    };
    ProfileComponent.prototype.openReviewModal = function () {
        document.getElementById('#reviewModal');
    };
    ProfileComponent.prototype.addMore = function () {
        this.newList.push('newItem');
    };
    ProfileComponent.prototype.logout = function () {
        this.router.navigate(['login']);
    };
    ProfileComponent.prototype.sendInvitation = function (post) {
        this.yourPostList = this.yourPostList.filter(function (aPost) { return aPost.title != post.title; });
        this.inTransactionPosts.unshift({
            id: post.id,
            title: post.title,
            swapper: post.swapperEmail.split('@')[0]
        });
    };
    ProfileComponent.prototype.updateIndex = function (i) {
        this.postIndex = i;
    };
    ProfileComponent.prototype.removeItem = function (k) {
        this.newList.splice(k, 1);
    };
    ProfileComponent.prototype.changeInitial = function (tagname) {
        this.initialTag = tagname;
    };
    ProfileComponent.prototype.review = function (event, index) {
        console.log('rating: ' + index);
        this.currentRate = index;
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("./src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("./src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ".register-container{\n  margin-top: 150px;\n}\n\n.navbar-search {\n  margin-bottom: 0;\n  width: 25rem;\n  margin-left: 17rem;\n}\n\n.swappal-nav {\n  background-color: #337ab7;\n  color: white;\n\n  padding-top: 8px;\n}\n\n.swappal-nav a {\n  color: white;\n  font-family: Georgia;\n  font-weight: bold;\n\n}\n\n.navbar-form {\n  margin-bottom:0px;\n  font-size: 1px;\n  font-family: Georgia;\n}\n\n.error-msg{\n  color: red;\n  margin-top: -12px;\n  margin-bottom: 10px;\n}\n"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default swappal-nav\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\">Swap Pal</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <!--<form class=\"navbar-form navbar-left\">-->\n      <!--<input type=\"text\" class=\"form-control navbar-search\" placeholder=\"Search for...\" aria-label=\"Search for...\" [(ngModel)]=\"searchText\" name=\"searchText\">-->\n      <!--<div class=\"form-group\"><span class=\"icon-search\"></span></div>-->\n      <!--</form>-->\n      <!--<ul class=\"nav navbar-nav navbar-right\">-->\n      <!--<li><a [routerLink]=\"['/createPost']\">Create Post</a></li>-->\n      <!--<li><a [routerLink]=\"['/profile']\"><span class=\"icon-user profile-icon\"></span></a></li>-->\n      <!--</ul>-->\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n\n<div class=\"container-fluid register-container\">\n  <div class=\"col-md-3\">\n  </div>\n  <div class=\"col-md-6 col-xs-12\">\n    <span class=\"error-msg\" *ngIf=\"globalErrorMsg\">{{globalErrorMsg}}</span>\n    <form #registerForm=\"ngForm\">\n      <div>\n        <label for=\"firstName\">\n          First Name\n        </label>\n        <input type=\"text\"\n               class=\"form-control\"\n               required\n               (ngModel)=\"firstName\"\n               name=\"firstName\"\n               id=\"firstName\"\n               placeholder=\"Enter your first name\" (keyup.enter)=\"register(registerForm)\">\n\n        <div class=\"error-msg\" *ngIf=\"!firstName?.valid && firstName?.touched\">\n          Please enter your first name!\n        </div>\n      </div>\n      <div>\n        <label for=\"username\">\n          Username\n        </label>\n        <input type=\"email\"\n               class=\"form-control\"\n               required\n               (ngModel)=\"username\"\n               #username=\"ngModel\"\n               id=\"username\"\n               name=\"username\"\n               placeholder=\"Husky Email\" pattern=\"[a-z0-9._%+-]+@husky.neu.edu\">\n\n        <div class=\"error-msg\" *ngIf=\"!username?.valid && username?.touched\">\n          Please enter your husky email\n        </div>\n        <!--<div class=\"error-msg\" *ngIf=\" !== \"husky.neu.edu\">-->\n          <!--Please register with your husky email-->\n        <!--</div>-->\n      </div>\n      <div>\n        <label for=\"password\">\n          Password\n        </label>\n        <input type=\"password\"\n               class=\"form-control\"\n               required\n               (ngModel)=\"password\"\n               #password=\"ngModel\"\n               id=\"password\"\n               placeholder=\"Enter your password\"\n               name=\"password\" minlength=\"6\">\n\n        <div class=\"error-msg\" *ngIf=\"!password?.valid && password?.touched\">\n          Please enter a valid password of atleast 6 characters!\n        </div>\n      </div>\n      <div>\n        <label for=\"repassword\">\n          Re-enter Password\n        </label>\n        <input type=\"password\"\n               class=\"form-control\"\n               required\n               (ngModel)=\"repassword\"\n               #repassword=\"ngModel\"\n               name=\"repassword\"\n               id=\"repassword\"\n               placeholder=\"Re-enter your password\" (keyup.enter)=\"register(registerForm)\">\n\n        <div class=\"error-msg\" *ngIf=\"!repassword?.valid && repassword?.touched\">\n          Please re-enter your password!\n        </div>\n\n        <div class=\"error-msg\" *ngIf=\"repassword?.touched && password.value !== repassword.value\">\n          Passwords do not match\n        </div>\n      </div>\n      <button type=\"button\" class=\"btn btn-primary form-control\" (click)=\"register(registerForm)\">Register</button>\n    </form>\n  </div>\n  <div class=\"col-md-3\">\n\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function (registerForm) {
        var _this = this;
        if (!registerForm.valid) {
            this.globalErrorMsg = 'Please enter the required fields';
        }
        else {
            this.userService.register(registerForm).then(function (res) {
                if (res == null) {
                    _this.globalErrorMsg = 'Registration failed or your account has been already registered';
                }
                else {
                    _this.setupUser(registerForm);
                    _this.router.navigate(['post-list']);
                }
            });
        }
    };
    RegisterComponent.prototype.setupUser = function (registerForm) {
        var user = {
            email: registerForm.value.username,
            numberOfRate: 0,
            avgRate: 0,
            pendingRate: false,
            name: registerForm.value.firstName
        };
        this.userService.user = user;
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("./src/app/components/register/register.component.html"),
        styles: [__webpack_require__("./src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "./src/app/components/review/review.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/review/review.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  review works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/review/review.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReviewComponent = (function () {
    function ReviewComponent() {
    }
    ReviewComponent.prototype.ngOnInit = function () {
    };
    return ReviewComponent;
}());
ReviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-review',
        template: __webpack_require__("./src/app/components/review/review.component.html"),
        styles: [__webpack_require__("./src/app/components/review/review.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ReviewComponent);

//# sourceMappingURL=review.component.js.map

/***/ }),

/***/ "./src/app/postfilter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostfilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PostfilterPipe = (function () {
    function PostfilterPipe() {
    }
    PostfilterPipe.prototype.transform = function (items, filter, tag) {
        console.log('in pipe', filter, tag);
        if (!items || !filter || !tag) {
            return items;
        }
        if (tag === 'Others wish-list') {
            return items.filter(function (item) { return item.wishlist.includes(filter.toLowerCase()); });
        }
        else {
            return items.filter(function (item) { return item.title.toLowerCase().indexOf(filter.toLowerCase()) !== -1; });
        }
    };
    return PostfilterPipe;
}());
PostfilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'postfilter'
    })
], PostfilterPipe);

//# sourceMappingURL=postfilter.pipe.js.map

/***/ }),

/***/ "./src/app/services/home.client.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// injecting service into module
var HomeService = (function () {
    function HomeService(_http, router, af, db, http) {
        this._http = _http;
        this.router = router;
        this.af = af;
        this.db = db;
        this.http = http;
    }
    return HomeService;
}());
HomeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]) === "function" && _e || Object])
], HomeService);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=home.client.service.js.map

/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("./node_modules/firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// injecting service into module
var UserService = (function () {
    function UserService(_http, router, af, db, http) {
        this._http = _http;
        this.router = router;
        this.af = af;
        this.db = db;
        this.http = http;
        this.user = { name: "" };
        this.postList = [
            {
                id: 1,
                title: "Google Pixel",
                userName: "Julian",
                rate: 5,
                image: "google-pixel.jpg",
                wishlist: ["desktop"]
            },
            {
                id: 2,
                title: "Air Jordon 1",
                userName: "James",
                rate: 4,
                image: "aj1.jpg",
                wishlist: ["blender"]
            },
            {
                id: 3,
                title: "iPhone 5",
                userName: "Jobs",
                rate: 3.5,
                image: "iphone5.jpg",
                wishlist: ["bag"]
            },
            {
                id: 4,
                title: "Awesome Matress",
                userName: "Edward",
                rate: 5,
                image: "matress.jpg",
                wishlist: ["towerfan"]
            },
            {
                id: 5,
                title: "50 year's desk",
                userName: "Elsa",
                rate: 3,
                image: "desk.png",
                wishlist: ["airbed"]
            }
        ];
    }
    UserService.prototype.register = function (registerForm) {
        var _this = this;
        console.log(registerForm.value.username);
        return this.af.auth.createUserWithEmailAndPassword(registerForm.value.username, registerForm.value.password)
            .then(function (success) {
            var user = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser;
            _this.userId = user.uid;
            return success;
        }).catch(function (error) {
            return null;
        });
    };
    UserService.prototype.login = function (loginForm) {
        return this.af.auth.signInWithEmailAndPassword(loginForm.value.username, loginForm.value.password).then(function (success) {
            return success;
        }).catch(function (error) {
            return null;
        });
    };
    UserService.prototype.getPostList = function () {
        return this.postList;
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]) === "function" && _e || Object])
], UserService);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    baseUrl: '',
    firebase: {
        apiKey: "AIzaSyBoeEqECZMkrgS8BTELGcYJqsmhRwwp07c",
        authDomain: "swap-pal.firebaseapp.com",
        databaseURL: "https://swap-pal.firebaseio.com",
        projectId: "swap-pal",
        storageBucket: "swap-pal.appspot.com",
        messagingSenderId: "322806772879"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__("./src/app/app.module.ts");


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map