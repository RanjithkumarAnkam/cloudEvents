import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receivables',
  templateUrl: './receivables.component.html',
  styleUrls: ['./receivables.component.css']
})
export class ReceivablesComponent implements OnInit {
  data : any[] = [
    {num: 'B0001', cus: 'C0001', name:'Ranjith', event: 'Wedding', eventdate: '20/09/17', venue: 'Nareen Gardens',totalamount: '1,00,000', reveivable: '25,000'},
    {num: 'B0002', cus: 'C0002', name:'Kalyan', event: 'Birthday', eventdate: '20/09/17', venue: 'Nareen Gardens',totalamount: '1,00,000', reveivable: '25,000'},
    {num: 'B0003', cus: 'C0003', name:'Nagarjuna ', event: 'Wedding', eventdate: '20/09/17', venue: 'Nareen Gardens',totalamount: '1,00,000', reveivable: '25,000'},
    {num: 'B0004', cus: 'C0004', name:'Mahendra', event: 'Wedding',eventdate: '20/09/17', venue: 'Nareen Gardens',totalamount: '1,00,000', reveivable: '25,000'},
    {num: 'B0005', cus: 'C0005', name:'Hari', event: 'Birthday', eventdate: '20/09/17', venue: 'Nareen Gardens',totalamount: '1,00,000', reveivable: '25,000'},
    {num: 'B0006', cus: 'C0006', name:'Kumar', event: 'Wedding', eventdate: '20/09/17', venue: 'Nareen Gardens',totalamount: '1,00,000', reveivable: '25,000'},
    {num: 'B0007', cus: 'C0007', name:'Swamy', event: 'Wedding', eventdate: '20/09/17', venue: 'Nareen Gardens',totalamount: '1,00,000', reveivable: '25,000'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
