"use strict";
class studentInfo {
    constructor(fName, lName, rollNumber) {
        this.fName = fName;
        this.lName = lName;
        this.rollNumber = rollNumber;
    }
    action() {
        console.log(`student info : ${this.fName} ${this.lName}`);
    }
}
const student1 = new studentInfo("ikram", "akbar", 2);
student1.action();
