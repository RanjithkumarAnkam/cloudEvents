import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
@Component({
    selector: 'app-manager-dashboard',
    templateUrl: './manager-dashboard.component.html',
    styleUrls: ['./manager-dashboard.component.css']
})


export class ManagerDashboardComponent implements OnInit {
    data: any[] = [
        { fname: 'Suresh', lname: 'babu', venue: "Naren Garden", duedate: '20/12/2017', eventdate: '26/12/20117', phonenum: '9955886633', email: 'suresh@facebook.com', eventname: 'marriage', totalamount: '25000', paidamount: '5000', due: '20000' },
        { fname: 'Ramesh', lname: 'Kumar', venue: "Naren Platinum", duedate: '19/11/2017', eventdate: '30/11/20117', phonenum: '9955886633', email: 'ramesh@facebook.com', eventname: 'birthday', totalamount: '100000', paidamount: '7000', due: '13000' },
        { fname: 'Rajesh', lname: 'Sarma', venue: "Naren Convention", duedate: '06/12/2017', eventdate: '15/12/20117', phonenum: '9955886633', email: 'rajesh@facebook.com', eventname: 'marriage', totalamount: '78000', paidamount: '15000', due: '10000' }
    ];
    options: Object;
    options_second: Object;
    options_three: Object;
    options_four: Object;




    constructor() {

        //first graph
        this.options = {
            title: { text: 'Revenue Generated in the year : 2017' },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            }, yAxis: {
                title: {
                    text: 'Generated Revenue'
                }
            },
            navigation: {
                buttonOptions: {
                    enabled: false
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
                }
            },
            series: [{
                name: 'Revenue ',
                data: [55652, 95652, 12354, 35897, 24587, 36000, 56555, 78555, 45877, 96554, 35897, 125478],
            }]
        };

        //second graph
        this.options_second = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'New Vs Repeated Customers'
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                allowDecimals: false,
                min: 0,
                title: {
                    text: 'Number of Events'
                }
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.x + '</b><br/>' +
                        this.series.name + ': ' + this.y + '<br/>' +
                        'Total: ' + this.point.stackTotal;
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            },
            exporting: { enabled: false },
            series: [{
                name: 'New Bookings',
                data: [7, 5, 6, 9, 5, 6, 8, 7, 8, 4, 5, 4],
                stack: 'male'
            }, {
                name: 'Repeated Bookings',
                data: [6, 8, 4, 4, 7, 6, 6, 8, 4, 6, 5, 6,],
                stack: 'male'
            }, {
                name: 'New Enquiry',
                data: [2, 3, 4, 7, 2, 5, 3, 4, 5, 6, 2, 1],
                stack: 'female'
            }, {
                name: 'Repeated Enquiry',
                data: [3, 3, 4, 7, 2, 5, 3, 4, 0, 4, 4, 3],
                stack: 'female'
            }]
        };

        //third graph
        this.options_three = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Revenue distribution across venues 2017'
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
                            color: 'black'
                        }
                    }
                }
            }, navigation: {
                buttonOptions: {
                    enabled: false
                }
            },
            series: [{
                name: 'Brands',
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

        //fourth graph
        this.options_four = {
            chart: {
                type: 'line'
            },
            title: {
                text: 'Occupancy Rate Of Venues : 2017'
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'No.Of Occupancies'
                }
            },
            navigation: {
                buttonOptions: {
                    enabled: false
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
                }
            },
            series: [{
                name: 'Occupancy ',
                data: [52, 65, 54, 58, 87, 70, 55, 75, 47, 94, 77, 58]
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
