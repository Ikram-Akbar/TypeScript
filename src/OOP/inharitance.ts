//make a parent class :
class Root {
  constructor(
    public fName: string,
    public lName: string,
    public age: number,
    public isMarried?: boolean
  ) {}
};
const friendData = new Root("Sabbir", "Ahmed", 25, false);
console.log(friendData);

