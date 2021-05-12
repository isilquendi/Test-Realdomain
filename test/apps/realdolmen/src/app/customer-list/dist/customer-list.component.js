"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CustomerListComponent = void 0;
var core_1 = require("@angular/core");
var collections_1 = require("@angular/cdk/collections");
var sort_1 = require("@angular/material/sort");
var paginator_1 = require("@angular/material/paginator");
var table_1 = require("@angular/material/table");
var CustomerListComponent = /** @class */ (function () {
    function CustomerListComponent(customersService, router) {
        this.customersService = customersService;
        this.router = router;
        this.displayedColumns = ['select', 'name', 'lastname', 'email', 'creationDate', 'modificationDate', 'del'];
        this.dataSource = new table_1.MatTableDataSource();
        this.selection = new collections_1.SelectionModel(true, []);
    }
    CustomerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerSubscription = this.customersService.customersSubject.subscribe(function (customers) {
            _this.customers = customers;
            _this.dataSource = new table_1.MatTableDataSource(customers);
            _this.dataSource.paginator = _this.paginator;
            _this.sortCustomer();
        });
        this.customersService.getCustomers();
        this.customersService.emitCustomers();
    };
    CustomerListComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.sortCustomer();
    };
    CustomerListComponent.prototype.onNewCustomer = function () {
        this.router.navigate(['/customer', 'new']);
    };
    CustomerListComponent.prototype.onDeleteCustomer = function (customer) {
        this.customersService.removeCustomer(customer);
    };
    CustomerListComponent.prototype.onViewCustomer = function (id) {
        this.router.navigate(['/customer', 'view', id]);
    };
    CustomerListComponent.prototype.ngOnDestroy = function () {
        this.customerSubscription.unsubscribe();
    };
    CustomerListComponent.prototype.sortCustomer = function () {
        this.dataSource.sort = this.sort;
    };
    CustomerListComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        if (filterValue != "") {
            var customerTemp = this.customers.filter(function (customer) {
                return customer.name.toLowerCase().includes(filterValue.trim().toLowerCase()) || customer.lastname.toLowerCase().includes(filterValue.trim().toLowerCase()) || customer.email.toLowerCase().includes(filterValue.trim().toLowerCase()) || new Date(customer.birthday).toLocaleDateString().includes(filterValue.trim());
            });
            this.dataSource = new table_1.MatTableDataSource(customerTemp);
        }
        else {
            this.dataSource = new table_1.MatTableDataSource(this.customers);
        }
        this.dataSource.paginator = this.paginator;
        this.sortCustomer();
    };
    CustomerListComponent.prototype.getDate = function (date) {
        return new Date(date).toLocaleString();
    };
    CustomerListComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    CustomerListComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    /** The label for the checkbox on the passed row */
    CustomerListComponent.prototype.checkboxLabel = function (row) {
        if (!row) {
            return (this.isAllSelected() ? 'select' : 'deselect') + " all";
        }
        return (this.selection.isSelected(row) ? 'deselect' : 'select') + " row " + row.id;
    };
    /** Delete Selection */
    CustomerListComponent.prototype.deleteSelection = function () {
        this.customersService.removeMultipleCustomer(this.selection.selected);
        this.selection.clear();
    };
    __decorate([
        core_1.ViewChild(sort_1.MatSort)
    ], CustomerListComponent.prototype, "sort");
    __decorate([
        core_1.ViewChild(paginator_1.MatPaginator)
    ], CustomerListComponent.prototype, "paginator");
    CustomerListComponent = __decorate([
        core_1.Component({
            selector: 'test-customer-list',
            templateUrl: './customer-list.component.html',
            styleUrls: ['./customer-list.component.css']
        })
    ], CustomerListComponent);
    return CustomerListComponent;
}());
exports.CustomerListComponent = CustomerListComponent;
