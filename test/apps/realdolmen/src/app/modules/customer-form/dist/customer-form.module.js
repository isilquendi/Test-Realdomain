"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CustomerFormModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var customer_form_routing_module_1 = require("./customer-form-routing.module");
var customer_form_component_1 = require("../../customer-list/customer-form/customer-form.component");
var forms_1 = require("@angular/forms");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var button_1 = require("@angular/material/button");
var datepicker_1 = require("@angular/material/datepicker");
var core_2 = require("@angular/material/core");
var select_1 = require("@angular/material/select");
var icon_1 = require("@angular/material/icon");
var checkbox_1 = require("@angular/material/checkbox");
var radio_1 = require("@angular/material/radio");
var CustomerFormModule = /** @class */ (function () {
    function CustomerFormModule() {
    }
    CustomerFormModule = __decorate([
        core_1.NgModule({
            declarations: [customer_form_component_1.CustomerFormComponent],
            imports: [
                common_1.CommonModule,
                customer_form_routing_module_1.CustomerFormRoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                button_1.MatButtonModule,
                datepicker_1.MatDatepickerModule,
                core_2.MatNativeDateModule,
                select_1.MatSelectModule,
                icon_1.MatIconModule,
                checkbox_1.MatCheckboxModule,
                radio_1.MatRadioModule,
            ]
        })
    ], CustomerFormModule);
    return CustomerFormModule;
}());
exports.CustomerFormModule = CustomerFormModule;
