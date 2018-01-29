import { Component, OnInit } from '@angular/core';

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

  ngOnInit() {
  }

}
