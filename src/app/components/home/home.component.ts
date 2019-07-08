import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lat = 34.897831;
  lng = -82.413358;

  zoom = 17;

  readMoreAmy = true;
  readMoreKara = true;
  readMoreGracie = true;
  readMoreHaley = true;
  readMoreMcKenzie = true;
  viewAllFacials = true;
  viewAllPeels = true;
  viewAllWax = true;
  show = false;

  goldStar = {
    path:
      'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
    fillColor: 'yellow',
    fillOpacity: 0.5,
    scale: 0.1,
    strokeColor: 'gold',
    strokeWeight: 14
  };

  scrolled: number;

  markers: Marker = {
    lat: this.lat,
    lng: this.lng,
    label: 'Gracie B\'s',
    icon: this.goldStar,
    draggable: false
  };

  @HostListener('window:scroll', ['$event'])
  doSomething(event) {

    this.scrolled = window.pageYOffset;

    if (this.scrolled > 0) {
      this.throttle(this.callback, 200);
    }
  }

  constructor() {}

  ngOnInit() {
  }

  readmoreAmy() {
    this.readMoreAmy = !this.readMoreAmy;
    this.readMoreKara = true;
    this.readMoreGracie = true;
    this.readMoreHaley = true;
    this.readMoreMcKenzie = true;
  }

  readmoreKara() {
    this.readMoreKara = !this.readMoreKara;
    this.readMoreAmy = true;
    this.readMoreGracie = true;
    this.readMoreHaley = true;
    this.readMoreMcKenzie = true;
  }

  readmoreGracie() {
    this.readMoreGracie = !this.readMoreGracie;
    this.readMoreAmy = true;
    this.readMoreKara = true;
    this.readMoreHaley = true;
    this.readMoreMcKenzie = true;
  }

  readmoreHaley() {
    this.readMoreHaley = !this.readMoreHaley;
    this.readMoreAmy = true;
    this.readMoreKara = true;
    this.readMoreGracie = true;
    this.readMoreMcKenzie = true;
  }

  readmoreMcKenzie() {
    this.readMoreMcKenzie = !this.readMoreMcKenzie;
    this.readMoreAmy = true;
    this.readMoreKara = true;
    this.readMoreGracie = true;
    this.readMoreHaley = true;
  }

  viewallFacials() {
    this.viewAllFacials = !this.viewAllFacials;
    this.viewAllPeels = true;
    this.viewAllWax = true;
  }

  viewallPeels() {
    this.viewAllPeels = !this.viewAllPeels;
    this.viewAllFacials = true;
    this.viewAllWax = true;
  }

  viewallWax() {
    this.viewAllWax = !this.viewAllWax;
    this.viewAllFacials = true;
    this.viewAllPeels = true;
  }

  showMe() {
    this.show = !this.show;
  }

  throttle(callback, limit) {
    let wait = false; // Initially, we're not waiting
    return () => {
      // We return a throttled function
      if (!wait) {
        // If we're not waiting
        callback.call(); // Execute users function
        wait = true; // Prevent future invocations
        setTimeout(() => {
          // After a period of time
          wait = false; // And allow future invocations
        }, limit);
      }
    };
  }

  callback() {
    console.count('Throttled');
  }
}

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  icon: any;
}
