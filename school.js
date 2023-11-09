"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student_1 = require("./Student");
var School = /** @class */ (function () {
    function School() {
        this.students = [
            new Student_1.Student(101, "Mohammad"),
            new Student_1.Student(102, "Ibrahim"),
            new Student_1.Student(103, "Mani"),
            new Student_1.Student(104, "Kumar")
        ];
    }
    School.prototype.display = function () {
        for (var i in this.students) {
            console.log(this.students[i]);
        }
    };
    return School;
}());
var school = new School();
school.display();
