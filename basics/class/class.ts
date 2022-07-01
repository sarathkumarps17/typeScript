

class Vehicle{
    // wheels:number;
    // color:string;
    private sportsMode =true;
    constructor(public wheels:number,public color:string){
        this.wheels = wheels;
        this.color = color;
    };
    summery=():void=>{
        console.log(`The vehicle has ${this.wheels} wheels and ${this.color} color`)
    }
    private honk=():void=>{
        console.log("Beep")
    }
    drive=():void=>{
        console.log(`${this.sportsMode?'vroom vroom..':'chuga chuga...'}`);
        this.honk()
    }
    protected changeDriveMode = ():void=>{
        this.sportsMode = true;

    }
}
// let vehicle = new Vehicle(4,'red');
// vehicle.summery();
// vehicle.drive();

class Car extends Vehicle{
    constructor(private name:string,color:string){
        super(4,color);
        this.name = name;
        this.changeDriveMode()
    }
    
};

let myCar = new Car('ferari','red');
myCar.summery();
myCar.drive();