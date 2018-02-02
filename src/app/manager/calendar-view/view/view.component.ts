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
    no_new_creation_holiday = true;
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
    show_help_balloon = true;


    vendorEnable: boolean = false;
    payDivEnable: boolean = false;
    extraPayEnable: boolean = false;
    enqTimingsDivEnable: boolean = false;
    meetWithEnable: boolean = false;
    existPerEnable: boolean = false;
    boDetTimEnable: boolean = false;
    singleEvent: boolean = true;
    longEvent: boolean = false;
    date3: Date;

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

    vendorServicereq(e) {
        this.vendorEnable = e;
    }
    addPaydivEnable(e) {
        this.payDivEnable = false;
        this.extraPayEnable = false;
        this.payDivEnable = e;
    }
    extraPayhandle(e) {
        console.log(3, e)
        this.extraPayEnable = e;
    }
    checkExistingCustomer(value) {
        console.log(1);
        this.existing_cust = value;
        this.new_cust = !value;
    }
    enqTimingsDivHandler(e) {
        console.log(e);
        this.enqTimingsDivEnable = e;
    }
    meetingWithHandler(e) {
        this.meetWithEnable = e;
    }
    existPerHandler(e) {

        this.existPerEnable = e;
    }
    onTimeSlotChange(e) {
        if (e == 2) {
            this.boDetTimEnable = true;
        } else {
            this.boDetTimEnable = false;
        }
    }

    onEventSpanChange(e) {
        if (e == 2) {
            this.longEvent = true;
            this.singleEvent = false;
        } else {
            this.singleEvent = true;
            this.longEvent = false;
        }
    }
    handleDayClick(e) {
        //clicked date in timestamp
        var clicked_date = e.date._i;

        //today date in timestamp
        var today_date = this.today;

        if (today_date < clicked_date || (today_date - clicked_date) < 86400001) {
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
        this.no_new_creation_holiday = false;
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
        this.existing_cust = false;
        this.new_cust = true;
        this.no_new_creation_holiday = false;
    }

    createAppointment() {
        this.no_new_creation = false;
        this.event_type_class = "hide";
        document.getElementById("modalTitle").innerHTML = 'Naren Gardens - Add New Appointment';
        this.new_appointment = true;
        this.new_creation = true;
        this.meetWithEnable = false;
        this.existPerEnable = false;
        this.no_new_creation_holiday = false;
    }

    clickedBackButton() {
        this.no_new_creation = true;
        this.event_type_class = "col-xs-12";
        document.getElementById("modalTitle").innerHTML = 'Naren Gardens - Add an Event';
        this.new_appointment = false;
        this.new_enquiry = false;
        this.new_booking = false;
        this.new_creation = false;
        this.no_new_creation_holiday = true;
    }

    resetEverything() {
        this.event_type_class = 'col-xs-12';
        this.no_new_creation = true;
        this.new_creation = false;
        this.new_booking = false;
        this.new_enquiry = false;
        this.new_appointment = false;
    }



    addBookingContinue() {
        this.add_booking_second_tab = 'active';
        this.new_booking_customer_block = false;
        this.new_booking_event_block = true;
        this.boDetTimEnable = false;
        this.vendorEnable = false;
        this.singleEvent = true;
        this.longEvent = false;
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
        this.payDivEnable = false;
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
        this.enqTimingsDivEnable = false;
    }
    addEnquiryEnquiryBack() {
        this.add_enquiry_second_tab = '';
        this.new_enquiry_customer_block = true;
        this.new_enquiry_enquiry_block = false;
        this.enqTimingsDivEnable = false;
    }

    OpenEditBooking() {
        this.showBookingsModal = false;
        document.getElementById("openFutureModalButton").click();
        document.getElementById("modalTitle").innerHTML = "<b>Edit Booking</b>";
        this.no_new_creation_holiday = true;
        this.no_new_creation = false;
        this.new_creation = true;
        this.new_booking = true;
        this.no_new_creation_holiday = false;
    }
    OpenEditEnquiry() {
        this.showEnquiryModal = false;
        document.getElementById("openFutureModalButton").click();
        document.getElementById("modalTitle").innerHTML = "Edit Enquiry";
        this.no_new_creation_holiday = true;
        this.no_new_creation = false;
        this.new_creation = true;
        this.new_enquiry = true;
        this.no_new_creation_holiday = false;
    }
    OpenEditAppointment() {
        this.showAppointmentModal = false;
        document.getElementById("openFutureModalButton").click();
        document.getElementById("modalTitle").innerHTML = "Edit Appointment";
        this.no_new_creation_holiday = true;
        this.no_new_creation = false;
        this.new_creation = true;
        this.new_appointment = true;
        this.no_new_creation_holiday = false;
    }

    CloseAllModals() {
        this.event_type_class = 'col-xs-12';
        this.add_booking_first_tab = 'active';
        this.add_booking_second_tab = '';
        this.add_booking_third_tab = '';
        this.add_booking_fourth_tab = '';
        this.add_enquiry_first_tab = 'active';
        this.add_enquiry_second_tab = '';
        document.getElementById("modalTitle").innerHTML = 'Naren Gardens - Add an Event';
        this.no_new_creation = true;
        this.no_new_creation_holiday = true;
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
        this.showBookingsModal = false;
        this.showEnquiryModal = false;
        this.showAppointmentModal = false;
        document.getElementById("btnClosebands").click();
    }

    hideHelpBalloon(){
        this.show_help_balloon = false;
    }

}
