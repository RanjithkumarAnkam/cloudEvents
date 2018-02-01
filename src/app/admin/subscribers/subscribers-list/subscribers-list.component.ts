import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
@Component({
  selector: 'app-subscribers-list',
  templateUrl: './subscribers-list.component.html',
  styleUrls: ['./subscribers-list.component.css']
})
export class SubscribersListComponent implements OnInit {
  data : any[] = [
    {name: 'Hyatt',packagename: 'Single', contact: 'Neeraj', email: 'Neeraj@gmail.com', phone: '999-954-9520', status: 'Active'},
    {name: 'Naren',packagename: 'Multiple', contact: 'Bincy', email: 'Bincy@gmail.com', phone: '999-954-9520', status: 'Active'},
    {name: 'VKC',packagename: 'Single', contact: 'Aakash', email: 'Aakash@gmail.com', phone: '999-954-9520', status: 'Active'},
    {name: 'N COnvention',packagename: 'Single',  contact: 'Ankita', email: 'Ankita@gmail.com', phone: '999-954-9520', status: 'Active'},
    {name: 'Sayyadh',packagename: 'Dual', contact: 'Saif', email: 'Saif@gmail.com', phone: '999-954-9520', status: 'Active'},
    {name: 'Zinghaat',packagename: 'Multiple', contact: 'Rinku', email: 'Rinku@gmail.com', phone: '999-954-9520', status: 'Active'},
  ];
  constructor() { }

  
  statusList: SelectItem[];
  selectedStatus: Array<any>;
  packageList: SelectItem[];
  selectedPackage: Array<any>;
  ngOnInit() {
    this.statusList = [
      { label: 'Active', value: { id: 1, name: 'Active', code: 'AT' } },
      { label: 'In Active', value: { id: 2, name: 'In Active', code: 'IT' } },
   
    ];
    this.packageList = [
      { label: 'Single', value: { id: 1, name: 'Single', code: 'SI' } },
      { label: 'Dual', value: { id: 2, name: 'Dual', code: 'DU' } },
      { label: 'Multiple', value: { id: 3, name: 'Multiple', code: 'MP' } }
   
    ];
  }
  selectStatusChange() {
    console.log(this.selectedStatus);
  }
  selectPackageChange() {
    console.log(this.selectedStatus);
  }

}
