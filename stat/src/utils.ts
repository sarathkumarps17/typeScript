

export const dateStringToDate = (dateString:string):Date=>{
    let datePars = dateString.split('/').map((value:string):number=>parseInt(value));
    return new Date(datePars[2],datePars[1]-1,datePars[0]);
   
}
