import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  data: any[] = [
    { menu: 'menu 1', decoration: 'Decoration 1' },
    { menu: 'menu 2', decoration: 'Decoration 2' },
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
