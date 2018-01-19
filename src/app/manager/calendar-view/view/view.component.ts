import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  events: any[];
  header: any;
  value: Date;
  date11: Date;
  today = Date.now();
  event_type_class= 'col-xs-12';
  no_new_creation = true;
  new_creation = false;
  new_booking = false;
  new_enquiry = false;
  new_appointment = false;
  existing_cust = false;
  new_cust = true;

  ngOnInit() {
      this.events = [
          {
              "title": "All Day Event",
              "start": "2018-01-01",
              "editable": true
          },
          {
              "title": "Long Event",
              "start": "2018-01-07",
              "end": "2018-01-10",
              "backgroundColor": "red"
          },
          {
              "title": "Repeating Event",
              "start": "2018-01-09T16:00:00",
              "backgroundColor": "blue"
          },
          {
              "title": "Repeating Event",
              "start": "2018-01-16T16:00:00",
              "backgroundColor": "red"
          },
          {
              "title": "Conference",
              "start": "2018-01-11",
              "end": "2018-01-13"
          }
      ];

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

        if(today_date <= clicked_date){
            // u can add
            document.getElementById("openFutureModalButton").click();
            document.getElementById("modalTitle").innerHTML = 'Naren Gardens - Add an Event: '+e.date.format('DD-MM-YYYY')+'';
            
        } 
        else{
            //past date, can't add
            document.getElementById("openPreviousModalButton").click();
        }       
    }

    clickedHoliday(event){
        if(event.target.checked){
            this.event_type_class = "hide";
            document.getElementById("txtpanel").innerHTML = "<b>No bookings are allowed</b>";
        }
        else{
            this.event_type_class = 'col-xs-12';
            document.getElementById("txtpanel").innerHTML = "<b>Please select an event</b>";
        }
       
    }

    createBooking(){
        this.no_new_creation = false;
        this.event_type_class = "hide";
        document.getElementById("modalTitle").innerHTML = 'Naren Gardens - Add New Booking';
        this.new_booking = true;
        this.new_creation = true;
    }

    createEnquiry(){
        this.no_new_creation = false;
        this.event_type_class = "hide";
        document.getElementById("modalTitle").innerHTML = 'Naren Gardens - Add New Enquiry';
        this.new_enquiry = true;
        this.new_creation = true;
    }

    createAppointment(){
        this.no_new_creation = false;
        this.event_type_class = "hide";
        document.getElementById("modalTitle").innerHTML = 'Naren Gardens - Add New Appointment';
        this.new_appointment = true;
        this.new_creation = true;
    }

    clickedBackButton(){
        this.no_new_creation = true;
        this.event_type_class = "col-xs-12";
        document.getElementById("modalTitle").innerHTML = 'Naren Gardens - Add an Event';
        this.new_appointment = false;
        this.new_enquiry = false;
        this.new_booking = false;
        this.new_creation = false;
    }

    resetEverything(){
        this.event_type_class= 'col-xs-12';
        this.no_new_creation = true;
        this.new_creation = false;
        this.new_booking = false;
        this.new_enquiry = false;
        this.new_appointment = false;
    }

    checkExistingCustomer(value){
        if(value == 1){
            this.existing_cust = true;
            this.new_cust = false;
        }
        else if(value == 2){
            this.existing_cust = false;
            this.new_cust = true;
        }
    }

    /*private _isValid(field) {
        return true;
    }*/

}
