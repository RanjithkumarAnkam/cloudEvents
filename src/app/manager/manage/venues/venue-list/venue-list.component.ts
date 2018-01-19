import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venue-list',
  templateUrl: './venue-list.component.html',
  styleUrls: ['./venue-list.component.css']
})
export class VenueListComponent implements OnInit {
  data : any[] = [
    {name: 'Nareen Convention', capacity: '20000', location:'Hyderabad', contact: 'Neeraj', email: 'Neeraj@cloud.com', phone: '9985455500'},
    {name: 'Nareen Garder', capacity: '15000', location:'Hyderabad', contact: 'Ravi', email: 'Ravi@cloud.com', phone: '9985455500'},
    {name: 'Nareen Platinum', capacity: '35000', location:'Hyderabad', contact: 'Rajesh', email: 'Rajesh@cloud.com', phone: '9985455500'},
    {name: 'Nareen Convention', capacity: '20000', location:'Hyderabad', contact: 'Neeraj', email: 'Neeraj@cloud.com', phone: '9985455500'},
    {name: 'Nareen Convention', capacity: '20000', location:'Hyderabad', contact: 'Neeraj', email: 'Neeraj@cloud.com', phone: '9985455500'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
