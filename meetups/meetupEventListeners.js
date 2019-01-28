let meetUpsButton = document.querySelector("#searchEventBTN")
let meetUpsResults = document.querySelector("#events--resultsContainer")
let eventItineraryContainer = document.getElementById("eventItinerary")

meetUpsButton.addEventListener("click", () => {
  meetUpsResults.innerHTML = ""
  let formDateValue = document.querySelector("#eventOptions").value
  let splitDate = formDateValue.split(",")
  console.log(splitDate)
  getDate(splitDate)

})

meetUpsResults.addEventListener("click", () => {
  console.log("you clicked me")
  eventItineraryContainer.innerHTML = ""
  if (event.target.id.startsWith("button")) {
    let idArray = event.target.id.split("--")
    let elementToMoveToItinerary = document.getElementById(idArray[1]).innerText
    eventItineraryContainer.innerHTML = elementToMoveToItinerary
  }
})

const addEventToDOM = eventHTML => {
  meetUpsResults.innerHTML += eventHTML
}
