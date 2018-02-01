import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  showBookingsModal = false;
  showEnquiryModal = false;
  showAppointmentModal = false; 
  data: any[] = [
    { num: 'C0001', fname: 'Ranjith', lname: 'Kumar', email: 'ranjith@optionmatrix.com', phone: '9492913218', city: 'Hyderabad', bookings: '2', enquiries: '2', appointments: '2' },
    { num: 'C0002', fname: 'Vishal', lname: 'Babu', email: 'Vishal@optionmatrix.com', phone: '9701234565', city: 'Pune', bookings: '2', enquiries: '2', appointments: '2' },
    { num: 'C0003', fname: 'Spyder', lname: 'Rao', email: 'Spyder@optionmatrix.com', phone: '949598952', city: 'Bombay', bookings: '2', enquiries: '2', appointments: '2' },
    { num: 'C0004', fname: 'Jones', lname: 'Davy', email: 'Jones@optionmatrix.com', phone: '9985421501', city: 'Jaipur', bookings: '2', enquiries: '2', appointments: '2' },
    { num: 'C0005', fname: 'Peterson', lname: 'Parker', email: 'Peterson@optionmatrix.com', phone: '9985485490', city: 'Kochi', bookings: '2', enquiries: '2', appointments: '2' },
    { num: 'C0006', fname: 'Ranjith', lname: 'Kumar', email: 'ranjith@optionmatrix.com', phone: '9492913218', city: 'Hyderabad', bookings: '2', enquiries: '2', appointments: '2' },
    { num: 'C0007', fname: 'Vishal', lname: 'Babu', email: 'Vishal@optionmatrix.com', phone: '9701234565', city: 'Pune', bookings: '2', enquiries: '2', appointments: '2' },
    { num: 'C0008', fname: 'Spyder', lname: 'Rao', email: 'Spyder@optionmatrix.com', phone: '949598952', city: 'Bombay', bookings: '2', enquiries: '2', appointments: '2' },
    { num: 'C0009', fname: 'Jones', lname: 'Davy', email: 'Jones@optionmatrix.com', phone: '9985421501', city: 'Jaipur', bookings: '2', enquiries: '2', appointments: '2' },
    { num: 'C0010', fname: 'Peterson', lname: 'Parker', email: 'Peterson@optionmatrix.com', phone: '9985485490', city: 'Kochi', bookings: '2', enquiries: '2', appointments: '2' }
  ];
  constructor() { }

  ngOnInit() {
  }
  handleEventClick(e) {
    console.log(e)
    if (e == 1) {
      this.showBookingsModal = true;
    }
    else if (e == 2) {
      this.showEnquiryModal = true;
    }
    else if (e == 3) {
      this.showAppointmentModal = true;
    }
  }
  closeAllPopups() {
    this.showBookingsModal = false;
    this.showEnquiryModal = false;
    this.showAppointmentModal = false;
  }

}
