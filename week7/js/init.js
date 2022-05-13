// declare variables
let mapOptions = {'center': [34.0709,-118.444],'zoom':5}

let servesSushi = L.featureGroup();
let servesRamen = L.featureGroup();

let layers = {
    "Mainly Serves Sushi": servesSushi,
    "Mainly Serves Ramen": servesRamen
}

let circleOptions = {
    radius: 4.5,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 3,
    fillOpacity: 0.8
}

const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcLKvTrHJwbNxwJP4pOi-BPeG_pRihIgnep3CaUJdruASXgv96Y9lM5TGLrFUb9bQqY9TPlWh8zHLX/pub?output=csv"

// define the leaflet map
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// add layer control box
L.control.layers(null,layers).addTo(map)

function addMarker(data){
    if(data['Does it mainly serve sushi?'] == "Yes"){
        circleOptions.fillColor = "blue"
        servesSushi.addLayer(L.circleMarker([data.lat,data.lng],circleOptions).bindPopup(`<h2>${data['What is the name of your favorite Japanese restaurant?']}</h2> <h3>${data['What do you like about it?']}</h3>`))
        createButtons(data.lat,data.lng,data['What is the name of your favorite Japanese restaurant?'])
        }
    else{
        circleOptions.fillColor = "red"
        servesRamen.addLayer(L.circleMarker([data.lat,data.lng],circleOptions).bindPopup(`<h2>${data['What is the name of your favorite Japanese restaurant?']}</h2> <h3>${data['What do you like about it?']}</h3>`))
        createButtons(data.lat,data.lng,data['What is the name of your favorite Japanese restaurant?'])
    }
    return data
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
    const spaceForButtons = document.getElementById('placeForButtons')
    spaceForButtons.appendChild(newButton);//this adds the button to our page.
}

function loadData(url){
    Papa.parse(url, {
        header: true,
        download: true,
        complete: results => processData(results)
    })
}

function processData(results){
    console.log(results)
    results.data.forEach(data => {
        console.log(data)
        addMarker(data)
    })
    servesSushi.addTo(map) // add our layers after markers have been made
    servesRamen.addTo(map) // add our layers after markers have been made  
    let allLayers = L.featureGroup([servesSushi,servesRamen]);
    map.fitBounds(allLayers.getBounds());
}

loadData(dataUrl)
