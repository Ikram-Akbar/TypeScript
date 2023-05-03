"use strict";
let fName;
fName = "Ikram akbar";
let lg = fName.length;
console.log(lg);
//----------
function kgToGram(params) {
    if (typeof params === "string") {
        const value = parseFloat(params) * 1000;
        return `the converted value is ${value} gram`;
    }
    if (typeof params === "number") {
        const value = params * 1000;
        return `the value is : ${value}`;
    }
}
