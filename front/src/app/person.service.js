"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var commons_1 = require('./commons');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/publish');
var PersonService = (function () {
    function PersonService(http) {
        this.http = http;
    }
    PersonService.prototype.findPersons = function (page, pageSize, sort) {
        var params = new http_1.URLSearchParams();
        params.set('size', "" + pageSize);
        params.set('page', "" + page);
        if (sort != null) {
            params.set('sort', sort.property + "," + sort.direction);
        }
        var options = new http_1.RequestOptions({
            search: params
        });
        return this.http.get(commons_1.webServiceEndpoint + "/person", options).map(this.extractData).publish().refCount();
    };
    PersonService.prototype.getPerson = function (id) {
        return this.http.get(commons_1.webServiceEndpoint + "/person/" + id).map(this.extractData).publish().refCount();
    };
    PersonService.prototype.deletePerson = function (id) {
        return this.http.delete(commons_1.webServiceEndpoint + "/person/" + id).publish().refCount();
    };
    PersonService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    PersonService = __decorate([
        core_1.Injectable()
    ], PersonService);
    return PersonService;
}());
exports.PersonService = PersonService;
