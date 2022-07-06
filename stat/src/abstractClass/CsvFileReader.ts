import fs from 'fs';
// import { dateStringToDate} from './utils';
// import { MatchResult } from "./MatchResult";
// type MatchData = [Date,string,string,number,number,MatchResult,string]
export default abstract class CsvFileReader<T>{
    data:T[]  = [];
    abstract mapRow(row:string[]):T;
    constructor(public fileName:string){
        this.fileName = fileName
    }
    read = ():void=>{
        this.data = fs
          .readFileSync(this.fileName, {
            encoding: 'utf-8'
          })
          .split('\n')
          .map(
            (row: string): string[] => {
              return row.split(',');
            }
          )
          .map(this.mapRow);
      }
}

