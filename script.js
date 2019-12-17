// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
window.addEventListener("load", function(){
   let index = Math.floor(Math.random()*6)
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response){
      response.json().then( function(json){
         let missionTarget = document.getElementById("missionTarget")
         missionTarget.innerHTML = 
            `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[index].name}</li>
               <li>Diameter: ${json[index].diameter}</li>
               <li>Star: ${json[index].star}</li>
               <li>Distance from Earth: ${json[index].distance}</li>
               <li>Number of Moons: ${json[index].moons}</li>
            </ol>
            <img src="${json[index].image}">
            `
      })
   })
   let form = document.getElementById("launchForm")
   form.addEventListener("submit", function(event){
      event.preventDefault()
      let pilotNameInput = document.querySelector("input[name=pilotName]")
      let copilotNameInput = document.querySelector("input[name=copilotName]")
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]")
      let cargoMassInput = document.querySelector("input[name=cargoMass]")      
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields required.")        
      } else if (isNaN(pilotNameInput.value) === false || isNaN(copilotNameInput.value) === false || isNaN(fuelLevelInput.value) === true || isNaN(cargoMassInput.value) === true) {
         alert("One or more inputs are invalid.")
      } else {
         let pilotStatus = document.getElementById("pilotStatus")
         let copilotStatus = document.getElementById("copilotStatus")
         let faultyItems = document.getElementById("faultyItems")
         let fuelStatus = document.getElementById("fuelStatus")
         let cargoStatus = document.getElementById("cargoStatus")
         let launchStatus = document.getElementById("launchStatus")
         pilotStatus.innerHTML = `${pilotNameInput.value} Ready`
         copilotStatus.innerHTML = `${copilotNameInput.value} Ready`
         if (Number(fuelLevelInput.value) < 10000) {            
            fuelStatus.innerHTML = "Shuttle does not have enough fuel for the mission"
         } else {
            fuelStatus.innerHTML = "Fuel level high enough for launch"
         }
         if (Number(cargoMassInput.value) > 10000) {
            cargoStatus.innerHTML = "Shuttle has too much cargo mass for launch"           
         } else {
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
         }
         if (Number(fuelLevelInput.value) < 10000 || Number(cargoMassInput.value) > 10000) {
            launchStatus.innerHTML = "Shuttle not ready for launch"
            launchStatus.style.color = "red"
         } else {
            launchStatus.innerHTML = "Shuttle is ready for launch"
            launchStatus.style.color = "green"
         }
         faultyItems.style.visibility = "visible"
      }      
   })
})