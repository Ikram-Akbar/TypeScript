
// create an object

const player: {
   // readonly nationality?: string;
    nationality?: "Bangladeshi";
    fName: string;
    age: number;
    isPlay: boolean;
    tShirtNo?: number;
} = {
    nationality:"Bangladeshi",
    fName: "Mashrafi",
    age: 38,
    isPlay: false,
    tShirtNo: 2
}
const playerName = player.fName;
console.log(playerName);
