import { MatchResult } from "../MatchResult"


type MatchData = [Date,string,string,number,number,MatchResult,string]
export default class WinAnalysis{
    constructor(public team:string){
    }
    run = (matchData:MatchData[]):string=>{
        let homeWin = 0;
        let awayWin = 0;
        matchData.map(match=>{
            if(match[1]===this.team && match[5]==MatchResult.HomeWin){
                homeWin+=1;
            } else if(match[2]===this.team && match[5]==MatchResult.AwayWin){
               awayWin+=1;
            }
        })
        return `${this.team} has won ${homeWin+awayWin} (${homeWin} home wins & ${awayWin} away wins) matches`
    }
}