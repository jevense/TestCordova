webpackJsonp([6],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/category/category.module": [
		278,
		5
	],
	"../pages/epub-reader/epub-reader.module": [
		279,
		4
	],
	"../pages/login/login.module": [
		280,
		3
	],
	"../pages/order/order.module": [
		281,
		2
	],
	"../pages/pay-success/pay-success.module": [
		282,
		1
	],
	"../pages/product-info/product-info.module": [
		153
	],
	"../pages/product/product.module": [
		283,
		0
	],
	"../pages/web/web.module": [
		154
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TocPage; });
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


var TocPage = /** @class */ (function () {
    function TocPage(navCtrl, navParams, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.toc = navParams.data.toc;
    }
    TocPage.prototype.selectToc = function (content) {
        this.events.publish('select:toc', content);
        this.navCtrl.pop();
    };
    TocPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-toc',template:/*ion-inline-start:"/Users/lujiewen/WebstormProjects/ionic-cordova/src/pages/epub-reader/toc/toc.html"*/'<ion-list>\n  <ion-item class="toc" *ngFor="let chapter of toc" (tap)="selectToc(chapter)">\n    {{chapter.label}}\n  </ion-item>\n</ion-list>\n'/*ion-inline-end:"/Users/lujiewen/WebstormProjects/ionic-cordova/src/pages/epub-reader/toc/toc.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
    ], TocPage);
    return TocPage;
}());

//# sourceMappingURL=toc.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
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


var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.colors = {
            'white': {
                'bg': 'rgb(255, 255, 255)',
                'fg': 'rgb(0, 0, 0)'
            },
            'tan': {
                'bg': 'rgb(249, 241, 228)',
                'fg': 'rgb(0, 0, 0)'
            },
            'grey': {
                'bg': 'rgb(76, 75, 80)',
                'fg': 'rgb(255, 255, 255)'
            },
            'black': {
                'bg': 'rgb(0, 0, 0)',
                'fg': 'rgb(255, 255, 255)'
            },
        };
        if (this.navParams.data) {
            var backgroundColor = this.navParams.data.backgroundColor;
            this.backgroundColor = this._getColorName(backgroundColor);
            this.fontSize = this.navParams.data.fontSize;
            if (this.navParams.data.fontFamily) {
                this.fontFamily = this.navParams.data.fontFamily.replace(/'/g, ""); // TODO Huh?
            }
            else {
                //TODO get the default font-family
            }
        }
    }
    SettingsPage.prototype._getColorName = function (color) {
        if (!color)
            return 'white';
        var colorName = 'white';
        for (var key in this.colors) {
            if (this.colors[key].bg == color) {
                colorName = key;
            }
        }
        return colorName;
    };
    SettingsPage.prototype.changeBackground = function (backgroundColor) {
        this.backgroundColor = backgroundColor;
        this.events.publish('select:background-color', this.colors[backgroundColor].bg);
        this.events.publish('select:color', this.colors[backgroundColor].fg);
    };
    SettingsPage.prototype.changeFontSize = function (direction) {
        var size = this.fontSize ? this.fontSize : '1em';
        var sizeValue = +size.replace('em', '');
        var newSizeValue = direction == 'larger' ? sizeValue += 0.1 : sizeValue -= 0.1;
        if (newSizeValue >= 0.4 && newSizeValue <= 2) {
            this.fontSize = newSizeValue + "em";
            this.events.publish('select:font-size', this.fontSize);
        }
    };
    SettingsPage.prototype.changeFontFamily = function () {
        if (this.fontFamily) {
            this.events.publish('select:font-family', this.fontFamily);
        }
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/lujiewen/WebstormProjects/ionic-cordova/src/pages/epub-reader/settings/settings.html"*/'<ion-row>\n  <ion-col>\n    <button (click)="changeFontSize(\'smaller\')" ion-item detail-none class="text-button text-smaller">A</button>\n  </ion-col>\n  <ion-col>\n    <button (click)="changeFontSize(\'larger\')" ion-item detail-none class="text-button text-larger">A</button>\n  </ion-col>\n</ion-row>\n<ion-row class="row-dots">\n  <ion-col>\n    <button ion-button="dot" (click)="changeBackground(\'white\')" class="dot-white"\n            [class.selected]="background == \'white\'"></button>\n  </ion-col>\n  <ion-col>\n    <button ion-button="dot" (click)="changeBackground(\'tan\')" class="dot-tan"\n            [class.selected]="background == \'tan\'"></button>\n  </ion-col>\n  <ion-col>\n    <button ion-button="dot" (click)="changeBackground(\'grey\')" class="dot-grey"\n            [class.selected]="background == \'grey\'"></button>\n  </ion-col>\n  <ion-col>\n    <button ion-button="dot" (click)="changeBackground(\'black\')" class="dot-black"\n            [class.selected]="background == \'black\'"></button>\n  </ion-col>\n</ion-row>\n\n<ion-list radio-group [(ngModel)]="fontFamily" (ionChange)="changeFontFamily()" class="settings-page">\n  <ion-item class="text-athelas">\n    <ion-label>Athelas</ion-label>\n    <ion-radio value="Athelas"></ion-radio>\n  </ion-item>\n  <ion-item class="text-charter">\n    <ion-label>Charter</ion-label>\n    <ion-radio value="Charter"></ion-radio>\n  </ion-item>\n  <ion-item class="text-iowan">\n    <ion-label>Iowan</ion-label>\n    <ion-radio value="Iowan"></ion-radio>\n  </ion-item>\n  <ion-item class="text-palatino">\n    <ion-label>Palatino</ion-label>\n    <ion-radio value="Palatino"></ion-radio>\n  </ion-item>\n  <ion-item class="text-san-francisco">\n    <ion-label>San Francisco</ion-label>\n    <ion-radio value="San Francisco"></ion-radio>\n  </ion-item>\n  <ion-item class="text-seravek">\n    <ion-label>Seravek</ion-label>\n    <ion-radio value="Seravek"></ion-radio>\n  </ion-item>\n  <ion-item class="text-times-new-roman">\n    <ion-label>Times New Roman</ion-label>\n    <ion-radio value="Times New Roman"></ion-radio>\n  </ion-item>\n</ion-list>\n'/*ion-inline-end:"/Users/lujiewen/WebstormProjects/ionic-cordova/src/pages/epub-reader/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductInfoPageModule", function() { return ProductInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_info__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(252);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProductInfoPageModule = /** @class */ (function () {
    function ProductInfoPageModule() {
    }
    ProductInfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__product_info__["a" /* ProductInfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_info__["a" /* ProductInfoPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */],
            ],
        })
    ], ProductInfoPageModule);
    return ProductInfoPageModule;
}());

