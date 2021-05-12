"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SingleCustomerComponent = void 0;
var core_1 = require("@angular/core");
var customer_model_1 = require("../../models/customer.model");
var SingleCustomerComponent = /** @class */ (function () {
    function SingleCustomerComponent(route, customerService, router, titleService) {
        this.route = route;
        this.customerService = customerService;
        this.router = router;
        this.titleService = titleService;
    }
    SingleCustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle('View Customer');
        this.customer = new customer_model_1.Customer('', '', '');
        var id = this.route.snapshot.params['id'];
        this.customerService.getSingleCustomer(id).then(function (customer) {
            if (customer)
                _this.customer = customer;
            else
                _this.router.navigate(['/customer']);
        });
    };
    SingleCustomerComponent.prototype.onBack = function () {
        this.router.navigate(['/customer']);
    };
    SingleCustomerComponent.prototype.onEdit = function () {
        this.router.navigate(['/customer', 'edit', this.customer.id]);
    };
    SingleCustomerComponent.prototype.getPhotoUrl = function () {
        if (this.customer.photo) {
            return this.customer.photo;
        }
        else if (this.customer.gender == "female") {
            return './assets/images/woman-placeholder.jpg';
        }
        else {
            return './assets/images/man-placeholder.jpg';
        }
    };
    SingleCustomerComponent.prototype.getDate = function (date) {
        return new Date(date).toLocaleDateString();
    };
    SingleCustomerComponent = __decorate([
        core_1.Component({
            selector: 'test-single-customer',
            templateUrl: './single-customer.component.html',
            styleUrls: ['./single-customer.component.css']
        })
    ], SingleCustomerComponent);
    return SingleCustomerComponent;
}());
exports.SingleCustomerComponent = SingleCustomerComponent;
