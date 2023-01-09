(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('my-logger', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['my-logger'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var MyLoggerService = /** @class */ (function () {
        function MyLoggerService() {
        }
        return MyLoggerService;
    }());
    MyLoggerService.ɵfac = function MyLoggerService_Factory(t) { return new (t || MyLoggerService)(); };
    MyLoggerService.ɵprov = i0.ɵɵdefineInjectable({ token: MyLoggerService, factory: MyLoggerService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MyLoggerService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var MyLoggerComponent = /** @class */ (function () {
        function MyLoggerComponent() {
        }
        MyLoggerComponent.prototype.ngOnInit = function () {
        };
        return MyLoggerComponent;
    }());
    MyLoggerComponent.ɵfac = function MyLoggerComponent_Factory(t) { return new (t || MyLoggerComponent)(); };
    MyLoggerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MyLoggerComponent, selectors: [["lib-my-logger"]], decls: 2, vars: 0, template: function MyLoggerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, " my-logger works! ");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MyLoggerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-my-logger',
                        template: "\n    <p>\n      my-logger works!\n    </p>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var MyLoggerModule = /** @class */ (function () {
        function MyLoggerModule() {
        }
        return MyLoggerModule;
    }());
    MyLoggerModule.ɵmod = i0.ɵɵdefineNgModule({ type: MyLoggerModule });
    MyLoggerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MyLoggerModule_Factory(t) { return new (t || MyLoggerModule)(); }, imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MyLoggerModule, { declarations: [MyLoggerComponent], exports: [MyLoggerComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MyLoggerModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [MyLoggerComponent],
                        imports: [],
                        exports: [MyLoggerComponent]
                    }]
            }], null, null);
    })();

    var LoggerService = /** @class */ (function () {
        function LoggerService() {
        }
        LoggerService.prototype.log = function (message) {
            console.log(message);
        };
        return LoggerService;
    }());
    LoggerService.ɵfac = function LoggerService_Factory(t) { return new (t || LoggerService)(); };
    LoggerService.ɵprov = i0.ɵɵdefineInjectable({ token: LoggerService, factory: LoggerService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(LoggerService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    /*
     * Public API Surface of my-logger
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.LoggerService = LoggerService;
    exports.MyLoggerComponent = MyLoggerComponent;
    exports.MyLoggerModule = MyLoggerModule;
    exports.MyLoggerService = MyLoggerService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=my-logger.umd.js.map