//# sourceMappingURL=product-info.module.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPageModule", function() { return WebPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__web__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WebPageModule = /** @class */ (function () {
    function WebPageModule() {
    }
    WebPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__web__["a" /* WebPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__web__["a" /* WebPage */]),
            ],
        })
    ], WebPageModule);
    return WebPageModule;
}());

//# sourceMappingURL=web.module.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__web_web__ = __webpack_require__(99);
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
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.topMenus = [
            [
                { 'icon-name': '5p3', key: '5p3', name: '5+3教材', },
                {
                    'icon-name': 'learn', key: 'learn', name: '学习套餐',
                },
                { 'icon-name': 'operation', key: 'operation', name: '手术视频' },
                { 'icon-name': 'fee', key: 'fee', name: '免费专区' },
                { 'icon-name': 'year', key: 'year', name: '会员年卡' },
            ],
            [
                {
                    'icon-name': 'west', key: 'west', name: '西医图书',
                    subList: [
                        {
                            name: '全部',
                            key: 'west-all',
                        }, {
                            name: '药学',
                            key: 'west-med',
                        }, {
                            name: '专著',
                            key: 'west-monograph',
                        }, {
                            name: '考试',
                            key: 'west-exam',
                        }, {
                            name: '科普',
                            key: 'west-science',
                        }, {
                            name: '教辅',
                            key: 'west-assistant',
                        }, {
                            name: '其他',
                            key: 'west-other',
                        },
                    ]
                },
                {
                    'icon-name': 'chinese', key: 'chinese', name: '中医图书',
                    subList: [
                        {
                            name: '全部',
                            key: 'chinese-all'
                        }, {
                            name: '中医典籍',
                            key: 'chinese-classic'
                        }, {
                            name: '中医专著',
                            key: 'chinese-monograph'
                        }, {
                            name: '中医科普',
                            key: 'chinese-science'
                        }
                    ]
                },
                { 'icon-name': 'magazine', key: 'magazine', name: '毕教杂志' },
                { 'icon-name': 'database', key: 'database', name: '数据库' },
                { 'icon-name': 'disease', key: 'disease', name: '疾病教程' },
            ]
        ];
        this.topBags = [
            { name: '全科', cover: 'bag-1.png' },
            { name: '中医科', cover: 'bag-2.png' },
            { name: '辅助判读', cover: 'bag-3.png' },
        ];
        this.topOperations = [
            {
                name: '结膜切口的眼眶肌锥内海绵状血管瘤摘除',
                cover: 'operation-1.png',
                author: '孙丰源',
                subject: '眼科',
                price: '640',
                originPrice: '800'
            },
            {
                name: '胸腔镜下气管食管瘘结',
                cover: 'operation-2.png',
                author: '黄金狮',
                subject: '小儿外科',
                price: '640',
                originPrice: '800'
            },
        ];
        this.topDocs = [
            {
                topTitle: 'doc-sub-title-1.png',
                list: [
                    {
                        name: '临床执业医师考试通关包实践技能考试',
                        url: 'https://mall.imed.org.cn/ui/phone/activities.html#/exam/40288810624e037d01624e03979d0357',
                        cover: 'bag-doc-1.png',
                    },
                    {
                        name: '临床执业医师考试综合理论通关包',
                        url: 'https://mall.imed.org.cn/ui/phone/activities.html#/exam/40288810624e037d01624e03979d035b',
                        cover: 'bag-doc-2.png',
                    }
                ]
            },
            {
                topTitle: 'doc-sub-title-2.png',
                list: [
                    {
                        name: '临床执业助理医师考试通关包实践技能考试',
                        url: 'https://mall.imed.org.cn/ui/phone/activities.html#/exam/40288810624e037d01624e03979d035c',
                        cover: 'bag-doc-3.png',
                    },
                    {
                        name: '临床执业助理医师考试综合理论通关包',
                        url: 'https://mall.imed.org.cn/ui/phone/activities.html#/exam/40288810624e037d01624e03979d035d',
                        cover: 'bag-doc-4.png',
                    }
                ]
            }
        ];
        this.slideBags = [
            {
                cover: 'slider-1.png',
            },
            {
                cover: 'slider-2.png',
            },
            {
                cover: 'slider-1.png',
            },
        ];
    }
    HomePage.prototype.getItems = function ($event) {
    };
    HomePage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 1000);
    };
    HomePage.prototype.goToCategoryPage = function () {
        this.navCtrl.push('CategoryPage', {}, { direction: 'back' }).catch();
    };
    HomePage.prototype.locate = function (type, _a) {
        if (type === void 0) { type = 'url'; }
        var url = _a.url, title = _a.name, key = _a.key, subList = _a.subList, id = _a.id;
        // this.navCtrl.push('WebPage', {browser: {title, url: url}}).catch();
        switch (type) {
            case 'url': {
                this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__web_web__["a" /* WebPage */], { browser: { title: title, url: url, } }).present().catch();
                break;
            }
            case 'list': {
                this.navCtrl.push('ProductPage', { title: title, key: key, data: subList }).catch();
                break;
            }
            case 'info': {
                this.navCtrl.push('ProductInfoPage', { id: id }).catch();
                break;
            }
        }
    };
    HomePage.prototype.panEvent = function ($event) {
        // $event.stopPropagation();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/lujiewen/WebstormProjects/ionic-cordova/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only color="imed-red" (click)="goToCategoryPage()">\n        <ion-icon name="ios-menu-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title>\n      <div>首页</div>\n    </ion-title>\n\n    <!--<ion-toolbar color="light">-->\n    <!--<div class="imed-title-button" start>-->\n    <!--<button class="imed-title-button-content">-->\n    <!--<ion-icon name="ios-search"></ion-icon>-->\n    <!--&nbsp;请输入关键词-->\n    <!--</button>-->\n    <!--</div>-->\n    <!--</ion-toolbar>-->\n\n    <ion-buttons end>\n      <button ion-button icon-only color="imed-red">\n        <ion-icon name="ios-search-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="下拉刷新"\n      refreshingSpinner="circles"\n      refreshingText="正在请求数据"\n    >\n    </ion-refresher-content>\n  </ion-refresher>\n  <!--轮播图-->\n  <div class="imed-slide">\n    <ion-slides pager>\n      <ion-slide>\n        <div (click)="locate(\'url\',{name:\'执医通关包\',url:\'https://mall.imed.org.cn/ui/phone/activities.html#/activity/20180901\'})">\n          <img src="assets/imgs/carousel.png">\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div (click)="locate(\'list\',{name:\'执医通关包\'})">\n          <img src="assets/imgs/carousel.png">\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div (click)="locate(\'info\',{name:\'执医通关包\'})">\n          <img src="assets/imgs/carousel.png">\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n  <!--顶部菜单-->\n  <div>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12 class="top-menu">\n          <div *ngFor="let item of topMenus[0]" class="top-menu-item" (click)="locate(\'list\',item)">\n            <div class="top-menu-icon top-menu-icon-{{item[\'icon-name\']}}"></div>\n            <div>{{item[\'name\']}}</div>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 class="top-menu">\n          <div *ngFor="let item of topMenus[1]" class="top-menu-item" (click)="locate(\'list\',item)">\n            <div class="top-menu-icon top-menu-icon-{{item[\'icon-name\']}}"></div>\n            <div>{{item[\'name\']}}</div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <!--轮播菜单-->\n    <div class="slide-bag" (pan)="panEvent($event)">\n      <div *ngFor="let item of slideBags" (click)="locate(\'info\',item)">\n        <img src="assets/imgs/{{item[\'cover\']}}">\n      </div>\n    </div>\n  </div>\n  <div class="separator"></div>\n  <!--住陪通关包-->\n  <div>\n    <div class="home-card">\n      <div class="home-card-title">\n        <span class="home-card-title-text">住陪通关包</span>\n        <button ion-button icon-only clear color="nav" (click)="locate(\'list\',{name: \'住陪通关包\',key:\'exam-rst\'})">\n          <ion-icon name="arrow-forward"></ion-icon>\n        </button>\n      </div>\n      <div class="home-card-row">\n        <ion-grid>\n          <ion-row>\n            <ion-col *ngFor="let item of topBags" col-4 class="home-card-row-item">\n              <img src="assets/imgs/{{item[\'cover\']}}">\n              <!--<span>{{item[\'name\']}}</span>-->\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n  </div>\n\n  <div class="separator"></div>\n  <!--手术视频-->\n  <div>\n    <div class="home-card">\n      <div class="home-card-title">\n        <span class="home-card-title-text">手术视频</span>\n        <button ion-button icon-only clear color="nav">\n          <ion-icon name="arrow-forward"></ion-icon>\n        </button>\n      </div>\n      <div class="home-card-row">\n        <ion-grid>\n          <ion-row *ngFor="let item of topOperations">\n            <ion-col col-5 text-center>\n              <img src="assets/imgs/{{item[\'cover\']}}">\n            </ion-col>\n            <ion-col col-7 class="operation-item">\n              <div style="font-size: larger;">{{item[\'name\']}}</div>\n              <div>\n                <div>\n                  <span>{{item[\'author\']}}</span>\n                  <span>{{item[\'subject\']}}</span>\n                </div>\n                <div>\n                  <span>\n                    <span class="imed-red">{{item[\'price\']}}</span>阅点\n                  </span>\n                  <span><s>{{item[\'originPrice\']}}</s>阅点</span>\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n  </div>\n\n  <div class="separator"></div>\n  <!--执医通关包-->\n  <div>\n    <div class="home-card">\n      <div class="home-card-title">\n        <span class="home-card-title-text">执医通关包</span>\n        <button ion-button icon-only clear color="nav"\n                (click)="locate(\'url\',{name:\'执医通关包\',url:\'https://mall.imed.org.cn/ui/phone/activities.html#/exam\'})"\n        >\n          <ion-icon name="arrow-forward"></ion-icon>\n        </button>\n      </div>\n      <div class="home-card-row">\n        <ion-grid>\n          <ion-row *ngFor="let item of topDocs">\n            <ion-col col-12 text-center>\n              <img src="assets/imgs/{{item[\'topTitle\']}}">\n            </ion-col>\n            <ion-col col-6 *ngFor="let it of item[\'list\']" text-center\n                     (click)="locate(\'url\',it)">\n              <img src="assets/imgs/{{it[\'cover\']}}">\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/lujiewen/WebstormProjects/ionic-cordova/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toc_toc__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookPage = /** @class */ (function () {
    function BookPage(viewCtrl, platform, popoverCtrl, events, navParams) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.popoverCtrl = popoverCtrl;
        this.events = events;
        this.navParams = navParams;
        this.currentPage = 1;
        this.showToolbars = true;
        this.toolbarColor = 'light';
        var book = this.navParams.get('book');
        this.platform.ready().then(function () {
            // load book
            _this.book = ePub(book.file);
            _this._updateTotalPages();
            // load toc and then update pagetitle
            _this.book.getToc().then(function (toc) {
                _this._updatePageTitle();
            });
            // if page changes
            _this.book.on('book:pageChanged', function (location) {
                console.log('on book:pageChanged', location);
                _this._updateCurrentPage();
                _this._updatePageTitle();
            });
            // subscribe to events coming from other pages
            _this._subscribeToEvents();
        });
    }
    BookPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BookPage');
        // render book
        this.book.renderTo("book"); // TODO We should work with ready somehow here I think
    };
    BookPage.prototype.ionViewDidLeave = function () {
    };
    BookPage.prototype._subscribeToEvents = function () {
        var _this = this;
        console.log('subscribe to events');
        // toc: go to selected chapter
        this.events.subscribe('select:toc', function (content) {
            _this.book.goto(content.href);
        });
        // settings: change background color
        this.events.subscribe('select:background-color', function (bgColor) {
            console.log('select:background-color', bgColor);
            _this.book.setStyle("background-color", bgColor);
            _this.bgColor = bgColor;
            // adapt toolbar color to background color
            if (bgColor == 'rgb(255, 255, 255)' || bgColor == 'rgb(249, 241, 228)') {
                _this.toolbarColor = 'light';
            }
            else {
                _this.toolbarColor = 'dark';
            }
        });
        // settings: change color
        this.events.subscribe('select:color', function (color) {
            console.log('select:color', color);
            _this.book.setStyle("color", color);
        });
        // settings: change font
        this.events.subscribe('select:font-family', function (family) {
            console.log('select:font-family', family);
            _this.book.setStyle("font-family", family);
            _this._updateTotalPages();
        });
        // settings: change font size
        this.events.subscribe('select:font-size', function (size) {
            console.log('select:font-size', size);
            _this.book.setStyle("font-size", size);
            _this._updateTotalPages();
        });
    };
    BookPage.prototype._updateCurrentPage = function () {
        console.log('_updateCurrentPage');
        // Source: https://github.com/futurepress/epub.js/wiki/Tips-and-Tricks#generating-and-getting-page-numbers (bottom)
        var currentLocation = this.book.getCurrentLocationCfi();
        var page = this.book.pagination.pageFromCfi(currentLocation);
        console.log('_updateCurrentPage location =', currentLocation, 'page =', page);
        this.currentPage = page;
    };
    BookPage.prototype._updateTotalPages = function () {
        var _this = this;
        console.log('_updateTotalPages');
        //TODO: cancel prior pagination promise
        // TODO Triggers "download" of ALL pages for unpacked books. Really needed? Alternative?
        // Source: https://github.com/futurepress/epub.js/wiki/Tips-and-Tricks#generating-and-getting-page-numbers
        this.book.generatePagination().then(function () {
            var totalPages = _this.book.pagination.totalPages;
            console.log('_updateTotalPages totalPages = ', totalPages);
            _this.totalPages = "of " + totalPages; // TODO where is this.totalPages actually used?
        }).catch(function (error) {
            console.log('_updateTotalPages error = ', error);
        });
    };
    BookPage.prototype._updatePageTitle = function () {
        var _this = this;
        console.log('_updatePageTitle');
        var bookTitle = this.book.metadata.bookTitle;
        var pageTitle = bookTitle; // default to book title
        if (this.book.toc) {
            // Use chapter name
            var chapter = this.book.toc.filter(function (obj) { return obj.href == _this.book.currentChapter.href; })[0]; // TODO What does this code do?
            pageTitle = chapter ? chapter.label : bookTitle; // fallback to book title again
        }
        console.log('_updatePageTitle title =', pageTitle);
        this.pageTitle = pageTitle;
    };
    // Navigation
    BookPage.prototype.prev = function () {
        console.log('prev');
        if (this.currentPage == 2) {
            this.book.gotoPage(1);
        }
        else {
            this.book.prevPage();
        }
    };
    BookPage.prototype.next = function () {
        console.log('next');
        this.book.nextPage();
    };
    BookPage.prototype.close = function () {
        this.book.destroy();
        this.viewCtrl.dismiss();
    };
    BookPage.prototype.toc = function (ev) {
        console.log('toc');
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__toc_toc__["a" /* TocPage */], {
            toc: this.book.toc
        });
        popover.present({ ev: ev });
    };
    BookPage.prototype.settings = function (ev) {
        console.log('settings');
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */], {
            backgroundColor: this.book.settings.styles['background-color'],
            fontFamily: this.book.settings.styles['font-family'],
            fontSize: this.book.settings.styles['font-size'],
        });
        popover.present({ ev: ev });
    };
    // Touchlayer
    BookPage.prototype.toggleToolbars = function () {
        console.log('toggleToolbars');
        this.showToolbars = !this.showToolbars;
    };
    BookPage.prototype.changePage = function (event) {
        console.log('changePage', event);
        if (event.velocityX < 0) {
            this.next();
        }
        else {
            this.prev();
        }
    };
    BookPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-book',template:/*ion-inline-start:"/Users/lujiewen/WebstormProjects/ionic-cordova/src/pages/epub-reader/book/book.html"*/'<ion-header>\n\n  <ion-toolbar transparent [color]="toolbarColor" [hidden]="!showToolbars">\n    <ion-buttons start>\n      <button ion-button icon-only (tap)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{pageTitle}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (tap)="settings($event)">\n        <ion-icon name="settings"></ion-icon>\n      </button>\n      <button ion-button icon-only (tap)="toc($event)">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [ngStyle]="{\'backgroundColor\': bgColor}" no-bounce>\n  <div id="touchlayer" (tap)="toggleToolbars()" (swipe)="changePage($event)"></div>\n  <div id="book"></div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar transparent [color]="toolbarColor" *ngIf="showToolbars">\n    <ion-buttons start>\n      <button ion-button icon-only (tap)="prev()">\n        <ion-icon name="arrow-dropleft-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Page {{currentPage}} {{(book && book.pagination && book.pagination.totalPages) ? \' of \' +\n      book.pagination.totalPages : \'\'}}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (tap)="next()">\n        <ion-icon name="arrow-dropright-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/lujiewen/WebstormProjects/ionic-cordova/src/pages/epub-reader/book/book.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], BookPage);
    return BookPage;
}());

