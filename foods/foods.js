const resultOutput = document.querySelector("#resultsContainer")

const fetchAll = () => {
    fetch("https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&apikey=812fea37dd42b5c8a532f151eaf25416")
        .then(rsts => rsts.json())
        .then(parsedRestaurants => {
            const restArray = parsedRestaurants[Object.keys(parsedRestaurants)[3]]
            const thirdRest = (restArray[2]["restaurant"])
        })
}
const addToDom = (restaurant) => {
    resultOutput.innerHTML += `${restaurant.name}: `
    resultOutput.innerHTML += `${restaurant.location.address}  `
}
const createButton = (index) => {
    const button = document.createElement("button")
    button.setAttribute("id", [index])
    button.appendChild(document.createTextNode("Add to your itinerary"));
    resultOutput.appendChild(button);
}


const fetchCuisine = (cuisine_id) => {
    fetch(`https://developers.zomato.com/api/v2.1/search?city_id=1138&cuisines=${cuisine_id}&apikey=812fea37dd42b5c8a532f151eaf25416`)
        .then(result => result.json())
        .then(parsedResult => {
            const searchedArray = parsedResult[Object.keys(parsedResult)[3]]
                for (let index = 0; index < searchedArray.length; index++) {
                const element = searchedArray[index]
                const eachRestaurant = element["restaurant"]
                addToDom(eachRestaurant)
                createButton(index)
              }

        });
}
const searchButton = document.querySelector("#searchRestaurantBTN")
searchButton.addEventListener("click", function () {
    resultOutput.innerHTML = ""
    let cuisineInput = document.querySelector("#restOptions").value
    fetchCuisine(cuisineInput)
})
