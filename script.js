// Write your JavaScript code here!

// const { formSubmission } = require("./scriptHelper");

// const { pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch()
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let somePlanet = pickPlanet(listedPlanets) 
       addDestinationInfo(document , somePlanet.name , somePlanet.diameter, somePlanet.star, somePlanet.distance, somePlanet.moons, somePlanet.image)
   })
    // let thing = document.getElementById("testForm")
    let form = document.getElementById("launchForm");
    form.addEventListener("submit", function(event){
        
        let someList = document.getElementById("faultyItems")
        let mainPilot = document.getElementById("pilotName")
        
        let otherPilot = document.getElementById("copilotName")
        
        let levelFuel = document.getElementById("fuelLevel")
        
        let levelCargo = document.getElementById("cargoMass")
        
        
        formSubmission(document, someList, mainPilot, otherPilot, levelFuel, levelCargo)
        event.preventDefault()
    })

});

