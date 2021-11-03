// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (isNaN(testInput)){
        return "Not a Number"
    }
    if(typeof(testInput) === "number"){
        return "Is a Number"
    }
    if(typeof(testInput) === "string"){
        return "Empty"
    }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if(validateInput(pilot) !== "Empty" || validateInput(copilot) !== "Empty"){
        window.alert("Invalid input detected! Please try again!")
    } else {document.getElementByID("pilotStatus").innerHTML=`Pilot ${pilot} is ready for launch!`;
            document.getElementByID("copilotStatus").innerHTML=`Co-Pilot ${copilot} is ready for launch!`;
    }
    if(validateInput(fuelLevel) !== "Is a Number" || validateInput(cargoLevel !== "Is a Number")){
        window.alert("Please check fields for valid entries!")
    }else {
        if(fuelLevel < 10000){
            document.getElementByID("faultyItems").style.visibility="visible";
            document.getElementByID("fuelStatus").innerHTML="Fuel level insufficient";
            document.getElementByID("launchStatus").style.color="red";
            document.getElementByID("launchStatus").innerHTML="Shuttle not ready for launch";
        } else {
            document.getElementByID("launchStatus").style.color="green";
            document.getElementByID("launchStatus").innerHTML="Shuttle is ready for launch";
        }
        if(cargoLevel > 10000){
            document.getElementByID("faultyItems").style.visibility="visible";
            document.getElementByID("cargoStatus").innerHTML="Cargo too heavy!";
            document.getElementByID("launchStatus").style.color="red";
            document.getElementByID("launchStatus").innerHTML="Shuttle not ready for launch";
        }else {
            document.getElementByID("launchStatus").style.color="green";
            document.getElementByID("launchStatus").innerHTML="Shuttle is ready for launch";
        }

    }
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
