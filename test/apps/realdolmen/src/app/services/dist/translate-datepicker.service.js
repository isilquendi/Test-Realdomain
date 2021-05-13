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
exports.TranslateDatepickerService = void 0;
var core_1 = require("@angular/core");
var datepicker_1 = require("@angular/material/datepicker");
var TranslateDatepickerService = /** @class */ (function (_super) {
    __extends(TranslateDatepickerService, _super);
    function TranslateDatepickerService(translate, _adapter) {
        var _this = _super.call(this) || this;
        _this.translate = translate;
        _this._adapter = _adapter;
        _this.translate.onLangChange.subscribe(function (e) {
            _this.getAndInitTranslations(e.lang);
        });
        _this.getAndInitTranslations('en');
        return _this;
    }
    TranslateDatepickerService.prototype.getAndInitTranslations = function (lang) {
        this._adapter.setLocale(lang);
    };
    TranslateDatepickerService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TranslateDatepickerService);
    return TranslateDatepickerService;
}(datepicker_1.MatDatepickerIntl));
exports.TranslateDatepickerService = TranslateDatepickerService;
