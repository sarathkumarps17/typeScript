
const generatePlanetSystem = (numberOfPlanets:number):number[]=>{

 let planetSystem:number[] = [];
 for(let i=0;i<numberOfPlanets;i++){
    let planet = Math.ceil(Math.random()*10);
    planetSystem.push(planet)
 }
 return planetSystem

}

export default generatePlanetSystem;