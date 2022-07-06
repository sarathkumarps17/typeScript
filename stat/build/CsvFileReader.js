"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class CsvFileReader {
    constructor(fileName) {
        this.fileName = fileName;
        this.data = [];
        this.read = () => {
            this.data = fs_1.default.readFileSync(this.fileName, { encoding: 'utf-8' }).split('\n').map((row) => row.split(','));
        };
        this.fileName = fileName;
    }
}
exports.default = CsvFileReader;
