"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TableComponent = void 0;
var core_1 = require("@angular/core");
var TableComponent = /** @class */ (function () {
    function TableComponent() {
        this.filteredStudent = [];
        this.allStudents = [
            {
                "id": 2,
                "name": "Welch Cooke",
                "age": 32,
                "email": "welchcooke@moreganic.com",
                "phone": "+1 (812) 574-2704",
                "address": "568 Evergreen Avenue, Yardville, Minnesota, 2420", "avg_grade": 96
            },
            {
                "id": 3,
                "name": "Hickman Petersen",
                "age": 33,
                "email": "hickmanpetersen@moreganic.com",
                "phone": "+1 (933) 422-3102",
                "address": "854 Preston Court, Lutsen, Washington, 5807", "avg_grade": 91
            },
            {
                "id": 4,
                "name": "Lilly Ochoa",
                "age": 22,
                "email": "lillyochoa@moreganic.com",
                "phone": "+1 (861) 479-2248",
                "address": "443 Greene Avenue, Idamay, Virgin Islands, 6364", "avg_grade": 93
            }, {
                "id": 5,
                "name": "Bampbell Calhoun",
                "age": 26,
                "email": "campbellcalhoun@moreganic.com",
                "phone": "+1 (875) 419-3783",
                "address": "578 Aitken Place, Valle, Oregon, 8222", "avg_grade": 89
            }
        ];
    }
    TableComponent.prototype.ngOnInit = function () {
        this.filteredStudent = this.allStudents;
    };
    TableComponent.prototype.filterStudentList = function (_num) {
        if (_num === void 0) { _num = "0"; }
        var num = parseInt(_num);
        switch (num) {
            case 0:
                this.filteredStudent = this.allStudents;
                break;
            case 1:
                this.filteredStudent = this.allStudents.filter(function (x) { return 1 <= x.id && x.id <= 6; });
                break;
            case 2:
                this.filteredStudent = this.allStudents.filter(function (x) { return 30 < x.age; });
                break;
            case 3:
                this.filteredStudent = this.allStudents.filter(function (x) { return 90 < x.avg_grade; });
                break;
            case 4:
                this.filteredStudent = this.allStudents.filter(function (x) { return x.phone.endsWith('4'); });
                break;
            case 5:
                this.filteredStudent = this.allStudents.filter(function (x) { return x.name.startsWith('B'); });
                break;
        }
    };
    TableComponent = __decorate([
        core_1.Component({
            selector: 'app-table',
            templateUrl: './table.component.html',
            styleUrls: ['./table.component.css']
        })
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
