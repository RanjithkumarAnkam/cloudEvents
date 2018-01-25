import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-log',
  templateUrl: './payment-log.component.html',
  styleUrls: ['./payment-log.component.css']
})
export class PaymentLogComponent implements OnInit {
  data: any[] = [
    { num: 'B0001', cus: 'C0001', fname: 'Ranjith', lname: 'Kumar', paid: '25000', paymentdate: '20/09/17', paymentmode: 'Offline' },
    { num: 'B0002', cus: 'C0002', fname: 'Kalyan', lname: 'Babu', paid: '25000', paymentdate: '20/09/17', paymentmode: 'Offline' },
    { num: 'B0003', cus: 'C0003', fname: 'Nagarjuna ', lname: 'Rao', paid: '25000', paymentdate: '20/09/17', paymentmode: 'Offline' },
    { num: 'B0004', cus: 'C0004', fname: 'Mahendra', lname: 'Davy', paid: '25000', paymentdate: '20/09/17', paymentmode: 'Offline' },
    { num: 'B0005', cus: 'C0005', fname: 'Hari', lname: 'Babu', paid: '25000', paymentdate: '20/09/17', paymentmode: 'Offline' },
    { num: 'B0006', cus: 'C0006', fname: 'Kumar', lname: 'Rao', paid: '25000', paymentdate: '20/09/17', paymentmode: 'Offline' },
    { num: 'B0007', cus: 'C0007', fname: 'Swamy', lname: 'Kumar', paid: '25000', paymentdate: '20/09/17', paymentmode: 'Offline' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
