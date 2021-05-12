"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var app_1 = require("firebase/app");
require("firebase/analytics");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.className = '';
        this.title = 'realdolmen';
        var firebaseConfig = {
            apiKey: "AIzaSyDPkSGWPXLtrMVS1XuSP2mCdwMFEUPP-hA",
            authDomain: "realdolmen-10996.firebaseapp.com",
            databaseURL: "https://realdolmen-10996-default-rtdb.europe-west1.firebasedatabase.app",
            projectId: "realdolmen-10996",
            storageBucket: "realdolmen-10996.appspot.com",
            messagingSenderId: "450938557261",
            appId: "1:450938557261:web:bf015f4b5f6d53dc875d04",
            measurementId: "G-E3CKH6QN2R"
        };
        // Initialize Firebase
        app_1["default"].initializeApp(firebaseConfig);
    }
    AppComponent.prototype.childToParent = function (name) {
        this.className = name;
    };
    __decorate([
        core_1.HostBinding('class')
    ], AppComponent.prototype, "className");
    AppComponent = __decorate([
        core_1.Component({
            selector: 'test-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
