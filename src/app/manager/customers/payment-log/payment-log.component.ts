import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-log',
  templateUrl: './payment-log.component.html',
  styleUrls: ['./payment-log.component.css']
})
export class PaymentLogComponent implements OnInit {
  data: any[] = [
    { refnum: 'SB0YIUJHH23', status: 'Completed', fname: 'Ranjith', lname: 'Kumar', paid: '25000', paymentdate: '20/09/17', paymentmode: 'Offline' },
    { refnum: 'ICICIUJHH23', status: 'In Process', fname: 'Kalyan', lname: 'Babu', paid: '25000', paymentdate: '20/09/17', paymentmode: 'Online' },
    { refnum: 'ICICIUK2H7B', status: 'Completed', fname: 'Nagarjuna ', lname: 'Rao', paid: '25000', paymentdate: '20/09/17', paymentmode: 'Offline' },
    { refnum: 'OBCCIUJHH49', status: 'Completed', fname: 'Mahendra', lname: 'Davy', paid: '25000', paymentdate: '20/09/17', paymentmode: 'Offline' },
    { refnum: 'SB23IUJHH11', status: 'Completed', fname: 'Hari', lname: 'Babu', paid: '25000', paymentdate: '20/09/17', paymentmode: 'Offline' },
    { refnum: 'SB0YIUJHH29', status: 'Failed', fname: 'Kumar', lname: 'Rao', paid: '25000', paymentdate: '20/09/17', paymentmode: 'Check' },
    { refnum: 'SBKTPPJHH00', status: 'In Process', fname: 'Swamy', lname: 'Kumar', paid: '25000', paymentdate: '20/09/17', paymentmode: 'Online' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
