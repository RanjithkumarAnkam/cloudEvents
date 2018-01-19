import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  data : any[] = [
    {username: 'Mahesh', email: 'Mahesh@outlook.com', phone:'9949525002', permissions: '0/38', status: 'Active'},
    {username: 'Orange', email: 'Orange@outlook.com', phone:'9495252201', permissions: '2/38', status: 'Active'},
    {username: 'Ram', email: 'Ram@outlook.com', phone:'9785445855', permissions: '36/38', status: 'Active'},
    {username: 'Charan', email: 'Charan@outlook.com', phone:'8995668820', permissions: '10/38', status: 'Active'},
    {username: 'Rooba', email: 'Rooba@outlook.com', phone:'9752001523', permissions: '15/38', status: 'Active'},
    {username: 'Karthik', email: 'Karthik@outlook.com', phone:'9949525002', permissions: '20/38', status: 'Active'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
