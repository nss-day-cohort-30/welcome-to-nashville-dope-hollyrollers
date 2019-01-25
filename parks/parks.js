fetch("https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=lK9BzlilnoiwMiVKvT4z4jL5G")
.then(response => response.json())
.then( entireParkList => {
    entireParkList.forEach( park => { 
        let parkNames = park.park_name
    console.log(parkNames)
    })
})