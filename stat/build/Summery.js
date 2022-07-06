"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConsoleOutput_1 = __importDefault(require("./OutputTarget/ConsoleOutput"));
class Summery {
    constructor(analyzer) {
        this.analyzer = analyzer;
        this.report = '';
        this.outputTarget = new ConsoleOutput_1.default();
        this.buidAndPrintReport = (matchData) => {
            this.report = this.analyzer.run(matchData);
            this.outputTarget.print(this.report);
        };
    }
}
exports.default = Summery;
