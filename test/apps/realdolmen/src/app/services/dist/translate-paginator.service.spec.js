"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var translate_paginator_service_1 = require("./translate-paginator.service");
describe('TranslatePaginatorService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(translate_paginator_service_1.TranslatePaginatorService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
