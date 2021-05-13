"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HttpLoaderFactory = exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var customers_service_1 = require("./services/customers.service");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var animations_1 = require("@angular/platform-browser/animations");
var customer_list_module_1 = require("./modules/customer-list/customer-list.module");
var single_customer_module_1 = require("./modules/single-customer/single-customer.module");
var customer_form_module_1 = require("./modules/customer-form/customer-form.module");
var icon_1 = require("@angular/material/icon");
var slide_toggle_1 = require("@angular/material/slide-toggle");
var toolbar_1 = require("@angular/material/toolbar");
var button_toggle_1 = require("@angular/material/button-toggle");
var platform_browser_2 = require("@angular/platform-browser");
var core_2 = require("@ngx-translate/core");
var http_loader_1 = require("@ngx-translate/http-loader");
var translate_paginator_service_1 = require("./services/translate-paginator.service");
var paginator_1 = require("@angular/material/paginator");
var translate_datepicker_service_1 = require("./services/translate-datepicker.service");
var datepicker_1 = require("@angular/material/datepicker");
var appRoutes = [
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'customer', loadChildren: function () { return Promise.resolve().then(function () { return require('./modules/customer-list/customer-list.module'); }).then(function (mod) { return mod.CustomerListModule; }); } },
    { path: 'customer/new', loadChildren: function () { return Promise.resolve().then(function () { return require('./modules/customer-form/customer-form.module'); }).then(function (mod) { return mod.CustomerFormModule; }); } },
    { path: 'customer/edit/:id', loadChildren: function () { return Promise.resolve().then(function () { return require('./modules/customer-form/customer-form.module'); }).then(function (mod) { return mod.CustomerFormModule; }); } },
    { path: 'customer/view/:id', loadChildren: function () { return Promise.resolve().then(function () { return require('./modules/single-customer/single-customer.module'); }).then(function (mod) { return mod.SingleCustomerModule; }); } },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: 'dashboard' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, header_component_1.HeaderComponent, dashboard_component_1.DashboardComponent],
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                router_1.RouterModule.forRoot(appRoutes),
                animations_1.BrowserAnimationsModule,
                customer_list_module_1.CustomerListModule,
                single_customer_module_1.SingleCustomerModule,
                customer_form_module_1.CustomerFormModule,
                icon_1.MatIconModule,
                slide_toggle_1.MatSlideToggleModule,
                toolbar_1.MatToolbarModule,
                button_toggle_1.MatButtonToggleModule,
                core_2.TranslateModule.forRoot({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [http_1.HttpClient]
                    }
                }),
            ],
            providers: [
                customers_service_1.CustomersService, platform_browser_2.Title,
                { provide: paginator_1.MatPaginatorIntl, useClass: translate_paginator_service_1.TranslatePaginatorService },
                { provide: datepicker_1.MatDatepickerIntl, useClass: translate_datepicker_service_1.TranslateDatepickerService },
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
function HttpLoaderFactory(http) {
    return new http_loader_1.TranslateHttpLoader(http);
}
exports.HttpLoaderFactory = HttpLoaderFactory;
