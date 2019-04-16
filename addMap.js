 //Accesstoken, skaffar man på mapboxs hemsida.
 mapboxgl.accessToken = "pk.eyJ1Ijoiem9yYWMiLCJhIjoiY2p1Zjlrc2tuMDZqaDRkbzN6MDlqMDZvdiJ9.P21BJb7dzZC0L-uUwS657Q";
 //Initierar en ny karta i variabeln map.
 var karta = new mapboxgl.Map({
     container: "karta", // HTML container-id
     style: "mapbox://styles/mapbox/dark-v9", // style URL, går att välja på flera olika.
     center: [17.3063, 62.39129], // Startposition [lng, lat]
     zoom: 1 //Hur mycket zoom kartan skall ha.
 });