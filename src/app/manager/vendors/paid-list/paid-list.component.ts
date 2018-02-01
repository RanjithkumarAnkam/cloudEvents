import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paid-list',
  templateUrl: './paid-list.component.html',
  styleUrls: ['./paid-list.component.css']
})
export class PaidListComponent implements OnInit {
  data: any[] = [
    { num: 'B0001', vendorid: 'V0001', fname: 'Ranjith', lname: 'Kumar', paid: '25000', paymentdate: '20/09/17', paymentmode: 'Offline',invoicenum:'YR231OI9',refnum:'VOP098F3WCVX',status:'Pending' },
    { num: 'B0002', vendorid: 'V0002', fname: 'Kalyan', lname: 'Raj', paid: '25000', paymentdate: '20/09/17', paymentmode: 'Offline',invoicenum:'9I231OIA',refnum:'IBH098F3WCVC',status:'Completed' },
    { num: 'B0003', vendorid: 'V0003', fname: 'Nagarjuna ', lname: 'Reddy', paid: '25000', paymentdate: '20/09/17', paymentmode: 'Offline',invoicenum:'K8231OQ2',refnum:'9IOP098F3NBV2',status:'Completed' },
    { num: 'B0004', vendorid: 'V0004', fname: 'Mahendra', lname: 'Naidu', paid: '25000', paymentdate: '20/09/17', paymentmode: 'Offline',invoicenum:'AB231OL9',refnum:'V3P098F3WCVX',status:'Pending' },
    { num: 'B0005', vendorid: 'V0005', fname: 'Hari', lname: 'Babu', paid: '25000', paymentdate: '20/09/17', paymentmode: 'Offline',invoicenum:'SR231OZ1',refnum:'IQW098F3WCVX',status:'Pending' },
    { num: 'B0006', vendorid: 'V0006', fname: 'Kumar', lname: 'Swamy', paid: '25000', paymentdate: '20/09/17', paymentmode: 'Offline',invoicenum:'HR231O4R',refnum:'SOP098F3WCVX',status:'Completed' },
    { num: 'B0007', vendorid: 'V0007', fname: 'Swamy', lname: 'Rao', paid: '25000', paymentdate: '20/09/17', paymentmode: 'Offline',invoicenum:'LRGDF1OK2',refnum:'ZOP098F3WCVX',status:'Pending' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
