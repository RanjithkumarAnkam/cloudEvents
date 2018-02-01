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
      { paymentdate: '16/09/17', Description: 'Nareen Gardens', paidamount: '25,000', modeofpayment: 'Cash', refnum: 'POI76YTHA43RE', status: 'Completed' },
      { paymentdate: '12/09/17', Description: 'Nareen Gardens', paidamount: '14,000', modeofpayment: 'Cheque', refnum: 'AS987UY1009I', status: 'Completed' },
      { paymentdate: '26/09/17', Description: 'Nareen Gardens', paidamount: '10,000', modeofpayment: 'Paytm', refnum: 'SCFG8765KJFH', status: 'Completed' }
    ];
  }

}
