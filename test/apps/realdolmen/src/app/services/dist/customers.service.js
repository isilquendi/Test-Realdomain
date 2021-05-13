"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CustomersService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var app_1 = require("firebase/app");
require("firebase/database");
require("firebase/storage");
var CustomersService = /** @class */ (function () {
    function CustomersService() {
        this.customers = [];
        this.customersSubject = new rxjs_1.Subject();
    }
    CustomersService.prototype.emitCustomers = function () {
        this.customersSubject.next(this.customers);
    };
    CustomersService.prototype.saveCustomer = function (customer) {
        var newCustomer = app_1["default"].database().ref('customers/').push();
        customer.id = newCustomer.key;
        newCustomer.set(customer);
    };
    CustomersService.prototype.saveEditCustomer = function (customer) {
        app_1["default"].database().ref('customers/').child(customer.id).update(customer);
    };
    CustomersService.prototype.getCustomers = function () {
        var _this = this;
        app_1["default"].database().ref('customers/')
            .on('value', function (data) {
            if (data.val()) {
                var result_1 = data.val();
                _this.customers = Object.keys(result_1).map(function (key) {
                    return result_1[key];
                });
            }
            else
                _this.customers = [];
            _this.emitCustomers();
        });
    };
    CustomersService.prototype.filterCustomers = function (filter) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            app_1["default"].database().ref('customers/').orderByChild('email')
                .startAt(filter).endAt(filter + "\uf8ff").once('value').then(function (data) {
                var result = data.val();
                if (result) {
                    _this.customers = Object.keys(result).map(function (key) {
                        return result[key];
                    });
                }
                else {
                    _this.customers = [];
                }
                resolve(_this.customers);
            }, function (error) {
                reject(error);
            });
        });
    };
    CustomersService.prototype.getSingleCustomer = function (id) {
        return new Promise(function (resolve, reject) {
            app_1["default"].database().ref('customers/' + id).once('value').then(function (data) {
                resolve(data.val());
            }, function (error) {
                reject(error);
            });
        });
    };
    CustomersService.prototype.createNewCustomer = function (newCustomer) {
        this.customers.push(newCustomer);
        this.saveCustomer(newCustomer);
        this.emitCustomers();
    };
    CustomersService.prototype.editCustomer = function (customer) {
        this.customers.push(customer);
        this.saveEditCustomer(customer);
        this.emitCustomers();
    };
    CustomersService.prototype.removeCustomer = function (customer) {
        app_1["default"].database().ref('customers/' + customer.id).remove();
        this.emitCustomers();
    };
    CustomersService.prototype.removeMultipleCustomer = function (customers) {
        customers.forEach(function (customer) {
            app_1["default"].database().ref('customers/' + customer.id).remove();
        });
        this.emitCustomers();
    };
    CustomersService.prototype.uploadFile = function (file) {
        return new Promise(function (resolve, reject) {
            var id = Date.now().toString();
            var upload = app_1["default"].storage().ref().child('images/' + id + file.name).put(file);
            upload.on(app_1["default"].storage.TaskEvent.STATE_CHANGED, function () {
                console.log('Loading');
            }, function (error) {
                console.log('Error : ' + error);
            }, function () {
                resolve(upload.snapshot.ref.getDownloadURL());
            });
        });
    };
    CustomersService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CustomersService);
    return CustomersService;
}());
exports.CustomersService = CustomersService;
