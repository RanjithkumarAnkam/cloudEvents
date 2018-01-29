import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribers-list',
  templateUrl: './subscribers-list.component.html',
  styleUrls: ['./subscribers-list.component.css']
})
export class SubscribersListComponent implements OnInit {
  data : any[] = [
    {name: 'Hyatt',packagename: 'Single', contact: 'Neeraj', email: 'Neeraj@gmail.com', phone: '999-954-9520', status: 'Active'},
    {name: 'Naren',packagename: 'Multiple', contact: 'Bincy', email: 'Bincy@gmail.com', phone: '999-954-9520', status: 'Active'},
    {name: 'VKC',packagename: 'Single', contact: 'Aakash', email: 'Aakash@gmail.com', phone: '999-954-9520', status: 'Active'},
    {name: 'N COnvention',packagename: 'Single',  contact: 'Ankita', email: 'Ankita@gmail.com', phone: '999-954-9520', status: 'Active'},
    {name: 'Sayyadh',packagename: 'Dual', contact: 'Saif', email: 'Saif@gmail.com', phone: '999-954-9520', status: 'Active'},
    {name: 'Zinghaat',packagename: 'Multiple', contact: 'Rinku', email: 'Rinku@gmail.com', phone: '999-954-9520', status: 'Active'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
