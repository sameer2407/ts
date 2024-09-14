"use strict";
let arr = [];
arr[0] = 45;
console.log(typeof (arr));
function calculateAge(birthYear) {
    return 2024 - birthYear;
}
function caclculatetax(income) {
    if (income < 5000) {
        return income * 0.1;
    }
    else {
        return income * 0.2;
    }
}
function incomeTaxByYear(salary, year) {
    if ((year || 2022) > 2034) {
        return salary * 0.2;
    }
    return salary * 0.1;
}
let employee = {
    name: "John",
    age: 30
};
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
//# sourceMappingURL=index.js.map