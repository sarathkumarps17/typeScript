"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sorter {
    constructor() {
        this.sort = () => {
            let swapped;
            do {
                swapped = false;
                for (let i = 0; i <= this.length - 2; i++) {
                    if (this.compare(i, i + 1)) {
                        this.swap(i, i + 1);
                        swapped = true;
                    }
                }
            } while (swapped);
        };
    }
}
exports.default = Sorter;
