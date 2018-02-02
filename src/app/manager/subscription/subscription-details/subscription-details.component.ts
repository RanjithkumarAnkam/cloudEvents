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
    { name: 'Dual Venue', numven: '2', price: 'Rs. 8,000/Month' },
    { name: 'Multiple Venue', numven: '5', price: 'Rs. 10,000/Month' },
  ];

  data2: any[] = [
    { paymentId: 'PT8AWF132OP9', time: '08-01-2018 - 12:10:42', packagename: 'Single Venue', amount: '70000', status: 'Completed' },
    { paymentId: '7H8APV122OUG', time: '21-01-2018 - 02:31:33', packagename: 'Multiple Venue', amount: '70000', status: 'In Process' },
    { paymentId: 'MK8ABQ12IOSA', time: '22-01-2018 - 19:17:21', packagename: 'Dual Venue', amount: '70000', status: 'Failure' },
    { paymentId: 'N98AFJ12IO68', time: '24-01-2018 - 08:15:56', packagename: 'Single Venue', amount: '70000', status: 'Completed' },
  ];

}
