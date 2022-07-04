"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = __importDefault(require("./NumbersCollection"));
const StringCollection_1 = __importDefault(require("./StringCollection"));
const LinkList_1 = __importDefault(require("./LinkList"));
let numbersCollectin = new NumbersCollection_1.default([1, 7, -2, 3, -9, 6]);
numbersCollectin.sort();
console.log(numbersCollectin.data);
let stringCollection = new StringCollection_1.default("zxybca");
stringCollection.sort();
console.log(stringCollection.data);
// strSorter.sort()
// sorter.sort();
// console.log(stringCollection.data)
// console.log(numbersCollectin.data)
let linkList = new LinkList_1.default();
linkList.add(9).add(-2).add(-3).add(6).add(0);
linkList.sort();
// // console.log(linkList.at(4).value)
linkList.print();
// console.log(linkList.at(3).next?.value)
