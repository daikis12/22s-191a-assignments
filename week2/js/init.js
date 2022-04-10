// declare variables
let zoomLevel = 5;
const mapCenter = [34.0709,-118.444];

// use the variables
const map = L.map('the_map').setView(mapCenter, zoomLevel);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// create a function to add markers
function addMarker(lat,lng,title,message){
    console.log(message)
    L.marker([lat,lng]).addTo(map).bindPopup(`<h1>${title}</h1>`)
    return message
}

// use our marker functions
addMarker(36.204823,138.252930,'Japan','home country!')
addMarker(23.697809,120.960518,'Taiwan','Visited in 2017!')
addMarker(22.396427,114.1694,'Hong Kong','Visited in 2019')
addMarker(12.8797,121.7740,'Philippines','Visuted in 2019')
addMarker(35.9078,127.7669,'South Korea','Visited in 2015 and 2019')
addMarker(56.1304, -106.3468,'Canada','second home country!')
addMarker(37.0902, -95.7129,'United States','third home country!')

       
        