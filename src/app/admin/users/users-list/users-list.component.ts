import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  data : any[] = [
    {name: 'Hyatt', email: 'Neeraj@gmail.com', phone: '999-954-9520', permissions: '1/5'},
    {name: 'VKC', email: 'Pankaj@gmail.com', phone: '855-025-0633', permissions: '5/5'},
    {name: 'Gajal', email: 'Kadhal@gmail.com', phone: '896-665-2200', permissions: '0/5'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
