webpackJsonp([5],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function() { return CategoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CategoryPageModule = /** @class */ (function () {
    function CategoryPageModule() {
    }
    CategoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__category__["a" /* CategoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__category__["a" /* CategoryPage */]),
            ],
        })
    ], CategoryPageModule);
    return CategoryPageModule;
}());

//# sourceMappingURL=category.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
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
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CategoryPage = /** @class */ (function () {
    function CategoryPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.menus = [
            {
                name: '5+3教材',
                key: '5p3',
                list: [
                    {
                        name: '56本教材',
                        key: '5p3-all'
                    }
                ]
            },
            {
                name: '学习套餐',
                key: 'learn',
                list: [
                    {
                        name: '52门全套',
                        key: 'learn-52',
                    }, {
                        name: '基础课程',
                        key: 'learn-base',
                    }, {
                        name: '临床课程',
                        key: 'learn-exercise',
                    }, {
                        name: '公共课程',
                        key: 'learn-common',
                    }, {
                        name: '开学季199/年教材套餐',
                        key: 'learn-year',
                    }, {
                        name: '入培学习包',
                        key: 'learn-entrance',
                    },
                ]
            },
            {
                name: '西医图书',
                key: 'west',
                list: [
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
                name: '中医图书',
                key: 'chinese',
                list: [
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
            {
                name: '疾病诊疗教程',
                key: 'disease'
            },
            {
                name: '医学数据库',
                key: 'database',
            },
            {
                name: '师资培训',
                key: 'none',
                list: [
                    {
                        name: '2018年住陪高峰论坛',
                        type: 'url',
                        url: 'https://mall.imed.org.cn/ui/phone/activities.html#/activity/20180901'
                    }
                ]
            },
            {
                name: '手术视频',
                type: 'multi-column',
                key: 'operation',
                list: [
                    {
                        title: '全部学科',
                        list: [
                            {
                                name: '普通外科',
                                key: 'operation-operation',
                            }, {
                                name: '普通外科',
                                key: 'operation-operation',
                            }, {
                                name: '普通外科',
                                key: 'operation-operation',
                            }, {
                                name: '普通外科',
                                key: 'operation-operation',
                            }, {
                                name: '普通外科',
                                key: 'operation-operation',
                            }, {
                                name: '普通外科',
                                key: 'operation-operation',
                            },
                        ]
                    },
                    {
                        title: '全部类别',
                        list: [
                            {
                                name: '当代医学名家经典手术',
                                key: 'operation-operation',
                            },
                            {
                                name: '住陪手术与操作规范',
                                key: 'operation-operation',
                            }
                        ]
                    }
                ]
            },
            {
                name: '考试培训',
                key: 'exam',
                list: [
                    {
                        name: '住培结业理论通关包',
                        key: 'exam-rst',
                    }, {
                        name: '执业医师/执业助理医师通关包',
                        key: 'exam-practice',
                    }, {
                        name: '住培结业技能通关包',
                        key: 'exam-skill',
                    }
                ]
            },
            {
                name: '免费专区',
                key: 'free',
                list: [
                    {
                        name: '全部',
                        key: 'free-all',
                    }
                ]
            },
            {
                name: '会员年卡',
                key: 'year',
                list: [
                    {
                        name: '学科-109/209/309年卡',
                        key: 'year-subject',
                    }
                ]
            }
        ];
        this.subMenus = this.menus[0];
    }
    CategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategoryPage');
    };
    CategoryPage.prototype.goBack = function () {
        this.navCtrl.pop({ direction: 'forward' }).catch();
    };
    CategoryPage.prototype.selectMenu = function (index) {
        this.subMenus = this.menus[index];
    };
    CategoryPage.prototype.navigate = function (item) {
        if (item['type'] == 'url') {
            this.navCtrl.push('WebPage', { browser: { title: item['name'], url: item['url'] } }).catch();
        }
    };
    CategoryPage.prototype.goToPage = function (_a) {
        var title = _a.name, key = _a.key, type = _a.type, url = _a.url;
        console.log(title);
        if (type == 'url') {
            // this.navCtrl.push('WebPage', {browser: {title, url,}}).catch();
            this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__web_web__["a" /* WebPage */], { browser: { title: title, url: url, } }).present().catch();
        }
        else {
            this.navCtrl.push('ProductPage', { title: title, key: key }).catch();
        }
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-category',template:/*ion-inline-start:"/Users/lujiewen/WebstormProjects/ionic-cordova/src/pages/category/category.html"*/'<!--\n  Generated template for the CategoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button icon-only color="imed-red" (click)="goBack()">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>分类</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="imed-red">\n        <ion-icon name="ios-search-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="category-content">\n    <div class="menu-main">\n      <div *ngFor="let item of menus;let ind = index" class="menu-main-item">\n        <button ion-button clear small full color="dark" (click)="selectMenu(ind)">{{item[\'name\']}}</button>\n      </div>\n    </div>\n    <div class="menu-main-content">\n      <ng-container [ngSwitch]="subMenus[\'type\']">\n        <ng-container *ngSwitchCase="\'multi-column\'">\n          <div *ngFor="let item of subMenus[\'list\']">\n            <div class="menu-main-sub">\n              <div class="menu-main-sub-title">{{item[\'title\']}}</div>\n              <div class="menu-main-sub-item">\n                <button *ngFor="let ite of item[\'list\']" ion-button outline small color="dark"\n                        (click)="goToPage(ite)">\n                  {{ite[\'name\']}}\n                </button>\n              </div>\n            </div>\n          </div>\n        </ng-container>\n        <ng-container *ngSwitchDefault>\n          <div class="menu-main-sub">\n            <button *ngFor="let item of subMenus[\'list\']"\n                    (click)="goToPage(item)"\n                    ion-button outline small\n                    color="dark">{{item[\'name\']}}\n            </button>\n          </div>\n        </ng-container>\n      </ng-container>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/lujiewen/WebstormProjects/ionic-cordova/src/pages/category/category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ })

});
//# sourceMappingURL=5.js.map