import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendors-list',
  templateUrl: './vendors-list.component.html',
  styleUrls: ['./vendors-list.component.css']
})
export class VendorsListComponent implements OnInit {
  data : any[] = [
    {name:'Ranjith', vendortype: 'Photographer', email: 'ranjith@photo.com', phone: '9594220125', company: 'RJ Photography'},
    {name:'Rakesh', vendortype: 'Decoration', email: 'rakesh@vc.com', phone: '9785552520', company: 'Deccan Decorators'},
    {name:'Shankar', vendortype: 'Photographer', email: 'Shankar@dec.com', phone: '8995856100', company: 'RJ Photography'},
    {name:'Raja', vendortype: 'Food Suppliers', email: 'Raja@food.com', phone: '7589658588', company: 'Delicious'},
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
