import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribers-list',
  templateUrl: './subscribers-list.component.html',
  styleUrls: ['./subscribers-list.component.css']
})
export class SubscribersListComponent implements OnInit {
  data : any[] = [
    {name: 'Hyatt', contact: 'Neeraj', email: 'Neeraj@gmail.com', phone: '999-954-9520', status: 'Active'},
    {name: 'Naren', contact: 'Bincy', email: 'Bincy@gmail.com', phone: '999-954-9520', status: 'Active'},
    {name: 'VKC', contact: 'Aakash', email: 'Aakash@gmail.com', phone: '999-954-9520', status: 'Active'},
    {name: 'N COnvention', contact: 'Ankita', email: 'Ankita@gmail.com', phone: '999-954-9520', status: 'Active'},
    {name: 'Sayyadh', contact: 'Saif', email: 'Saif@gmail.com', phone: '999-954-9520', status: 'Active'},
    {name: 'Zinghaat', contact: 'Rinku', email: 'Rinku@gmail.com', phone: '999-954-9520', status: 'Active'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
