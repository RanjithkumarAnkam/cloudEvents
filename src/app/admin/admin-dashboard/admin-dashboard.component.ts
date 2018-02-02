import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  data : any[] = [
    {name: 'Hyatt', totalamount: '20000', duedate:'20/12/2017', email: 'vijay@gmail.com', phone: '999-954-9520', paidamount: '15000', due: '10000' },
    {name: 'HTC', totalamount: '20000', duedate:'20/12/2017', email: 'shyam@gmail.com', phone: '998-852-2240', paidamount: '15000', due: '10000' },
    {name: 'SKVedika', totalamount: '20000', duedate:'20/12/2017', email: 'rajiv@gmail.com', phone: '954-552-4005', paidamount: '15000', due: '10000' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
