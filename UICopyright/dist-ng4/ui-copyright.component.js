import { Component, Input } from '@angular/core';
var UiCopyrightComponent = (function () {
    function UiCopyrightComponent() {
        this.name = '';
        this.now = (new Date()).getFullYear();
    }
    UiCopyrightComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ui-copyright',
                    // styleUrls: ['./ui-copyright.style.scss'],
                    template: "\n    \u00A9 Copyright {{name}} {{now}}\n  "
                },] },
    ];
    /** @nocollapse */
    UiCopyrightComponent.ctorParameters = function () { return []; };
    UiCopyrightComponent.propDecorators = {
        'name': [{ type: Input },],
    };
    return UiCopyrightComponent;
}());
export { UiCopyrightComponent };
