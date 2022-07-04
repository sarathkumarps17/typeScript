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
            return this.data[leftIndex] > this.data[rightIndex];
        };
        this.swap = (leftIndex, rightIndex) => {
            let temp = this.data[leftIndex];
            this.data[leftIndex] = this.data[rightIndex];
            this.data[rightIndex] = temp;
        };
        this.data = data;
    }
    ;
    get length() {
        return this.data.length;
    }
}
exports.default = NumbersCollection;
