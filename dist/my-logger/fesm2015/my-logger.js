import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class MyLoggerService {
    constructor() { }
}
MyLoggerService.ɵfac = function MyLoggerService_Factory(t) { return new (t || MyLoggerService)(); };
MyLoggerService.ɵprov = ɵɵdefineInjectable({ token: MyLoggerService, factory: MyLoggerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MyLoggerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class MyLoggerComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyLoggerComponent.ɵfac = function MyLoggerComponent_Factory(t) { return new (t || MyLoggerComponent)(); };
MyLoggerComponent.ɵcmp = ɵɵdefineComponent({ type: MyLoggerComponent, selectors: [["lib-my-logger"]], decls: 2, vars: 0, template: function MyLoggerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " my-logger works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MyLoggerComponent, [{
        type: Component,
        args: [{
                selector: 'lib-my-logger',
                template: `
    <p>
      my-logger works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class MyLoggerModule {
}
MyLoggerModule.ɵmod = ɵɵdefineNgModule({ type: MyLoggerModule });
MyLoggerModule.ɵinj = ɵɵdefineInjector({ factory: function MyLoggerModule_Factory(t) { return new (t || MyLoggerModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(MyLoggerModule, { declarations: [MyLoggerComponent], exports: [MyLoggerComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(MyLoggerModule, [{
        type: NgModule,
        args: [{
                declarations: [MyLoggerComponent],
                imports: [],
                exports: [MyLoggerComponent]
            }]
    }], null, null); })();

class LoggerService {
    constructor() { }
    log(message) {
        console.log(message);
    }
}
LoggerService.ɵfac = function LoggerService_Factory(t) { return new (t || LoggerService)(); };
LoggerService.ɵprov = ɵɵdefineInjectable({ token: LoggerService, factory: LoggerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LoggerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

/*
 * Public API Surface of my-logger
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LoggerService, MyLoggerComponent, MyLoggerModule, MyLoggerService };
//# sourceMappingURL=my-logger.js.map
