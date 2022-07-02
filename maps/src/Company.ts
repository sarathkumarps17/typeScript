import { faker } from "@faker-js/faker";
import {Markable} from "./CustomMap"

export default class Company implements Markable{
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
    getMarkerContent=():string=>{
        return `<div>company<h2> ${this.companyName}</h2><p> is at lat:${this.location.lat},lng:${this.location.lng}</p></div>`
    }
}