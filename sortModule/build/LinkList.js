"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = __importDefault(require("./Sorter"));
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.value = value;
    }
}
;
class LinkList extends Sorter_1.default {
    constructor() {
        super(...arguments);
        this.head = null;
        this.add = (numbre) => {
            const node = new Node(numbre);
            if (!this.head) {
                this.head = node;
                return this;
            }
            let tail = this.head;
            while (tail.next) {
                tail = tail.next;
            }
            tail.next = node;
            return this;
        };
        this.at = (index) => {
            if (!this.head) {
                throw new Error('Index out of boundary');
            }
            let targetNode = this.head;
            for (let count = 0; count !== index; count++) {
                if (!targetNode.next) {
                    throw new Error('Index out of boundary');
                }
                targetNode = targetNode.next;
            }
            return targetNode;
        };
        this.compare = (leftIndex, rightIndex) => {
            return this.at(leftIndex).value > this.at(rightIndex).value;
        };
        this.swap = (leftIndex, rightIndex) => {
            let tempNodeValue = this.at(leftIndex).value;
            this.at(leftIndex).value = this.at(rightIndex).value;
            this.at(rightIndex).value = tempNodeValue;
        };
        this.print = () => {
            let linkarray = [];
            if (!this.head) {
                console.log(linkarray);
                return;
            }
            let node = this.head;
            while (node.next) {
                linkarray.push(node.value);
                node = node.next;
            }
            linkarray.push(node.value);
            console.log(linkarray);
        };
    }
    get length() {
        if (!this.head)
            return 0;
        let length = 1;
        let node = this.head;
        while (node.next) {
            length += 1;
            node = node.next;
        }
        return length;
    }
    ;
}
exports.default = LinkList;
