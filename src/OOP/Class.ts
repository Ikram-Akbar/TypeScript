class studentInfo {
  constructor(
    public fName: string,
    public lName: string,
    public rollNumber?: number
  ) {}

  public action() {
    console.log(`student info : ${this.fName} ${this.lName}`);
  }
}

const student1 = new studentInfo("ikram", "akbar", 2);
student1.action();
