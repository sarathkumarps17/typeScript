import ConsoleOutput from "./OutputTarget/ConsoleOutput";
import { MatchResult } from "./MatchResult"
type MatchData = [Date,string,string,number,number,MatchResult,string];

interface Analyzer{
    run(matchData:MatchData[]):string
}

interface OutputTarget{
    print(report:string):void
}

export default class Summery{
    report:string = '';
    outputTarget:OutputTarget = new ConsoleOutput()
    constructor(public analyzer:Analyzer){

    }
    buidAndPrintReport = (matchData:MatchData[]):void=>{
            this.report= this.analyzer.run(matchData);
            this.outputTarget.print(this.report)
    }
}