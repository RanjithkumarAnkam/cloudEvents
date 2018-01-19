import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  data : any[] = [
    {num: 'C0001', name:'Ranjith', bookings: '2', enquiries: '2', appointments: '2'},
    {num: 'C0002', name:'Kalyan', bookings: '2', enquiries: '2', appointments: '2'},
    {num: 'C0003', name:'Nagarjuna ', bookings: '2', enquiries: '2', appointments: '2'},
    {num: 'C0004', name:'Mahendra', bookings: '2',enquiries: '2', appointments: '2'},
    {num: 'C0005', name:'Hari', bookings: '2', enquiries: '2', appointments: '2'},
    {num: 'C0006', name:'Kumar', bookings: '2', enquiries: '2', appointments: '2'},
    {num: 'C0007', name:'Swamy', bookings: '2', enquiries: '2', appointments: '2'},
    {num: 'C0008', name:'Gabbar', bookings: '2', enquiries: '2', appointments: '2'},
    {num: 'C0009', name:'Joshi', bookings: '2', enquiries: '2', appointments: '2'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
