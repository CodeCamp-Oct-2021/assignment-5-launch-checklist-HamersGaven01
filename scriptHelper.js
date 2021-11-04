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
  document.getElementById("missionTarget").innerHTML=`
    <h2>Mission Destination</h2>
    <ol>
        <li>Name :${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">
    `;
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
    let lStatus = document.getElementById("launchStatus")
    if((validateInput(pilot) === '') || (validateInput(copilot === '')) || (validateInput(fuelLevel) === '') || (validateInput(cargoLevel) === '')){
        window.alert("Please enter all information")
        
    }
    if((validateInput(pilot) !== "Empty") || (validateInput(copilot) !== "Empty")){
        window.alert("Invalid input detected! Please try again!")
    } else {document.getElementById("pilotStatus").innerHTML=`Pilot ${pilot} is ready for launch!`;
            document.getElementById("copilotStatus").innerHTML=`Co-Pilot ${copilot} is ready for launch!`;
    }
    if(validateInput(fuelLevel) !== "Is a Number" || validateInput(cargoLevel) !== "Is a Number"){
        window.alert("Please check fields for valid entries!")
    }else {
        if(fuelLevel < 10000){
            document.getElementById("faultyItems").style.visibility="visible";
            document.getElementById("fuelStatus").innerHTML="Fuel level insufficient";
            lStatus.style.color="red";
            lStatus.innerHTML="Shuttle not ready for launch";
        } else {
            lStatus.style.color="green";
            lStatus.innerHTML="Shuttle is ready for launch";
        }
        if(cargoLevel > 10000){
            list.style.visibility="visible";
            document.getElementById("cargoStatus").innerHTML="Cargo too heavy!";
            lStatus.style.color="red";
            lStatus.innerHTML="Shuttle not ready for launch";
        }else {
            lStatus.style.color="green";
            lStatus.innerHTML="Shuttle is ready for launch";
        }

    }
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json")
    .then( function(response) {
        //console.log(response.json())
       return response.json()       
    });

    return planetsReturned
}

function pickPlanet(planets) {
    randomPlanet = planets[Math.floor(Math.random()*planets.length)]
    return randomPlanet
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
