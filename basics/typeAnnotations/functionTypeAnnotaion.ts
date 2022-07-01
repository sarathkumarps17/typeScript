// arrow function defenition//
const add = (a:number,b:number):number =>{
    return a+b;
};
let myNumber = add(5,6);
let stringNumber = myNumber.toString();
console.log(stringNumber.concat(' working'));


// anonymous function defention//

const multiply = function(a:number,b:number):number{
    return a*b;
}


// destructuring with annotaion//

const todayWeather = {
    date: new Date(),
    weather:'Rainy'
};

const logWeather = ({date,weather}:{date:Date;weather:string})=>{
    console.log(date);
    console.log(weather);
};

logWeather(todayWeather);

const person = {
    name:'alex',
    age:20,
    coords:{
        lat:0,
        lng:2
    },
    setAge(age:number):void{
        this.age = age;
    }
};

const {age}:{age:number} = person;
const {coords:{lat,lng}}:{coords:{lat:number;lng:number}} = person