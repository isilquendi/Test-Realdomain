"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var translateApp_service_1 = require("./translateApp.service");
describe('TranslateService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(translateApp_service_1.TranslateAppService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
