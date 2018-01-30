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
    { name: 'Multiple Venue', numven: '5', price: 'Rs. 10,000/User' },
  ];

  data2: any[] = [
    { paymentId: 'PVC001', time: '08-01-2018 - 12:10:42', packagename: 'Single Venue', amount: '70000', status: 'Completed' },
    { paymentId: 'PVC002', time: '21-01-2018 - 02:31:33', packagename: 'Multiple Venue', amount: '70000', status: 'In Process' },
    { paymentId: 'PVC003', time: '22-01-2018 - 19:17:21', packagename: 'Dual Venue', amount: '70000', status: 'Failure' },
    { paymentId: 'PVC004', time: '24-01-2018 - 08:15:56', packagename: 'Single Venue', amount: '70000', status: 'Completed' },
  ];

}
