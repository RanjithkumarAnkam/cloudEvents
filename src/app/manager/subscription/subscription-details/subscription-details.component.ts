import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription-details',
  templateUrl: './subscription-details.component.html',
  styleUrls: ['./subscription-details.component.css']
})
export class SubscriptionDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  data: any[] = [
    { name: 'Dual Venue', numven: '2', price: 'Rs. 7,000/User' },
    { name: 'Multiple Venue', numven: '3 - 5', price: 'Rs. 10,000/User' },
  ];

}
