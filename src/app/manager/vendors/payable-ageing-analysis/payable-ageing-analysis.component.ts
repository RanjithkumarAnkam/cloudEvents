import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-payable-ageing-analysis',
  templateUrl: './payable-ageing-analysis.component.html',
  styleUrls: ['./payable-ageing-analysis.component.css']
})
export class PayableAgeingAnalysisComponent implements OnInit {

  data: any[] = [
    { vendor: 'Ranjith Ankam', duedate: '20-Feb-2018', totalamount: '250000', dueamount: '25000' },
    { vendor: 'Suresh Bhajana', duedate: '03-Mar-2018', totalamount: '305000', dueamount: '50000' },
    { vendor: 'Satish Chaman', duedate: '16-Feb-2018', totalamount: '175000', dueamount: '78000' }
  ];

  data_one: any[] = [
    { vendor: 'Ranjith Ankam', duedate: '22-Jan-2018', totalamount: '275000', dueamount: '78000' },
    { vendor: 'Suresh Bhajana', duedate: '03-Jan-2018', totalamount: '125000', dueamount: '25000' },
    { vendor: 'Satish Chaman', duedate: '16-Jan-2018', totalamount: '265750', dueamount: '18000' }
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
        text: 'Upcoming Payable (Rs 1,20,000)'
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
          name: 'Vishwa Foods',
          y: 36.33
        }, {
          name: 'Khali Decorators',
          y: 24.03,
          selected: true
        }, {
          name: 'Akhila Lights',
          y: 0.91
        }, {
          name: 'Shilpa Foods',
          y: 24.77
        }, {
          name: 'Sandhya Sounds',
          y: 10.38
        }, {
          name: 'Sampradaya Decorators',
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
        text: 'Overdue Payable (Rs 20,000)'
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
          name: 'Vishwa Foods',
          y: 16.33
        }, {
          name: 'Khali Decorators',
          y: 34.03,
          selected: true
        }, {
          name: 'Akhila Lights',
          y: 0.91
        }, {
          name: 'Shilpa Foods',
          y: 24.77
        }, {
          name: 'Sandhya Sounds',
          y: 10.38
        }, {
          name: 'Sampradaya Decorators',
          y: 10.2
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
