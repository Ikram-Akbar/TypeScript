let fName: any;
fName = "Ikram akbar";
let lg: number = (fName as string).length;
console.log(lg);


//----------

function kgToGram(params: string | number): string | number|undefined {

    if (typeof params === "string") {
        const value = parseFloat(params) * 1000;
        return `the converted value is ${value} gram`;
    }
    if (typeof params === "number") {
        const value = params * 1000;
        return `the value is : ${value}`

    }
}