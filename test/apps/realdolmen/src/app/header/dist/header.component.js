"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeaderComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(overlay, translate) {
        this.overlay = overlay;
        this.translate = translate;
        this.setDarkMode = new core_1.EventEmitter();
        this.toggleControl = new forms_1.FormControl(false);
        this.languageControl = new forms_1.FormControl();
        this.menuToggle = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.toggleControl.valueChanges.subscribe(function (darkMode) {
            var darkClassName = 'darkMode';
            _this.setDarkMode.emit(darkMode ? darkClassName : '');
            if (darkMode) {
                _this.overlay.getContainerElement().classList.add(darkClassName);
            }
            else {
                _this.overlay.getContainerElement().classList.remove(darkClassName);
            }
        });
        this.languageControl.valueChanges.subscribe(function (value) {
            _this.translate.use(value);
        });
    };
    HeaderComponent.prototype.menuUpdate = function () {
        if (this.menuToggle) {
            this.menuToggle = false;
        }
        else
            this.menuToggle = true;
    };
    __decorate([
        core_1.Output()
    ], HeaderComponent.prototype, "setDarkMode");
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'test-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
