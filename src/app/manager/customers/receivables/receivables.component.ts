import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-receivables',
  templateUrl: './receivables.component.html',
  styleUrls: ['./receivables.component.css']
})
export class ReceivablesComponent implements OnInit {

  data: any[] = [
    { num: 'NG/RAN/2018/01/06', cus: 'C0001', fname: 'Ranjith', lname: 'Kumar', event: 'Wedding', eventdate: '20/09/17', duedate: '18/09/17', venue: 'Nareen Gardens', totalamount: '1,00,000', paidamount: '20,000', dueamount: '25,000',actualpayments:'3',fixedpayments:'4' },
    { num: 'NG/KAl/2018/02/10', cus: 'C0002', fname: 'Kalyan', lname: 'Babu', event: 'Birthday', eventdate: '20/09/17', duedate: '18/09/17', venue: 'Nareen Gardens', totalamount: '1,00,000', paidamount: '20,000', dueamount: '25,000',actualpayments:'3',fixedpayments:'2' },
    { num: 'NG/NAG/2018/01/05', cus: 'C0003', fname: 'Nagarjuna ', lname: 'Rao', event: 'Wedding', eventdate: '20/09/17', duedate: '18/09/17', venue: 'Nareen Gardens', totalamount: '1,00,000', paidamount: '20,000', dueamount: '25,000',actualpayments:'2',fixedpayments:'5' },
    { num: 'NG/MAH/2018/04/12', cus: 'C0004', fname: 'Mahendra', lname: 'Parker', event: 'Wedding', eventdate: '20/09/17', duedate: '18/09/17', venue: 'Nareen Gardens', totalamount: '1,00,000', paidamount: '20,000', dueamount: '25,000',actualpayments:'5',fixedpayments:'2' },
    { num: 'NG/HAR/2018/01/05', cus: 'C0005', fname: 'Hari', lname: 'Babu', event: 'Birthday', eventdate: '20/09/17', duedate: '18/09/17', venue: 'Nareen Gardens', totalamount: '1,00,000', paidamount: '20,000', dueamount: '25,000' ,actualpayments:'2',fixedpayments:'3'},
    { num: 'NG/KUM/2018/02/05', cus: 'C0006', fname: 'Kumar', lname: 'James', event: 'Wedding', eventdate: '20/09/17', duedate: '18/09/17', venue: 'Nareen Gardens', totalamount: '1,00,000', paidamount: '20,000', dueamount: '25,000',actualpayments:'4',fixedpayments:'6' },
    { num: 'NG/SWA/2018/02/11', cus: 'C0007', fname: 'Swamy', lname: 'Rao', event: 'Wedding', eventdate: '20/09/17', duedate: '18/09/17', venue: 'Nareen Gardens', totalamount: '1,00,000', paidamount: '20,000', dueamount: '25,000',actualpayments:'5',fixedpayments:'4' }
  ];
  constructor() { }


    venuesList: SelectItem[];
    selectedVenues: Array<any>;

    ngOnInit() {

        this.venuesList = [
            { label: 'Naren Gardens', value: { id: 1, name: 'Naren Gardens', code: 'NG' } },
            { label: 'Naren Conventions', value: { id: 2, name: 'Naren Conventions', code: 'NC' } },
            { label: 'Naren platinum', value: { id: 3, name: 'Naren platinum', code: 'NP' } },
            { label: 'Naren Community', value: { id: 4, name: 'Naren Community', code: 'NCO' } },
        ];



    }
    selectMenuChange() {
        console.log(this.selectedVenues);
    }

  

}
