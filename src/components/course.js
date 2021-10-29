"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
var Course = /** @class */ (function () {
    function Course(name, credits, description, prereq) {
        this.name = name;
        this.credits = credits;
        this.description = description;
        if (prereq) {
            this.prereq = prereq;
        }
        else {
            this.prereq = [];
            return;
        }
    }
    Object.defineProperty(Course.prototype, "cName", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "cCredits", {
        get: function () {
            return this.credits;
        },
        set: function (credits) {
            this.credits = credits;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "cDescription", {
        get: function () {
            return this.description;
        },
        set: function (description) {
            this.description = description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "cPrereq", {
        get: function () {
            return this.prereq;
        },
        set: function (prereq) {
            this.prereq = prereq;
        },
        enumerable: false,
        configurable: true
    });
    return Course;
}());
exports.Course = Course;
var cisc100 = new Course("cisc100", 3, "this is a beginner sample class!");
var cisc200 = new Course("cisc200", 3, "this is an intermediate sample class!", [cisc100]);
console.log(cisc100.cName, cisc100.cCredits, cisc100.cDescription);
console.log(cisc200.cName, cisc200.cCredits, cisc200.cDescription, cisc200.cPrereq);
