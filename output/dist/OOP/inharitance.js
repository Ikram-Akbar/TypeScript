"use strict";
//make a parent class :
class Root {
    constructor(fName, lName, age, isMarried) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.isMarried = isMarried;
    }
}
;
const friendData = new Root("Sabbir", "Ahmed", 25, false);
console.log(friendData);
