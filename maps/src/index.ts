import User from './User';
import Company from './Company'

let user = new User();
let company = new Company();
// console.log({user,company});
let mapElement = document.getElementById('map')!
new google.maps.Map(mapElement,{zoom:2.25,center:{lat:0,lng:0}});


