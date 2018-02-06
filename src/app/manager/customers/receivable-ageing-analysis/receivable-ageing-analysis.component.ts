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

  data_ageing: any[] = [
    { venue: 'Naren Garden',current:'0', week: '20,000', secondweek: '22,500', thirdweek: '21,000', fourthweek: '11,000',morethanmonth:'67,500' ,totalamount:'1,42,000'},
    { venue: 'Naren Convention',current:'10,000', week: '12,000', secondweek: '34,500', thirdweek: '14,0000', fourthweek: '10,000',morethanmonth:'67,000',totalamount:'1,47,500' },
    { venue: 'Hyat Place',current:'25,000', week: '19,000', secondweek: '31,000', thirdweek: '71,000', fourthweek: '5,000',morethanmonth:'67,000',totalamount:'2,18,000' },
    { venue: 'Naren Platinum',current:'0', week: '33,000', secondweek: '32,700', thirdweek: '21,0000', fourthweek: '2,000',morethanmonth:'67,000',totalamount:'1,55,700' },
   
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
        text: 'Upcoming Receivable (Rs 1,20,000)'
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
        text: 'Over Due Receivable (Rs 80,000)'
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
