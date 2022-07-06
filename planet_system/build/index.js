"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generatePlanetSysyem_1 = __importDefault(require("./generatePlanetSysyem"));
let planetSystem = (0, generatePlanetSysyem_1.default)(3);
const getSubArrays = (arr) => {
    if (arr.length === 1)
        return [arr];
    else {
        let subarr = getSubArrays(arr.slice(1));
        return subarr.concat(subarr.map(e => e.concat(arr[0])), [[arr[0]]]).sort((a, b) => a.length - b.length);
    }
};
const checkSystemBalance = (planetSystem) => {
    let evenPlanetMass = planetSystem.filter((planet, index) => index % 2 !== 0).reduce((a, b) => a + b, 0);
    let oddPlanetsMass = planetSystem.filter((planet, index) => index % 2 === 0).reduce((a, b) => a + b, 0);
    if (evenPlanetMass === oddPlanetsMass)
        return true;
    else
        return false;
};
const getPlanetTobeDestroyed = (planetSystem) => {
    if (checkSystemBalance(planetSystem))
        return -1;
    let planetCombinations = getSubArrays(planetSystem);
    console.log(planetCombinations);
    // do{
    //     for(let i=0;i<=planetSystem.length;i++){
    //         planetSystem.forEach((planet)=>{
    //             modifiedPlanets = planetSystem.filter((planet_)=>planet!==planet_);
    //             if(checkSystemBalance(modifiedPlanets)) return planetSystem.indexOf(planet);
    //         })
    //     }
    // }while(indexes.length)
};
console.log(planetSystem);
getPlanetTobeDestroyed(planetSystem);
// console.log(getPlanetTobeDestroyed(planetSystem))
