webpackJsonp([2],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPageModule", function() { return OrderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderPageModule = /** @class */ (function () {
    function OrderPageModule() {
    }
    OrderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__order__["a" /* OrderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order__["a" /* OrderPage */]),
            ],
        })
    ], OrderPageModule);
    return OrderPageModule;
}());

//# sourceMappingURL=order.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
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
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderPage = /** @class */ (function () {
    function OrderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
            fee: '1222',
            payType: 'alipay',
        };
    }
    OrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderPage');
    };
    OrderPage.prototype.selectPayType = function (payType) {
        this.item['payType'] = payType;
    };
    OrderPage.prototype.payConfirm = function () {
        this.navCtrl.push('PaySuccessPage', {}).catch();
    };
    OrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order',template:/*ion-inline-start:"/Users/lujiewen/WebstormProjects/ionic-cordova/src/pages/order/order.html"*/'<!--\n  Generated template for the ProductInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>图书详情</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <div class="imed-product-info">\n    <div class="imed-product-info-thumbnails" text-center>\n      <img src="assets/imgs/{{item[\'cover\']}}">\n    </div>\n    <div class="imed-product-info-detail">\n      <div class="imed-list-item-title">{{item[\'name\']}}</div>\n      <div class="imed-list-item-label">\n        <div>\n          <span><span class="imed-red">{{item[\'price\']}}</span>阅点</span>\n          <span><s>{{item[\'originPrice\']}}</s>阅点</span>\n        </div>\n        <div>作者：{{item[\'author\']}}</div>\n        <div class="imed-list-item-label-last">\n          <span>图书类型：{{item[\'type\']}}</span>\n          <span>大小：{{item[\'size\']}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="separator"></div>\n\n  <div class="imed-product-fee">\n    <div class="imed-product-fee-title">支付金额</div>\n    <div><span class="imed-red" [innerHTML]="item[\'fee\']"></span>阅点</div>\n  </div>\n\n  <div class="imed-product-pay">\n    <div class="separator"></div>\n\n    <ion-list no-lines>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/icon/yuedian.png">\n        </ion-avatar>\n        <h2>使用阅点</h2>\n        <p>可用阅点<span class="imed-red" [innerHTML]="item[\'fee\']"></span></p>\n        <ion-icon item-end name="checkmark-circle" class="imed-green"></ion-icon>\n      </ion-item>\n      <div class="separator"></div>\n      <ion-item>\n        <div item-start class="pay-icon">\n          <img src="assets/icon/zhifubao.png">\n        </div>\n        支付宝\n        <button ion-button icon-only item-end clear (click)="selectPayType(\'alipay\')">\n          <ion-icon name="checkmark-circle" [ngClass]="{\'imed-green\':item[\'payType\']==\'alipay\'}"></ion-icon>\n        </button>\n      </ion-item>\n      <div class="separator"></div>\n      <ion-item>\n        <div item-start class="pay-icon">\n          <img src="assets/icon/weixin.png">\n        </div>\n        微信\n        <button ion-button icon-only item-end clear (click)="selectPayType(\'weixin\')">\n          <ion-icon name="checkmark-circle" [ngClass]="{\'imed-green\':item[\'payType\']==\'weixin\'}"></ion-icon>\n        </button>\n      </ion-item>\n      <div class="separator"></div>\n      <div class="pay-tips">\n        友情提示：虚拟商品一经售出，无正当理由，概不退款\n      </div>\n    </ion-list>\n\n  </div>\n</ion-content>\n\n<ion-footer>\n  <button ion-button block color="imed-red" (click)="payConfirm()">确认购买</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/lujiewen/WebstormProjects/ionic-cordova/src/pages/order/order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], OrderPage);
    return OrderPage;
}());

//# sourceMappingURL=order.js.map

/***/ })

});
//# sourceMappingURL=2.js.map