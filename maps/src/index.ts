import User from './User';
import Company from './Company'
import CustomMap from './CustomMap'

let user = new User();
let company = new Company();
let map = new CustomMap('map');
map.addMarker(user.location,user.name);
map.addMarker(company.location,company.companyName)





