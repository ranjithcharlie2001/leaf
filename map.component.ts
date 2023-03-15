
import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
//import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder";
//import * as ELG from "esri-leaflet-geocoder";
//import Geocoder from 'leaflet-control-geocoder';
import {Geocoder, geocoders} from 'leaflet-control-geocoder';
import "leaflet-routing-machine/dist/leaflet-routing-machine.js";
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
 declare private map;
  private initMap(): void {
    this.map = L.map('map', {
      //13.0827° N, 80.2707°
      //39.8282,-98.5795
      center: [13.0827, 80.2707],
      zoom: 17,
      attributionControl: false,
    });
    //const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      minZoom: 2,
    });
//38,95
    tiles.addTo(this.map);
    var myIcon = L.icon({
      iconUrl: '/assets/redbus.png',
      iconSize: [50, 80],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
      //shadowUrl: 'my-icon-shadow.png',
      shadowSize: [68, 95],
      shadowAnchor: [22, 94]
  });
  
  L.marker([13.0827, 80.2707], {icon: myIcon}).addTo(this.map);
  //esri
  new Geocoder({
    geocoder: new geocoders.Nominatim(),
    position: 'topright',
  }).addTo(this.map);
           L.control.attribution({prefix:'<span><a href="https://www.zogx.io", class="your_class"><img style="height:15px;width:45px;" src="assets/logo1.png"></img></a></span>'}).addTo(this.map);
 //L.marker([9.8433, 78.4809]).addTo(this.map);
 //L.control.scale().addTo(this.map);
                   // routing
  /*this.map.on('click',function(e:any){
    console.log(e)
    var secondmarker =L.marker([e.latlng.lat,e.latlng.lng])
  }).addTo(this.map);*/
 L.Routing.control({
  waypoints: [
    L.latLng(13.0827, 80.2707),
    L.latLng(10.9176, 76.9877)
  ]
}).addTo(this.map);

}
    
//L.control.attribution({prefix:'<span><img style="height:15px;width:40px;" src="assets/logo-black.png"></img></span>'}).addTo(this.map);
  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }

}