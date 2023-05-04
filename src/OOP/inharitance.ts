//make a parent class :
class Root {
    constructor(
        public fName: string,
        public lName: string,
        public age: number,
        public isMarried?: boolean
    ) { }
};
const friendData = new Root("Sabbir", "Ahmed", 25, false);
console.log(friendData);

class Circle extends Root {
    total: number;
    constructor(fName: string, lName: string, age: number, isMarried: boolean,total:number) {
        super(fName, lName, age, isMarried);

    }
};
const fData = new Circle("ikram", "akbar", 66, true, 2);
console.log(fData);


