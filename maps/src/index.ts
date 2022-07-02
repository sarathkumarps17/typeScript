import User from './User';
import Company from './Company'
import CustomMap from './CustomMap'

let user = new User();
let company = new Company();
let map = new CustomMap('map');
map.addMarker(user,user.name);
map.addMarker(company,company.companyName)





