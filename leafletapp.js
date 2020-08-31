/// <reference path="typings\index.d.ts"/> 

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var circle = L.Circle([51.508,-0.11],{color:"red",radius:500,fillColor:"#f03"}).addTo(map)
