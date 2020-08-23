"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PageService = void 0;
var core_1 = require("@angular/core");
var PageService = /** @class */ (function () {
    function PageService(route) {
        this.route = route;
        //raspPage = require("./mock-data/rasp-page.json");
        this.text = [
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        ];
        this.img = [
            '../../../../assets/pi.png',
            '../../../../assets/psp.png',
        ];
        this.text_obj = [
            {
                id: '0',
                text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
                img: '../../../../assets/pi_svg.svg'
            },
            {
                id: '1',
                text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
                img: '../../../../assets/psp.svg'
            },
        ];
    }
    PageService.prototype.getPage = function (id) {
        for (var i = 0; i <= this.text.length; i++) {
            if (id == 0 || 1)
                return this.text[i];
            else
                this.route.navigate(['/wip']);
            console.log('## testo non trovato ##');
        }
    };
    PageService.prototype.getImg = function (id) {
        for (var i = 0; i <= this.img.length; i++) {
            if (id == i)
                return this.img[i];
            else
                console.log('## img non trovato ##');
        }
    };
    PageService.prototype.getTitle = function (title) {
        return title;
    };
    PageService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PageService);
    return PageService;
}());
exports.PageService = PageService;
