"use strict";
// normal function in TS
function evenOdd(num) {
    return num % 2 === 0 ? 'Even' : 'Odd';
}
;
const n = evenOdd(4);
console.log(n);
// Arrow Function in Ts
// const testPrime = (n: number) => {
//     if (n === 1) {
//         return ("the number is not  prime digit");
//     }
//     else if (n === 2) {
//         return ("the number is a Prime Number");
//     }
//     else (
//         for (let i = 2; n < i; i++) {
//         if (n % i === 0) {
//             return ("the number is not a prime digit ");
//         }
//         else return ("the number is prime")
//     }
//     )
// }
