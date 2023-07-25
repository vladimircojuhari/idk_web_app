import { Component, OnInit, ViewChild } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { GMap } from 'primeng/gmap';

declare var google: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('gmap')
  gmap!: GMap;

  options: any = {
  
  };

  mapInited = false;

  points: Array<any> = [];

  constructor(private socket: Socket) {

    this.socket.emit('message', {});

    this.socket.on('location', (args: any) => {
      this.points.push(
        ...args.map((el:any) => ({ lat: el.latitude, lng: el.longitude })) ,
      )
      console.log(this.points)
    })
    this.options = {
      zoom: 12
    };
  }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((res) => {
      this.options.center = {
        lat: res.coords.latitude,
        lng: res.coords.longitude,
      }
      
      this.mapInited = true;
    })
  }

  handleOverlayClick(evt: any) {
  }

  test() {
  }
}
