import { faker } from "@faker-js/faker";

export default class Company{
    companyName:string;
    catchPhrace:string;
    location:{
        lat:number;
        lng:number
    };

    constructor(){
        this.companyName = faker.company.companyName();
        this.catchPhrace = faker.company.catchPhrase();
        this.location = {
            lat:parseFloat(faker.address.latitude(60,-60,5)),
            lng:parseFloat(faker.address.longitude(120,-120,10))           
        }
    }
}
