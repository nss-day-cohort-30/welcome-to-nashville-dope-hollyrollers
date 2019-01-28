const concertButton = document.querySelector("#searchConcertBTN")
let concertItineraryContainer = document.getElementById("concertItinerary")
let concertsResultsContainer = document.querySelector("#concerts--resultsContainer")


concertButton.addEventListener(
        "click",
        () =>{
            var dateInput = document.getElementById("concertDate").value
            console.log(dateInput); //e.g. 2015-11-13

fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&localStartDateTime=${dateInput}T04:00:00,${dateInput}T20:00:00&city=nashville&radius=25&apikey=v4IpUAshxvYP3PmSeGx6OSRn1rxWWT3z`
)
.then(events => events.json())
.then(parsedConcerts => {
    parsedConcerts._embedded.events.forEach(concert => {
        const ConcertAsHTML = BookingAgent(concert);
        addConcertToDom(ConcertAsHTML)
    })
})
})

const addConcertToDom =  (ConcertAsHTML) => {
    document.querySelector("#concerts--resultsContainer").innerHTML += ConcertAsHTML
}

const BookingAgent = (concert) => {
    return `
    <div id="${concert.name}">
    <ul style="list-style:none !important;>
      <li style="text-decoration:none;"><a href="${concert.url}">${concert.name}</a></li>
      <li>${concert.dates.start.localTime} at ${concert._embedded.venues[0].name}</li>
      </ul>
      </div>
      <button type="submit" id="buttonConcert--${concert.name}">Add to my Itinerary</button>
    
    
    `
}


// concertButton.addEventListener("click", function() {
//     var dateInput = String(document.getElementById("Start").value);
//     console.log(dateInput); //e.g. 2015-11-13
//     console.log(dateInput.split("-"))
// });

    //Event listener on concerts results continer 
    concertsResultsContainer.addEventListener("click", function() {
        //if the id of the clicked element starts with the word 'button'
        if(event.target.id.startsWith("buttonConcert")) {
            //split the id of the button on the --, this gives you an array
            let idArrayConcerts = event.target.id.split("--")
            //refrence to inner text the element with the id equal to the value of index one of the 'id array'
            let elementToMoveToItineraryConcerts = document.getElementById(idArrayConcerts[1]).innerText
            //reset the inner html of the concerts itinerary container, so there can only be one itinerary item at a time
            concertItineraryContainer.innerHTML = ""
            //set the inner html of the concerts itinerary equal to the inner text of the refrenced element 
            concertItineraryContainer.innerHTML = `${elementToMoveToItineraryConcerts}`
        }
    })
