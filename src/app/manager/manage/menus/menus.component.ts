import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  data : any[] = [
    {menu: 'menu 1', decoration: 'Decoration 1'},
    {menu: 'menu 2', decoration: 'Decoration 2'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
