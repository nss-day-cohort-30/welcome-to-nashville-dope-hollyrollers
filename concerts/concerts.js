const concertButton = document.querySelector("#searchConcertBTN")


concertButton.addEventListener(
        "click",
        () =>{
fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&startDateTime=2019-04-01T05:00:00Z&endDateTime=2019-04-02T00:00:00Z&city=nashville&radius=25&apikey=v4IpUAshxvYP3PmSeGx6OSRn1rxWWT3z`
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

