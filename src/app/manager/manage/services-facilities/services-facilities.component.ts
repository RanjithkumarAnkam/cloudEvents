import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
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
  
  venuesList: SelectItem[];
  selectedVenues: Array<any>;
  ngOnInit() {
    this.venuesList = [
      { label: 'Naren Gardens', value: { id: 1, name: 'Naren Gardens', code: 'NG' } },
      { label: 'Naren Conventions', value: { id: 2, name: 'Naren Conventions', code: 'NC' } },
      { label: 'Naren platinum', value: { id: 3, name: 'Naren platinum', code: 'NP' } },
      { label: 'Naren Community', value: { id: 4, name: 'Naren Community', code: 'NCO' } },
    ];
  }
  selectMenuChange() {
    console.log(this.selectedVenues);
  }
}
