
export default abstract class Sorter{
    abstract length:number;
    abstract compare(i:number,j:number):boolean;
    abstract swap(i:number,j:number):void;
    sort = ():void=>{
        let swapped;
        do {
            swapped = false;
            for (let i = 0; i <= this.length - 2; i++) {
                    if (this.compare(i,i+1)) {
                    this.swap(i,i+1)
                    swapped = true;
            }
            }
        } while (swapped);
            }
        }