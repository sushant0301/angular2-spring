"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var commons_1 = require("../commons");
var TableSortComponent = (function () {
    function TableSortComponent() {
        this.sortClass = false;
        this.sortAscClass = false;
        this.sortDescClass = false;
    }
    TableSortComponent.prototype.ngOnInit = function () {
    };
    TableSortComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes['page']) {
            var defineValues = function (s, sa, sd, dir) {
                _this.sortClass = s;
                _this.sortAscClass = sa;
                _this.sortDescClass = sd;
                _this.sortDirection = dir;
            };
            if (this.page.sort == null) {
                defineValues(true, false, false, 'ASC');
                return;
            }
            var one = this.page.sort.find(function (e) { return e.property === _this.property; });
            if (one == null) {
                defineValues(true, false, false, 'ASC');
            }
            else {
                if (one.direction === 'ASC') {
                    defineValues(false, true, false, 'DESC');
                }
                else {
                    defineValues(false, false, true, 'ASC');
                }
            }
        }
    };
    TableSortComponent.prototype.sortByProperty = function () {
        var sort;
        sort = { property: this.property, direction: this.sortDirection };
        var pageNumber = this.page.number - 1;
        if (pageNumber < 0) {
            pageNumber = 0;
        }
        var observable = this.table.fetchPage(pageNumber, this.page.size, sort);
        if (observable != null) {
            commons_1.showLoading();
            observable.subscribe(commons_1.doNothing, commons_1.hideLoading, commons_1.hideLoading);
        }
    };
    __decorate([
        core_1.Input()
    ], TableSortComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input()
    ], TableSortComponent.prototype, "property", void 0);
    __decorate([
        core_1.Input()
    ], TableSortComponent.prototype, "table", void 0);
    __decorate([
        core_1.Input()
    ], TableSortComponent.prototype, "page", void 0);
    TableSortComponent = __decorate([
        core_1.Component({
            selector: 'app-table-sort',
            templateUrl: './table-sort.component.html',
            styleUrls: ['./table-sort.component.css']
        })
    ], TableSortComponent);
    return TableSortComponent;
}());
exports.TableSortComponent = TableSortComponent;
