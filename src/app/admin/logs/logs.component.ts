import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  data : any[] = [
    {name: 'Vijay', datetime: '04-Feb-2018 10.00AM', addedby: 'Ankit', venue: 'Hyatt'},
    {name: 'Vamsi', datetime: '15-Feb-2018 10.00AM', addedby: 'Charan', venue: 'Party'},
    {name: 'Uday', datetime: '19-Feb-2018 10.00AM', addedby: 'Mohan', venue: 'N Convention'},
    {name: 'Nelson', datetime: '21-Feb-2018 10.00AM', addedby: 'Pranab', venue: 'Nareen'}
  ];
  dataone : any[] = [
    {eventname: 'Add User', eventby: 'Neeraj', datetime: '04-Feb-2018 10.00AM', type:'Insert', description: 'New User added to the application'},
    {eventname: 'Update User', eventby: 'Ajay', datetime: '15-Feb-2018 10.00AM', type:'Update', description: 'User updated'},
    {eventname: 'Delete User', eventby: 'Raju', datetime: '19-Feb-2018 10.00AM', type:'Delete', description: 'User deleted'},
    {eventname: 'User Log', eventby: 'Swamy', datetime: '21-Feb-2018 10.00AM', type:'Read', description: 'Clicked on users log'},
  ];
  datatwo : any[] = [
    {error: 'Server is not responding', user: 'Ajay', url: '/admin/add-user', datetime: '21-Feb-2018 10.00AM'},
    {error: 'null parameter passed', user: 'Swamy', url: '/admin/subscriptions', datetime: '19-Feb-2018 10.00AM'},
    {error: 'null parameter passed', user: 'Raju', url: '/admin/subscriptions', datetime: '15-Feb-2018 10.00AM'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
