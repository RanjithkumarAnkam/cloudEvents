import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
    events: any[];
    options: any;
    header: any;
    value: Date;
    date11: Date;
    today = Date.now();
    event_type_class = 'col-xs-12';
    add_booking_first_tab = 'active';
    add_booking_second_tab = '';
    add_booking_third_tab = '';
    add_booking_fourth_tab = '';
    add_enquiry_first_tab = 'active';
    add_enquiry_second_tab = '';

    no_new_creation = true;
    new_creation = false;
    new_booking = false;
    new_enquiry = false;
    new_appointment = false;
    existing_cust = false;
    new_cust = true;
    new_booking_customer_block = true;
    new_booking_event_block = false;
    new_booking_payment_block = false;
    new_booking_summary_block = false;
    new_enquiry_customer_block = true;
    new_enquiry_enquiry_block = false;
    showBookingsModal = false;
    showEnquiryModal = false;
    showAppointmentModal = false;

    ngOnInit() {
        this.events = [
            {
                "title": "Two days Booking",
                "start": "2018-01-01",
                "end": "2018-01-03",
                "backgroundColor": "green",
                "type": 1
            },
            {
                "title": "Enquiry",
                "start": "2018-01-07",
                "backgroundColor": "red",
                "type": 2
            },
            {
                "title": "Appointmnet",
                "start": "2018-01-09T16:00:00",
                "backgroundColor": "blue",
                "type": 3
            },
            {
                "title": "Enquiry2",
                "start": "2018-01-16T16:00:00",
                "backgroundColor": "red",
                "type": 2
            },
            {
                "title": "Booking 2",
                "start": "2018-01-18",
                "backgroundColor": "green",
                "type": 1
            },
            {
                "title": "Appointmnet 2",
                "start": "2018-01-30T12:00:00",
                "backgroundColor": "blue",
                "type": 3
            }
        ];

        /* this.options = {
           showNonCurrentDates:false
         };*/

        this.header = {
            right: 'prev,next',
            center: 'title',
            left: 'agendaDay,agendaWeek,month,list'
        };
    }


    handleDayClick(e) {
        //clicked date in timestamp
        var clicked_date = e.date._i;

        //today date in timestamp
        var today_date = this.today;

        if (today_date <= clicked_date) {
            // u can add
            document.getElementById("openFutureModalButton").click();
            document.getElementById("modalTitle").innerHTML = 'Naren Gardens - Add an Event: ' + e.date.format('DD-MM-YYYY') + '';

            this.event_type_class = 'col-xs-12';
            this.add_booking_first_tab = 'active';
            this.add_booking_second_tab = '';
            this.add_booking_third_tab = '';
            this.add_booking_fourth_tab = '';
            this.add_enquiry_first_tab = 'active';
            this.add_enquiry_second_tab = '';

            this.no_new_creation = true;
            this.new_creation = false;
            this.new_booking = false;
            this.new_enquiry = false;
            this.new_appointment = false;
            this.existing_cust = false;
            this.new_cust = true;
            this.new_booking_customer_block = true;
            this.new_booking_event_block = false;
            this.new_booking_payment_block = false;
            this.new_booking_summary_block = false;
            this.new_enquiry_customer_block = true;
            this.new_enquiry_enquiry_block = false;

        }
        else {
            //past date, can't add
            document.getElementById("openPreviousModalButton").click();
        }
    }

    handleEventClick(e) {
        if (e.calEvent.type == 1) {
            this.showBookingsModal = true;
        }
        else if (e.calEvent.type == 2) {
            this.showEnquiryModal = true;
        }
        else if (e.calEvent.type == 3) {
            this.showAppointmentModal = true;
        }
    }
    closeAllPopups() {
        this.showBookingsModal = false;
        this.showEnquiryModal = false;
        this.showAppointmentModal = false;
    }

    clickedHoliday(event) {
        if (event.target.checked) {
            this.event_type_class = "hide";
            document.getElementById("txtpanel").innerHTML = "<b>No bookings are allowed</b>";
        }
        else {
            this.event_type_class = 'col-xs-12';
            document.getElementById("txtpanel").innerHTML = "<b>Please select an event</b>";
        }

    }

    createBooking() {
        this.no_new_creation = false;
        this.event_type_class = "hide";
        document.getElementById("modalTitle").innerHTML = 'Naren Gardens - Add New Booking';
        this.new_booking = true;
        this.new_creation = true;
        this.new_booking_customer_block = true;
        this.new_booking_event_block = false;
        this.new_booking_payment_block = false;
        this.new_booking_summary_block = false;
        this.add_booking_first_tab = 'active';
        this.add_booking_second_tab = '';
        this.add_booking_third_tab = '';
        this.add_booking_fourth_tab = '';
    }

    createEnquiry() {
        this.no_new_creation = false;
        this.event_type_class = "hide";
        document.getElementById("modalTitle").innerHTML = 'Naren Gardens - Add New Enquiry';
        this.new_enquiry = true;
        this.new_creation = true;
        this.add_enquiry_first_tab = 'active';
        this.add_enquiry_second_tab = '';
        this.new_enquiry_customer_block = true;
        this.new_enquiry_enquiry_block = false;
    }

    createAppointment() {
        this.no_new_creation = false;
        this.event_type_class = "hide";
        document.getElementById("modalTitle").innerHTML = 'Naren Gardens - Add New Appointment';
        this.new_appointment = true;
        this.new_creation = true;
    }

    clickedBackButton() {
        this.no_new_creation = true;
        this.event_type_class = "col-xs-12";
        document.getElementById("modalTitle").innerHTML = 'Naren Gardens - Add an Event';
        this.new_appointment = false;
        this.new_enquiry = false;
        this.new_booking = false;
        this.new_creation = false;
    }

    resetEverything() {
        this.event_type_class = 'col-xs-12';
        this.no_new_creation = true;
        this.new_creation = false;
        this.new_booking = false;
        this.new_enquiry = false;
        this.new_appointment = false;
    }

    checkExistingCustomer(value) {
        if (value == 1) {
            this.existing_cust = true;
            this.new_cust = false;
        }
        else if (value == 2) {
            this.existing_cust = false;
            this.new_cust = true;
        }
    }

    addBookingContinue() {
        this.add_booking_second_tab = 'active';
        this.new_booking_customer_block = false;
        this.new_booking_event_block = true;
    }
    addEventBack() {
        this.add_booking_second_tab = '';
        this.new_booking_customer_block = true;
        this.new_booking_event_block = false;
    }
    addEventContinue() {
        this.add_booking_third_tab = 'active';
        this.new_booking_event_block = false;
        this.new_booking_payment_block = true;
    }
    addPaymentBack() {
        this.add_booking_third_tab = '';
        this.new_booking_event_block = true;
        this.new_booking_payment_block = false;
    }
    addPaymentContinue() {
        this.add_booking_fourth_tab = 'active';
        this.new_booking_payment_block = false;
        this.new_booking_summary_block = true;
    }
    addSummaryBack() {
        this.add_booking_fourth_tab = '';
        this.new_booking_payment_block = true;
        this.new_booking_summary_block = false;
    }
    addEnquiryCustomerContinue() {
        this.add_enquiry_second_tab = 'active';
        this.new_enquiry_customer_block = false;
        this.new_enquiry_enquiry_block = true;
    }
    addEnquiryEnquiryBack() {
        this.add_enquiry_second_tab = '';
        this.new_enquiry_customer_block = true;
        this.new_enquiry_enquiry_block = false;
    }
    /*private _isValid(field) {
        return true;
    }*/

}
