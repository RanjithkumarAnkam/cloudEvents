import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-receivable-ageing-analysis',
  templateUrl: './receivable-ageing-analysis.component.html',
  styleUrls: ['./receivable-ageing-analysis.component.css']
})
export class ReceivableAgeingAnalysisComponent implements OnInit {

  data: any[] = [
    { bookingid: 'NG/RAN/2018/01/05', customer: 'Ranjith Ankam', venue: 'Naren Gardens', eventdate: '22-Feb-2018', duedate: '20-Feb-2018', dueamount: '25000' },
    { bookingid: 'SV/SUR/2018/02/03', customer: 'Suresh Bhajana', venue: 'Shilpa Gardens', eventdate: '03-Mar-2018', duedate: '01-Mar-2018', dueamount: '50000' },
    { bookingid: 'PR/SAT/2018/01/13', customer: 'Satish Chaman', venue: 'Pragya Events', eventdate: '16-Feb-2018', duedate: '15-Feb-2018', dueamount: '78000' }
  ];

  data_one: any[] = [
    { bookingid: 'NG/RAN/2018/01/05', customer: 'Ranjith Ankam', venue: 'Naren Gardens', eventdate: '22-Jan-2018', duedate: '20-Jan-2018', dueamount: '78000' },
    { bookingid: 'SV/SUR/2018/02/03', customer: 'Suresh Bhajana', venue: 'Shilpa Gardens', eventdate: '03-Jan-2018', duedate: '01-Jan-2018', dueamount: '25000' },
    { bookingid: 'PR/SAT/2018/01/13', customer: 'Satish Chaman', venue: 'Pragya Events', eventdate: '16-Jan-2018', duedate: '15-Jan-2018', dueamount: '18000' }
  ];


  options: Object;
  options_two: Object;
  constructor() {


    this.options = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Upcoming Receivable Distribution'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: '#333'
            }
          }
        }
      }, navigation: {
        buttonOptions: {
          enabled: false
        }
      },
      series: [{
        name: 'Amount',
        colorByPoint: true,
        data: [{
          name: 'Naren',
          y: 56.33
        }, {
          name: 'N Convention',
          y: 24.03,
          sliced: true,
          selected: true
        }, {
          name: 'AVASA',
          y: 10.38
        }, {
          name: 'Shilpakala Vedika',
          y: 4.77
        }, {
          name: 'Sandhya Convention',
          y: 0.91
        }, {
          name: 'Sampradaya Vedika',
          y: 0.2
        }]
      }]
    };



    this.options_two = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Over Due Receivable Distribution'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: '#333'
            }
          }
        }
      }, navigation: {
        buttonOptions: {
          enabled: false
        }
      },
      series: [{
        name: 'Amount',
        colorByPoint: true,
        data: [{
          name: 'Naren',
          y: 4.77
        }, {
          name: 'N Convention',
          y: 0.91,
          sliced: true,
          selected: true
        }, {
          name: 'AVASA',
          y: 56.33
        }, {
          name: 'Shilpakala Vedika',
          y: 10.38
        }, {
          name: 'Sandhya Convention',
          y: 24.03
        }, {
          name: 'Sampradaya Vedika',
          y: 0.2
        }]
      }]
    };

  }


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
