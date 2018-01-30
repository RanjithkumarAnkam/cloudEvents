import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venue-list',
  templateUrl: './venue-list.component.html',
  styleUrls: ['./venue-list.component.css']
})
export class VenueListComponent implements OnInit {
  data: any[] = [
    { name: 'Nareen Convention', capacity: '20000', location: 'Hyderabad', contact: 'Neeraj', email: 'Neeraj@cloud.com', phone: '9985455500' },
    { name: 'Nareen Garder', capacity: '15000', location: 'Hyderabad', contact: 'Ravi', email: 'Ravi@cloud.com', phone: '9985455500' },
    { name: 'Nareen Platinum', capacity: '35000', location: 'Hyderabad', contact: 'Rajesh', email: 'Rajesh@cloud.com', phone: '9985455500' },
    { name: 'Nareen Convention', capacity: '20000', location: 'Hyderabad', contact: 'Neeraj', email: 'Neeraj@cloud.com', phone: '9985455500' },
    { name: 'Nareen Convention', capacity: '20000', location: 'Hyderabad', contact: 'Neeraj', email: 'Neeraj@cloud.com', phone: '9985455500' }
  ];
  constructor() { }

  ngOnInit() {
  }
  timeSlotSel: boolean = false;
  add_venue_first_tab = 'active';
  add_venue_second_tab = '';
  add_venue_third_tab = '';
  add_venue_fourth_tab = '';

  new_venue_customer_block = true;
  new_venue_event_block = false;
  new_venue_payment_block = false;
  new_venue_summary_block = false;

  boDetTimEnable: boolean = false;

  onTimeSlotChange(e) {
    if (e == 2) {
      this.boDetTimEnable = true;
    } else {
      this.boDetTimEnable = false;
    }
  }
  resetEveryThing(){
    this.timeSlotSel = false;
    this.add_venue_first_tab = 'active';
    this.add_venue_second_tab = '';
    this.add_venue_third_tab = '';
    this.add_venue_fourth_tab = '';
  
    this.new_venue_customer_block = true;
    this.new_venue_event_block = false;
    this.new_venue_payment_block = false;
    this.new_venue_summary_block = false;

    this.timeSlotSel=false;
  
  }
  addVenueContinue() {
    this.add_venue_second_tab = 'active';
    this.new_venue_customer_block = false;
    this.new_venue_event_block = true;
    this.boDetTimEnable = false;
  }
  addCpBack() {
    this.add_venue_second_tab = '';
    this.new_venue_customer_block = true;
    this.new_venue_event_block = false;
  }
  addCpContinue() {
    this.add_venue_third_tab = 'active';
    this.new_venue_event_block = false;
    this.new_venue_payment_block = true;

  }
  addPaymentBack() {
    this.add_venue_third_tab = '';
    this.new_venue_event_block = true;
    this.new_venue_payment_block = false;
  }
  addPaymentContinue() {
    this.add_venue_fourth_tab = 'active';
    this.new_venue_payment_block = false;
    this.new_venue_summary_block = true;
  }
  addSummaryBack() {
    this.add_venue_fourth_tab = '';
    this.new_venue_payment_block = true;
    this.new_venue_summary_block = false;
  }
  setRadio(e) {
    console.log(e);
    this.timeSlotSel = e;
  }
}
