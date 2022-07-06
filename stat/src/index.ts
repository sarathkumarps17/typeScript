import WinAnalysis from "./Analyzers/WinAnalysis";
import CsvFileReader from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import HtmlOutput from "./OutputTarget/HtmlOutput";
import Summery from "./Summery";





const csvReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvReader);
matchReader.read();

let liverpoolWinAnalysis = new WinAnalysis("Liverpool");
let mySummery = new Summery(liverpoolWinAnalysis);
mySummery.buidAndPrintReport(matchReader.matches);
mySummery.outputTarget = new HtmlOutput();
mySummery.buidAndPrintReport(matchReader.matches)
