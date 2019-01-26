const resultOutput = document.querySelector("#resultsContainer")

//need to break this up
const createRestHTML = (restaurant, index) => {
    const restContainer = document.createElement("div")
    restContainer.setAttribute("id", index)
    const restName = document.createElement("h4")
    const nameContent = document.createTextNode(restaurant.name)
    restName.appendChild(nameContent)
    const restAddress = document.createElement("span")
    const addressContent = document.createTextNode(restaurant.location.address)
    restAddress.appendChild(addressContent)
    const button = document.createElement("button")
    button.setAttribute("id", [index])
    button.appendChild(document.createTextNode("Add to your itinerary"))
    resultOutput.appendChild(restContainer)
    restContainer.appendChild(restName)
    restContainer.appendChild(restAddress)
    restContainer.appendChild(button)

}
const addToDom = (restaurant, index) => {

}



const addEvents = resultOutput.addEventListener("click", function () {
    event.target

})

//fetches all restaurants matching the chosen cuisine and adds them to the DOM with associated buttons
const fetchCuisine = (cuisine_id) => {
    fetch(`https://developers.zomato.com/api/v2.1/search?city_id=1138&cuisines=${cuisine_id}&apikey=812fea37dd42b5c8a532f151eaf25416`)
        .then(result => result.json())
        .then(parsedResult => {
            const restArray = parsedResult[Object.keys(parsedResult)[3]]
            for (let index = 0; index < restArray.length; index++) {
                const element = searchedArray[index]
                const eachRestaurant = element["restaurant"]
                createRestHTML(eachRestaurant, index)
                addToDom(eachRestaurant, index)

            }

        });
}

//When the search button is clicked, fetch restaurants matching the selected cuisine
const searchButton = document.querySelector("#searchRestaurantBTN")
searchButton.addEventListener("click", function () {
    resultOutput.innerHTML = ""
    let cuisine_id = document.querySelector("#restOptions").value
    fetchCuisine(cuisine_id)
})
