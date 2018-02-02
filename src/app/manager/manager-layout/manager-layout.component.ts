import { Component, OnInit } from '@angular/core';
import { TourService, IStepOption } from 'ngx-tour-ng-bootstrap';

@Component({
  selector: 'app-manager-layout',
  templateUrl: './manager-layout.component.html',
  styleUrls: ['./manager-layout.component.css']
})
export class ManagerLayoutComponent implements OnInit {
  today = Date.now();
  constructor(public tourService: TourService) {
    this.tourService.initialize([{
      anchorId: 'Dashboard.id',
      content: 'Key statistics and performance indicators of the venues can be viewed here. These act as the analytics which can guide the venue management decisions. Statistics are shown in the form of graphs, charts and color coded numeric displays. There is venue forecast seen based on the past performances.',
      title: 'Dashboard',
      placement: 'bottom',
    },
    {
      anchorId: 'Calendar.id',
      content: 'This is the heart of the venue management system. All bookings, enquiries, appointments can be managed from here. Events can be added to different time slots as assigned to each venue, payment details for each booking can be managed from the calendar. Different views are provided in the calendar for convenience. Calendar entries can be downloaded and printed for offline use.',
      title: 'Calendar',
      placement: 'bottom',
    },      
    {
      anchorId: 'Customers.id',
      content: 'This is where a venue manager can view and manage customer information. Bookings of each customer can be glanced from the grid provided.',
      title: 'Customers',
      placement: 'bottom',
    },
    {
      anchorId: 'Vendors.id',
      content: 'All payables and paid stats of vendors pertaining to each booking can be managed here. New vendors can be added. New payments can be added and all payment details for each vendor can be downloaded and printed.',
      title: 'Vendors',
      placement: 'bottom',
    },
    {
      anchorId: 'Manage.id',
      content: 'Various venue management essentials can be configured and managed through the Manage tabs. Venues can be created and managed. Staff users and permissions can be configured, vendors and their details can also be managed through these tabs.',
      title: 'Manage',
      placement: 'bottom',
    },
    {
      anchorId: 'Gallery.id',
      content: "Here you can see the related images and videos of the venues. You can select any venue to view it's images and videos",
      title: 'Gallery',
      placement: 'bottom',
    },
    {
      anchorId: 'Settings.id',
      content: 'Various venue management essentials can be configured and managed through the Manage tabs. Venues can be created and managed. Staff users and permissions can be configured, vendors and their details can also be managed through these tabs.',
      title: 'Quick Start',
      placement: 'bottom',
    },
    {
      anchorId: 'Support.id',
      content: 'Various venue management essentials can be configured and managed through the Manage tabs. Venues can be created and managed. Staff users and permissions can be configured, vendors and their details can also be managed through these tabs.',
      title: 'Support',
      placement: 'bottom',
    }
    
  ]);
  }
  startTour(){
    this.tourService.start();
  }
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
