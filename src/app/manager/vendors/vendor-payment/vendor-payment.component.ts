import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-payment',
  templateUrl: './vendor-payment.component.html',
  styleUrls: ['./vendor-payment.component.css']
})
export class VendorPaymentComponent implements OnInit {
  vendorData: any[];
  constructor() { }

  ngOnInit() {
    this.vendorData = [
      { paymentdate: '02-Feb-18', Description: 'Initial Payment', paidamount: '15,000', modeofpayment: 'Cash', refnum: 'POI76YTHA43RE', status: 'Completed' },
      { paymentdate: '10-Feb-18', Description: 'Second payment', paidamount: '10,000', modeofpayment: 'Cheque', refnum: 'AS987UY1009I', status: 'Completed' },
      { paymentdate: '16-Feb-18', Description: 'Third payment', paidamount: '5,000', modeofpayment: 'Paytm', refnum: 'SCFG8765KJFH', status: 'Completed' }
    ];
  }

}
