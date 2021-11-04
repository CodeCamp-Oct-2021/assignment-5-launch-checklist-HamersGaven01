// Write your JavaScript code here!
document = window.document
// const { formSubmission } = require("./scriptHelper");

// const { pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {
    console.log("AddEvenListenerLoaded");
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
    let form = window.document.getElementById("launchForm")
    form.addEventListener("submit", function(event){
        console.log("did this hit?")
        
        let someList = document.getElementById("faultyItems")
        
        let mainPilot = document.getElementById("pilotName")
        
        let otherPilot = document.querySelector("input[name='copilotName']")
        // document.getElementsByName("copilotName")
        
        let levelFuel = document.querySelector("input[name='fuelLevel']")
        
        let levelCargo = document.querySelector("input[name='cargoMass']")
        event.preventDefault()
        console.log("Form about to submit")
        formSubmission(document, someList, mainPilot, otherPilot, levelFuel, levelCargo)
        console.log("Form Got submitted")
        // event.preventDefault()
    })

});

