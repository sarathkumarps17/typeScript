"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchResult_1 = require("../MatchResult");
class WinAnalysis {
    constructor(team) {
        this.team = team;
        this.run = (matchData) => {
            let homeWin = 0;
            let awayWin = 0;
            matchData.map(match => {
                if (match[1] === this.team && match[5] == MatchResult_1.MatchResult.HomeWin) {
                    homeWin += 1;
                }
                else if (match[2] === this.team && match[5] == MatchResult_1.MatchResult.AwayWin) {
                    awayWin += 1;
                }
            });
            return `${this.team} has won ${homeWin + awayWin} (${homeWin} home wins & ${awayWin} away wins) matches`;
        };
    }
}
exports.default = WinAnalysis;
