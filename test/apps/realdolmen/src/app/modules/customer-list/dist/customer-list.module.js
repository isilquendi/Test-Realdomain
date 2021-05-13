"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CustomerListModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var customer_list_routing_module_1 = require("./customer-list-routing.module");
var customer_list_component_1 = require("../../customer-list/customer-list.component");
var sort_1 = require("@angular/material/sort");
var table_1 = require("@angular/material/table");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var button_1 = require("@angular/material/button");
var checkbox_1 = require("@angular/material/checkbox");
var paginator_1 = require("@angular/material/paginator");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var core_2 = require("@ngx-translate/core");
var CustomerListModule = /** @class */ (function () {
    function CustomerListModule() {
    }
    CustomerListModule = __decorate([
        core_1.NgModule({
            declarations: [
                customer_list_component_1.CustomerListComponent,
            ],
            imports: [
                common_1.CommonModule,
                customer_list_routing_module_1.CustomerListRoutingModule,
                sort_1.MatSortModule,
                table_1.MatTableModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                button_1.MatButtonModule,
                checkbox_1.MatCheckboxModule,
                paginator_1.MatPaginatorModule,
                progress_spinner_1.MatProgressSpinnerModule,
                core_2.TranslateModule.forChild()
            ],
            exports: [
                customer_list_component_1.CustomerListComponent,
            ]
        })
    ], CustomerListModule);
    return CustomerListModule;
}());
exports.CustomerListModule = CustomerListModule;
