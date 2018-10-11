webpackJsonp([4],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpubReaderPageModule", function() { return EpubReaderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__epub_reader__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EpubReaderPageModule = /** @class */ (function () {
    function EpubReaderPageModule() {
    }
    EpubReaderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__epub_reader__["a" /* EpubReaderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__epub_reader__["a" /* EpubReaderPage */]),
            ],
        })
    ], EpubReaderPageModule);
    return EpubReaderPageModule;
}());

//# sourceMappingURL=epub-reader.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Book */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EpubReaderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_book__ = __webpack_require__(200);
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
 * Generated class for the EpubReaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Book = /** @class */ (function () {
    function Book() {
    }
    return Book;
}());

var EpubReaderPage = /** @class */ (function () {
    function EpubReaderPage(modalCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.books = [];
        var book1 = new Book();
        book1.label = "Moby Dick (unpacked)";
        book1.file = "assets/books/moby-dick/";
        this.books.push(book1);
        var book2 = new Book();
        book2.label = "Moby Dick (.epub)";
        book2.file = "assets/books/moby-dick.epub";
        this.books.push(book2);
        var book3 = new Book();
        book3.label = "Open (unpacked)";
        book3.file = "assets/books/open/";
        this.books.push(book3);
        var book4 = new Book();
        book4.label = "Remote with Ionic CLI service proxy [works only with `ionic serve`] (.epub)";
        book4.file = "amazon/pressbooks-samplefiles/MetamorphosisJacksonTheme/Metamorphosis-jackson.epub";
        this.books.push(book4);
        var book5 = new Book();
        book5.label = "Remote [works on device in native app only] (.epub)";
        book5.file = "https://s3-us-west-2.amazonaws.com//pressbooks-samplefiles/MetamorphosisJacksonTheme/Metamorphosis-jackson.epub";
        this.books.push(book5);
        var book6 = new Book();
        book6.label = "Remote with correct headers [works everywhere] (.epub)";
        book6.file = "https://yatsa.betamo.de/ionic-epubjs/Metamorphosis-jackson.epub";
        this.books.push(book6);
        var book7 = new Book();
        book7.label = "医学通识";
        book7.file = "assets/books/医学通识-1.epub";
        this.books.push(book7);
    }
    EpubReaderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    EpubReaderPage.prototype.show = function (book) {
        console.log('show', book);
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__book_book__["a" /* BookPage */], { book: book }).present().catch();
    };
    EpubReaderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-epub-reader',template:/*ion-inline-start:"/Users/lujiewen/WebstormProjects/ionic-cordova/src/pages/epub-reader/epub-reader.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>ionic-epubjs</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <p>Please choose a book to view:</p>\n  <ion-list>\n    <ion-item *ngFor="let book of books" (tap)="show(book)">{{book.label}}</ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/lujiewen/WebstormProjects/ionic-cordova/src/pages/epub-reader/epub-reader.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], EpubReaderPage);
    return EpubReaderPage;
}());

//# sourceMappingURL=epub-reader.js.map

/***/ })

});
//# sourceMappingURL=4.js.map