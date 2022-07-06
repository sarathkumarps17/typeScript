"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WinAnalysis_1 = __importDefault(require("./Analyzers/WinAnalysis"));
const CsvFileReader_1 = __importDefault(require("./CsvFileReader"));
const MatchReader_1 = require("./MatchReader");
const HtmlOutput_1 = __importDefault(require("./OutputTarget/HtmlOutput"));
const Summery_1 = __importDefault(require("./Summery"));
const csvReader = new CsvFileReader_1.default('football.csv');
const matchReader = new MatchReader_1.MatchReader(csvReader);
matchReader.read();
let liverpoolWinAnalysis = new WinAnalysis_1.default("Liverpool");
let mySummery = new Summery_1.default(liverpoolWinAnalysis);
mySummery.buidAndPrintReport(matchReader.matches);
mySummery.outputTarget = new HtmlOutput_1.default();
mySummery.buidAndPrintReport(matchReader.matches);
