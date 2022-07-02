import { faker } from '@faker-js/faker';
import {Markable} from "./CustomMap"
class User implements Markable{
    name:string;
    location:{
        lat:number;
        lng:number
    };

    constructor(){
        this.name = faker.name.findName();
        this.location = {
            lat:parseFloat(faker.address.latitude(60,-60,5)),
            lng:parseFloat(faker.address.longitude(120,-120,10))           
        }
    }
    getMarkerContent=():string=>{
        return `<div>Person<h2>${this.name}</h2><p> is at lat:${this.location.lat},lng:${this.location.lng}</p></div>`
    }
}
export default User;