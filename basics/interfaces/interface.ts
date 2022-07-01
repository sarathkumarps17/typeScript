interface Vehicle{
    name:string;
    year:number;
    broken:boolean;
    summery():string
}
interface Reportable{
    summery():string
}

const oldCivic = {
    name:'civic',
    year:1992,
    broken:true,
    summery():string{
        return `The vehicle is ${this.year} model ${this.name}`
    }
}

const myDrink = {
    name:'pepsi',
    color:'brown',
    carbonated:true,
    sugar:40,
    summery():string{
        return `The drink ${this.name} is ${this.carbonated?'carbonated':'not carbonated'}`
    }
}

const printVehicle = (vehicle:Vehicle):void=>{
    console.log(`Name:${vehicle.name}`);
    console.log(`Year:${vehicle.year}`);
    console.log(`Status: Vehicle is ${vehicle.broken?'broken':'good'}`)
    console.log(vehicle.summery())
}

// printVehicle(oldCivic);

const printReport=(item:Reportable):void=>{
    console.log(item.summery())
}

printReport(oldCivic);
printReport(myDrink)