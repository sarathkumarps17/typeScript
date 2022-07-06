import fs from 'fs';

export default class CsvFileReader{
    data:string[][]=[];
    constructor(public fileName:string){
        this.fileName = fileName
    }
    read = ():void=>{
    this.data = fs.readFileSync(this.fileName,{encoding:'utf-8'}).split('\n').map((row)=>row.split(','))
    }
}

