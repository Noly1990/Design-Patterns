"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function addSchool(schoolName) {
    return function (traget) {
        traget.prototype.school = schoolName;
    };
}
let Person = class Person {
    constructor(name, sex, age) {
        this.name = name;
        this.sex = sex;
        this.age = age;
    }
    say() {
        console.log(`I am ${this.school}, ${this.name},${this.sex},${this.age} years old.`);
    }
};
Person = __decorate([
    addSchool('old school')
], Person);
let Jack = new Person('Jack', 1, 12);
Jack.say();