//# sourceMappingURL=book.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListPage; });
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
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductListPage = /** @class */ (function () {
    function ProductListPage(appCtrl, navParams) {
        this.appCtrl = appCtrl;
        this.navParams = navParams;
        this.items = [];
    }
    ProductListPage.prototype.ionViewDidLoad = function () {
        for (var i = 0; i < 10; i++) {
            this.items.push({
                name: '结膜切口的眼眶肌锥内海绵状血管瘤摘除',
                cover: 'bag-1.png',
                author: '孙丰源',
                type: '通关包',
                size: '2MB',
                price: '640',
                originPrice: '800'
            });
        }
        console.log('ionViewDidLoad ProductListPage');
    };
    ProductListPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            for (var i = 0; i < 10; i++) {
                _this.items.push({
                    name: '结膜切口的眼眶肌锥内海绵状血管瘤摘除',
                    cover: 'bag-1.png',
                    author: '孙丰源',
                    type: '通关包',
                    size: '2MB',
                    price: '640',
                    originPrice: '800'
                });
            }
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    ProductListPage.prototype.goToDetail = function (item) {
        this.appCtrl.getRootNav().push('ProductInfoPage', {}).catch();
    };
    ProductListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product-list',template:/*ion-inline-start:"/Users/lujiewen/WebstormProjects/ionic-cordova/src/pages/product-list/product-list.html"*/'<ion-content no-bounce>\n  <ion-list>\n    <ion-item *ngFor="let item of items" class="imed-list-item" (click)="goToDetail(item)">\n      <div item-start style="width: 25%">\n        <img src="assets/imgs/{{item[\'cover\']}}">\n      </div>\n\n      <div item-end class="justify-content-around">\n        <div>{{item[\'name\']}}</div>\n        <div class="imed-list-item-label">\n          <div>\n            <span><span class="imed-red">{{item[\'price\']}}</span>阅点</span>\n            <span><s>{{item[\'originPrice\']}}</s>阅点</span>\n          </div>\n          <div>作者：{{item[\'author\']}}</div>\n          <div class="imed-list-item-label-last">\n            <span>图书类型：{{item[\'type\']}}</span>\n            <span>大小：{{item[\'size\']}}</span>\n          </div>\n        </div>\n      </div>\n    </ion-item>\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/lujiewen/WebstormProjects/ionic-cordova/src/pages/product-list/product-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], ProductListPage);
    return ProductListPage;
}());

//# sourceMappingURL=product-list.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_product_list_product_list__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_product_info_product_info_module__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_epub_reader_book_book__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_epub_reader_toc_toc__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_epub_reader_settings_settings__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_web_web_module__ = __webpack_require__(154);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* App */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_product_list_product_list__["a" /* ProductListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_epub_reader_book_book__["a" /* BookPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_epub_reader_toc_toc__["a" /* TocPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_epub_reader_settings_settings__["a" /* SettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* App */], {
                    backButtonText: '',
                    tabsHideOnSubPages: true,
                }, {
                    links: [
                        { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'CategoryPage', segment: 'category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/epub-reader/epub-reader.module#EpubReaderPageModule', name: 'EpubReaderPage', segment: 'epub-reader', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order/order.module#OrderPageModule', name: 'OrderPage', segment: 'order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pay-success/pay-success.module#PaySuccessPageModule', name: 'PaySuccessPage', segment: 'pay-success', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-info/product-info.module#ProductInfoPageModule', name: 'ProductInfoPage', segment: 'product-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product/product.module#ProductPageModule', name: 'ProductPage', segment: 'product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/web/web.module#WebPageModule', name: 'WebPage', segment: 'web', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8__pages_product_info_product_info_module__["ProductInfoPageModule"],
                __WEBPACK_IMPORTED_MODULE_12__pages_web_web_module__["WebPageModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* App */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_product_list_product_list__["a" /* ProductListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_epub_reader_book_book__["a" /* BookPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_epub_reader_toc_toc__["a" /* TocPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_epub_reader_settings_settings__["a" /* SettingsPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductInfoPage; });
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
 * Generated class for the ProductInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductInfoPage = /** @class */ (function () {
    function ProductInfoPage(navCtrl, navParams) {
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
        };
    }
    ProductInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductInfoPage');
    };
    ProductInfoPage.prototype.buy = function (item) {
        this.navCtrl.push('OrderPage', {}).catch();
    };
    ProductInfoPage.prototype.open = function (item) {
        this.navCtrl.push('EpubReaderPage', {}).catch();
    };
    ProductInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product-info',template:/*ion-inline-start:"/Users/lujiewen/WebstormProjects/ionic-cordova/src/pages/product-info/product-info.html"*/'<!--\n  Generated template for the ProductInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>图书详情</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <div class="imed-product-info">\n    <div class="imed-product-info-thumbnails" text-center>\n      <img src="assets/imgs/{{item[\'cover\']}}">\n    </div>\n    <div class="imed-product-info-detail">\n      <div class="imed-list-item-title">{{item[\'name\']}}</div>\n      <div class="imed-list-item-label">\n        <div>\n          <span><span class="imed-red">{{item[\'price\']}}</span>阅点</span>\n          <span><s>{{item[\'originPrice\']}}</s>阅点</span>\n        </div>\n        <div>作者：{{item[\'author\']}}</div>\n        <div class="imed-list-item-label-last">\n          <span>图书类型：{{item[\'type\']}}</span>\n          <span>大小：{{item[\'size\']}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div *ngIf="item[\'brief\']">\n    <div class="separator"></div>\n    <div class="imed-product-brief">\n      <div class="imed-product-brief-title">简介</div>\n      <div [innerHTML]="item[\'brief\']|html"></div>\n    </div>\n  </div>\n\n  <div *ngIf="item[\'catalog\']">\n    <div class="separator"></div>\n    <div class="imed-product-brief">\n      <div class="imed-product-brief-title">目录</div>\n      <div [innerHTML]="item[\'catalog\']|html"></div>\n    </div>\n  </div>\n\n</ion-content>\n\n<ion-footer>\n  <div class="imed-footer">\n    <div color="danger" *ngIf="!item[\'owner\']; else elseBlock" (click)="buy()">\n      立即购买\n    </div>\n    <ng-template #elseBlock>\n      <div color="danger" (click)="buy()">\n        立即下载\n      </div>\n      <div color="danger" *ngIf="item[\'online\']" (click)="open(item)">\n        在线阅读\n      </div>\n    </ng-template>\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/Users/lujiewen/WebstormProjects/ionic-cordova/src/pages/product-info/product-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], ProductInfoPage);
    return ProductInfoPage;
}());

//# sourceMappingURL=product-info.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__safe_html_safe_html__ = __webpack_require__(253);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__safe_html_safe_html__["a" /* SafeHtmlPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__safe_html_safe_html__["a" /* SafeHtmlPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(22);
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
 * Generated class for the SafeHtmlPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'html',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());

//# sourceMappingURL=safe-html.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var App = /** @class */ (function () {
    function App(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    App.prototype.ngAfterViewInit = function () {
        // Let's navigate from TabsPage to Page1
        // this.nav.push(LoginPage);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('rootNav'),
        __metadata("design:type", Object)
    ], App.prototype, "nav", void 0);
    App = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/lujiewen/WebstormProjects/ionic-cordova/src/app/app.html"*/'<ion-nav #rootNav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/lujiewen/WebstormProjects/ionic-cordova/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], App);
    return App;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(22);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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



var WebPage = /** @class */ (function () {
    function WebPage(viewCtrl, params, sanitizer) {
        this.viewCtrl = viewCtrl;
        this.params = params;
        this.sanitizer = sanitizer;
        this.config = {
            url: '',
            title: '加载中',
        };
        this.progress = 0; // 网页访问的进度条
        this.isLoaded = false;
        this.history = [];
        this.config = __assign({}, this.config, this.params.get('browser'));
        this.secUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.config.url);
        // let backAction = this.platform.registerBackButtonAction(() => {
        //   backAction();
        // }, 2);
        window.addEventListener('message', this.microAppCall);
    }
    WebPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.onProgress();
        this.todoName.nativeElement.contentWindow.onhashchange = function () {
            console.log('===');
            _this.history.push('1');
        };
    };
    WebPage.prototype.ionViewDidLeave = function () {
        window.removeEventListener('message', this.microAppCall);
    };
    WebPage.prototype.microAppCall = function (_a) {
        var data = _a.data;
        if (data.msgType == 'refresh') {
            // this.reload();
        }
        else if (data.msgType == 'close') {
        }
    };
    // 网页访问进度
    WebPage.prototype.onProgress = function () {
        var _this = this;
        var _a = [1, 20, 90, 100], min = _a[0], max = _a[1], progressMax = _a[2], period = _a[3]; //最小步长,最大步长,最大进度,刷新周期
        var timer = setInterval(function () {
            if (_this.isLoaded)
                clearTimeout(timer);
            var step = Math.floor(Math.random() * (max - min) + min); //1-20随机步长
            _this.progress += Math.min(progressMax - _this.progress, step); //最大可增步长和预期步长取最小值
        }, period);
    };
    // 如果iframe页面加载成功后
    WebPage.prototype.loaded = function () {
        var _this = this;
        setTimeout(function () {
            _this.isLoaded = true;
        }, 1000);
    };
    WebPage.prototype.back = function () {
        if (this.history.pop()) {
            window.history.back();
        }
        else {
            this.close();
        }
    };
    WebPage.prototype.close = function () {
        this.viewCtrl.dismiss().catch();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('iframe'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], WebPage.prototype, "todoName", void 0);
    WebPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-web',template:/*ion-inline-start:"/Users/lujiewen/WebstormProjects/ionic-cordova/src/pages/web/web.html"*/'<!--\n  Generated template for the WebPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <button ion-button icon-only small clear color="imed-red" (click)="back()">\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n    <ion-title>{{config.title}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only small clear color="imed-red" (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class="content">\n  <!--scroll="true" overflow-scroll="true"-->\n  <div class="progress" [hidden]="isLoaded">\n    <div class="progress-inner" [ngStyle]="{\'width\': progress+\'%\'}"></div>\n  </div>\n\n  <iframe #iframe class="iframe"\n          sandbox="allow-scripts allow-top-navigation allow-pointer-lock allow-same-origin allow-popups allow-forms allow-modals"\n          [src]="secUrl" (load)="loaded()">\n  </iframe>\n</ion-content>\n'/*ion-inline-end:"/Users/lujiewen/WebstormProjects/ionic-cordova/src/pages/web/web.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], WebPage);
    return WebPage;
}());

//# sourceMappingURL=web.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map