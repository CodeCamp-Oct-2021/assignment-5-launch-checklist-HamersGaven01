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
    if (testInput == ""){
        return "Empty"
    }
    if(isNaN(testInput)){
        return "Not a Number"
    }
    if(!isNaN(testInput)){
        return "Is a Number"
    }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    list.style.visibility="hidden";
    // let lStatus = document.getElementById("launchStatus")
    if((validateInput(pilot.value) === "Empty") || (validateInput(copilot.value === "Empty")) || (validateInput(fuelLevel.value) === "Empty") || (validateInput(cargoLevel.value) === "Empty")){
        window.alert("Please enter all information")
        list.style.visibility="hidden";
        
    }
    if((validateInput(pilot.value) === "Is a Number") || (validateInput(copilot.value) === "Is a Number")){
        window.alert("Invalid input detected! Please try again!")
        list.style.visibility="hidden";
        
    } else {
            list.style.visibility="visible"
            document.getElementById("pilotStatus").innerHTML=`Pilot ${pilot} is ready for launch`;
            document.getElementById("copilotStatus").innerHTML=`Co-pilot ${copilot} is ready for launch`;
    }
    if(validateInput(fuelLevel.value) !== "Is a Number" || validateInput(cargoLevel.value) !== "Is a Number"){
        window.alert("Please check fields for valid entries!")
        list.style.visibility="hidden";
    }else {
        if(fuelLevel.value < 10000){
            // document.getElementById("faultyItems").style.visibility="visible";
            list.style.visibility="visible";
            document.getElementById("fuelStatus").innerHTML="Fuel level too low for launch";
            document.getElementById("launchStatus").style.color="red";
            document.getElementById("launchStatus").innerHTML="Shuttle not ready for launch";
        } else {
            list.style.visibility="hidden";
            document.getElementById("fuelStatus").innerHTML="Fuel level high enough for launch";
            document.getElementById("launchStatus").style.color="green";
            document.getElementById("launchStatus").innerHTML="Shuttle is ready for launch";
        }
        if(cargoLevel.value > 10000){
            list.style.visibility="visible";
            document.getElementById("cargoStatus").innerHTML="Cargo mass too heavy for launch";
            lStatus.style.color="red";
            lStatus.innerHTML="Shuttle Not Ready for Launch";
        }else {
            list.style.visibility="hidden";
            document.getElementById("cargoStatus").innerHTML="Cargo mass low enough for launch"
            lStatus.style.color="green";
            lStatus.innerHTML="Shuttle Not Ready for Launch";
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
