"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/switchMap');
var commons_1 = require('../commons');
var PersonListComponent = (function () {
    function PersonListComponent(personService, router, _service) {
        this.personService = personService;
        this.router = router;
        this._service = _service;
        this._service.checkCredentials();
    }
    PersonListComponent.prototype.ngOnInit = function () {
        this._service.checkCredentials();
        var observable = this.fetchPage(0, 10, null);
        commons_1.showLoading();
        observable.subscribe(commons_1.doNothing, commons_1.hideLoading, commons_1.hideLoading);
        this.self = this;
    };
    PersonListComponent.prototype.fetchPage = function (pageNumber, pageSize, sort) {
        var _this = this;
        var observable = this.personService.findPersons(pageNumber, pageSize, sort);
        observable.subscribe(function (personPage) { return _this.personPage = personPage; });
        return observable;
    };
    PersonListComponent.prototype.goToDetails = function (person) {
        this.router.navigate(['person', person.id]);
    };
    PersonListComponent.prototype.delete = function (person) {
        var _this = this;
        var observable = this.personService.deletePerson(person.id);
        commons_1.showLoading();
        observable.switchMap(function () {
            return _this.fetchPage(0, 10, null);
        }).subscribe(commons_1.doNothing, commons_1.hideLoading, commons_1.hideLoading);
    };
    PersonListComponent.prototype.logout = function () {
        this._service.logout();
    };
    PersonListComponent = __decorate([
        core_1.Component({
            selector: 'app-person-list',
            templateUrl: './person-list.component.html',
            styleUrls: ['./person-list.component.css']
        })
    ], PersonListComponent);
    return PersonListComponent;
}());
exports.PersonListComponent = PersonListComponent;
