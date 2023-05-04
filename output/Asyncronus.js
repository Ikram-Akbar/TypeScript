"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// promise handle in ts 
//string in promise ----- 
const makePromise = () => {
    return new Promise((resolve, reject) => {
        const data = "Hello , this is from my Promise !";
        if (data) {
            resolve(data);
        }
        else {
            reject("Failed to Load the Data !");
        }
    });
};
const getPromiseData = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromise();
    console.log(data);
    return data;
});
getPromiseData();
//-------------  //  ------------ // -----------
//boolean 
const createBoolPromise = () => {
    return new Promise((res, rej) => {
        const isOnline = true;
        if (isOnline) {
            console.log(`Promise has been resolved -- ${isOnline}`);
            res(isOnline);
        }
        else {
            console.log("Field to load the data ");
            rej();
        }
    });
};
const myBool = () => __awaiter(void 0, void 0, void 0, function* () {
    const newData = yield createBoolPromise();
    return newData;
});
function fullName(person) {
    return `${person.firstName} ${person.lastName}`;
}
