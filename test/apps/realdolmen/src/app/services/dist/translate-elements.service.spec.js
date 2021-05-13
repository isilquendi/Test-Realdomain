"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var translate_elements_service_1 = require("./translate-elements.service");
describe('TranslateElementsService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(translate_elements_service_1.TranslateElementsService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
