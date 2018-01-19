import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paid-list',
  templateUrl: './paid-list.component.html',
  styleUrls: ['./paid-list.component.css']
})
export class PaidListComponent implements OnInit {
  data : any[] = [
    {num: 'B0001', vendorid: 'V0001', name:'Ranjith', paid: '25000', paymentdate: '20/09/17', paymentmode: 'Offline'},
    {num: 'B0002', vendorid: 'V0002', name:'Kalyan', paid: '25000', paymentdate: '20/09/17', paymentmode: 'Offline'},
    {num: 'B0003', vendorid: 'V0003', name:'Nagarjuna ', paid: '25000', paymentdate: '20/09/17', paymentmode: 'Offline'},
    {num: 'B0004', vendorid: 'V0004', name:'Mahendra', paid: '25000', paymentdate: '20/09/17', paymentmode: 'Offline'},
    {num: 'B0005', vendorid: 'V0005', name:'Hari', paid: '25000', paymentdate: '20/09/17', paymentmode: 'Offline'},
    {num: 'B0006', vendorid: 'V0006', name:'Kumar', paid: '25000', paymentdate: '20/09/17', paymentmode: 'Offline'},
    {num: 'B0007', vendorid: 'V0007', name:'Swamy', paid: '25000', paymentdate: '20/09/17', paymentmode: 'Offline'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
