import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-log',
  templateUrl: './payment-log.component.html',
  styleUrls: ['./payment-log.component.css']
})
export class PaymentLogComponent implements OnInit {
  
  data: any[] = [
    { refnum: 'SB0YIUJHH23', status: 'Completed', fname: 'Ranjith', lname: 'Kumar', paid: '25000', paymentdate: '12-Feb-2018', paymentmode: 'Offline' },
    { refnum: 'ICICIUJHH23', status: 'In Process', fname: 'Kalyan', lname: 'Babu', paid: '25000', paymentdate: '04-Mar-2018', paymentmode: 'Online' },
    { refnum: 'ICICIUK2H7B', status: 'Completed', fname: 'Nagarjuna ', lname: 'Rao', paid: '25000', paymentdate: '02-Mar-2018', paymentmode: 'Offline' },
    { refnum: 'OBCCIUJHH49', status: 'Completed', fname: 'Mahendra', lname: 'Davy', paid: '25000', paymentdate: '07-Apr-2018', paymentmode: 'Offline' },
    { refnum: 'SB23IUJHH11', status: 'Completed', fname: 'Hari', lname: 'Babu', paid: '25000', paymentdate: '21-Apr-2018', paymentmode: 'Offline' },
    { refnum: 'SB0YIUJHH29', status: 'Failed', fname: 'Kumar', lname: 'Rao', paid: '25000', paymentdate: '18-May-2018', paymentmode: 'Check' },
    { refnum: 'SBKTPPJHH00', status: 'In Process', fname: 'Swamy', lname: 'Kumar', paid: '25000', paymentdate: '11-May-2018', paymentmode: 'Online' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
