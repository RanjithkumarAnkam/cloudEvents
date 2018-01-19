import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payables',
  templateUrl: './payables.component.html',
  styleUrls: ['./payables.component.css']
})
export class PayablesComponent implements OnInit {
  data : any[] = [
    {num: 'B0001', vendorid: 'V0001', name:'Ranjith', event: 'Wedding', eventdate: '20/09/17', venue: 'Nareen Gardens', totalamount: '50000', pendingamount: '20000'},
    {num: 'B0002', vendorid: 'V0002', name:'Rajesh', event: 'Birthday', eventdate: '20/09/17', venue: 'Nareen Gardens', totalamount: '80000', pendingamount: '10000'},
    {num: 'B0003', vendorid: 'V0003', name:'Pranav', event: 'Wedding', eventdate: '20/09/17', venue: 'Nareen Gardens', totalamount: '90000', pendingamount: '30000'},
    {num: 'B0004', vendorid: 'V0004', name:'Gaurav', event: 'Wedding', eventdate: '20/09/17', venue: 'Nareen Gardens', totalamount: '70000', pendingamount: '10000'},
    {num: 'B0005', vendorid: 'V0005', name:'Vishesh', event: 'Birthday', eventdate: '20/09/17', venue: 'Nareen Gardens', totalamount: '50000', pendingamount: '15000'},
    {num: 'B0006', vendorid: 'V0006', name:'Virat', event: 'Wedding', eventdate: '20/09/17', venue: 'Nareen Gardens', totalamount: '50000', pendingamount: '20000'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
