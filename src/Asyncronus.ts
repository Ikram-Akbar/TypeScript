
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
    return data;
    console.log(data);
}