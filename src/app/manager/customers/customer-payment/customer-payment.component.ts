import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-payment',
  templateUrl: './customer-payment.component.html',
  styleUrls: ['./customer-payment.component.css']
})
export class CustomerPaymentComponent implements OnInit {

  constructor() { }
  dataOriginal:any[];
  dataPaid:any[];
  ngOnInit() {
    this.dataOriginal = [
      { duedate: '18/09/17', description: 'Advance Payment', dueamount: '25,000' },
      { duedate: '12/09/17', description: 'First payment', dueamount: '14,000' },
      { duedate: '26/09/17', description: 'Final Payment', dueamount: '10,000' }
    ];
    this.dataPaid = [
      { bookingid: 'NG/RAN/2018/01/06', paymentdate: '16/09/17', Description: 'Advance Payment', paidamount: '25,000', modeofpayment: 'Cash',refnum:'POI76YTHA43RE' },
      { bookingid: 'NG/RAN/2018/01/06', paymentdate: '12/09/17', Description: 'First Payment', paidamount: '14,000', modeofpayment: 'Cheque',refnum:'AS987UY1009I'  },
      { bookingid: 'NG/RAN/2018/01/06', paymentdate: '26/09/17', Description: 'Final Payment', paidamount: '10,000', modeofpayment: 'Paytm',refnum:'SCFG8765KJFH'  }
    ];
  }
 

}
