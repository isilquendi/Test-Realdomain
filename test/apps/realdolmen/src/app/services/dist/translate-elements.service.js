"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TranslateElementsService = void 0;
var core_1 = require("@angular/core");
var paginator_1 = require("@angular/material/paginator");
var ITEMS_PER_PAGE = 'Items per page:';
var NEXT_PAGE = 'Next page';
var PREV_PAGE = 'Previous page';
var FIRST_PAGE = 'First page';
var LAST_PAGE = 'Last page';
var TranslateElementsService = /** @class */ (function (_super) {
    __extends(TranslateElementsService, _super);
    function TranslateElementsService(translate, titleService) {
        var _this = _super.call(this) || this;
        _this.translate = translate;
        _this.titleService = titleService;
        _this.translate.onLangChange.subscribe(function (e) {
            _this.getAndInitTranslations();
        });
        _this.getAndInitTranslations();
        return _this;
    }
    TranslateElementsService.prototype.setLanguage = function (value) {
        this.translate.use(value);
    };
    TranslateElementsService.prototype.getAndInitTranslations = function () {
        var _this = this;
        this.translate.get([
            ITEMS_PER_PAGE,
            NEXT_PAGE,
            PREV_PAGE,
            FIRST_PAGE,
            LAST_PAGE,
        ])
            .subscribe(function (translation) {
            _this.itemsPerPageLabel = translation[ITEMS_PER_PAGE];
            _this.nextPageLabel = translation[NEXT_PAGE];
            _this.previousPageLabel = translation[PREV_PAGE];
            _this.firstPageLabel = translation[FIRST_PAGE];
            _this.lastPageLabel = translation[LAST_PAGE];
            _this.changes.next();
        });
    };
    TranslateElementsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TranslateElementsService);
    return TranslateElementsService;
}(paginator_1.MatPaginatorIntl));
exports.TranslateElementsService = TranslateElementsService;
