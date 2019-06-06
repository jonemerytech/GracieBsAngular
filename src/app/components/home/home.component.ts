import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lat = 34.897831;
  lng = -82.413358;

  zoom = 17;

  readMoreAmy = true;
  readMoreKara = true;
  viewAllFacials = true;
  viewAllPeels = true;

  goldStar = {
    path:
      'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
    fillColor: 'yellow',
    fillOpacity: 0.5,
    scale: 0.1,
    strokeColor: 'gold',
    strokeWeight: 14
  };

  markers: Marker = {
    lat: this.lat,
    lng: this.lng,
    label: "Gracie B's",
    icon: this.goldStar,
    draggable: false
  };

  constructor() {}

  ngOnInit() {}
}

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  icon: any;
}
