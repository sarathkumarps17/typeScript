
import NumbersCollection from "./NumbersCollection";
import StringCollection from './StringCollection'
import LinkList from "./LinkList";
import Sorter from './Sorter'
let numbersCollectin = new NumbersCollection([1,7,-2,3,-9,6])
numbersCollectin.sort();
console.log(numbersCollectin.data)
let stringCollection = new StringCollection("zxybca");
stringCollection.sort()
console.log(stringCollection.data)

// strSorter.sort()
// sorter.sort();
// console.log(stringCollection.data)
// console.log(numbersCollectin.data)
let linkList = new LinkList();
linkList.add(9).add(-2).add(-3).add(6).add(0);
linkList.sort();

// // console.log(linkList.at(4).value)
linkList.print();

// console.log(linkList.at(3).next?.value)