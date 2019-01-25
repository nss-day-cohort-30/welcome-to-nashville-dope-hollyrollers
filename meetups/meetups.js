let getDate = (splitDate) => {

    const results = document.querySelector("#resultsContainer")
    // const eventFactory = displayEvents => {
    //     return `
    //     <div class="boxedEvent" id="boxedEvent_${[i]}">
    //     <h4>Event: ${displayEvents.name.text}</h4> <button class="saveMeetBtn">Save to Itinerary</button>
    //     <p> Where: ${eventAddress}</p>
    //     </div>
    //     `
    // }
    // let currentEvent = response.events[i]
    // let eventAddress = currentEvent.venue.address.localized_multi_line_address_display

    const addEventToDOM = eventHTML => {
        results.innerHTML += eventHTML.name.text
        }

    fetch(`https://www.eventbriteapi.com/v3/events/search/?sort_by=date&location.latitude=36.174465&location.longitude=-86.767960&start_date.range_start=${splitDate[0]}T00%3A00%3A00Z&start_date.range_end=${splitDate[1]}T00%3A00%3A00Z&token=OEA3462VUJJRZA57Z7GC&expand=venue`)
        .then(response => response.json())
        .then(parsedResponse => {
            const firstEvent = parsedResponse.events[0]
            console.log(parsedResponse.events[0].name)
            addEventToDOM(firstEvent)
        })
}