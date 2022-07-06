"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = __importDefault(require("./CsvFileReader"));
const utils_1 = require("./utils");
class MatchReader extends CsvFileReader_1.default {
    constructor() {
        super(...arguments);
        this.mapRow = (row) => {
            return ([
                (0, utils_1.dateStringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6]
            ]);
        };
    }
}
exports.default = MatchReader;
