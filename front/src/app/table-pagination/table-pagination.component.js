"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var commons_1 = require("../commons");
var TablePaginationComponent = (function () {
    function TablePaginationComponent() {
        this.pagesIndexes = [];
    }
    TablePaginationComponent.prototype.ngOnInit = function () {
    };
    TablePaginationComponent.prototype.ngOnChanges = function (changes) {
        if (changes['page']) {
            var pagesIndexes_ = [];
            for (var i = 0; i < this.page.totalPages; i++) {
                pagesIndexes_.push(i + 1);
            }
            this.pagesIndexes = pagesIndexes_;
        }
    };
    TablePaginationComponent.prototype.fetchPageNumber = function (pageNumer) {
        var observable = this.table.fetchPage(pageNumer - 1, this.page.size, this.getSort());
        if (observable != null) {
            commons_1.showLoading();
            observable.subscribe(commons_1.doNothing, commons_1.hideLoading, commons_1.hideLoading);
        }
    };
    TablePaginationComponent.prototype.fetchPageSize = function (pageSize) {
        var observable = this.table.fetchPage(this.page.number, pageSize, this.getSort());
        if (observable != null) {
            commons_1.showLoading();
            observable.subscribe(commons_1.doNothing, commons_1.hideLoading, commons_1.hideLoading);
        }
    };
    TablePaginationComponent.prototype.fetchNextPage = function () {
        if (this.page.number + 1 >= this.page.totalPages) {
            return;
        }
        var observable = this.table.fetchPage(this.page.number + 1, this.page.size, this.getSort());
        if (observable != null) {
            commons_1.showLoading();
            observable.subscribe(commons_1.doNothing, commons_1.hideLoading, commons_1.hideLoading);
        }
    };
    TablePaginationComponent.prototype.fetchPreviousPage = function () {
        if (this.page.number == 0) {
            return;
        }
        var observable = this.table.fetchPage(this.page.number - 1, this.page.size, this.getSort());
        if (observable != null) {
            commons_1.showLoading();
            observable.subscribe(commons_1.doNothing, commons_1.hideLoading, commons_1.hideLoading);
        }
    };
    TablePaginationComponent.prototype.getSort = function () {
        if (this.page.sort != null && this.page.sort.length > 0) {
            return this.page.sort[0];
        }
        else {
            return null;
        }
    };
    __decorate([
        core_1.Input()
    ], TablePaginationComponent.prototype, "table", void 0);
    __decorate([
        core_1.Input()
    ], TablePaginationComponent.prototype, "page", void 0);
    TablePaginationComponent = __decorate([
        core_1.Component({
            selector: 'app-table-pagination',
            templateUrl: './table-pagination.component.html',
            styleUrls: ['./table-pagination.component.css']
        })
    ], TablePaginationComponent);
    return TablePaginationComponent;
}());
exports.TablePaginationComponent = TablePaginationComponent;
