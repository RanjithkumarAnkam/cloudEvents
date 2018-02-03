import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payables',
  templateUrl: './payables.component.html',
  styleUrls: ['./payables.component.css']
})
export class PayablesComponent implements OnInit {
  data: any[] = [
    { num: 'B0001', vendorid: 'V0001', fname: 'Ranjith', lname: 'kumar', event: 'Wedding', eventdate: '02-Feb-18', venue: 'Nareen Gardens', totalamount: '50000', pendingamount: '20000' },
    { num: 'B0002', vendorid: 'V0002', fname: 'Rajesh', lname: 'Rao', event: 'Birthday', eventdate: '20-Feb-18', venue: 'Nareen Gardens', totalamount: '80000', pendingamount: '10000' },
    { num: 'B0003', vendorid: 'V0003', fname: 'Pranav', lname: 'Roy', event: 'Wedding', eventdate: '11-Mar-18', venue: 'Nareen Gardens', totalamount: '90000', pendingamount: '30000' },
    { num: 'B0004', vendorid: 'V0004', fname: 'Gaurav', lname: 'Pandey', event: 'Wedding', eventdate: '16-Mar-18', venue: 'Nareen Gardens', totalamount: '70000', pendingamount: '10000' },
    { num: 'B0005', vendorid: 'V0005', fname: 'Vishesh', lname: 'Rao', event: 'Birthday', eventdate: '22-Apr-18', venue: 'Nareen Gardens', totalamount: '50000', pendingamount: '15000' },
    { num: 'B0006', vendorid: 'V0006', fname: 'Virat', lname: 'kohli', event: 'Wedding', eventdate: '27-Apr-18', venue: 'Nareen Gardens', totalamount: '50000', pendingamount: '20000' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
