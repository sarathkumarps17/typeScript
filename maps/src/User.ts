import { faker } from '@faker-js/faker';

class User{
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
}
export default User;