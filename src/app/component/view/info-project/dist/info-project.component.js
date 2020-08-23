"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InfoProjectComponent = void 0;
var core_1 = require("@angular/core");
var InfoProjectComponent = /** @class */ (function () {
    function InfoProjectComponent(route, pageService) {
        this.route = route;
        this.pageService = pageService;
        this.title = '';
        this.img = '../../../../assets/pi.png';
        this.show = false;
        this.animation = '';
        this.animation_rect = '2s forwards openRectangle ease-in';
        this.header_var = false;
    }
    InfoProjectComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.paramMap.get('id');
        var title = this.route.snapshot.paramMap.get('name');
        this.text = this.pageService.getPage(id);
        this.img = this.pageService.getImg(id);
        this.title = this.pageService.getTitle(title);
    };
    InfoProjectComponent.prototype.getUrl = function () {
        return this.img.toString();
    };
    InfoProjectComponent.prototype.navigateBack = function () {
        window.history.back();
    };
    InfoProjectComponent.prototype.scrollFunction = function () {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            this.header_var = true;
            this.animation = '2s forwards closeImg ease-out';
            this.animation_rect = '2s forwards closeRectangle ease-out';
        }
        else {
            this.header_var = false;
            this.animation = '10s infinite loopImgRasp';
            this.animation_rect = '2s forwards openRectangle ease-in';
        }
    };
    __decorate([
        core_1.HostListener('document:scroll')
    ], InfoProjectComponent.prototype, "scrollFunction");
    InfoProjectComponent = __decorate([
        core_1.Component({
            selector: 'app-info-project',
            templateUrl: './info-project.component.html',
            styleUrls: ['./info-project.component.scss']
        })
    ], InfoProjectComponent);
    return InfoProjectComponent;
}());
exports.InfoProjectComponent = InfoProjectComponent;
