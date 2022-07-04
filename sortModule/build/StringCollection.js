"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = __importDefault(require("./Sorter"));
class NumbersCollection extends Sorter_1.default {
    constructor(data) {
        super();
        this.data = data;
        this.compare = (leftIndex, rightIndex) => {
            return this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase();
        };
        this.swap = (leftIndex, rightIndex) => {
            let chars = this.data.split('');
            let temp = chars[leftIndex];
            chars[leftIndex] = chars[rightIndex];
            chars[rightIndex] = temp;
            this.data = chars.join('');
        };
        this.data = data;
    }
    ;
    get length() {
        return this.data.length;
    }
}
exports.default = NumbersCollection;
