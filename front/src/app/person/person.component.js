"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var commons_1 = require('../commons');
var PersonComponent = (function () {
    function PersonComponent(router, route, personService, _service) {
        this.router = router;
        this.route = route;
        this.personService = personService;
        this._service = _service;
        this._service.checkCredentials();
    }
    PersonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.checkCredentials();
        this.route.params.subscribe(function (params) {
            _this.personService.getPerson(Number(params['id'])).subscribe(function (person) { return _this.person = person; });
        });
    };
    PersonComponent.prototype.delete = function (person) {
        var _this = this;
        var observable = this.personService.deletePerson(person.id);
        commons_1.showLoading();
        observable.subscribe(commons_1.doNothing, commons_1.hideLoading, function () {
            _this.router.navigate(['']);
            commons_1.hideLoading();
        });
    };
    PersonComponent.prototype.back = function () {
        history.back();
    };
    PersonComponent = __decorate([
        core_1.Component({
            selector: 'app-person',
            templateUrl: './person.component.html',
            styleUrls: ['./person.component.css']
        })
    ], PersonComponent);
    return PersonComponent;
}());
exports.PersonComponent = PersonComponent;
