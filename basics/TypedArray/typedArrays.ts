const cars = ['ford','ferrari','bmw'];

const tempCarList:string[][] = [];



cars.map(car=>tempCarList.push([`${car}-1`,`${car}-2`]));

console.log(tempCarList);

const carsBymake:Array<{make:string;cars:string[]}> = [];

cars.map(car=>carsBymake.push({make:car,cars:[`${car}-1`,`${car}-2`]}));
console.log(carsBymake);