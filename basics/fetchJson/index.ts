import axios from "axios";
import { type } from "os";

const url = 'https://jsonplaceholder.typicode.com/users';

interface User {
    id:number,
    name:string,
    email:string
}
type Users = User[];

axios.get(url).then(res=>{
    let  users = res.data as Users;
    users.forEach((user: User)=>{
        let {id,name,email} = user;
        console.log({id,name,email})
    });
});
