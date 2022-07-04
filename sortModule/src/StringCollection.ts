import Sorter from "./Sorter";

export default class NumbersCollection extends Sorter{
    constructor(public data:string){
        super()
        this.data = data;
    };
    get length():number{
        return this.data.length
    }
    compare = (leftIndex:number,rightIndex:number):boolean=>{
       return this.data[leftIndex].toLocaleLowerCase()>this.data[rightIndex].toLocaleLowerCase()
    }
    swap = (leftIndex:number,rightIndex:number):void=>{
        let chars = this.data.split('');
        let temp = chars[leftIndex];
        chars[leftIndex] = chars[rightIndex];
        chars[rightIndex] = temp;
        this.data = chars.join('')
    }
}