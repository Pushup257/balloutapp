import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { JoinPage } from '../join/join';
import { AlumniPage } from '../alumni/alumni';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';
import { Observable } from 'rxjs/Observable'
import { DataManagerProvider } from "../../providers/data-manager/data-manager";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'; 



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  typing: boolean = false;
  searchQuery: string = '';
  items: string[];
  games: any;


  constructor(public navCtrl: NavController, private googleMaps: GoogleMaps, private platform: Platform, public dataManager: DataManagerProvider, public http: Http) {
    platform.ready().then(() => {
      this.initializeItems();
      this.loadMap();
    });


  }
  // Load map only after view is initialized
  // ngAfterViewInit() {

  //     this.loadMap();

  // }
  ionViewDidLoad() {
    //lol do nothing yet
  }
  map: GoogleMap;
  loadMap() {
    console.log("loading map");
    // make sure to create following structure in your view.html file
    // and add a height (for example 100%) to it, else the map won't be visible
    // <ion-content>
    //  <div #map id="map" style="height:100%;"></div>
    // </ion-content>

    // create a new map by passing HTMLElement
    let element: HTMLElement = document.getElementById('map');
    // create LatLng object
    let pos: LatLng = new LatLng(34.019409, -118.287422);
    let pos2: LatLng = new LatLng(34.015131, -118.286474);

    this.map = this.googleMaps.create(element, {
      camera: {
        'target': pos,
        'zoom': 15
      }
    });

    // listen to MAP_READY event
    // You must wait for this event to fire before adding something to the map or modifying it in anyway
    let markersArr: MarkerOptions[] = [{
      position: new LatLng(34.019409, -118.287422),
      title: 'Alumni Park'
    }, {
      position: new LatLng(34.015131, -118.286474),
      title: 'Exposition Park'
    }, {
      position: new LatLng(34.017389, -118.285916),
      title: 'Rose Garden'
    }, {
      position: new LatLng(34.030215, -118.295632),
      title: 'Richardson Family Park'
    }, {
      position: new LatLng(34.032375, -118.283429),
      title: 'Hoover'
    }, {
      position: new LatLng(34.024207, -118.263078),
      title: 'Trinity Park'
    }, {
      position: new LatLng(34.020939, -118.283153),
      title: 'McCarthy Quad'
    },

    ];


    this.map.one(GoogleMapsEvent.MAP_READY).then(
      () => {
        console.log('Map is ready!');
        // Now you can add elements to the map like the marker
        // create new marker
        // let markerOptions: MarkerOptions = {
        //   position: pos,
        //   title: 'Park #1'
        // };
        for (let markerOpt of markersArr) {
          this.map.addMarker(markerOpt)
            .then((marker: Marker) => {
              //marker.showInfoWindow();
              console.log("marker")
              marker.addEventListener(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
                //this.navCtrl.push(JoinPage)
              });
            });
        }

      }

    );
  }

  // gamesListObs: Observable<any>;
  initializeItems() {
    // // load items from server
    // this.gamesListObs = this.dataManager.getGames();
    // this.gamesListObs.subscribe(data => {
    //   //load them onto the map
      
    //   console.log(data)

      this.http.get('https://ballout-app.herokuapp.com/pullGames').map(res => res.json()).subscribe(data =>
      {
        this.games = data;
        console.log(this.games)
      })
    }

  getItems(ev: any) {
    // set val to the value of the searchbar
    let val = ev.target.value;
    if (val == '') {
      this.typing = false;
      console.log("empty");
    } else {
      this.typing = true;
      console.log("not empty");
      console.log(ev);
    }

    // Reset items back to all of the items
    this.initializeItems();

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  goToAlumni() {
    this.navCtrl.push(AlumniPage);
  }
}