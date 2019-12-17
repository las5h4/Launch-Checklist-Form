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
   let form = document.getElementById("launchForm")
   form.addEventListener("submit", function(event){
      event.preventDefault()
      let pilotNameInput = document.querySelector("input[name=pilotName]")
      let copilotNameInput = document.querySelector("input[name=copilotName]")
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]")
      let cargoMassInput = document.querySelector("input[name=cargoMass]")      
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields required.")
         // event.preventDefault()         
      } else if (isNaN(pilotNameInput.value) === false || isNaN(copilotNameInput.value) === false || isNaN(fuelLevelInput.value) === true || isNaN(cargoMassInput.value) === true) {
         alert("One or more inputs are invalid.")
         // event.preventDefault()
      }
      if (Number(fuelLevelInput.value) < 10000) {
         let faultyItems = document.getElementById("faultyItems")
         faultyItems.style.visibility = "visible"
         console.log("hello")
      } 
   })
   // let formSubmit = document.getElementById("formSubmit")
   // formSubmit.addEventListener("click", function(){
   //    let faultyItems = document.getElementById("faultyItems")
   //    faultyItems.style.visibility = "visible"
   // })
})