webpackJsonp([1],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaySuccessPageModule", function() { return PaySuccessPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pay_success__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaySuccessPageModule = /** @class */ (function () {
    function PaySuccessPageModule() {
    }
    PaySuccessPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pay_success__["a" /* PaySuccessPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pay_success__["a" /* PaySuccessPage */]),
            ],
        })
    ], PaySuccessPageModule);
    return PaySuccessPageModule;
}());

//# sourceMappingURL=pay-success.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaySuccessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PaySuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaySuccessPage = /** @class */ (function () {
    function PaySuccessPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.paySuccess = {
            consumePoint: '',
            balance: '',
        };
        this.item = {
            name: '结膜切口的眼眶肌锥内海绵状血管瘤摘除',
            cover: 'bag-1.png',
            author: '孙丰源',
            type: '通关包',
            size: '2MB',
            price: '640',
            originPrice: '800',
            brief: "12312",
            catalog: "123123",
            owner: true,
            online: true,
        };
    }
    PaySuccessPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaySuccessPage');
    };
    PaySuccessPage.prototype.learn = function () {
        this.navCtrl.popToRoot().catch();
    };
    PaySuccessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pay-success',template:/*ion-inline-start:"/Users/lujiewen/WebstormProjects/ionic-cordova/src/pages/pay-success/pay-success.html"*/'<!--\n  Generated template for the ProductInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar>\n    <ion-title>购买成功</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div class="imed-product-info">\n    <div class="imed-product-info-thumbnails" text-center>\n      <img src="assets/imgs/{{item[\'cover\']}}">\n    </div>\n    <div class="imed-product-info-detail">\n      <div class="imed-list-item-title">{{item[\'name\']}}</div>\n      <div class="imed-list-item-label">\n        <div>\n          <span><span class="imed-red">{{item[\'price\']}}</span>阅点</span>\n          <span><s>{{item[\'originPrice\']}}</s>阅点</span>\n        </div>\n        <div>作者：{{item[\'author\']}}</div>\n        <div class="imed-list-item-label-last">\n          <span>图书类型：{{item[\'type\']}}</span>\n          <span>大小：{{item[\'size\']}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="separator"></div>\n\n  <div text-end class="imed-item-block">\n    本次购买共消费：{{paySuccess[\'consumePoint\']}} 阅点\n  </div>\n  <div class="separator"></div>\n  <div text-end class="imed-item-block">\n    账户余额：{{paySuccess[\'balance\']}} 阅点\n  </div>\n  <div class="separator"></div>\n</ion-content>\n\n<ion-footer>\n  <button ion-button block color="imed-red" (click)="learn()">马上去学习</button>\n</ion-footer>\n\n'/*ion-inline-end:"/Users/lujiewen/WebstormProjects/ionic-cordova/src/pages/pay-success/pay-success.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], PaySuccessPage);
    return PaySuccessPage;
}());

//# sourceMappingURL=pay-success.js.map

/***/ })

});
//# sourceMappingURL=1.js.map