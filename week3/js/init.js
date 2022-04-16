// declare the map
const map = L.map('the_map').setView([36.204823,138.252930], 3);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

addMarker(36.204823,138.252930,'Japan','My home country! I was born in Osaka and spent most of my childhood there. I try to go to Japan at lease once a year to see my grandparents. ')
addMarker(23.697809,120.960518,'Taiwan','Visited in 2016! One of my first family trip abroad. My favorite memory from this trip is that my sister and I went to Jioufen and almost got lost getting there.')
addMarker(22.396427,114.1694,'Hong Kong','Visited in 2019! All I remember from this trip is that while we were there, my family and I were constantly worried about getting involved in the protest against the Chinese Extradition Law.')
addMarker(12.8797,121.7740,'Philippines','Visuted in 2018! This was my first trip abroad with my friends. We spent 2 days in Manila and 5 days in Palawan Island. My favorite place was Puerto-Princesa Subterranean River National Park, which is a World Heritage Site. ')
addMarker(35.9078,127.7669,'South Korea','Visited in 2015 and 2019! Seoul is one of my favorite places on earth. Everytime I go to Seoul, there is a Korean BBQ restaurant that I always go to. It is the BEST in the world.')
addMarker(56.1304, -106.3468,'Canada','My second home country! I spent most of my teeage years in Aldergrove, Canada. I have not been back there since I graduated from high school in 2018, and I miss my friends there so much!')
addMarker(37.0902, -95.7129,'United States','My third home country! I came to the US in 2019 after taking a gap year after high school. It took a while but I finally became a permanent resident in 2021.')

// create a function to add markers
function addMarker(lat,lng,title,message){
    console.log(message)
    L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2> <h3>${message}</h3>`)
    createButtons(lat,lng,title);
    return message
}

function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); // adds a new button
    newButton.id = "button"+title; // gives the button a unique id
    newButton.innerHTML = title; // gives the button a title
    newButton.setAttribute("lat",lat); // sets the latitude 
    newButton.setAttribute("lng",lng); // sets the longitude 
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng]); //this is the flyTo from Leaflet
    })
    document.getElementById("contents").appendChild(newButton); //this adds the button to our page.
}
