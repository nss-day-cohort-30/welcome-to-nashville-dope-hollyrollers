
let parkFeatureOptions = ["dog_park", "hiking_trails", "ada_accessible", "soccer_fields", "baseball_fields", "tennis_courts", "disc_golf", "lake", "community_garden"]

let parksSearchButton = document.getElementById("searchParkBTN")

let resultsContainer = document.getElementById("resultsContainer")

let printingFunction = (particularPark) => { return `
<div id="${particularPark.park_name}"> Name: ${particularPark.park_name} Address: ${particularPark.mapped_location_address} <div>
<button type="submit" id="button--${particularPark.park_name}">Add to my Itinerary</button> `}


fetch("https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=lK9BzlilnoiwMiVKvT4z4jL5G")
    .then(response => response.json())
    .then(entireParkList => {
        parksSearchButton.addEventListener("click", function () {
            let currentFeature = document.getElementById("park--options")
            entireParkList.forEach(park => {
                if (park[currentFeature.value] === "Yes")
                resultsContainer.innerHTML += printingFunction(park)
            
                
            });

        })

    })


