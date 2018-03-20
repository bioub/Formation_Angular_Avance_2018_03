import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiCopyrightComponent } from './ui-copyright.component';
var UiCopyrightModule = (function () {
    function UiCopyrightModule() {
    }
    UiCopyrightModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    declarations: [
                        UiCopyrightComponent,
                    ],
                    exports: [
                        UiCopyrightComponent,
                    ]
                },] },
    ];
    /** @nocollapse */
    UiCopyrightModule.ctorParameters = function () { return []; };
    return UiCopyrightModule;
}());
export { UiCopyrightModule };
