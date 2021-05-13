"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SingleCustomerModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var single_customer_routing_module_1 = require("./single-customer-routing.module");
var single_customer_component_1 = require("../../customer-list/single-customer/single-customer.component");
var button_1 = require("@angular/material/button");
var icon_1 = require("@angular/material/icon");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var core_2 = require("@ngx-translate/core");
var SingleCustomerModule = /** @class */ (function () {
    function SingleCustomerModule() {
    }
    SingleCustomerModule = __decorate([
        core_1.NgModule({
            declarations: [single_customer_component_1.SingleCustomerComponent,],
            imports: [
                common_1.CommonModule,
                single_customer_routing_module_1.SingleCustomerRoutingModule,
                button_1.MatButtonModule,
                icon_1.MatIconModule,
                progress_spinner_1.MatProgressSpinnerModule,
                core_2.TranslateModule.forChild()
            ]
        })
    ], SingleCustomerModule);
    return SingleCustomerModule;
}());
exports.SingleCustomerModule = SingleCustomerModule;
