import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  
  data : any[] = [
    {num: 'C0001', name:'Ranjith', email: 'ranjith@optionmatrix.com', phone: '9492913218', city: 'Hyderabad'},
    {num: 'C0002', name:'Vishal', email: 'Vishal@optionmatrix.com', phone: '9701234565', city: 'Pune'},
    {num: 'C0003', name:'Spyder', email: 'Spyder@optionmatrix.com', phone: '949598952', city: 'Bombay'},
    {num: 'C0004', name:'Jones', email: 'Jones@optionmatrix.com', phone: '9985421501', city: 'Jaipur'},
    {num: 'C0005', name:'Peterson', email: 'Peterson@optionmatrix.com', phone: '9985485490', city: 'Kochi'},
    {num: 'C0006', name:'Ranjith', email: 'ranjith@optionmatrix.com', phone: '9492913218', city: 'Hyderabad'},
    {num: 'C0007', name:'Vishal', email: 'Vishal@optionmatrix.com', phone: '9701234565', city: 'Pune'},
    {num: 'C0008', name:'Spyder', email: 'Spyder@optionmatrix.com', phone: '949598952', city: 'Bombay'},
    {num: 'C0009', name:'Jones', email: 'Jones@optionmatrix.com', phone: '9985421501', city: 'Jaipur'},
    {num: 'C0010', name:'Peterson', email: 'Peterson@optionmatrix.com', phone: '9985485490', city: 'Kochi'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
