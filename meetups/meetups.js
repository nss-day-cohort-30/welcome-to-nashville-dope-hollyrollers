let getDate = (splitDate) => {
    fetch(`https://www.eventbriteapi.com/v3/events/search/?sort_by=date&location.latitude=36.174465&location.longitude=-86.767960&start_date.range_start=${splitDate[0]}T00%3A00%3A00Z&start_date.range_end=${splitDate[1]}T00%3A00%3A00Z&token=OEA3462VUJJRZA57Z7GC&expand=venue`)
        .then(response => response.json())
        .then(parsedResponse => {
            for (let i = 0; i < parsedResponse.events.length; i++) {
                const currentEvent = parsedResponse.events[i];
                const eventsAsHTML = eventFactory(currentEvent)
                addEventToDOM(eventsAsHTML)
            }
        })
}
const eventFactory = (currentEvent) => {
    return `
    <div class="eventElement" id="${currentEvent.name.text}">
    <div>Event: ${currentEvent.name.text}</div>
    <div> Where: ${currentEvent.venue.address.localized_multi_line_address_display}</div>
    <button id="button--${currentEvent.name.text}" class="saveMeetBtn">Save to Itinerary</button>
    </div>
    `
}

