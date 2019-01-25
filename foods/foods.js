const fetchAll = () => {
 fetch("https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&apikey=812fea37dd42b5c8a532f151eaf25416")
    .then(rsts => rsts.json())
    .then(parsedRestaurants => {
        const restArray = parsedRestaurants[Object.keys(parsedRestaurants)[3]]
        const thirdRest = (restArray[2]["restaurant"])
    })}

    const fetchCuisine = (cuisine_id) => {
fetch(`https://developers.zomato.com/api/v2.1/search?city_id=1138&cuisines=${cuisine_id}&apikey=812fea37dd42b5c8a532f151eaf25416`)
.then(result => result.json())
.then(parsedResult => {
    console.log(parsedResult)
})

}

fetchCuisine(247)