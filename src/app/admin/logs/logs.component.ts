import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  data : any[] = [
    {name: 'Vijay', datetime: '20/12/17 10.00AM', addedby: 'Ankit', venue: 'Hyatt'},
    {name: 'Vamsi', datetime: '18/12/17 10.00AM', addedby: 'Charan', venue: 'Party'},
    {name: 'Uday', datetime: '16/12/17 10.00AM', addedby: 'Mohan', venue: 'N Convention'},
    {name: 'Nelson', datetime: '15/12/17 10.00AM', addedby: 'Pranab', venue: 'Nareen'}
  ];
  dataone : any[] = [
    {eventname: 'Add User', eventby: 'Neeraj', datetime: '20/12/17 10.00AM', type:'Insert', description: 'New User added to the application'},
    {eventname: 'Update User', eventby: 'Ajay', datetime: '22/12/17 10.00AM', type:'Update', description: 'User updated'},
    {eventname: 'Delete User', eventby: 'Raju', datetime: '29/12/17 10.00AM', type:'Delete', description: 'User deleted'},
    {eventname: 'User Log', eventby: 'Swamy', datetime: '10/12/17 10.00AM', type:'Read', description: 'Clicked on users log'},
  ];
  datatwo : any[] = [
    {error: 'Server is not responding', user: 'Ajay', url: '/admin/add-user', datetime: '20/10/2017 10.00AM'},
    {error: 'null parameter passed', user: 'Swamy', url: '/admin/subscriptions', datetime: '15/11/2017 10.00AM'},
    {error: 'null parameter passed', user: 'Raju', url: '/admin/subscriptions', datetime: '13/12/2017 10.00AM'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
