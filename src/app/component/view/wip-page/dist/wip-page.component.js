"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WipPageComponent = void 0;
var core_1 = require("@angular/core");
var WipPageComponent = /** @class */ (function () {
    function WipPageComponent(route) {
        this.route = route;
    }
    WipPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.route.navigate(['/home']);
        }, 5000);
    };
    WipPageComponent.prototype.navigateBack = function () {
        return this.route.navigate(['/home']);
    };
    WipPageComponent = __decorate([
        core_1.Component({
            selector: 'app-wip-page',
            templateUrl: './wip-page.component.html',
            styleUrls: ['./wip-page.component.scss']
        })
    ], WipPageComponent);
    return WipPageComponent;
}());
exports.WipPageComponent = WipPageComponent;
