import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
var EmployeeEditComponent = /** @class */ (function () {
    function EmployeeEditComponent() {
        this.submitted = false;
        this.EmployeeProfile = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
    }
    EmployeeEditComponent.prototype.ngOnInit = function () {
    };
    EmployeeEditComponent = __decorate([
        Component({
            selector: 'app-employee-edit',
            templateUrl: './employee-edit.component.html',
            styleUrls: ['./employee-edit.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], EmployeeEditComponent);
    return EmployeeEditComponent;
}());
export { EmployeeEditComponent };
//# sourceMappingURL=employee-edit.component.js.map