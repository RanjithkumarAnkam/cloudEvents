import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-facilities',
  templateUrl: './services-facilities.component.html',
  styleUrls: ['./services-facilities.component.css']
})
export class ServicesFacilitiesComponent implements OnInit {
  data: any[] = [
    { service: 'Wifi' },
    { service: 'Catering Services' }

  ];
  constructor() { }

  ngOnInit() {
  }

}
