import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  data: any[] = [
    { fname: 'Mahesh', lname: 'Babu', email: 'Mahesh@outlook.com', phone: '9949525002', permissions: '0/50', status: 'Active' },
    { fname: 'Orange', lname: 'Rao', email: 'Orange@outlook.com', phone: '9495252201', permissions: '2/50', status: 'Active' },
    { fname: 'Ram', lname: 'Kumar', email: 'Ram@outlook.com', phone: '9785445855', permissions: '36/50', status: 'Active' },
    { fname: 'Charan', lname: 'Sharma', email: 'Charan@outlook.com', phone: '8995668820', permissions: '10/50', status: 'Active' },
    { fname: 'Rooba', lname: 'Gupta', email: 'Rooba@outlook.com', phone: '9752001523', permissions: '15/50', status: 'Active' },
    { fname: 'Karthik', lname: 'Babu', email: 'Karthik@outlook.com', phone: '9949525002', permissions: '20/50', status: 'Active' },
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
