let parksSelectDropdown = document.getElementById("park--options")

let parksSearchButton = document.getElementById("searchParkBTN")

let resultsContainer = document.getElementById("parks--resultsContainer")

let parkItineraryContainer = document.getElementById("parkItinerary")

//Array used to populate the dynamic dropdown options of the parks select object
let parkFeatureOptions = ["nature_center", "picnic_shelters", "dog_park", "hiking_trails", "ada_accessible", "soccer_fields", "baseball_fields", "basketball_courts", "volleyball", "skate_parks", "swimming_pool", "spray_park", "golf_course", "tennis_courts", "disc_golf", "lake", "community_garden", "walk_jog_paths", "horse_trails", "mountain_bike_trails", "boat_launch", "camping_available_by_permit"]

//Function that returns the dropdown options HTML element 
let dropdownPrintingFunction = (particularFeature) => {return `
<option id="${particularFeature}" value="${particularFeature}">${particularFeature.split("_").join(" ")}</option>
`}

//Function that loops throught the dropdown array and dynamically creates the appropriate div
parkFeatureOptions.forEach(feature => {
    parksSelectDropdown.innerHTML += dropdownPrintingFunction(feature)
});

//Function that returns the search results HTML element
let outcomePrintingFunction = (particularPark) => {
    return `
<div id="${particularPark.park_name}">${particularPark.park_name}:  ${particularPark.mapped_location_address} </div>
<button type="submit" id="button--${particularPark.park_name}">Add to my Itinerary</button> `
}


//Fetch returns returns response data from metro parks api, 
fetch("https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=lK9BzlilnoiwMiVKvT4z4jL5G")
    .then(response => response.json())
    .then(entireParkList => {
        //adds event listner to search button on click
        parksSearchButton.addEventListener("click", function () {
            //sets the parks resulsts container inner html to a blank string so the results do not 'stack'
            resultsContainer.innerHTML = ""
            let currentFeature = document.getElementById("park--options")
            entireParkList.forEach(park => {
                //if the park key with the same name as the selected option has a value of "Yes" run the outcomePrinting function with appropriate park information and add it to the results container inner html
                if (park[currentFeature.value] === "Yes") {
                    resultsContainer.innerHTML += outcomePrintingFunction(park)}

            });

        })

    })
    //Event listener on park results continer 
    resultsContainer.addEventListener("click", function() {
        //if the id of the clicked element starts with the word 'button'
        if(event.target.id.startsWith("button")) {
            //split the id of the button on the --, this gives you an array
            let idArray = event.target.id.split("--")
            //refrence to inner text the element with the id equal to the value of index one of the 'id array'
            let elementToMoveToItinerary = document.getElementById(idArray[1]).innerText
            //reset the inner html of the park itinerary container, so there can only be one itinerary item at a time
            parkItineraryContainer.innerHTML = ""
            //set the inner html of the park itinerary equal to the inner text of the refrenced element 
            parkItineraryContainer.innerHTML = elementToMoveToItinerary
        }
    })
