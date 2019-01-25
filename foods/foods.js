const resultOutput = document.querySelector("#resultsContainer")

const fetchAll = () => {
    fetch("https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&apikey=812fea37dd42b5c8a532f151eaf25416")
        .then(rsts => rsts.json())
        .then(parsedRestaurants => {
            const restArray = parsedRestaurants[Object.keys(parsedRestaurants)[3]]
            //  const thirdRest = (restArray[2]["restaurant"])
        })
}

const addToDom = (restaurant) => {
    resultOutput.innerHTML += `${restaurant.name}: `
    resultOutput.innerHTML += `${restaurant.location.address}  `
    const button = document.createElement("button");
    button.setAttribute("id", "1");
    button.appendChild(document.createTextNode("Add to your itinerary"));
    resultOutput.appendChild(button);

}
const fetchCuisine = (cuisine_id) => {
    fetch(`https://developers.zomato.com/api/v2.1/search?city_id=1138&cuisines=${cuisine_id}&apikey=812fea37dd42b5c8a532f151eaf25416`)
        .then(result => result.json())
        .then(parsedResult => {
            const searchedArray = parsedResult[Object.keys(parsedResult)[3]]
            // const firstRest = (searchedArray[0]["restaurant"])
            searchedArray.forEach(element => {
                const eachRestaurant = element["restaurant"]
                addToDom(eachRestaurant)
            });

        })
}

const searchButton = document.querySelector("#searchRestaurantBTN")
searchButton.addEventListener("click", function () {
    let cuisineInput = document.querySelector("#restOptions").value
    console.log(document.querySelector("#restOptions"))
    // if (querySelector(section[name = "Restaurant Options"])=== )

    fetchCuisine(cuisineInput)
})
