
fetch("https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&apikey=812fea37dd42b5c8a532f151eaf25416")
    .then(rsts => rsts.json())
    .then(parsedRestaurants => {
        const restArray = parsedRestaurants[Object.keys(parsedRestaurants)[3]]
        console.log(restArray[2]["restaurant"])

    })
