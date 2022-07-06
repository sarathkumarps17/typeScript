"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generatePlanetSystem = (numberOfPlanets) => {
    let planetSystem = [];
    for (let i = 0; i < numberOfPlanets; i++) {
        let planet = Math.ceil(Math.random() * 10);
        planetSystem.push(planet);
    }
    return planetSystem;
};
exports.default = generatePlanetSystem;
