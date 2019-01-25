const concertButton = document.querySelector("#searchConcertBTN")


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
    document.querySelector("#resultsContainer").innerHTML += ConcertAsHTML
}

const BookingAgent = (concert) => {
    return `
    <ul style="list-style:none !important;>
      <li style="text-decoration:none;"><a href="${concert.url}">${concert.name}</a></li>
      <li>${concert.dates.start.localTime} at ${concert._embedded.venues[0].name}</li>
    </ul>
    `
}

// concertButton.addEventListener("click", function() {
//     var dateInput = String(document.getElementById("Start").value);
//     console.log(dateInput); //e.g. 2015-11-13
//     console.log(dateInput.split("-"))
// });