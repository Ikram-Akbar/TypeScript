
//alias
type User = {
    fName: string;
    age: number;
    profession: string;
}
const userAliasType: User = {
    fName: "ikram",
    age: 25,
    profession: "jr web dev"
};

type extendUser = User & {
    role: string;
};
const newUserAlias: extendUser = {
    fName: "mr akbar",
    age: 12,
    profession: "student",
    role: "trainee",
};
console.log(newUserAlias);

// console.log(userAliasType);
//--------------------

//interface:

interface CompanyInterface {
    company: string;
    employee: number;
    isNative: boolean;
}
let companyDetails: CompanyInterface = {
    company: "ESS",
    employee: 40,
    isNative: false,
}
console.log(companyDetails);

//extend the interface - 
interface ChildCompanyInterface extends CompanyInterface {
    product: string;
    established: number;
};
const childCompany: ChildCompanyInterface = {
    company: "Home for All",
    employee: 10,
    isNative: true,
    product: "Absolute",
    established: 2018
};
// console.log(childCompany);




//--------------
//function Signature in Interface and Alias
// type alias
type multiAlias = (param1: number, param2: number) => number;

//Interface
interface MultipleInterface {
    (param1: number, param2: number): number
}

const multiply: multiAlias = (x, y) => x * y;
const multiply1: MultipleInterface = (x, y) => x * y;

const callToAction = multiply(25, 2);
const callToAction1 = multiply1(25, 2);

// console.log(callToAction);
// console.log(callToAction1);



//-------------
//interface in Array

const myArr: number[] = [25, 14, 17];

interface IArray {
    [index: number]: number
}
const element: IArray = [250, 25, 45];

//alias 
