"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CustomerFormComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var customer_model_1 = require("../../models/customer.model");
var core_2 = require("@angular/material/core");
var CustomerFormComponent = /** @class */ (function () {
    function CustomerFormComponent(formbuilder, customerService, router, route, _adapter, titleService) {
        this.formbuilder = formbuilder;
        this.customerService = customerService;
        this.router = router;
        this.route = route;
        this._adapter = _adapter;
        this.titleService = titleService;
        this.fileIsUploading = false;
        this.fileUploaded = false;
        this.isEdit = false;
        this.maxDate = new Date(Date.now());
        this.interests = [
            { name: 'Html', interested: false },
            { name: 'Css', interested: false },
            { name: 'Angular', interested: false },
            { name: 'React', interested: false },
            { name: 'Php', interested: false },
            { name: '3D', interested: false },
        ];
        this.availabilities = ['Full-Time', 'Part-Time', 'Both'];
    }
    CustomerFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._adapter.setLocale('gb');
        if (this.route.snapshot.params['id']) {
            this.customer = new customer_model_1.Customer('', '', '');
            this.isEdit = true;
            this.titleService.setTitle('Edit Customer');
            var id = this.route.snapshot.params['id'];
            this.customerService.getSingleCustomer(id).then(function (customer) {
                if (customer) {
                    _this.customer = customer;
                    _this.gender = _this.customer.gender;
                    if (_this.customer.interests) {
                        _this.customer.interests.forEach(function (interest) {
                            var objIndex = _this.interests.findIndex((function (obj) { return obj.name == interest.name; }));
                            _this.interests[objIndex].interested = interest.interested;
                        });
                    }
                    _this.availability = _this.customer.availability;
                }
                else
                    _this.router.navigate(['/customer']);
                _this.initForm();
                _this.onValueChanges();
            });
        }
        else {
            this.titleService.setTitle('Add Customer');
        }
        this.initForm();
        this.onValueChanges();
    };
    CustomerFormComponent.prototype.initForm = function () {
        this.customerForm = this.formbuilder.group({
            email: [this.customer && this.customer.email ? this.customer.email : '', [forms_1.Validators.required, forms_1.Validators.email]],
            name: [this.customer && this.customer.name ? this.customer.name : '', [forms_1.Validators.required, forms_1.Validators.pattern('^[A-Za-z0-9\',\-àâçèéêîôùû ]*$')]],
            lastname: [this.customer && this.customer.lastname ? this.customer.lastname : '', [forms_1.Validators.required, forms_1.Validators.pattern('^[A-Za-z0-9\',\-àâçèéêîôùû ]*$')]],
            gender: [this.customer && this.customer.gender ? this.customer.gender : ''],
            phone: [this.customer && this.customer.phone ? this.customer.phone : '', [forms_1.Validators.required, forms_1.Validators.pattern('[- +()0-9]+')]],
            birthday: [this.customer && this.customer.birthday ? new Date(this.customer.birthday).toISOString() : ''],
            description: [this.customer && this.customer.description ? this.customer.description : ''],
            availability: [this.customer && this.customer.availability ? this.customer.availability : 'Full-Time', [forms_1.Validators.required]]
        });
    };
    CustomerFormComponent.prototype.onSaveCustomer = function () {
        var email = this.customerForm.get('email').value;
        var name = this.customerForm.get('name').value;
        var lastname = this.customerForm.get('lastname').value;
        var birthday = this.customerForm.get('birthday').value;
        var gender = this.customerForm.get('gender').value;
        var phone = this.customerForm.get('phone').value;
        var description = this.customerForm.get('description').value;
        var newCustomer = new customer_model_1.Customer(email, name, lastname);
        if (this.isEdit) {
            newCustomer.id = this.customer.id;
        }
        if (this.fileUrl && this.fileUrl != '') {
            newCustomer.photo = this.fileUrl;
        }
        if (birthday != '') {
            newCustomer.birthday = new Date(birthday).getTime();
        }
        if (gender != '') {
            newCustomer.gender = gender;
        }
        if (phone != '') {
            newCustomer.phone = phone;
        }
        if (this.isEdit && this.customer.creationDate) {
            newCustomer.creationDate = this.customer.creationDate;
        }
        else {
            newCustomer.creationDate = Date.now();
        }
        newCustomer.modificationDate = Date.now();
        newCustomer.interests = this.interests;
        if (this.availability) {
            newCustomer.availability = this.availability;
        }
        else {
            newCustomer.availability = "Full-Time";
        }
        newCustomer.description = description;
        if (this.isEdit) {
            this.customerService.editCustomer(newCustomer);
            this.router.navigate(['/customer', 'view', this.customer.id]);
        }
        else {
            this.customerService.createNewCustomer(newCustomer);
            this.router.navigate(['/customer']);
        }
    };
    CustomerFormComponent.prototype.onUploadFile = function (file) {
        var _this = this;
        this.fileIsUploading = true;
        this.customerService.uploadFile(file).then(function (url) {
            _this.fileUrl = url;
            _this.fileIsUploading = false;
            _this.fileUploaded = true;
        });
    };
    CustomerFormComponent.prototype.detectFiles = function (event) {
        this.onUploadFile(event.target.files[0]);
    };
    CustomerFormComponent.prototype.onValueChanges = function () {
        var _this = this;
        this.customerForm.valueChanges.subscribe(function (val) {
            _this.gender = _this.customerForm.get('gender').value;
        });
    };
    CustomerFormComponent.prototype.getPhotoUrl = function () {
        if (this.isEdit) {
            if (this.fileUrl) {
                return this.fileUrl;
            }
            else if (this.customer.photo && this.customer.photo != '') {
                return this.customer.photo;
            }
            else if (this.gender == "female") {
                return './assets/images/woman-placeholder.jpg';
            }
            else {
                return './assets/images/man-placeholder.jpg';
            }
        }
        else if (this.fileUrl) {
            return this.fileUrl;
        }
        else if (this.gender == "female") {
            return './assets/images/woman-placeholder.jpg';
        }
        else {
            return './assets/images/man-placeholder.jpg';
        }
    };
    CustomerFormComponent.prototype.updateCheckbox = function (event) {
        var objIndex = this.interests.findIndex((function (obj) { return obj.name == event.source.id; }));
        this.interests[objIndex].interested = event.checked;
    };
    CustomerFormComponent.prototype.udpateRadio = function (event) {
        this.availability = event.value;
    };
    CustomerFormComponent.prototype.onBack = function () {
        if (this.isEdit) {
            this.router.navigate(['/customer', 'view', this.customer.id]);
        }
        else {
            this.router.navigate(['/customer']);
        }
    };
    CustomerFormComponent = __decorate([
        core_1.Component({
            selector: 'test-customer-form',
            templateUrl: './customer-form.component.html',
            styleUrls: ['./customer-form.component.css'],
            providers: [{ provide: core_2.MAT_DATE_LOCALE, useValue: 'en-GB' }]
        })
    ], CustomerFormComponent);
    return CustomerFormComponent;
}());
exports.CustomerFormComponent = CustomerFormComponent;
