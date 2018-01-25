import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-type',
  templateUrl: './vendor-type.component.html',
  styleUrls: ['./vendor-type.component.css']
})
export class VendorTypeComponent implements OnInit {
  data: any[] = [
    { type: 'Photographer' },
    { type: 'Decorator' },
    { type: 'Food Supplier' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
