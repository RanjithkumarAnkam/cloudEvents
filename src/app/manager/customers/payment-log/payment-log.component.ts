import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-log',
  templateUrl: './payment-log.component.html',
  styleUrls: ['./payment-log.component.css']
})
export class PaymentLogComponent implements OnInit {
  data : any[] = [
    {num: 'B0001', cus: 'C0001', name:'Ranjith', paid: '25000', paymentdate: '20/09/17', paymentmode: 'Offline'},
    {num: 'B0002', cus: 'C0002', name:'Kalyan', paid: '25000', paymentdate: '20/09/17', paymentmode: 'Offline'},
    {num: 'B0003', cus: 'C0003', name:'Nagarjuna ', paid: '25000', paymentdate: '20/09/17', paymentmode: 'Offline'},
    {num: 'B0004', cus: 'C0004', name:'Mahendra', paid: '25000', paymentdate: '20/09/17', paymentmode: 'Offline'},
    {num: 'B0005', cus: 'C0005', name:'Hari', paid: '25000', paymentdate: '20/09/17', paymentmode: 'Offline'},
    {num: 'B0006', cus: 'C0006', name:'Kumar', paid: '25000', paymentdate: '20/09/17', paymentmode: 'Offline'},
    {num: 'B0007', cus: 'C0007', name:'Swamy', paid: '25000', paymentdate: '20/09/17', paymentmode: 'Offline'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
