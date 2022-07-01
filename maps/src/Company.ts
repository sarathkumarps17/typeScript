import { faker } from "@faker-js/faker";

export default class Company{
    companyName:string;
    catchPhrace:string;
    location:{
        lat:number;
        lon:number
    };

    constructor(){
        this.companyName = faker.company.companyName();
        this.catchPhrace = faker.company.catchPhrase();
        this.location = {
            lat:parseFloat(faker.address.latitude()),
            lon:parseFloat(faker.address.longitude())           
        }
    }
}
