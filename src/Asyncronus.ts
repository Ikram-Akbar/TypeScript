
// promise handle in ts 
//string in promise ----- 
const makePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = "Hello , this is from my Promise !"
        if (data) {
            resolve(data);
        } else {
            reject("Failed to Load the Data !");
        }
    })
};

const getPromiseData = async (): Promise<string> => {
    const data = await makePromise();
    console.log(data);
    return data;
};
getPromiseData();

//-------------  //  ------------ // -----------

//boolean 
const createBoolPromise = (): Promise<boolean> => {
    return new Promise((res, rej) => {
        const isOnline: boolean = true;
        if (isOnline) {
            console.log(`Promise has been resolved -- ${isOnline}`);
            res(isOnline);
        } else {
            console.log("Field to load the data ");
            rej();
        }
    })
};
const myBool = async():Promise<boolean> => {
    const newData = await createBoolPromise();
    return newData;
}


interface Person {
    firstName: string;
    lastName: string;
}

function fullName<T extends Person>(person: T): string {
    return `${person.firstName} ${person.lastName}`;
}


