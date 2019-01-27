let parksSelectDropdown = document.getElementById("park--options")

let parksSearchButton = document.getElementById("searchParkBTN")

let resultsContainer = document.getElementById("resultsContainer")

let parkFeatureOptions = ["nature_center", "picnic_shelters", "dog_park", "hiking_trails", "ada_accessible", "soccer_fields", "baseball_fields", "basketball_courts", "volleyball", "skate_parks", "swimming_pool", "spray_park", "golf_course",  "tennis_courts", "disc_golf", "lake", "community_garden", "walk_jog_paths", "horse_trails", "mountain_bike_trails", "boat_launch", "camping_available_by_permit", "lake"]

let dropdownPrintingFunction = (particularFeature) => {return `
<option id="${particularFeature}" value="${particularFeature}">${particularFeature.split("_").join(" ")}</option>
`}

parkFeatureOptions.forEach(feature => {
    parksSelectDropdown.innerHTML += dropdownPrintingFunction(feature)
});


let outcomePrintingFunction = (particularPark) => { return `
<div id="${particularPark.park_name}"> Name: ${particularPark.park_name} Address: ${particularPark.mapped_location_address} <div>
<button type="submit" id="button--${particularPark.park_name}">Add to my Itinerary</button> `}


fetch("https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=lK9BzlilnoiwMiVKvT4z4jL5G")
    .then(response => response.json())
    .then(entireParkList => {
        parksSearchButton.addEventListener("click", function () {
            let currentFeature = document.getElementById("park--options")
            entireParkList.forEach(park => {
                if (park[currentFeature.value] === "Yes")
                resultsContainer.innerHTML += outcomePrintingFunction(park)
            
                
            });

        })

    })


